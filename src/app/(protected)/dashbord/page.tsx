import CreateNewTaskButton from "@/components/Buttons/CreateNewTaskButton";
import DisplayTaskCard from "@/components/Card/DisplayTaskCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard | Todo App",
	description: "Dashboard page of Todo Application",
};

const page = () => {
	return (
		<section className="">
			<CreateNewTaskButton />

			<section className="space-y-2">
				<DisplayTaskCard />

				<DisplayTaskCard />
			</section>
		</section>
	);
};

export default page;
