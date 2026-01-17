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
				{userTasks.map((item) => (
					<DisplayTaskCard
						key={item.id}
						data={item}
					/>
				))}
			</section>
		</section>
	);
};

export default page;
