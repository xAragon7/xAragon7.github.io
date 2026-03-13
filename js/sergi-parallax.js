window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const drawings = document.querySelectorAll('.drawing-container');
    const bigTitle = document.querySelector('.big-title');

    // 1. Yazının Fade-Out Efekti (Sayfayı kaydırdıkça silinir)
    // 1200px kaydırmada tamamen yok olur
    let opacity = 1 - (scrollValue / 1200);
    if (opacity < 0) opacity = 0;
    if (bigTitle) {
        bigTitle.style.opacity = opacity;
    }

    // 2. Resimlerin Parallax Hareketi
    drawings.forEach((drawing, index) => {
        // Hızları birbirinden farklı yapıyoruz ki derinlik hissi artsın
        // Öndekiler (1 ve 4) daha hızlı kaysın
        const speeds = [0.25, 0.6, 0.35, 0.7, 0.45];
        const speed = speeds[index];
        
        const yPos = -(scrollValue * speed);
        drawing.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});
