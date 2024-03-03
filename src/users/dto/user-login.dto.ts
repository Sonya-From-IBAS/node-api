import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Неверный email' })
	email: string;

	@IsString({ message: 'Неверный пароль' })
	password: string;
}
