"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

const LogoutButton = () => {
	const { push } = useRouter();

	const handleLogout = async () => {
		const { error } = await authClient.signOut();

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Logout Successful");
			push("/auth");
		}
	};

	return (
		<Button
			type="button"
			onClick={handleLogout}
			variant={"destructive"}
			className="cursor-pointer">
			Logout
		</Button>
	);
};

export default LogoutButton;
