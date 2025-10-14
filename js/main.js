
/**  최상단 슬라이더 */
var swiper = new Swiper(".main-slider", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let sliderImg = document.querySelectorAll(".slider-list>li");
const imagePaths = [
    "./images/main-slid-1.png",
    "./images/main-slid-2.png",
    "./images/main-slid-3.png",
    "./images/main-slid-4.png"
];
sliderImg.forEach((img, index) => {
    const imageIndex = index % imagePaths.length;
    img.style.backgroundImage = `url('${imagePaths[imageIndex]}')`;
})

/** product */
var swiper2 = new Swiper(".product", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {

        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: true,
        },
    },
});

/**  프로모션 비디오 컨트롤 */
let mainVideo = document.querySelector(".promotion-movie video");
let controlList = document.querySelector(".video-control-btn-wrap");
let bigBtn = document.querySelector(".bigPlayBtn");
let playPause = document.querySelector(".playPause");
let stopBtn = document.querySelector(".stop-btn");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

bigBtn.addEventListener("click", function () {
    mainVideo.play(),
        this.style.display = "none",
        controlList.style.display = "block"
    playPause.classList.add("active");
})
mainVideo.addEventListener("ended", function () {
    bigBtn.style.display = "block",
        controlList.style.display = "none"
    this.currentTime = 0;
})
playPause.addEventListener("click", function () {
    if (mainVideo.paused) {
        mainVideo.play(),
            this.classList.add("active");
    } else {
        mainVideo.pause(),
            this.classList.remove("active")
    }
})
stopBtn.addEventListener("click", function () {
    mainVideo.pause();
    mainVideo.currentTime = 0;
    playPause.classList.remove("active");
})
prevBtn.addEventListener("click", function () {
    mainVideo.currentTime -= 2;
})
nextBtn.addEventListener("click", function () {
    mainVideo.currentTime += 2;
})

let currentIndex = 0;

let quickBtns = document.querySelectorAll('.aside-menu>li>a');
let wheelSections = document.querySelectorAll("section");
let wheelFooter = document.querySelector("footer");
let moveAreas = [...wheelSections, wheelFooter];

/** 공통 스크롤 함수 */
function scrollToSection(index) {
    if (!moveAreas[index]) return;

    currentIndex = index;
    let topPos = moveAreas[index].getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: topPos,
        behavior: "smooth"
    });

    quickBtns.forEach(btn => btn.classList.remove('active'));
    if (quickBtns[index]) {
        quickBtns[index].classList.add('active');
    }
}

/** 버튼 클릭 시 */
quickBtns.forEach((qBtn, i) => {
    qBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(i);
    });
});

// 첫 번째 버튼 활성화
if (quickBtns[0]) quickBtns[0].classList.add('active');

/** 마우스 휠 시 */
moveAreas.forEach((area, i, arr) => {
    area.addEventListener("wheel", (e) => {
        e.preventDefault();

        let delta = e.deltaY || -e.wheelDelta;

        if (delta > 0 && i < arr.length - 1) {
            scrollToSection(i + 1);
        } else if (delta < 0 && i > 0) {
            scrollToSection(i - 1);
        }
    });
});
