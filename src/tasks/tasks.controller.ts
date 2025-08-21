import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServices: TasksService) {}
    @Get()
    async getTasks(){
        return this.tasksServices.getTasks();
    }
}
