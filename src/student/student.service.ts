import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stud } from 'src/schemas/stud.schema';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Stud.name) private studModel: Model<Stud>) {}

  async createStudent(createStudDto: Stud): Promise<Stud> {
    const createdStud = new this.studModel(createStudDto);
    await createdStud.save();
    return createdStud;
  }

  async findAllStudents(): Promise<Stud[]> {
    return await this.studModel.find().exec();
  }

  async findStudentById(id: string): Promise<Stud> {
    return await this.studModel.findById(id).exec();
  }

  async updateStudentEach(id: string, studData: Stud): Promise<Stud> {
    return await this.studModel
      .findOneAndUpdate({ _id: id }, studData, { new: true })
      .exec();
  }

  async deleteStudentEach(id: string): Promise<Stud> {
    return await this.studModel.findByIdAndDelete(id);
  }
}
