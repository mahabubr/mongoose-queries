import { HydratedDocument, Model } from "mongoose";

// creating an interface
export interface IUser {
	id: string;
	role: "Student";
	password: string;
	name: {
		firstName: string;
		middleName?: string;
		lastName: string;
	};
	dateOfBirth?: string;
	gender: "male" | "female";
	email?: string;
	contactNo: string;
	emergencyContactNo: string;
	presentAddress: string;
	permanentAddress: string;
}

// Instance
export interface IUserMethods {
	fullName(): string;
}

// Static

export interface UserModel extends Model<IUser, {}, IUserMethods> {
	getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
