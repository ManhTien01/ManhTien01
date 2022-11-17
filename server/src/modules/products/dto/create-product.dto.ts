export class CreateProductDto {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly avatar: string;
  readonly origin: string;
  readonly brand: string;
  readonly price: number;
  readonly discount: number;
  readonly color: [string];
  readonly size: [number];
  readonly status: boolean;
  readonly sold: number;
  readonly amount: number;
  readonly slug: string;
  readonly deletedAt: Date;

}