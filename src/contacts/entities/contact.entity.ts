import { Entity, Column, PrimaryGeneratedColumn , OneToMany } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Contactname: string;

  @Column()
  Address: string;

  @Column()
  PostalCode: string;  

  @Column()
  ContactLogo: string;  

  @Column()
  Country : string ; 

  @Column() 
  Currency : string; 

  @Column()
  ShortName: string; 

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;

  @Column()
  updatedAt?: Date; 

  @Column('boolean', {default: true})
  isvalid: boolean = true;

  @Column()
  Remark:string; 

  @Column()
  createdBy: number; 

  @Column() 
  updatedBy?: number; 

  @Column() 
  companyId : number; 

}

  