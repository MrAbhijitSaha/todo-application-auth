import { formatDistanceToNow } from "date-fns";
import { Todo } from "../../../generated/prisma/client";
import CheckboxButton from "../Buttons/CheckboxButton";
import DeleteTaskButton from "../Buttons/DeleteTaskButton";
import EditTaskButton from "../Buttons/EditTaskButton";
import StarButton from "../Buttons/StarButton";
import { Card, CardContent } from "../shadcnui/card";

type DisplayTaskCardProps = {
	data: Todo;
};

const DisplayTaskCard = ({ data }: DisplayTaskCardProps) => {
	const timeStamp = formatDistanceToNow(data.createdAt, {
		includeSeconds: true,
	});

	return (
		<Card className="w-full">
			<CardContent className="flex items-center justify-between gap-2">
				<div className="flex items-center justify-between gap-2">
					<CheckboxButton
						todoId={data.id}
						todoStatus={data.isCompleted}
					/>

					<p className={`text-2xl ${data.isCompleted && "line-through"}`}>
						{data.task}
					</p>
				</div>

				<div className="flex items-center justify-between">
					<p className="text-foreground/60">{timeStamp} ago</p>

					<StarButton
						todoId={data.id}
						todoStar={data.isStared}
					/>

					<EditTaskButton task={data} />

					<DeleteTaskButton id={data.id} />
				</div>
			</CardContent>
		</Card>
	);
};

export default DisplayTaskCard;
