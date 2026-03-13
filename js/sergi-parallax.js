document.addEventListener("DOMContentLoaded", function() {
    const drawings = document.querySelectorAll('.drawing-container');
    
    window.addEventListener('scroll', function() {
        let scrollValue = window.scrollY;
        
        drawings.forEach((drawing, index) => {
            // Her resme farklı bir hız veriyoruz
            // 0.2 yavaş, 0.8 hızlı demek
            let speeds = [0.2, 0.6, 0.3, 0.7, 0.4];
            let speed = speeds[index];
            
            // Resimleri yukarı kaydır
            let yPos = -(scrollValue * speed);
            drawing.style.transform = `translateY(${yPos}px)`;
            
            // Ekrandan uzaklaştıkça hafifçe solma efekti
            let rect = drawing.getBoundingClientRect();
            if (rect.top < 0) {
                drawing.style.opacity = 1 - (Math.abs(rect.top) / 1000);
            } else {
                drawing.style.opacity = 1;
            }
        });
    });
});
