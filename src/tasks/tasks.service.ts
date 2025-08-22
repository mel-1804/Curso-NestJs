import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks() {
    try {
      const tasks = await this.prisma.task.findMany();
      return tasks;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return [];
    }
  }

  async getTask(id: number) {
    try {
      const task = await this.prisma.task.findFirst({
        where: { id },
      });
      if (task) return task;
      throw new NotFoundException(`Task with id ${id} not found`);
    } catch (error: unknown) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
        if (error instanceof Error)
          throw new HttpException(
            error.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      }
      return [];
    }
  }
}
