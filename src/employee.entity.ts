/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @OneToOne(()=>ContactInfo,contactInfo=>contactInfo.employeeId)
    @JoinColumn()
    contactInfo:ContactInfo;

}
