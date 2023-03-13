export class CreateContactDto {
    Contactname: string;
  Address: string;
  PostalCode: string;  
  ContactLogo: string;  
  Country : string ; 
  Currency : string; 
  ShortName: string; 
  Remark:string; 
  createdBy!: number; 
  companyId: number;
}