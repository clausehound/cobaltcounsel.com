function showMobileMenu() {
	const nav = document.getElementById("navLinks");
	if (nav.style.display === "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
}

AOS.init({
	duration: 700,
	easing: 'ease-in-sine',
	anchorPlacement: 'center-bottom'
});