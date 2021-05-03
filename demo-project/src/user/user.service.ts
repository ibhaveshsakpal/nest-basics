import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

	async getUsers(): Promise<User[]> {
		try {
			const user = await this.userModel.find().exec();
			return user;
		} catch (e) {
			return e;
		}
	}

	async getUserById(id: String): Promise<User> {
		try {
			// const user = await this.userModel.find({ __id: id }).exec();       //by using find({ _id })
			// const user = await this.userModel.findById(id).exec();           //by findById(id)
			const user = await this.userModel.findOne({ _id: id }).exec();
			return user;
		} catch (e) {
			return e;
		}
	}

	async createUser(createUserDTO: CreateUserDTO): Promise<User> {
		try {
			const user = await new this.userModel(createUserDTO).save();
			return user;
		} catch (e) {
			return e;
		}
	}

	async updateUserById(id: String, createUserDTO: CreateUserDTO): Promise<User> {
		try {
			const user = await this.userModel.findByIdAndUpdate(id, createUserDTO, {
				new: true
			});
			return user;
		} catch (e) {
			return e;
		}
	}

	async deleteUserById(id: String): Promise<User> {
		try {
			const user = await this.userModel.findOneAndRemove({ _id: id }).exec();
			return user;
		} catch (e) {
			return e;
		}
	}
}
