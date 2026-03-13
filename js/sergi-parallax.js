document.addEventListener("DOMContentLoaded", function() {
    const drawings = document.querySelectorAll('.drawing-container');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        drawings.forEach(function(drawing, index) {
            // Her resim için farklı hız faktörü (Hızları el_1'den el_5'e değişir)
            let speeds = [0.2, 0.5, 0.15, 0.6, 0.3];
            let speed = speeds[index];
            
            let yPos = -(scrollTop * speed);
            drawing.style.transform = `translateY(${yPos}px)`;
            
            // Fade-out efekti: Resim ekrandan uzaklaştıkça şeffaflaşır
            let offset = drawing.getBoundingClientRect().top;
            let opacity = 1 - (Math.abs(offset) / window.innerHeight);
            drawing.style.opacity = Math.max(0, Math.min(1, opacity + 0.5));
        });
    });
});
