export interface Product {
    id: number,
    name: String,
    price_old: number,
    price_new: number,
    sold: number,
    brand: String,
    origin: String,
    discount: number,
    description: string,
    image: string,
    longDescription: string
}

const products: Product[] = [
    {
        id: 1,
        name: 'Giay the thao gia re danh cho hoc sinh sinh vien',
        price_old: 100,
        price_new: 5.99,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 12,

        description: 'Phu hop moi lua tuoi',
        image: 'http://localhost:8080/shopping-item1.jpeg',
        longDescription: 'Giay da phu hop voi moi lua tuoi'

    },
    {
        id: 2,
        name: 'Giay Nike Air Force One chinh hang ',
        price_old: 5.99,
        price_new: 5.99,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        image: 'http://localhost:8080/shopping-item2.jpeg',
        longDescription: 'Giay da phu hop voi moi lua tuoi'

    },
    {
        id: 3,
        name: 'Giay the thao',
        price_old: 5.99,
        price_new: 5.99,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        image: 'http://localhost:8080/shopping-item3.jpeg',
        longDescription: 'Giay da phu hop voi moi lua tuoi'

    },
    {
        id: 4,
        name: 'Giay the thao',
        price_old: 5.99,
        price_new: 5.99,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        image: 'http://localhost:8080/shopping-item1.jpeg',
        longDescription: 'Giay da phu hop voi moi lua tuoi'

    },
    {
        id: 5,
        name: 'Giay the thao',
        price_old: 5.99,
        price_new: 5.99,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        image: 'http://localhost:8080/shopping-item2.jpeg',
        longDescription: 'Giay da phu hop voi moi lua tuoi'

    },
    {
        id: 6,
        name: 'Giay the thao',
        price_old: 5.99,
        price_new: 5.99,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        image: 'http://localhost:8080/shopping-item3.jpeg',
        longDescription: 'Giay da phu hop voi moi lua tuoi'

    }
];

export default products;