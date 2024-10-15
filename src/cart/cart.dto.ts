import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsMongoId } from 'class-validator';

export class CreateCartDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly userId: string;

  @IsArray()
  @ArrayNotEmpty()
  readonly products: {
    productId: string;
    quantity: number;
  }[];
}

export class UpdateCartDto {
  @IsArray()
  @ArrayNotEmpty()
  readonly products: {
    productId: string;
    quantity: number;
  }[];
}
