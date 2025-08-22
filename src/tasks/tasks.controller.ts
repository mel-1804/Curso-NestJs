import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';

// ESTOS SON LOS ENDPOINTS----------------------------------------------------------------------
@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}
  // MUESTRA TODAS LAS TAREAS
  @Get() // en este árentesis puedo poner el path
  async getTasks() {
    return this.tasksServices.getTasks();
  }

  //MUESTRA UNA TAREA POR ID
  @Get('/:id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksServices.getTask(id);
  }
}
