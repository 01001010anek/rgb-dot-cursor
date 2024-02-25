document.addEventListener('DOMContentLoaded', function() {
    const aura = document.querySelector('.aura');
    
    document.addEventListener('mousemove', function(e) {
        aura.style.left = e.clientX + 'px';
        aura.style.top = e.clientY + 'px';
    });
});
