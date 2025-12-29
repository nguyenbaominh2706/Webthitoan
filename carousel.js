// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel .list .item');
    const thumbnails = document.querySelectorAll('.thumbnail .item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    let currentIndex = 0;
    
    // Danh sách URL tương ứng với mỗi tính năng
    const featureLinks = [
        'chatbot.html',        // Tính năng 1: Giải toán với AI Chatbot
        'bandotoanhoc.html',   // Tính năng 2: Tìm kiếm nhà toán học
        'trochoitoanhoc.html', // Tính năng 3: Trò chơi toán học
        'thionline.html'       // Tính năng 4: Bài thi online
    ];
    
    function updateCarousel() {
        // Hide all items
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.zIndex = '0';
        });
        
        // Show current item
        items[currentIndex].style.opacity = '1';
        items[currentIndex].style.zIndex = '1';
        
        // Update thumbnails
        thumbnails.forEach((thumb, index) => {
            thumb.classList.remove('active');
            if (index === currentIndex) {
                thumb.classList.add('active');
                thumb.style.transform = 'scale(1.1)';
                thumb.style.transition = 'transform 0.3s';
            } else {
                thumb.style.transform = 'scale(1)';
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // Event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Thumbnail click events - chuyển sang trang tính năng tương ứng
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // Chuyển hướng đến trang tính năng
            window.location.href = featureLinks[index];
        });
        
        // Thêm hiệu ứng hover để người dùng biết có thể click
        thumb.style.cursor = 'pointer';
    });
    
    // Auto slide
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    // Initialize
    updateCarousel();
});
