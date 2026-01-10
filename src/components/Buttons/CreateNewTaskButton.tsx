import { PlusIcon } from "lucide-react";
import CreateTaskForm from "../Forms/CreateTaskForm";
import { Button } from "../shadcnui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../shadcnui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcnui/tooltip";

const CreateNewTaskButton = () => {
	return (
		<div className="fixed right-14 bottom-14">
			<Dialog>
				<Tooltip>
					<TooltipTrigger asChild>
						<DialogTrigger asChild>
							<Button className="cursor-pointer">
								<PlusIcon
									size={32}
									className="stroke-3"
								/>
							</Button>
						</DialogTrigger>
					</TooltipTrigger>

					<TooltipContent>
						<p>Create New Task</p>
					</TooltipContent>
				</Tooltip>

				<DialogContent className="sm:max-w-106.25">
					<DialogHeader>
						<DialogTitle>Create New Task</DialogTitle>
						<DialogDescription>
							Fill in the details below to create a new task.
						</DialogDescription>
					</DialogHeader>

					<CreateTaskForm />

					{/* <DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose> */}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default CreateNewTaskButton;
