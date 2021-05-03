import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateUserDTO {
    
    @IsString({ message: "First name should be a string value." })
    @IsNotEmpty({ message: "First name should not be empty." })
    first_name: String;

    @IsString({ message: "Last name should be a string value." })
    @IsNotEmpty({ message: "Last name should not be empty." })
    last_name: String;
    
    @IsNumber({},{ message: "Field should be a number." })
    @IsNotEmpty({ message: "Number should not be empty." })
    age: Number;

    @IsString({ message: "Address should be a string value." })
    @IsNotEmpty({ message: "Address should not be empty." })
    address: String;

    @Length(5,10, { message: "Number should not exceed 10 characters!" })
    @IsString({ message: "Phone should be a string." })
    @IsNotEmpty({ message: "Phone should not be empty." })
    phone: String;
}