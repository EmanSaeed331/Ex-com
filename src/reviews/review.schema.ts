import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Product } from 'src/products/product.schema';
import { Store } from 'src/stores/store.schema';
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
  @Prop({ required: true })
  description: string;

  @Prop({ type: Number, enum: Stars, required: true })
  stars: Stars;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'User' })
  users: User[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Product' })
  products: Product[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Store' })
  reviews: Store[];
}
export const reviewSchema = SchemaFactory.createForClass(Review);
