import { Controller, Get, Post, Patch,  Body,   Param, Delete } from '@nestjs/common';
import { CompanysService } from './companys.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
//import { Company } from './entities/company.entity';

@Controller('companys')
export class CompanysController {
  constructor(private readonly companysService: CompanysService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDTO) {
    return this.companysService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.companysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id')id: number, @Body() company: UpdateCompanyDTO){
      this.companysService.update(id, company);
      return `This action updates a #${id} Company`;
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
  //   return this.companysService.update(+id, updateCompanyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companysService.remove(+id);
  // }
}
