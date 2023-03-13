export class CreateItemDto {
  itemCode: string;
  itemDesc  : string;
  itemGroup: string;
  itemClass:string;  
  createdBy: number;
  companyId: number;
  contactId: number;
}
