import { Abhaya_Libre, Antic, JetBrains_Mono } from "next/font/google";

export const antic = Antic({
	subsets: ["latin"],
	display: "swap",
	variable: "--antic",
	weight: "400",
});

export const abhayaLibre = Abhaya_Libre({
	subsets: ["latin"],
	display: "swap",
	weight:"400",
	variable: "--abhaya-libre",
});

export const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--jetbrains-mono",
});
