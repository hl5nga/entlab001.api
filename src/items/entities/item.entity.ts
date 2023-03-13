import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemCode: string;
    @Column()
    itemDesc  : string;
    @Column()
    itemGroup: string;
    @Column()
    itemClass:string;  

    @Column()
    companyId: number;
    
    @Column()
    contactId: number;

    @Column({ type: "timestamp", default: () => "now()" })
    createdAt: Date;

    @Column()
    updatedAt?: Date; 
    
    @Column('boolean', {default: true})
    isvalid: boolean = true;
}
