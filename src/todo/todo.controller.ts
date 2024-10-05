import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { todoService } from "./todo.service";
import { CreateTodoDTO } from "./dtos/create-todo.dto";
import { dot } from "node:test/reporters";

@Controller('todos')
export class TodosController {
    constructor (private readonly todoService:todoService){}

    @Post()
    create(@Body() dto:CreateTodoDTO){
        return this.todoService.create(dto);
    }

    @Get()
    findMany(){
        return this.todoService.findMany();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto:CreateTodoDTO){
        return this.todoService.update(id,dto)
    }
    @Delete(':id')
    delete(@Param('id') id: number,){
        return this.todoService.delete(id)
    }
}