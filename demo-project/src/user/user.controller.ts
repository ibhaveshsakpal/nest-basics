import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { response } from 'express';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async getUsers(): Promise<User[]> {
		try {
			const user = await this.userService.getUsers();
			return user;
		} catch (e) {
			return e;
		}
	}

	@Get(':id')
	async getUserById(@Param('id') id: String): Promise<Object> {     // can also be used (@Param() params), e.g params.id
		try {
			const user = await this.userService.getUserById(id);
            if(user) {
                const response = {
                    message: "Fetched user!",
                    result: user
                }
                return response;
            }
		} catch (e) {
			return e;
		}
	}

	@Post()
	async createUser(@Body() createUserDTO: CreateUserDTO) {
		try {
			const user = await this.userService.createUser(createUserDTO);
			return user;
		} catch (e) {
			return e;
		}
	}

	@Put(':id')
	async updateUserById(@Param('id') id: String, @Body() createUserDTO: CreateUserDTO): Promise<User> {
		try {
			const user = await this.userService.updateUserById(id, createUserDTO);
			return user;
		} catch (e) {
			return e;
		}
	}

	@Delete(':id')
	async deleteUserById(@Param('id') id: String): Promise<User> {
		try {
			const user = await this.userService.deleteUserById(id);
			return user;
		} catch (e) {
			return e;
		}
	}
}
