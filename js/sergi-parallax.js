window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const drawings = document.querySelectorAll('.drawing-container');

    drawings.forEach((drawing, index) => {
        // Hızları belirginleştirdim
        const speeds = [0.15, 0.4, 0.2, 0.5, 0.25];
        const speed = speeds[index];
        
        // Başlangıç pozisyonlarını hesaba katan dikey hareket
        const yPos = -(scrollValue * speed);
        drawing.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});
