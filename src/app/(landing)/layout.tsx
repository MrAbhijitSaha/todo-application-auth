import PublicHeader from "@/components/Header/PublicHeader";
import { ReactNode } from "react";

type LandingLayoutProps = {
	children: ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
	return (
		<>
			<PublicHeader />

			<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
		</>
	);
};

export default LandingLayout;
