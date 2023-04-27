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
}, 1000)

// slider
function mainSlider() {
	const slides = document.querySelectorAll(".slide");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");
    const slider = document.querySelector(".slider")
	let slideIntervalId = null;

	let activeIndex = 0;

	function renderSlides() {
		slides.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("active");
			} else {
				el.classList.remove("active");
			}
		});
	}
	function nextFn() {
		if (activeIndex === slides.length - 1) {
			activeIndex = 0;
		} else {
			activeIndex++;
		}
		renderSlides();
	}

	function prevFn() {
		if (activeIndex === 0) {
			activeIndex = slides.length - 1;
		} else {
			activeIndex--;
		}
		renderSlides();
	}

	renderSlides();
    
	next.addEventListener("click", nextFn);
	prev.addEventListener("click", prevFn);

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

	const firstDotBtn = document.querySelectorAll(".first-dot");
	const firstSlide = document.getElementById("first");

	const secondDotBtn = document.querySelectorAll(".second-dot");
	const secondSlide = document.getElementById("second");

	const thirdDotBtn = document.querySelectorAll(".third-dot");
	const thirdSlide = document.getElementById("third");

	const fourthDotBtn = document.querySelectorAll(".fourth-dot");
	const fourthSlide = document.getElementById("fourth");

	const fifthDotBtn = document.querySelectorAll(".fifth-dot");
	const fifthSlide = document.getElementById("fifth");

	firstDotBtn.forEach((firstDotBtn) => {
		firstDotBtn.addEventListener("click", () => {
			slides.forEach((slide) => {
				slide.classList.remove("active");
			  });
			firstSlide.classList.add("active")
		  });
	})
	secondDotBtn.forEach(secondDotBtn => {
		secondDotBtn.addEventListener("click", () => {
			slides.forEach((slide) => {
				slide.classList.remove("active");
			  });
			secondSlide.classList.add("active");
		  });
	});
	thirdDotBtn.forEach(thirdDotBtn => {
		thirdDotBtn.addEventListener("click", () => {
			slides.forEach((slide) => {
				slide.classList.remove("active");
			  });
			thirdSlide.classList.add("active");
		  });
	});
	fourthDotBtn.forEach(fourthDotBtn => {
		fourthDotBtn.addEventListener("click", () => {
			slides.forEach((slide) => {
				slide.classList.remove("active");
			  });
			fourthSlide.classList.add("active");
		  });
	});
	fifthDotBtn.forEach(fifthDotBtn => {
		fifthDotBtn.addEventListener("click", () => {
			slides.forEach((slide) => {
				slide.classList.remove("active");
			  });
			fifthSlide.classList.add("active");
		  });
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
