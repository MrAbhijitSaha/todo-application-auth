import PrivateHeader from "@/components/Header/PrivateHeader";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type ProtectedLayoutProps = {
	children: ReactNode;
};

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect("/auth");
	}

	return (
		<>
			<PrivateHeader />

			<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
		</>
	);
};

export default ProtectedLayout;
