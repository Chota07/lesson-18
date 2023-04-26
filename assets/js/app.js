const myClock = setInterval(()=>{
    const d=new Date()
    let h=d.getHours()
    let m=d.getMinutes()
    let s=d.getSeconds()
    let t=``
    if(h<=12){
        t=`AM`
    }
    if(h>12){
        t=`pm`
        h=h-12
    }
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;
    let clock=`${h}:${m}:${s} ${t}`
    document.getElementById("clock").innerText = clock;
    // setInterval(myClock, 1000);
}, 1000)


// slider

function mainSlider() {
	const slides = document.querySelectorAll(".slide");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");
    const slider = document.querySelector(".slider")
    let dots = document.querySelectorAll(".dot")
	let slideIntervalId = null;

	let activeIndex = 0;
    let activeDot = 0;

	function renderSlides() {
		slides.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("active");
			} else {
				el.classList.remove("active");
			}
		});
	}

    function renderDots() {
		dots.forEach((el, i) => {
			if (i === activeDot) {
				el.classList.add("dot_active");
			} else {
				el.classList.remove("dot_active");
			}
		});
	}

	function nextFn() {
		if (activeIndex === slides.length - 1) {
			activeIndex = 0;
		} else {
			activeIndex++;
		}

		// console.log(activeIndex);
		renderSlides();
	}

	function prevFn() {
		if (activeIndex === 0) {
			activeIndex = slides.length - 1;
		} else {
			activeIndex--;
		}

		renderSlides();

		// console.log(activeIndex);
	}

    function nextDot() {
		if (activeDot === dots.length - 1) {
			activeDot = 0;
		} else {
			activeDot++;
		}

		// console.log(activeIndex);
		renderSlides();
	}

	function prevDot() {
		if (activeDot === 0) {
			activeDot = dots.length - 1;
		} else {
			activeDot--;
		}

		renderSlides();

		// console.log(activeIndex);
	}

	// console.log(slides);

	renderSlides();
    renderDots();
    
	next.addEventListener("click", nextDot);
	prev.addEventListener("click", prevDot);

	slideIntervalId = setInterval(nextFn, 5000);
    function setInterval1(){
        slideIntervalId = setInterval(nextFn, 5000);
    }
    function clearInterval1(){
        clearInterval(slideIntervalId);
    }
    slider.addEventListener(`mouseenter`, clearInterval1)
    slider.addEventListener(`mouseleave`, setInterval1)



	document.addEventListener("keyup", (e) => {
		console.log(e.code);
		if (e.code === "ArrowRight") {
			nextFn();
		}
		if (e.code === "ArrowLeft") {
			prevFn();
		}
	});
}
mainSlider();


// countdown
const countdownDate = new Date("April 28, 2023 20:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;
  }
}, 1000);
