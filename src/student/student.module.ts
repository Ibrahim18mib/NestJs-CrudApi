import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Stud,studSchema } from 'src/schemas/stud.schema';

@Module({
  controllers: [StudentController],
  imports: [MongooseModule.forFeature([{name:Stud.name,schema:studSchema}])],
  providers: [StudentService],
})
export class StudentModule {}
