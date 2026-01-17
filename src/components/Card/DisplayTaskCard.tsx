import { formatDistanceToNow } from "date-fns";
import { PenIcon, Trash2Icon } from "lucide-react";
import { Todo } from "../../../generated/prisma/client";
import CheckboxButton from "../Buttons/CheckboxButton";
import StarButton from "../Buttons/StarButton";
import { Button } from "../shadcnui/button";
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

					<h3 className={`text-2xl ${data.isCompleted && "line-through"}`}>
						{data.task}
					</h3>
				</div>

				<div className="grid grid-cols-3 gap-2">
					<p className="text-foreground/60 col-span-3">{timeStamp} ago</p>

					<StarButton
						todoId={data.id}
						todoStar={data.isStared}
					/>

					<Button variant={"outline"}>
						<PenIcon size={24} />
					</Button>

					<Button variant={"outline"}>
						<Trash2Icon size={24} />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default DisplayTaskCard;
