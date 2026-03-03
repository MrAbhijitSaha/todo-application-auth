"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const createTask = async (task: string) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session === null) {
		return redirect("/auth");
	}

	try {
		await prisma.todo.create({
			data: {
				task,
				userId: session.user.id,
			},
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Task Created Successfuly",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "Task Creation Failed",
		};
	}
};

export default createTask;
