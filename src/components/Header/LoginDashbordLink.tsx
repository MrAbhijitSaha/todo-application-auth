"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const LoginDashbordlink = () => {
	const { data } = authClient.useSession();

	if (data === null) {
		return (
			<>
				<Link href={"/auth"}>Login</Link>
				<Link href={"/auth/register"}>Register</Link>
			</>
		);
	} else {
		return <Link href={"/dashbord"}>Dashbord</Link>;
	}
};

export default LoginDashbordlink;
