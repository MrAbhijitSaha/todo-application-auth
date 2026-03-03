"use client";

import { editTaskDialogAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { PenIcon } from "lucide-react";
import { Todo } from "../../../generated/prisma/client";
import TaskEditForm from "../Forms/TaskEditForm";
import { Button } from "../shadcnui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../shadcnui/dialog";

type EditTaskButtonProps = {
	task: Todo;
	// todoId: string;
};

const EditTaskButton = ({ task }: EditTaskButtonProps) => {
	const [isOpen, setIsOpen] = useAtom(editTaskDialogAtom);

	return (
		<Dialog
			onOpenChange={(open) => setIsOpen(open)}
			open={isOpen}>
			<DialogTrigger asChild>
				<Button
					variant={"outline"}
					className="cursor-pointer">
					<PenIcon />
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-106.25">
				<DialogHeader>
					<DialogTitle>Create New Task</DialogTitle>
					<DialogDescription>
						Fill in the details below to create a new task.
					</DialogDescription>
				</DialogHeader>

				<TaskEditForm task={task} />

				{/* <DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose> */}
			</DialogContent>
		</Dialog>
	);
};

export default EditTaskButton;
