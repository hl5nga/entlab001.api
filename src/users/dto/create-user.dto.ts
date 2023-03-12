export class CreateUserDTO {
  name: string;
  email: string;
  phone?: string;
  loginname:string; 
  password:string; 
  createdBy: number;
  companyId: number;
}
