document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".slide-effect");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("show");
        }, index * 300);
    });
});

function toggleArticles(category) {
    const articles = document.getElementById("post-articles");
    articles.style.display = "block";
    articles.innerHTML = `<h2>Categoria ${category}</h2><p>Contenuto relativo alla categoria ${category}.</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.macrocontainer');
    
    containers.forEach(container => {
        container.addEventListener('click', function() {
            const articles = container.querySelector('.articles');
            articles.style.display = (articles.style.display === 'none' || articles.style.display === '') ? 'block' : 'none';
        });
    });
});

function toggleArticles(categoryNumber) {
    // Nascondi tutte le categorie
    const allCategories = document.querySelectorAll('.category');
    allCategories.forEach(category => {
        category.style.display = 'none';
    });

    // Mostra la categoria selezionata
    const selectedCategory = document.getElementById('category-' + categoryNumber);
    if (selectedCategory) {
        selectedCategory.style.display = selectedCategory.style.display === 'none' ? 'block' : 'none';
    }
}

document.querySelectorAll('.scroll-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});