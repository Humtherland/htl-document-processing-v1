import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import multer from 'multer';

@Injectable()
export class DocumentService {

  create(dto: CreateDocumentDto, file: Express.Multer.File) {    
    if (file === undefined) {
      throw new BadRequestException('There was an error trying to process the file. File is undefined');
    }
    return file;
  }

  findAll() {
    return `This action returns all document`;
  }

  findOne(id: number) {
    return `This action returns a #${id} document`;
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
