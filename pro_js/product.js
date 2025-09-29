// 공지사항의 첫번째 li를 선택하여
let productFirst = document.querySelector(".product-list>li:first-child");
console.log(productFirst)
let popup = document.querySelector(".popup-wrap1");
let closeBtn = document.querySelector(".popup1 .close-btn");
console.log(productFirst);
// 클릭하면
// 선택자.addEventListener("이벤트종류",할일)
productFirst.addEventListener("click", function () {
    popup.style.display = "block";
});

// .popup-wrap이 보이고
closeBtn.addEventListener("click", () => {
    popup.style["display"] = "none";
})
// .popup-wrap의 .close-btn을 클릭하면 popup-wrap 사라짐

let productSecond = document.querySelector(".product-list>li:nth-child(2)");
console.log(productSecond)
let popup2 = document.querySelector(".popup-wrap2");
let closeBtn2 = document.querySelector(".popup2 .close-btn");
console.log(productSecond);
productSecond.addEventListener("click", function () {
    popup2.style.display = "block";
});
closeBtn2.addEventListener("click", () => {
    popup2.style["display"] = "none";
})


let productThird = document.querySelector(".product-list>li:nth-child(3)");
console.log(productThird)
let popup3 = document.querySelector(".popup-wrap3");
let closeBtn3 = document.querySelector(".popup3 .close-btn");
console.log(productThird);
productThird.addEventListener("click", function () {
    popup3.style.display = "block";
});
closeBtn3.addEventListener("click", () => {
    popup3.style["display"] = "none";
})


let productFour = document.querySelector(".product-list>li:nth-child(4)");
console.log(productFour)
let popup4 = document.querySelector(".popup-wrap4");
let closeBtn4 = document.querySelector(".popup4 .close-btn");
console.log(productFour);
productFour.addEventListener("click", function () {
    popup4.style.display = "block";
});
closeBtn4.addEventListener("click", () => {
    popup4.style["display"] = "none";
})

let productFifth = document.querySelector(".product-list>li:nth-child(5)");
console.log(productFifth)
let popup5 = document.querySelector(".popup-wrap5");
let closeBtn5 = document.querySelector(".popup5 .close-btn");
console.log(productFifth);
productFifth.addEventListener("click", function () {
    popup5.style.display = "block";
});
closeBtn5.addEventListener("click", () => {
    popup5.style["display"] = "none";
})




let productSixth = document.querySelector(".product-list>li:nth-child(6)");
console.log(productSixth)
let popup6 = document.querySelector(".popup-wrap6");
let closeBtn6 = document.querySelector(".popup6 .close-btn");
console.log(productSixth);
productSixth.addEventListener("click", function () {
    popup6.style.display = "block";
});
closeBtn6.addEventListener("click", () => {
    popup6.style["display"] = "none";
})


let productSeventh = document.querySelector(".product-list>li:nth-child(7)");
console.log(productSeventh)
let popup7 = document.querySelector(".popup-wrap7");
let closeBtn7 = document.querySelector(".popup7 .close-btn");
console.log(productSeventh);
productSeventh.addEventListener("click", function () {
    popup7.style.display = "block";
});
closeBtn7.addEventListener("click", () => {
    popup7.style["display"] = "none";
})


let productEighth = document.querySelector(".product-list>li:nth-child(8)");
console.log(productEighth)
let popup8 = document.querySelector(".popup-wrap8");
let closeBtn8 = document.querySelector(".popup8 .close-btn");
console.log(productEighth);
productEighth.addEventListener("click", function () {
    popup8.style.display = "block";
});
closeBtn8.addEventListener("click", () => {
    popup8.style["display"] = "none";
})


let productNinth = document.querySelector(".product-list>li:nth-child(9)");
console.log(productNinth)
let popup9 = document.querySelector(".popup-wrap9");
let closeBtn9 = document.querySelector(".popup9 .close-btn");
console.log(productNinth);
productNinth.addEventListener("click", function () {
    popup9.style.display = "block";
});
closeBtn9.addEventListener("click", () => {
    popup9.style["display"] = "none";
})