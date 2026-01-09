import { getSessionCookie } from "better-auth/cookies";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const proxy = (request: NextRequest) => {
	const sessionCookie = getSessionCookie(request, {
		cookiePrefix: "ta",
	});
	// THIS IS NOT SECURE!
	// This is the recommended approach to optimistically redirect users
	// We recommend handling auth checks in each page/route
	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/auth", request.url));
	}

	return NextResponse.next();
};

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
	matcher: ["/dashbord", "/dashbord/:path*"],
};
