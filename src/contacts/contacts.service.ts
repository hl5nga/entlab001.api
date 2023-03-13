import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contacts: Repository<Contact>,
  ) {}
 
  private id = 0; 

  findAll() {
    return   this.contacts.find();
  }

  create(createContactDto : CreateContactDto) {
    this.contacts.save({ id: ++this.id, ...createContactDto })
    //this.users.push({ id: ++this.id, ...createUserDto, createdAt: new Date() });
  }


  // findOne(id: number) {
  //   return `This action returns a #${id} contact`;
  // }

  // update(id: number, updateContactDto: UpdateContactDto) {
  //   return `This action updates a #${id} contact`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} contact`;
  // }
}



 