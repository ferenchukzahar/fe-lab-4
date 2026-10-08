// ===================================================
// ЗАВДАННЯ 1: ЗМІНА КОЛЬОРІВ ПРИ КЛІКАХ
// Варіант: (105 mod 10) + 1 = 6-й елемент та наступний 7-й
// ===================================================

// 1. 6-й елемент через getElementById()
const elem6 = document.getElementById("elem-6");

if (elem6) {
    elem6.addEventListener("click", () => {
        // Перемикання стилю при повторних кліках
        elem6.classList.toggle("highlight-style-1");
    });
}

// 2. 7-й елемент через querySelector()
const elem7 = document.querySelector(".elem-7");

if (elem7) {
    elem7.addEventListener("click", () => {
        // Перемикання стилю при повторних кліках
        elem7.classList.toggle("highlight-style-2");
    });
}

// ===================================================
// ЗАВДАННЯ 2: КЕРУВАННЯ ЗОБРАЖЕННЯМ (4 КНОПКИ)
// ===================================================

const container = document.getElementById("image-container");
const btnAdd = document.getElementById("btn-add");
const btnZoomIn = document.getElementById("btn-zoom-in");
const btnZoomOut = document.getElementById("btn-zoom-out");
const btnRemove = document.getElementById("btn-remove");

// 1. Додати зображення
btnAdd.addEventListener("click", () => {
    const existingImg = container.querySelector("img");
    
    // Якщо зображення немає — створюємо та додаємо
    if (!existingImg) {
        const link = document.createElement("a");
        link.href = "https://www.wien.gv.at/";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        const newImg = document.createElement("img");
        newImg.src = "vienna.jpg";
        newImg.alt = "Панорама міста Відень";
        newImg.width = 500;

        link.appendChild(newImg);
        container.appendChild(link);
    }
});

// 2. Збільшити зображення (+50px)
btnZoomIn.addEventListener("click", () => {
    const img = container.querySelector("img");
    if (img) {
        img.width += 50;
    }
});

// 3. Зменшити зображення (-50px, але не менше 100px)
btnZoomOut.addEventListener("click", () => {
    const img = container.querySelector("img");
    if (img && img.width > 100) {
        img.width -= 50;
    }
});

// 4. Видалити зображення
btnRemove.addEventListener("click", () => {
    const linkOrImg = container.querySelector("a") || container.querySelector("img");
    if (linkOrImg) {
        linkOrImg.remove();
    }
});