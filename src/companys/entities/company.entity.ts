import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn , OneToMany } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Companyname: string;

  @Column()
  Address: string;

  @Column()
  PostalCode: string;  

  @Column()
  CompanyLogo: string;  

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

  @OneToMany((type) => User,
    (user) => user.company,
  )
  users!: User[];
}
