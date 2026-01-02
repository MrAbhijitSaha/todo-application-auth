import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard | Todo App",
	description: "Dashboard page of Todo Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<div className="space-y-4 text-center">
				<h1 className="text-5xl font-semibold">Welcome to Todo App</h1>
				<h2 className="text-3xl">
					Here you can set and track your daily productivity to improve yourself
				</h2>
			</div>
		</section>
	);
};

export default page;
