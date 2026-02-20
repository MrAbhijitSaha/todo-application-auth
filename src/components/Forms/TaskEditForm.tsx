import { taskDataSchema, TaskDataType } from "@/lib/zodSchema";
import editTask from "@/server/editTask";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Todo } from "../../../generated/prisma/client";
import { Button } from "../shadcnui/button";
import { DialogClose } from "../shadcnui/dialog";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

type TaskEditFormProps = {
	task: Todo;
};

const TaskEditForm = ({ task }: TaskEditFormProps) => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(taskDataSchema),
		defaultValues: {
			t: task.task,
		},
		mode: "all",
	});

	const formHandelar = async ({ t }: TaskDataType) => {
		const { isSuccess, message } = await editTask(t, task.id);

		if (isSuccess) {
			toast.success(message);
			reset();
			// setIsOpen(false);
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
				name="t"
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
						<LoaderCircleIcon className="animate-spin" />
					</>
				) : (
					<>Edit</>
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

export default TaskEditForm;
