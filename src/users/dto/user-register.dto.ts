import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Неверный email' })
	email: string;

	@IsString({ message: 'Неверный пароль' })
	password: string;

	@IsString({ message: 'Неверное имя' })
	name: string;
}
