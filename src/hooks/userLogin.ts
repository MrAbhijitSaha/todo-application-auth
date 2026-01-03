import { authClient } from "@/lib/auth-client";
import { LoginFormType } from "@/lib/zodSchema";

const userLogin = async ({ email, password, rememberMe }: LoginFormType) => {
	const { error } = await authClient.signIn.email({
		email,
		password,
		rememberMe,
	});
	if (error) {
		return {
			isSuccess: false,
			message: error.message,
		};
	} else {
		return {
			isSuccess: true,
			message: "Login Succesful",
		};
	}
};

export default userLogin;
