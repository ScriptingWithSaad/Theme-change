
document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', () => {
        
        document.querySelectorAll('.theme-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Change background color
        document.body.style.backgroundColor = button.dataset.color;

        
        const isDark = ['#18181b', '#2563eb', '#9333ea', '#059669', '#d97706'].includes(button.dataset.color);
        document.body.style.color = isDark ? '#ffffff' : '#000000';
    });
});
