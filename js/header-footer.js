// header 불러오기
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#header').innerHTML = data;

        /** 
         * 스크립트 
        */
        // GNB의 언어 서브 펼침 이벤트
        lang = document.querySelector('.lang>a');
        langText = document.querySelector('.lang-change');
        lang.addEventListener('click', () => {
            lang.classList.toggle('active');
        })
        let langLi = document.querySelectorAll('.lang-list>li');
        let kor = document.querySelector(".kor");
        let eng = document.querySelector(".eng");
        langLi.forEach(item => {
            item.addEventListener('click', function () {
                lang.classList.remove('active');
            });
        });
        kor.addEventListener("click", function(){
            langText.textContent="KOR"
        })
        eng.addEventListener("click", function(){
            langText.textContent="ENG"
        })
        // 햄버거 버튼
        let hamBtn = document.querySelector('.ham-btn');
        hamBtn.addEventListener("click", function(){
            nav.style.display="block"
            nav.style.left="0"
        })
        let closeBtn = document.querySelector('.closeBtn');
        let nav = document.querySelector('nav');
        closeBtn.addEventListener("click", function(e){
            console.log(closeBtn)
            nav.style.display="none"
        })


    })

// footer 불러오기
fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#footer').innerHTML = data;

        // 스크립트 

    })