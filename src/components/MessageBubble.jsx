const MessageBubble = ({
	show = true,
	orientation = "left",
	children = "Hello",
}) => {
	const orientationClass =
		orientation === "left" ? "-translate-x-[58px]" : "translate-x-[58px]";

	const bubbleWrapper =
		"w-full max-w-md px-2 absolute transform -translate-y-20 mb-2 flex justify-center items-end h-1";

	const bubble =
		"relative inline-flex justify-center min-w-[250px] bg-white rounded-md p-4 border border-slate-400 shadow";

	const tooltipClass = `absolute h-3 w-3 box-content transform rotate-45 ${orientationClass}`;
	const tooltipPointer = "bg-white translate-y-[5px]";
	const tooltipBorder = "translate-y-[6px] border border-slate-400 shadow";

	return (
		<div className={bubbleWrapper}>
			<div className={`${tooltipClass} ${tooltipBorder}`} />
			<div className={bubble}>{children}</div>
			<div className={`${tooltipClass} ${tooltipPointer}`} />
		</div>
	);
};

export default MessageBubble;
