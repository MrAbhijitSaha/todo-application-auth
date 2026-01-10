interface DateTimeResult {
	day: string;
	date: string;
	time: string;
	fullDateTime: string;
}

const getCurrentDateTime = (): DateTimeResult => {
	const now = new Date();

	const days: string[] = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const day: string = days[now.getDay()];

	const date: string = now.toLocaleDateString("en-US", {
		day: "numeric",
	});

	const time: string = now.toLocaleTimeString("en-US", {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
	});

	return {
		day,
		date,
		time,
		fullDateTime: `${date}, ${day} at ${time}`,
	};
};

export default getCurrentDateTime;
