import getCurrentDateTime from "@/hooks/currentDateTime";
import { PenIcon, StarIcon, Trash2Icon } from "lucide-react";
import { Button } from "../shadcnui/button";
import { Card, CardContent } from "../shadcnui/card";

const DisplayTaskCard = () => {
	const { fullDateTime } = getCurrentDateTime();
	return (
		<Card className="group w-full">
			<CardContent className="flex items-center justify-between gap-2">
				<div className="space-y-1">
					<h3 className="text-xl">Task Name</h3>
					<p className="text-foreground/60">{fullDateTime}</p>
				</div>

				<div className="space-x-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
					<Button variant={"outline"}>
						<StarIcon size={24} />
					</Button>

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
