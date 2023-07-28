import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Product } from 'src/products/product.schema';
import { Review } from 'src/reviews/review.schema';

enum Category {
  RESTAURANT = 'restaurant',
  MEDICAL = 'medical',
  MARKET = 'market',
  FRUITS = 'fruits',
  BAKERY = 'bakery',
  BUTCHER = 'butcher',
}
@Schema()
export class Store {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, enum: Category, required: true })
  category: Category;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Product' })
  products: Product[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Review' })
  reviews: Review[];
}
export const StoreSchema = SchemaFactory.createForClass(Store);
