import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Product } from 'src/products/product.schema';
import { User } from 'src/users/user.schema';

enum Stars {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}
@Schema()
export class Review {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  users: User;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  shippingPhone: number;

  @Prop({ required: true })
  shippingAddress: string;

  @Prop({ required: true })
  itemQuantity: number;

  @Prop({ required: true })
  date: string;

  @Prop({ type: Number, enum: Stars, required: true })
  stars: Stars;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Product', required: true })
  products: Product;
}
export const reviewSchema = SchemaFactory.createForClass(Review);
