import RegisterForm from "@/components/Forms/RegisterForm";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Register | Todo App",
	description: "Register page of Todo Application",
};

const page = () => {
	return (
		<section className="grid h-[96dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Join us!
					</CardTitle>
				</CardHeader>

				<Separator />

				<CardContent>
					<RegisterForm />
				</CardContent>

				<Separator />

				<CardFooter>
					Already have an Account?
					<Link
						href={"/auth"}
						className="text-primary mx-1">
						Login
					</Link>
					now.
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;
