import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodosController } from "./todo.controller";
import { todoService } from "./todo.service";
import { todo } from "./todo.entity";


@Module({
    imports : [TypeOrmModule.forFeature([todo])],
    controllers : [TodosController],
    providers : [todoService]
})
export class TodoModule {}