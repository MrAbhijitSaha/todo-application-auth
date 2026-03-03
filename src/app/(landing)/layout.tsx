import PublicHeader from "@/components/Header/PublicHeader";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type LandingLayoutProps = {
	children: ReactNode;
};

const LandingLayout = async ({ children }: LandingLayoutProps) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
		redirect("/dashbord");
	}

	return (
		<>
			<PublicHeader />

			<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
		</>
	);
};

export default LandingLayout;
