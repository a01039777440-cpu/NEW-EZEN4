// header 불러오기
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#header').innerHTML = data;

        /** 
         * 스크립트 
         */
        // GNB의 언어 서브 펼침 이벤트
        let lang = document.querySelector('.lang>a');
        let langText = document.querySelector('.lang-change');
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
        kor.addEventListener("click", function () {
            langText.textContent = "KOR"
        })
        eng.addEventListener("click", function () {
            langText.textContent = "ENG"
        })


        /** 
         * 메인메뉴 
         */

        let subMenu = document.querySelectorAll(".depth1");
        let mainMenus = document.querySelector(".main-menu")
        let mainLinks = document.querySelectorAll(".main-menu>li>a");
        hamBtn = document.querySelector(".ham-btn>a");
        closeBtn = document.querySelector(".closeBtn>a");

        // 윈도우의 사용가능 너비 저장
        let wWidth = window.innerWidth;
        // 윈도우의 사이즈 체크 함수
        function siteInit() {
            wWidth = window.innerWidth;
        }
        // 윈도우의 너비가 변경되면 위도우의 너비값 받아 오기
        window.addEventListener("resize", () => {
            let preWidth = wWidth;
            // 모바일 버전에서 메뉴를 펼친 상태에서 다른 버전으로 윈도우가 리사이즈되었다가
            // 다시 모바일버전으로 오면 펼쳐진 nav-wrap이 그대로 보임
            siteInit();

            if (preWidth > 1024 && wWidth <= 1024) {
                navWrap.style.left = "-120%"
            } else {
                navWrap.style.left = ""
            }
            subMenu.forEach(sub => {
                sub.style.height = "";
                sub.classList.remove("active");
            })
        })
        // mainMenu에 마우스가 들어가면 submenu가 나오도록
        mainMenus.addEventListener("mouseenter", () => {
            if (wWidth >= 1024) {
                subMenu.forEach(sub => {
                    sub.classList.add("active")
                })
            }
        })
        mainMenus.addEventListener("mouseleave", () => {
            if (wWidth >= 1024) {
                subMenu.forEach(sub => {
                    sub.classList.remove("active")
                })
            }
        })
        // 숨겨놓은 메뉴 전체
        let navWrap = document.querySelector(".nav-wrap")
        // hamBtn을 클릭하여 메뉴 나오게
        hamBtn.addEventListener("click", (e) => {
            e.preventDefault();
            navWrap.style.left = 0;
            navWrap.style.transition = "0.3s"
        })
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            navWrap.style.left = "-120%";
        })
        mainLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                if (wWidth < 1024) {
                    e.preventDefault();
                    let next = link.nextElementSibling;
                    // console.log(next);
                    // console.log(next.style.height);
                    // 서브가 열린 상태인지 체크하기
                    let isOpen = next.style.height && next.style.height !== "0px";
                    if (isOpen) {
                        next.style.height = 0;
                        link.classList.remove("active")
                    } else {
                        // 실제 서브의 높이값 구하기 숨겨진 높이도 구할수 있다
                        let subHight = next.scrollHeight;
                        // console.log(subHight);
                        next.style.height = subHight + "px";
                        link.classList.add("active")
                    }
                }
            })
        })

    })

// footer 불러오기
fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#footer').innerHTML = data;

        // 스크립트 

    })