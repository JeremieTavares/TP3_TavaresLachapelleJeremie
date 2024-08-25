/**
 * Add focus-visible class to elements when they are focused with the keyboard (Tab key)
 **/
export const handleFocusStyles = (): void => {
	let mouseDown: boolean = false;

	document.addEventListener("mousedown", () => {
		mouseDown = true;
	});

	document.addEventListener("keydown", (e: KeyboardEvent) => {
		if (e.key === "Tab") {
			mouseDown = false;
		}
	});

	document.addEventListener("focusin", (e: FocusEvent) => {
		if (!mouseDown) {
			(e.target as HTMLElement).classList.add("focus-visible");
		}
	});

	document.addEventListener("focusout", (e: FocusEvent) => {
		(e.target as HTMLElement).classList.remove("focus-visible");
	});
};
