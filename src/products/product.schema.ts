import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Review } from 'src/reviews/review.schema';
import { Store } from 'src/stores/store.schema';
/* import { Store } from 'src/stores/stores.schema';
 */
@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Review' })
  reviews: Review;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Store' })
  store: Store;
}
export const productSchema = SchemaFactory.createForClass(Product);
