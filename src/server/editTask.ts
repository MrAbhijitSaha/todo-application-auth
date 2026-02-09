"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";
import { Todo } from "../../generated/prisma/client";

const editTask = async ({ task, id }: Todo) => {
	try {
		await prisma.todo.update({
			where: {
				id: id,
			},
			data: {
				task: task,
			},
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Task Edited Successfuly",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "Failed to Edit Task",
		};
	}
};

export default editTask;
