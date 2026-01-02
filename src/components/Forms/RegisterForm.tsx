"use client";

import { registerFormSchema, RegisterFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import PasswordInputField from "../CustomComponents/PasswordInputField";
import { Button } from "../shadcnui/button";
import { Field, FieldError } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const RegisterForm = () => {
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "all",
	});

	const registerFormSubmitHandeler = (value: RegisterFormType) => {
		console.log(value);
	};

	return (
		<form
			onSubmit={handleSubmit(registerFormSubmitHandeler)}
			className="grid gap-4">
			<Controller
				name="name"
				control={control}
				render={({ field, fieldState }) => (
					<Field>
						<Input
							{...field}
							type="text"
							autoComplete="name"
							placeholder="Please enter your name"
							aria-invalid={fieldState.invalid}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<Field>
						<Input
							{...field}
							type="email"
							placeholder="Please enter your email"
							autoComplete="email"
							aria-invalid={fieldState.invalid}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field, fieldState }) => (
					<Field>
						<PasswordInputField
							{...field}
							ariainvalid={fieldState.invalid}
							placeholder="Please enter a password"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="confirmPassword"
				control={control}
				render={({ field, fieldState }) => (
					<Field>
						<PasswordInputField
							{...field}
							placeholder="Please reenter your password"
							ariainvalid={fieldState.invalid}
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className="cursor-pointer">
				Register
			</Button>
		</form>
	);
};

export default RegisterForm;
