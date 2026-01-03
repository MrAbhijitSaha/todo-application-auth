import { authClient } from "@/lib/auth-client";
import { RegisterFormType } from "@/lib/zodSchema";

const userRegister = async ({ name, email, password }: RegisterFormType) => {
	const { error } = await authClient.signUp.email({
		name,
		email,
		password,
	});

	if (error) {
		return {
			isSuccess: false,
			message: error.message,
		};
	} else {
		return {
			isSuccess: true,
			message: "Register Succesful",
		};
	}
};

export default userRegister;
