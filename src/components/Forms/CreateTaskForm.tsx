import { taskDataSchema, TaskDataType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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
		<form onSubmit={handleSubmit(formHandelar)}>
			<Controller
				name="task"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
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
		</form>
	);
};

export default CreateTaskForm;
