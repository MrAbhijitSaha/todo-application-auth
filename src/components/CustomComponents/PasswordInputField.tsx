"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";

type PasswordInputFieldProps = {
	placeholder: string;
	ariainvalid: boolean;
};

const PasswordInputField = ({
	placeholder,
	ariainvalid,
	...props
}: PasswordInputFieldProps) => {
	const [inputType, setInputType] = useState("text");

	const InputTypeHandeler = () => {
		setInputType(inputType === "password" ? "text" : "password");
	};

	return (
		<div className="relative">
			<Input
				{...props}
				type={inputType}
				placeholder={placeholder}
				aria-invalid={ariainvalid}
				autoComplete="off"
			/>
			<Button
				className="absolute right-0"
				variant={"ghost"}
				type="button"
				onClick={InputTypeHandeler}>
				{inputType === "password" ? <EyeOffIcon /> : <EyeIcon />}
			</Button>
		</div>
	);
};

export default PasswordInputField;
