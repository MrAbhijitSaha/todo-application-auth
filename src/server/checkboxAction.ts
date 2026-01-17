"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const checkboxAction = async (todoId: string, todoStatus: boolean) => {
	try {
		await prisma.todo.update({
			data: {
				isCompleted: !todoStatus,
			},
			where: {
				id: todoId,
			},
		});

		revalidatePath("/");
	} catch (error) {
		console.log(error);
	}
};

export default checkboxAction;
