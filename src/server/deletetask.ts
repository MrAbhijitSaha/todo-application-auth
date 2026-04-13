"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const deletetask = async (todoId: string) => {
	try {
		await prisma.todo.delete({
			where: {
				id: todoId,
			},
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Task Deleted Successfully",
		};
	} catch (error) {
		console.error(error);
		return {
			isSuccess: false,
			message: "Failed to Delete Task",
		};
	}
};

export default deletetask;
