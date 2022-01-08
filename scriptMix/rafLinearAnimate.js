
export function animate({ duration, draw, timing }) {

	const start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) {
			timeFraction = 1;
		}

		const progress = timing(timeFraction);

		draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

//use
const animateModal = (start, stop) => {
	animate({
		duration: 300,
		timing: (timeFraction) => {
			return timeFraction;
		},
		draw: (progress) => {
			const pos = start + (stop - start) * progress;
			modalMenu.style.transform = `translateX(${pos}%)`;
		},
	});
}