export class CreateProductDto {
    readonly name: string;
    readonly desription: string;
    readonly avatar: string;
    readonly origin: string;
    readonly brand: string;
    readonly price: number;
    readonly dicount: number;
    readonly color: [string];
    readonly size: [number];
    readonly status: boolean;
    readonly sold: number;
    readonly amount: number;
    readonly slug: string;
    readonly deletedAt: Date;

  }