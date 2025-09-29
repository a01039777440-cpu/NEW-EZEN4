

// 메인 퀵메뉴 클래스 바꾸기
let quickBtns = document.querySelectorAll('.aside-menu>li');
quickBtns.forEach(qBtn => {
    qBtn.addEventListener('click', () => {
        quickBtns.forEach(q => q.classList.remove('active'))
        qBtn.classList.add('active')
    })
})

// 최상단 슬라이더
var swiper = new Swiper(".main-slider", {
    effect:"fade",
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

// 프로모션 비디오 컨트롤
let mainVideo = document.querySelector(".promotion-movie video");
let controlList = document.querySelector(".video-control-btn-wrap");
let bigBtn = document.querySelector(".bigPlayBtn");
let playPause = document.querySelector(".playPause");
let stopBtn = document.querySelector(".stop-btn");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

bigBtn.addEventListener("click", function () {
        mainVideo.play(),
        this.style.display="none",
        controlList.style.display="block"
        playPause.classList.add("active");
})
mainVideo.addEventListener("ended", function () {
    bigBtn.style.display="block",
    controlList.style.display="none"
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