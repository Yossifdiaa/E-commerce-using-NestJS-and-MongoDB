import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vendor extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
