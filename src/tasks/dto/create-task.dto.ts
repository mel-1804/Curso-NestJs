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
