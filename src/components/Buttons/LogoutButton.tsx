"use client";

import { Button } from "../shadcnui/button";

const handleLogout = () => {};

const LogoutButton = () => {
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
