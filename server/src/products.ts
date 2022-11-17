export interface Product {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly avatar: string;
    readonly origin: string;
    readonly brand: string;
    readonly price: number;
    readonly discount: number;
    readonly color: [String];
    readonly size: [];
    readonly status: boolean;
    readonly sold: number;
    readonly amount: number;
    readonly slug: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Giay the thao gia re danh cho hoc sinh sinh vien',
        price: 100000,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 12,
        description: 'Phu hop moi lua tuoi',
        avatar: 'http://localhost:8080/shopping-item1.jpeg',
        slug: 'dshgalishfasghk',
        size: [],
        color: ['Màu đen'],
        status: true,
        amount: 1000

        

    },
    {
        id: 2,
        name: 'Giay Nike Air Force One chinh hang ',
        price: 599000,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        avatar: 'http://localhost:8080/shopping-item2.jpeg',
        slug: 'sdknfsldgnas;lg',
        size: [],
        color: ['Màu đen'],
        status: true,
        amount: 888

        

  
   },
    {
        id: 3,
        name: 'Giay the thao',
        price: 600000,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        avatar: 'http://localhost:8080/shopping-item3.jpeg',
        slug: 'sdkjfnsldkfnaslkg',
        size: [],
        color: ['Màu đen'],
        status: true,
        amount: 789

        

  
    },
    {
        id: 4,
        name: 'Giay the thao',
        price: 150000,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        avatar: 'http://localhost:8080/shopping-item1.jpeg',
        slug: 'salkdfsaldkghal',
        size: [],
        color: ['Màu đen'],
        status: true,
        amount: 456

        

  
    },
    {
        id: 5,
        name: 'Giay the thao',
        price: 200000,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        avatar: 'http://localhost:8080/shopping-item2.jpeg',
        slug: 'aslkdfsalkd,smnd',
        size: [],
        color: ['Màu đen'],
        status: true,
        amount: 567

        

  
    },
    {
        id: 6,
        name: 'Giay the thao',
        price: 500000,
        sold: 30,
        brand: 'Nike',
        origin: 'Nhat Ban',
        discount: 10,

        description: 'Phu hop moi lua tuoi',
        avatar: 'http://localhost:8080/shopping-item3.jpeg',
        slug: 'sadfjnsdljfnsdlkgja',
        size: [],
        color: ['Màu đen'],
        status: true,
        amount: 432

        

  
    }
];

export default products;