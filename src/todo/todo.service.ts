import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { todo } from "./todo.entity";
import { CreateTodoDTO } from "./dtos/create-todo.dto";

@Injectable()
export class todoService {
    constructor (@InjectRepository(todo) private readonly todoRepository : Repository<todo>){}

    async create(dto : CreateTodoDTO){
        const todos = this.todoRepository.create(dto);

        return await this.todoRepository.save(todos);
    }

    findMany(){
        return this.todoRepository.find()
    }

    async update(id:number , dto:CreateTodoDTO){
        const todo = await this.todoRepository.findOne({where : {id}})

        Object.assign(todo,dto);
        return await this.todoRepository.save(todo);
    }

    async delete(id:number ){
        const todo = await this.todoRepository.findOne({where : {id}})

        return await this.todoRepository.remove(todo);
    }
}