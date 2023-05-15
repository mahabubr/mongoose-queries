import { IUser } from "./user.interface";
import User from "./user.model";

// database query
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
	const user = await new User(payload); // User -> class | user -> instance
	await user.save(); // Instance Method / BUILD IN

	console.log(user.fullName()); // Custom Instance Method

	return user;
};

export const getUserFromDb = async (): Promise<IUser[]> => {
	const users = await User.find();
	return users;
};

export const getUserByIdDb = async (payload: string): Promise<IUser | null> => {
	const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
	return user;
};

export const getAllAdminUser = async () => {
	const admins = await User.getAdminUsers();
	return admins;
};

// Class -> Attach -> Method -> direct call using class
