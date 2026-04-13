import CreateNewTaskButton from "@/components/Buttons/CreateNewTaskButton";
import DisplayTaskCard from "@/components/Card/DisplayTaskCard";
import { auth } from "@/lib/auth";
import prisma from "@/lib/database/dbClient";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return redirect("/auth");
	}

	const {
		user: { id },
	} = session;

	const userTasks = await prisma.todo.findMany({
		where: {
			userId: id,
			isStared: true,
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
							No Stared tasks available
						</h3>
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
