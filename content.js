// ฟังก์ชันตรวจสอบว่าองค์ประกอบอยู่ในมุมมองหรือไม่
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

// ฟังก์ชันเพิ่มคลาส 'show' เมื่อองค์ประกอบเข้ามาในมุมมอง
function handleScroll() {
    const elements = document.querySelectorAll('.moreskill, .topbody-content');
    elements.forEach((element) => {
        if (isElementInView(element)) {
            element.classList.add('show');
        }
    });
}

// ตรวจสอบทุกครั้งที่เลื่อนหน้าจอ
window.addEventListener('scroll', handleScroll);



