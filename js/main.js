// selector
var menu = document.querySelector(".hamburger");
// method
function toggleMenu(event) {
	this.classList.toggle("is-active");
	document.querySelector(".menuppal").classList.toggle("is_active");
	event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);

// increment number

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(elem) {
	endNbr = parseInt(elem.innerHTML);
	const speed = endNbr / 10;
	incNbrRec(0, endNbr, elem, speed);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elem, speed) {
	if (i <= endNbr) {
		elem.innerHTML = i + "+";
		setTimeout(function () {
			//Delay a bit before calling the function again.
			if (endNbr > 60 && endNbr - i > 20) {
				incNbrRec(i + 10, endNbr, elem);
			} else if (endNbr - i <= 15) {
				incNbrRec(i + 1, endNbr, elem);
			} else {
				incNbrRec(i + 1, endNbr, elem);
			}
		}, speed);
	}
}

/*Function called on button click*/

// scroll check
function isInViewport(el) {
	const rect = el.getBoundingClientRect();
	console.log({
		top: rect.top,
		bottom: rect.bottom,
		left: rect.left,
		right: rect.right,
	});
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

const box = document.querySelector("#subsidiary");
let isFirst = true;
document.addEventListener(
	"scroll",
	function () {
		if (isInViewport(box) && isFirst) {
			incEltNbr(document.getElementById("vehiclesAvaliable"));
			incEltNbr(document.getElementById("subsidiary"));
			incEltNbr(document.getElementById("rentedVehicles"));
			incEltNbr(document.getElementById("clients"));
			isFirst = false;
			return;
		}
	},
	{
		passive: true,
	},
);
