"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const starAction = async (todoId: string, todoStar: boolean) => {
	try {
		await prisma.todo.update({
			data: {
				isStared: !todoStar,
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

export default starAction;
