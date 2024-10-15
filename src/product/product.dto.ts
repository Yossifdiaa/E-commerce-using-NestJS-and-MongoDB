import { IsString, IsNotEmpty, IsNumber, IsOptional, IsMongoId, IsPositive, Min, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  readonly price: number;

  @IsNumber()
  @IsPositive()
  readonly stock: number;


  @IsMongoId()
  @IsNotEmpty()
  readonly vendorId: string; // Link the product to a vendor
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  readonly price?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  readonly stock?: number;

  @IsMongoId()
  @IsOptional()
  readonly vendorId?: string;
}
