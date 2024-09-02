// This is to handle IOS Safari's inability to handle the parallax effect on the image.
const createParralaxOnScroll = () => {
	document.addEventListener("scroll", function () {
		const scrollPosition = window.scrollY;
		const image = document.getElementById("parallax-image") as HTMLImageElement;

		// value for parallax speed (lower value = slower movement)
		const parallaxFactor = 0.1;

		image.setAttribute("y", (scrollPosition * parallaxFactor).toString());
	});
};

createParralaxOnScroll();
