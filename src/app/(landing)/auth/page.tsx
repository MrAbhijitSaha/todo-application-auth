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
						Welcome Back
					</CardTitle>
				</CardHeader>

				<CardContent></CardContent>

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
