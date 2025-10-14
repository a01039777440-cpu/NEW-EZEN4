
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
    spaceBetween: 30,
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
            spaceBetween: 40,
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

// let currentIndex = 0;
// /** Aside 바로가기 버튼 */
// // let qMenus = document.querySelectorAll(".aside-menu>li>a");
// // let qSections = document.querySelectorAll("section");
// // qMenus.forEach((m, i) => {
// //     m.addEventListener("click", (e) => {
// //         e.preventDefault();

// //         currentIndex = i;
// //         // 섹션의 위치값
// //         let topPos = qSections[i].offsetTop;
// //         console.log(topPos);
// //         // 이동시기키
// //         window.scrollTo({
// //             // 위치
// //             top: topPos,
// //             // 동작
// //             behavior: "smooth"
// //         })
// //     })
// // })

// /**  메인 퀵메뉴 클래스 바꾸기 */
// let quickBtns = document.querySelectorAll('.aside-menu>li>a');
// quickBtns.forEach((qBtn, i, arr) => {
//     qBtn.addEventListener('click', (e) => {
//         console.log(qBtn, i, arr)
//         quickBtns.forEach(q => q.classList.remove('active'));
//         qBtn.classList.add('active');
//         currentIndex = i;
//         // 섹션의 위치값
//         let topPos = moveAreas[i].getBoundingClientRect().top + window.scrollY;
//         console.log(topPos);
//         // 이동시기키
//         window.scrollTo({
//             // 위치
//             top: topPos,
//             // 동작
//             behavior: "smooth"
//         })
//     })
//     arr[0].classList.add('active');
// })

// /**  메인화면 마우스휠로 vh기준 옮기기 */
// // 마우스휠 이벤트 발생경우 스크롤 위치 
// let wheelMouseTop = 0; // 섹션영역 저장 변수
// let wheelSections = document.querySelectorAll("section"); // 풋터영역 저장 변수
// let wheelFooter = document.querySelector("footer"); // 무브위치 Array 
// let moveAreas = [...wheelSections, wheelFooter];
// // console.log(moveAreas);
// moveAreas.forEach((area, i, arr) => {
//     console.log(area)
//     console.log(area.offsetTop);
//     console.log(area.getBoundingClientRect().top);
//     area.addEventListener("wheel", (e) => {
//         // console.log(e)
//         currentIndex = i;
//         let delta = e.deltaY || -e.wheelDelta;
//         if (delta > 0) {
//             if (arr[currentIndex + 1]) {
//                 // moveTop = arr[i + 1].offsetTop;
//                 moveTop = arr[currentIndex + 1].getBoundingClientRect().top + window.scrollY;
//             }
//         } else {
//             if (arr[currentIndex - 1]) {
//                 // moveTop = arr[i - 1].offsetTop;
//                 moveTop = arr[currentIndex - 1].getBoundingClientRect().top + window.scrollY;
//             }
//         }
//         window.scrollTo({
//             top: moveTop,
//             behavior: "smooth"
//         })


//         quickBtns.forEach(q => q.classList.remove('active'));
//         if (quickBtns[currentIndex]) {
//             quickBtns[currentIndex].classList.add('active');
//         }
//         console.log(currentIndex);
//     })
// })

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
