import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description!: string;
}

// Un DTO (Data Transfer Object) es un objeto que define cómo se envían los datos a través de la red. En este caso, CreateTaskDto define la estructura de los datos necesarios para crear una nueva tarea, incluyendo validaciones para asegurar que los datos sean correctos antes de ser procesados por el servicio.
