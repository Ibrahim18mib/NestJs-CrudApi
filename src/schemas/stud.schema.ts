import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudDocument = HydratedDocument<Stud>;

@Schema()
export class Stud {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  city: string;

  @Prop()
  department: string;
}

export const studSchema = SchemaFactory.createForClass(Stud);
