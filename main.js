window.addEventListener("DOMContentLoaded", () => {
	const numeros = document.querySelectorAll(".numero");

	numeros.forEach((numero) => {
		let start = 0;
		const end = parseInt(numero.getAttribute("data-num"));
		const duration = 2000;
		const increment = end / (duration / 30);

		const contador = setInterval(() => {
			start += increment;
			if (start >= end) {
				numero.textContent = end + "+";
				clearInterval(contador);
			} else {
				numero.textContent = Math.floor(start);
			}
		}, 30);
	});
});
