import { PenIcon, StarIcon, Trash2Icon } from "lucide-react";
import { Button } from "../shadcnui/button";
import { Card, CardContent } from "../shadcnui/card";
import { Checkbox } from "../shadcnui/checkbox";

const DisplayTaskCard = () => {
	return (
		<Card className="w-full">
			<CardContent className="flex items-center justify-between gap-2">
				<div className="flex items-center justify-between gap-2">
					<Checkbox className="cursor-pointer" />

					<h3 className="text-2xl line-through">Task Name</h3>
				</div>

				<div className="grid grid-cols-3 gap-2">
					<p className="text-foreground/60 col-span-3">{"time"}</p>

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
