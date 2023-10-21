import React, { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080"

export const jwt = new BehaviorSubject(null)
export const cart = new BehaviorSubject(null)

export const getCart = () =>
    fetch(`${API_SERVER}/cart`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
    })
        .then((res) => res.json())
        .then((res) => {
            cart.next(res);
            return res;;
        })

export const addToCart = (productId, priceOptionId, quantity) =>
    fetch(`${API_SERVER}/cart/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`
        },
        body: JSON.stringify({ productId, priceOptionId,  quantity })
    })
        .then((res) => res.json())
        .then(() => {
            getCart()
        })

export const clearCart = () =>
    fetch(`${API_SERVER}/cart`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`
        },
    })
        .then((res) => res.json())
        .then(() => {
            getCart()
        })

export const login = (email, password) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
        })
    })
        .then((res) => res.json())
        .then((data) => {
            jwt.next(data.token);
            getCart();
            return data.token;
        })

export const register = (name, email, password) =>
    fetch(`${API_SERVER}/auth/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
        .then((res) => res.json())
        .then((data) => {
            return data.token;
        })

export const getProfile = async (token) => {
    try {
        const response = await fetch(`${API_SERVER}/auth/profile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        
        if (response.ok) {
            jwt.next(token);
            const data = await response.json();
            return data?.id;
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        console.error('Lỗi xác thực:', error.message);
        throw error; // Chuyển tiếp lỗi cho phần gọi hàm
    }
};


export function useLoggerIn() {
    const [loggerIn, setLoggerIn] = useState(!!jwt.value)
    useEffect(() => {
        setLoggerIn(!!jwt.value);
        return jwt.subscribe((c) => {
            setLoggerIn(!!jwt.value);
        })
    }, [])
    return loggerIn;
}

