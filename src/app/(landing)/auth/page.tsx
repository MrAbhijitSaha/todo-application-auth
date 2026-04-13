import LoginForm from "@/components/Forms/LoginForm";
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
	title: "Login | Todo App",
	description: "Login page of Todo Application",
};

const page = () => {
	return (
		<section className="grid h-[96dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Welcome Back
					</CardTitle>
				</CardHeader>

				<Separator />

				<CardContent>
					<LoginForm />
				</CardContent>

				<Separator />

				<CardFooter>
					Don&apos;t have an Account?
					<Link
						href={"/auth/register"}
						className="text-primary mx-1">
						Register
					</Link>
					now.
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;
