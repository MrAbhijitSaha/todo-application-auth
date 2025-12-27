import PrivateHeader from "@/components/Header/PrivateHeader";
import { ReactNode } from "react";

type ProtectedLayoutProps = {
	children: ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
	return (
		<>
			<PrivateHeader />

			<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
		</>
	);
};

export default ProtectedLayout;
