"use client";

import { loginFormSchema, LoginFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Checkbox } from "../shadcnui/checkbox";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting, isValid },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		mode: "all",
	});

	const loginFormSubmitHandeler = (value: LoginFormType) => {
		console.log(value);
	};

	return (
		<form
			onSubmit={handleSubmit(loginFormSubmitHandeler)}
			className="grid gap-4">
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<Field aria-invalid={fieldState.invalid}>
						<FieldLabel>Email</FieldLabel>
						<Input
							{...field}
							type="email"
							autoComplete="email"
							placeholder="Please enter your email"
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
					<Field aria-invalid={fieldState.invalid}>
						<FieldLabel>Password</FieldLabel>

						<Input
							{...field}
							type={"password"}
							placeholder="Please enter your password"
							aria-invalid={fieldState.invalid}
							autoComplete="off"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="rememberMe"
				control={control}
				render={({ field, fieldState }) => (
					<Field orientation="horizontal">
						<Checkbox
							id="rememberMe"
							checked={field.value}
							onCheckedChange={field.onChange}
						/>
						<FieldLabel htmlFor="rememberMe">Remember Me</FieldLabel>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className={`${!isValid || isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
				disabled={!isValid || isSubmitting}>
				{isSubmitting ? (
					<>
						<Loader2Icon className="animate-spin" /> Login...
					</>
				) : (
					<>
						<SendIcon /> Login
					</>
				)}
			</Button>
		</form>
	);
};

export default LoginForm;
