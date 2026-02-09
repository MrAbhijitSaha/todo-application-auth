"use client";

import starAction from "@/server/starAction";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../shadcnui/button";

type StarButtonProps = {
	todoId: string;
	todoStar: boolean;
};

const StarButton = ({ todoId, todoStar }: StarButtonProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleStarButton = async () => {
		setIsLoading(true);

		await starAction(todoId, todoStar);

		await new Promise<void>((resolve) => setTimeout(resolve, 1000));

		setIsLoading(false);
	};

	return (
		<Button
			type="button"
			variant={"outline"}
			onClick={handleStarButton}
			disabled={isLoading}
			className="cursor-pointer">
			<StarIcon
				size={24}
				className={`${todoStar && "fill-amber-500 text-amber-500"}`}
			/>
		</Button>
	);
};

export default StarButton;
