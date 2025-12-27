import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import Link from "next/link";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Join us!
					</CardTitle>
				</CardHeader>

				<CardContent></CardContent>

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
