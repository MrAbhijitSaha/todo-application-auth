import CreateNewTaskButton from "@/components/Buttons/CreateNewTaskButton";
import DisplayTaskCard from "@/components/Card/DisplayTaskCard";
import { auth } from "@/lib/auth";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Dashboard | Todo App",
	description: "Dashboard page of Todo Application",
};

const page = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session === null) {
		return redirect("/auth");
	}

	const {
		user: { id },
	} = session;

	const userTasks = await prisma.todo.findMany({
		where: {
			userId: id,
		},
	});

	return (
		<section className="">
			<CreateNewTaskButton />

			<section className="space-y-2">
				{/* here i'm checking if task's length is 0 means no task avilable to display no task.... */}

				{userTasks.length === 0 ? (
					<div className="py-12 text-center">
						<h3 className="mb-2 text-xl font-medium text-gray-500">
							No tasks available
						</h3>
						<p className="text-gray-400">
							Please create a new task to get started
						</p>
					</div>
				) : (
					//here else case is task avilable then map and display tasks
					userTasks.map((item) => (
						<DisplayTaskCard
							key={item.id}
							data={item}
						/>
					))
				)}
			</section>
		</section>
	);
};

export default page;
