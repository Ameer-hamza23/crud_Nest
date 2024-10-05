import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"todos"})

export class todo {

    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    title : string;
}