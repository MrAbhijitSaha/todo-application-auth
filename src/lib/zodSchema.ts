import z from "zod";

export const loginFormSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(8, "Password must be 8 charecter"),
	rememberMe: z.boolean(),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
	.object({
		name: z.string().min(6, "Name must be 6 charecter"),
		email: z.email("Invalid email"),
		password: z.string().min(8, "Password must be 8 charecter"),
		confirmPassword: z.string().min(8, "Password must be 8 charecter"),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		error: "Password didn't match",
		path: ["confirmPassword"],
	});

export type RegisterFormType = z.infer<typeof registerFormSchema>;
