import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Stud } from 'src/schemas/stud.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studServ: StudentService) {}

  @Get()
  getStudent(): Promise<Stud[]> {
    return this.studServ.findAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id:string): Promise<Stud> {
    return this.studServ.findStudentById(id);
  }

  @Post()
  createStudent(@Body() data: Stud): Promise<Stud> {
    return this.studServ.createStudent(data);
  }

  @Patch(':id')
  updateStudent(@Param('id') id:string,@Body() data: Stud): Promise<Stud> {
    return this.studServ.updateStudentEach(id,data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id:string): Promise<Stud> {
    return this.studServ.deleteStudentEach(id);
  }
}
