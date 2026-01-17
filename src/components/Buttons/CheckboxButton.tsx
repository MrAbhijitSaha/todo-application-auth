"use client";

import checkboxAction from "@/server/checkboxAction";
import { useState } from "react";
import { Checkbox } from "../shadcnui/checkbox";

type CheckboxButtonProps = {
	todoId: string;
	todoStatus: boolean;
};

const CheckboxButton = ({ todoId, todoStatus }: CheckboxButtonProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleCheckbox = async () => {
		setIsLoading(true);

		await checkboxAction(todoId, todoStatus);

		await new Promise<void>((resolve) => setTimeout(resolve, 1000));

		setIsLoading(false);
	};

	return (
		<Checkbox
			defaultChecked={todoStatus}
			onCheckedChange={handleCheckbox}
			disabled={isLoading}
			className="border-foreground/50 cursor-pointer"
		/>
	);
};

export default CheckboxButton;
