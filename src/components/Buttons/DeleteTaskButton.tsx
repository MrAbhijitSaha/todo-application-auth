"use client";

import deletetask from "@/server/deletetask";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../shadcnui/dialog";

type DeleteTaskButtonProps = {
	id: string;
};

const DeleteTaskButton = ({ id }: DeleteTaskButtonProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleDeleteTask = async () => {
		setIsLoading(true);

		const { isSuccess, message } = await deletetask(id);

		setIsLoading(false);

		if (!isSuccess) {
			toast.error(message);
		} else {
			toast.success(message);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={"outline"}
					className="cursor-pointer">
					<Trash2Icon size={24} />
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						Once you delete this, it cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button
						variant="destructive"
						onClick={handleDeleteTask}
						disabled={isLoading}>
						{isLoading ? (
							<>
								<LoaderIcon className="animate-spin" /> Deleting...
							</>
						) : (
							"Delete"
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteTaskButton;
