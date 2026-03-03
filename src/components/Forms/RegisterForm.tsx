"use client";

import userRegister from "@/hooks/userRegister";
import { registerFormSchema, RegisterFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const RegisterForm = () => {
	const { push } = useRouter();

	const {
		control,
		handleSubmit,
		formState: { isSubmitting, isValid },
		reset,
	} = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "all",
	});

	const registerFormSubmitHandeler = async (value: RegisterFormType) => {
		const { isSuccess, message } = await userRegister(value);

		if (isSuccess) {
			toast.success(message);
			reset();
			push("/auth");
		} else {
			toast.error(message);
		}
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
						<FieldLabel>Full Name</FieldLabel>

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
						<FieldLabel>Email</FieldLabel>

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
				name="confirmPassword"
				control={control}
				render={({ field, fieldState }) => (
					<Field>
						<FieldLabel>Confirm Password</FieldLabel>

						<Input
							{...field}
							type={"password"}
							placeholder="Please reenter your password"
							aria-invalid={fieldState.invalid}
							autoComplete="off"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className="cursor-pointer"
				disabled={!isValid || isSubmitting}>
				{isSubmitting ? (
					<>
						<Loader2Icon className="animate-spin" /> Registering...
					</>
				) : (
					<>
						<SendIcon /> Register
					</>
				)}
			</Button>
		</form>
	);
};

export default RegisterForm;
