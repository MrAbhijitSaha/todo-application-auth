import { Button } from "@/components/shadcnui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home | Todo App",
	description: "Welcome to the Todo Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<div className="space-y-4 text-center">
				<h1 className="text-5xl font-semibold">Welcome to Todo App</h1>
				<h2 className="text-3xl">
					Here you can set and track your daily productivity to improve yourself
				</h2>
				<Button
					asChild
					type="button"
					className="p-6">
					<Link
						href={"/auth/register"}
						className="text-foreground text-xl">
						Get Started
					</Link>
				</Button>
			</div>
		</section>
	);
};

export default page;
