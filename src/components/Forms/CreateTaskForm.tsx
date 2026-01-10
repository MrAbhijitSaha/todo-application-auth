"use client";

import { taskDataSchema, TaskDataType } from "@/lib/zodSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { DialogClose } from "../shadcnui/dialog";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const CreateTaskForm = () => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
		setValue,
		clearErrors,
	} = useForm({
		resolver: zodResolver(taskDataSchema),
		defaultValues: {
			task: "",
		},
		mode: "all",
	});

	const formHandelar = (value: TaskDataType) => {
		console.log(value);
	};

	return (
		<form
			onSubmit={handleSubmit(formHandelar)}
			className="grid grid-cols-2 gap-4"
			noValidate>
			<Controller
				name="task"
				control={control}
				render={({ field, fieldState }) => (
					<Field
						data-invalid={fieldState.invalid}
						className="col-span-2">
						<FieldLabel htmlFor={field.name}>Enter Your Task Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter Your Task Name"
							autoComplete="off"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button type="submit">Create</Button>

			<DialogClose asChild>
				<Button
					variant="outline"
					className="cursor-pointer">
					Cancel
				</Button>
			</DialogClose>
		</form>
	);
};

export default CreateTaskForm;
