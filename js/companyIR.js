         function updateDateTime() {
        let today = new Date();
        let date = today.toLocaleDateString('ko-KR');
        let time = today.toLocaleTimeString('ko-KR');
        document.querySelector('.header-date').textContent = `${date} ${time} 기준`;
    }
    
    
    updateDateTime();
    setInterval(updateDateTime, 1000);

  