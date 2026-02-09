"use client";

import { createTaskDialogAtom } from "@/lib/atom";
import { taskDataSchema, TaskDataType } from "@/lib/zodSchema";
import createTask from "@/server/createTask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { DialogClose } from "../shadcnui/dialog";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const CreateTaskForm = () => {
	const setIsOpen = useSetAtom(createTaskDialogAtom);

	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(taskDataSchema),
		defaultValues: {
			task: "",
		},
		mode: "all",
	});

	const formHandelar = async ({ task }: TaskDataType) => {
		const { isSuccess, message } = await createTask(task);

		if (isSuccess) {
			toast.success(message);
			reset();
			setIsOpen(false);
		} else {
			toast.error(message);
		}
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

			<Button
				className="cursor-pointer"
				type="submit"
				disabled={isSubmitting}>
				{isSubmitting ? (
					<>
						<Loader2Icon className="animate-spin" />
					</>
				) : (
					<>Submit</>
				)}
			</Button>

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
