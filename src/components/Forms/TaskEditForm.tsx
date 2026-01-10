import { Field, FieldDescription, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const TaskEditForm = () => {
	return (
		<>
			<Field>
				<FieldLabel htmlFor="name">Full name</FieldLabel>
				<Input
					id="name"
					autoComplete="off"
					placeholder="Evil Rabbit"
				/>
				<FieldDescription>
					This appears on invoices and emails.
				</FieldDescription>
			</Field>
		</>
	);
};

export default TaskEditForm;
