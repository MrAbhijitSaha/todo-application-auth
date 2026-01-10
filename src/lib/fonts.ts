import { Lora, Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--plus-jakarta-sans",
});

export const lora = Lora({
	subsets: ["latin"],
	display: "swap",
	variable: "--lora",
});

export const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--roboto-mono",
});
