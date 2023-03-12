import { Company } from 'src/companys/entities/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone?: string;

  @Column() 
  loginname:string; 

  @Column()
  password:string; 
  
  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;


  @Column()
  updatedAt?: Date; 
 
  @Column('boolean', {default: true})
  isvalid: boolean = true;

  @ManyToOne(() => Company, (company) => company.users)
    company: Company

  @Column()
  createdBy: number; 

  @Column() 
  updatedBy?: number; 


}

