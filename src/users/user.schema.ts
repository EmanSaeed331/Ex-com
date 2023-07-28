import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Product } from 'src/products/product.schema';
import { Review } from 'src/reviews/review.schema';
import { Store } from 'src/stores/store.schema';

enum Role {
  ADMIN = 'admin',
  TECH_SUPPORT = 'techSupport',
  SALES = 'SALES',
  VENDORS = 'vendors',
  RIDERS = 'riders',
}
@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  phone: number;
  @Prop({ required: true })
  password: string;
  @Prop({ required: false })
  birthdate: string;
  @Prop({
    type: [
      {
        streetNumber: { type: Number },
        streetName: { type: String },
        flatNumber: { type: Number },
      },
    ],
    required: true,
  })
  address: { streetNumber: number; streetName: string; flatNumber: number }[];
  @Prop({ type: String, enum: Role, required: true })
  role: Role;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Product' })
  favoriteProducts: Product[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Store' })
  favoriteStores: Store[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Review' })
  myReviews: Review[];
}
export const UserSchema = SchemaFactory.createForClass(User);
