import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO  } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
 
@Injectable()
export class CompanysService {
  constructor(
    @InjectRepository(Company)
    private companys: Repository<Company>,
  ) {}
 
  private id = 0;

  async findAll() {
    return await this.companys.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companys.findOne({
      where : {id}
    });
  }

  create(createCompanyDto : CreateCompanyDTO) {
    this.companys.save({ id: ++this.id, ...createCompanyDto })
    //this.users.push({ id: ++this.id, ...createUserDto, createdAt: new Date() });
  }

  async update( id: number ,  updateCompanyDto : UpdateCompanyDTO) {
    const findCompany = await this.companys.findOne({
      where : {id}
    });
    if(findCompany){
        await this.companys.update(id, 
          { 
            Companyname: updateCompanyDto.Companyname ,
              Address: updateCompanyDto.Address ,
              PostalCode: updateCompanyDto.PostalCode,  
              CompanyLogo:  updateCompanyDto.CompanyLogo,  
              Country : updateCompanyDto.Country  ,
              Currency : updateCompanyDto.Currency ,  
              ShortName: updateCompanyDto.ShortName, 
              Remark:updateCompanyDto.Remark, 
              updatedBy: updateCompanyDto.updatedBy,
              updatedAt: new Date().toISOString(),
          })
    }    
    return updateCompanyDto;
  }
}


