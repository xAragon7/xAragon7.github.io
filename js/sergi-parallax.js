window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const drawings = document.querySelectorAll('.drawing-container');
    const stickyText = document.getElementById('sticky-text');

    // 1. Yazının Şeffaflaşması (Kaydırdıkça yok olur)
    // 1500px sonra tamamen yok olacak şekilde ayarladım
    let textOpacity = 1 - (scrollValue / 1500);
    if (textOpacity < 0) textOpacity = 0;
    stickyText.style.opacity = textOpacity;

    // 2. Resimlerin Parallax Hareketi
    drawings.forEach((drawing, index) => {
        const speeds = [0.2, 0.5, 0.3, 0.6, 0.4];
        const speed = speeds[index];
        const yPos = -(scrollValue * speed);
        drawing.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});
