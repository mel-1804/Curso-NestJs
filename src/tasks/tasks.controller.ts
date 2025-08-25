import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// ESTOS SON LOS ENDPOINTS--------------------------------------------------------------------------
@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}
  // MUESTRA TODAS LAS TAREAS-----------------------------------------------------------------------
  @Get() // en este árentesis puedo poner el path
  async getTasks() {
    return this.tasksServices.getTasks();
  }

  //MUESTRA UNA TAREA POR ID------------------------------------------------------------------------
  @Get('/:id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksServices.getTask(id);
  }

  //CREAR UNA TAREA---------------------------------------------------------------------------------
  @Post()
  async createTask(@Body() data: CreateTaskDto) {
    return await this.tasksServices.createTask(data);
  }
  // ACTUALIZAR UNA TAREA-------------------------------------------------------------------------------
  // Diferencia entre PUT y PATCH: PUT actualiza todo el objeto, PATCH solo una parte.
  @Patch('/:id')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateTaskDto,
  ) {
    return await this.tasksServices.updateTask(id, data);
  }
  //   @Put('/:id')
  //   async updateTask(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body() data: UpdateTaskDto,
  //   ) {
  //     return await this.tasksServices.updateTask(id, data);
  //   }
  // BORRAR UNA TAREA---------------------------------------------------------------------------------
  @Delete('/:id')
  async deleteTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksServices.deleteTask(id);
  }
}
//-------------------------------------------------------------------------------------------------------------
// CONTROLLER:
// Es la puerta de entrada de la aplicación.
// Recibe las peticiones HTTP (GET, POST, PATCH, DELETE, etc.) desde el cliente.
// Su trabajo es muy ligero:
// Tomar los datos (query, body, params).
// Pasarlos al SERVICE.
// Devolver la respuesta al cliente.
// Un controller NO debe contener lógica de negocio. Solo se encarga de dirigir el tráfico.
