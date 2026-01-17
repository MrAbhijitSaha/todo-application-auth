import ThemeProvider from "@/components/Providers/ThemeProvider";
import { abhayaLibre, antic, jetBrainsMono } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			className={`${antic.variable} ${abhayaLibre.variable} ${jetBrainsMono.variable}`}
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
