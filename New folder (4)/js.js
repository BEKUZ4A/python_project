// 1. Tema tugmasini tanlaymiz (HTML’da <button id="themeToggle"> bo‘lsin)
const themeToggle = document.getElementById('theme-toggle');

// 2. Browser sessiyasida oldingi sozlamani tiklash (ixtiyoriy)
//    agar localStorage’da avval dark-mode bo‘lsa, uni qo‘shamiz
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// 3. Tugma bosilganda class’ni almashtirish
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // 4. Holatni saqlash (ixtiyoriy)
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }

    // 5. (ixtiyoriy) Tugma ichidagi ikonani o‘zgartirish
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? '☀️'  // dark-mode’dan chiqish uchun quyosh ikonkasi
        : '🌙'; // dark-mode’ga o‘tish uchun oy ikonkasi
});
