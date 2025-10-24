const booksData = [
    {
      id: 1,
      title: "Vova Sangguyu",
      author: "Suryami",
      category: "Legenda",
      year: 1922,
      cover: "./Cover Buku/Legenda.png",
      description: "Novel klasik Indonesia tentang cinta Siti Nurbaya dan Samsulbahri yang terhalang adat serta kepentingan keluarga.",
      link: "https://drive.google.com/file/d/10xS9wCxQmS2JHjlEHYNO3gcMT24CNNIt/view?usp=drivesdk"
    },
    {
      id: 2,
      title: "Layar Terkembang",
      author: "Sutan Takdir Alisjahbana",
      category: "Novel",
      year: 1936,
      cover: "./Cover Buku/Novel.png",
      description: "Kisah keluarga Indonesia yang menggambarkan semangat modernitas, pendidikan, dan perubahan sosial.",
      link: "https://archive.org/details/layar-terkembang-sutan-takdir-alisjahbana"
    },
    {
      id: 3,
      title: "Tenggelamnya Kapal Van der Wijck",
      author: "Hamka",
      category: "Novel",
      year: 1938,
      cover: "./Cover Buku/Novel.png",
      description: "Tragedi cinta antara Zainuddin dan Hayati yang terhalang perbedaan adat dan status sosial.",
      link: "https://archive.org/details/tenggelamnya-kapal-van-der-wijck"
    },
    {
      id: 4,
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      category: "Novel",
      year: 1980,
      cover: "./Cover Buku/Novel.png",
      description: "Novel pertama Tetralogi Buru, mengikuti kisah Minke di era kolonial Hindia Belanda.",
      link: "https://archive.org/details/bumi-manusia-pramoedya-ananta-toer"
    },
    {
      id: 5,
      title: "Jejak Langkah",
      author: "Pramoedya Ananta Toer",
      category: "Novel",
      year: 1985,
      cover: "./Cover Buku/Novel.png",
      description: "Kisah Minke dalam perjuangan pergerakan nasional melawan kolonialisme.",
      link: "https://archive.org/details/jejak-langkah-pramoedya-ananta-toer"
    },
    {
      id: 6,
      title: "Cerita dari Blora",
      author: "Seno Gumira Ajidarma",
      category: "Cerpen",
      year: 1990,
      cover: "./Cover Buku/Cerpen.png",
      description: "Kumpulan cerpen berlatar Blora yang menyoroti kehidupan rakyat kecil dengan sentuhan humanis.",
      link: "https://archive.org/details/cerita-dari-blora"
    },
    {
      id: 7,
      title: "Supernova: Ksatria, Putri, dan Bintang Jatuh",
      author: "Dee Lestari",
      category: "Fiksi Ilmiah",
      year: 2001,
      cover: "./Cover Buku/Fiksi ilmiah.png",
      description: "Novel spekulatif yang memadukan sains, filsafat, dan kisah percintaan kontemporer.",
      link: "https://archive.org/details/supernova-ksatria-putri-dan-bintang-jatuh"
    },
    {
      id: 8,
      title: "Orang-orang Proyek",
      author: "Ahmad Tohari",
      category: "Novel",
      year: 1990,
      cover: "./Cover Buku/Novel.png",
      description: "Kisah masyarakat desa yang menghadapi konflik sosial akibat proyek pembangunan.",
      link: "https://archive.org/details/orang-orang-proyek"
    },
    {
      id: 9,
      title: "Gadis Pantai",
      author: "Pramoedya Ananta Toer",
      category: "Novel",
      year: 1985,
      cover: "./Cover Buku/Novel.png",
      description: "Tragedi seorang gadis desa yang dipaksa menikah dengan bangsawan; kritik sosial terhadap patriarki.",
      link: "https://archive.org/details/gadis-pantai"
    },
    {
      id: 10,
      title: "Saman",
      author: "Ayu Utami",
      category: "Novel",
      year: 1998,
      cover: "./Cover Buku/Novel.png",
      description: "Novel kontroversial yang mengangkat isu seksualitas, politik, dan perlawanan sosial.",
      link: "https://archive.org/details/saman-ayu-utami"
    },
    {
      id: 11,
      title: "Legenda Roro Jonggrang",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Asal-usul Candi Prambanan; kisah cinta, tipu daya, dan kutukan menjadi batu.",
      link: "https://digilib.uns.ac.id/dokumen/detail/100263/Legenda-Roro-Jonggrang"
    },
    {
      id: 12,
      title: "Legenda Danau Toba",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Legenda asal-usul Danau Toba dan Pulau Samosir dari tanah Batak.",
      link: "https://edeposit.perpusnas.go.id/collection/legenda-danau-toba"
    },
    {
      id: 13,
      title: "Hikayat Hang Tuah",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Kisah pahlawan Melayu Hang Tuah yang penuh kesetiaan dan keberanian.",
      link: "https://archive.org/details/hikayat-hang-tuah"
    },
    {
      id: 14,
      title: "Mahabharata (terjemahan Indonesia)",
      author: "Anonim",
      category: "Legenda",
      year: 1900,
      cover: "./Cover Buku/Legenda.png",
      description: "Epos besar India tentang perang Pandawa dan Kurawa, sarat ajaran moral dan dharma.",
      link: "https://archive.org/details/mahabharata-indonesia"
    },
    {
      id: 15,
      title: "Ramayana (terjemahan Indonesia)",
      author: "Anonim",
      category: "Legenda",
      year: 1900,
      cover: "./Cover Buku/Legenda.png",
      description: "Kisah Rama, Sinta, dan Rahwana yang penuh ajaran moralitas dan pengabdian.",
      link: "https://archive.org/details/ramayana-indonesia"
    },
    {
      id: 16,
      title: "Ensiklopedia Anak: Dunia Binatang",
      author: "Anonim",
      category: "Ensiklopedia",
      year: 1990,
      cover: "./Cover Buku/Ensiklopedia.png",
      description: "Ensiklopedia populer untuk anak-anak berisi pengetahuan tentang binatang.",
      link: "https://archive.org/details/ensiklopedia-anak-binatang"
    },
    {
      id: 17,
      title: "Ensiklopedia Umum",
      author: "Anonim",
      category: "Ensiklopedia",
      year: 1985,
      cover: "./Cover Buku/Ensiklopedia.png",
      description: "Ringkasan pengetahuan umum lintas bidang dalam satu buku ensiklopedia.",
      link: "https://archive.org/details/ensiklopedia-umum"
    },
    {
      id: 18,
      title: "The Time Machine",
      author: "H. G. Wells",
      category: "Fiksi Ilmiah",
      year: 1895,
      cover: "./Cover Buku/Fiksi ilmiah.png",
      description: "Karya klasik fiksi ilmiah tentang mesin waktu dan masa depan umat manusia.",
      link: "https://www.gutenberg.org/ebooks/35.pdf"
    },
    {
      id: 19,
      title: "1984",
      author: "George Orwell",
      category: "Fiksi Ilmiah",
      year: 1949,
      cover: "./Cover Buku/Fiksi ilmiah.png",
      description: "Novel distopia tentang totalitarianisme, pengawasan massal, dan kontrol pikiran.",
      link: "https://archive.org/details/1984-george-orwell"
    },
    {
      id: 20,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      category: "Fiksi Ilmiah",
      year: 1953,
      cover: "./Cover Buku/Fiksi ilmiah.png",
      description: "Novel distopia tentang masyarakat yang melarang membaca dan membakar buku.",
      link: "https://archive.org/details/fahrenheit-451-ray-bradbury"
    },
    {
      id: 21,
      title: "War of the Worlds",
      author: "H. G. Wells",
      category: "Fiksi Ilmiah",
      year: 1898,
      cover: "./Cover Buku/Fiksi ilmiah.png",
      description: "Kisah invasi makhluk Mars ke bumi, dengan kritik sosial kolonialisme.",
      link: "https://www.gutenberg.org/ebooks/36.pdf"
    },
    {
      id: 22,
      title: "Malin Kundang",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Legenda Sumatera Barat tentang anak durhaka yang dikutuk menjadi batu.",
      link: "https://commons.wikimedia.org/wiki/File%3ASi_Malin_Kundang_by_Dahsinar.pdf"
    },
    {
      id: 23,
      title: "Timun Mas",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Cerita rakyat Jawa tentang gadis kecil yang melawan raksasa dengan kecerdikan.",
      link: "https://edeposit.perpusnas.go.id/collection/kisah-timun-mas-sumber-elektronis-cerita-rakyat-indonesia-jjawa/92584"
    },
    {
      id: 24,
      title: "Jaka Tarub",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Legenda Jawa tentang Jaka Tarub yang mencuri selendang bidadari Nawang Wulan.",
      link: "https://edeposit.perpusnas.go.id/collection/jaka-tarub-nawang-wulan-dan-kisah-kisah-lainnya-sumber-elektronis/7335"
    },
    {
      id: 25,
      title: "Si Pitung",
      author: "Anonim",
      category: "Legenda",
      year: 1700,
      cover: "./Cover Buku/Legenda.png",
      description: "Legenda Betawi tentang Si Pitung, pahlawan rakyat yang melawan penindasan kolonial.",
      link: "https://archive.org/details/si-pitung-legenda"
    },
    {
        id: 26,
        title: "La Galigo (Ringkasan)",
        author: "Anonim",
        category: "Legenda",
        year: 1800,
        cover: "./Cover Buku/Legenda.png",
        description: "Epos Bugis kuno yang dikenal sebagai salah satu karya sastra terpanjang di dunia.",
        link: "https://archive.org/details/lagaligo-ringkasan"
      },
      {
        id: 27,
        title: "The Legend of Tangkuban Perahu",
        author: "Anonim",
        category: "Legenda",
        year: 1700,
        cover: "./Cover Buku/Legenda.png",
        description: "Cerita rakyat Sunda tentang Sangkuriang dan asal-usul Gunung Tangkuban Perahu.",
        link: "https://edeposit.perpusnas.go.id/collection/tangkuban-perahu"
      },
      {
        id: 28,
        title: "Legenda Banyuwangi",
        author: "Anonim",
        category: "Legenda",
        year: 1700,
        cover: "./Cover Buku/Legenda.png",
        description: "Asal-usul nama Banyuwangi, kisah pengorbanan Sri Tanjung dan kesetiaan.",
        link: "https://edeposit.perpusnas.go.id/collection/legenda-banyuwangi"
      },
      {
        id: 29,
        title: "Legenda Gunung Toba",
        author: "Anonim",
        category: "Legenda",
        year: 1700,
        cover: "./Cover Buku/Legenda.png",
        description: "Cerita rakyat Sumatera Utara tentang asal mula Gunung Toba dan air bah.",
        link: "https://archive.org/details/legenda-gunung-toba"
      },
      {
        id: 30,
        title: "Ensiklopedia Sejarah Dunia",
        author: "Anonim",
        category: "Ensiklopedia",
        year: 1995,
        cover: "./Cover Buku/Ensiklopedia.png",
        description: "Ensiklopedia yang merangkum peristiwa penting sejarah dunia dari zaman kuno hingga modern.",
        link: "https://archive.org/details/ensiklopedia-sejarah-dunia"
      },
      {
        id: 31,
        title: "Ensiklopedia Sains",
        author: "Anonim",
        category: "Ensiklopedia",
        year: 2000,
        cover: "./Cover Buku/Ensiklopedia.png",
        description: "Ensiklopedia populer berisi pengetahuan dasar tentang sains dan teknologi.",
        link: "https://archive.org/details/ensiklopedia-sains"
      },
      {
        id: 32,
        title: "Ensiklopedia Indonesia",
        author: "Anonim",
        category: "Ensiklopedia",
        year: 1980,
        cover: "./Cover Buku/Ensiklopedia.png",
        description: "Koleksi pengetahuan umum tentang sejarah, budaya, dan tokoh Indonesia.",
        link: "https://archive.org/details/ensiklopedia-indonesia"
      },
      {
        id: 33,
        title: "Ensiklopedia Anak: Alam Semesta",
        author: "Anonim",
        category: "Ensiklopedia",
        year: 1992,
        cover: "./Cover Buku/Ensiklopedia.png",
        description: "Ensiklopedia anak-anak dengan ilustrasi tentang bintang, planet, dan jagat raya.",
        link: "https://archive.org/details/ensiklopedia-anak-alam-semesta"
      },
      {
        id: 34,
        title: "Ensiklopedia Flora dan Fauna",
        author: "Anonim",
        category: "Ensiklopedia",
        year: 1994,
        cover: "./Cover Buku/Ensiklopedia.png",
        description: "Buku referensi ensiklopedis tentang berbagai tumbuhan dan hewan.",
        link: "https://archive.org/details/ensiklopedia-flora-fauna"
      },
      {
        id: 35,
        title: "Animal Farm",
        author: "George Orwell",
        category: "Novel",
        year: 1945,
        cover: "./Cover Buku/Novel.png",
        description: "Alegori politik tentang hewan di sebuah peternakan yang memberontak melawan manusia.",
        link: "https://www.gutenberg.org/cache/epub/619/pg619-images.html"
      },
      {
        id: 36,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Novel",
        year: 1813,
        cover: "./Cover Buku/Novel.png",
        description: "Kisah cinta klasik Elizabeth Bennet dan Mr. Darcy dalam masyarakat Inggris abad ke-19.",
        link: "https://www.gutenberg.org/ebooks/1342.pdf"
      },
      {
        id: 37,
        title: "Dracula",
        author: "Bram Stoker",
        category: "Novel",
        year: 1897,
        cover: "./Cover Buku/Novel.png",
        description: "Novel gothic legendaris tentang Count Dracula dan vampirisme.",
        link: "https://www.gutenberg.org/ebooks/345.pdf"
      },
      {
        id: 38,
        title: "Frankenstein",
        author: "Mary Shelley",
        category: "Novel",
        year: 1818,
        cover: "./Cover Buku/Novel.png",
        description: "Kisah penciptaan monster oleh Victor Frankenstein; awal mula fiksi ilmiah dan horor modern.",
        link: "https://www.gutenberg.org/ebooks/84.pdf"
      },
      {
        id: 39,
        title: "Moby Dick",
        author: "Herman Melville",
        category: "Novel",
        year: 1851,
        cover: "./Cover Buku/Novel.png",
        description: "Perburuan kapten Ahab terhadap paus putih legendaris, Moby Dick.",
        link: "https://www.gutenberg.org/ebooks/2701.pdf"
      },
      {
        id: 40,
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        category: "Cerpen",
        year: 1892,
        cover: "./Cover Buku/Cerpen.png",
        description: "Kumpulan cerita pendek detektif legendaris Sherlock Holmes dan Dr. Watson.",
        link: "https://www.gutenberg.org/ebooks/1661.pdf"
      },
      {
        id: 41,
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        category: "Novel",
        year: 1887,
        cover: "./Cover Buku/Novel.png",
        description: "Kasus pertama Sherlock Holmes yang memperkenalkan metode deduktif.",
        link: "https://www.gutenberg.org/ebooks/244.pdf"
      },
      {
        id: 42,
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        category: "Cerpen",
        year: 1843,
        cover: "./Cover Buku/Cerpen.png",
        description: "Cerpen klasik gothic tentang rasa bersalah dan kegilaan.",
        link: "https://www.gutenberg.org/ebooks/2148.pdf"
      },
      {
        id: 43,
        title: "The Fall of the House of Usher",
        author: "Edgar Allan Poe",
        category: "Cerpen",
        year: 1839,
        cover: "./Cover Buku/Cerpen.png",
        description: "Cerpen horor gothic tentang kehancuran rumah keluarga Usher.",
        link: "https://www.gutenberg.org/ebooks/932.pdf"
      },
      {
        id: 44,
        title: "The Raven",
        author: "Edgar Allan Poe",
        category: "Puisi",
        year: 1845,
        cover: "./Cover Buku/Cerpen.png",
        description: "Puisi naratif terkenal tentang kehilangan dan misteri.",
        link: "https://www.gutenberg.org/ebooks/1065.pdf"
      },
      {
        id: 45,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        category: "Novel",
        year: 1943,
        cover: "./Cover Buku/Novel.png",
        description: "Dongeng filosofis tentang seorang pangeran kecil yang berkelana antar planet.",
        link: "https://www.planetebook.com/free-ebooks/the-little-prince.pdf"
      },
      {
        id: 46,
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        category: "Fiksi Ilmiah",
        year: 1864,
        cover: "./Cover Buku/Fiksi ilmiah.png",
        description: "Petualangan Profesor Lidenbrock dan Axel menuju pusat bumi melalui gua vulkanik.",
        link: "https://www.gutenberg.org/ebooks/18857.pdf"
      },
      {
        id: 47,
        title: "Around the World in 80 Days",
        author: "Jules Verne",
        category: "Novel",
        year: 1873,
        cover: "./Cover Buku/Novel.png",
        description: "Kisah Phileas Fogg yang bertaruh mengelilingi dunia dalam 80 hari.",
        link: "https://www.gutenberg.org/ebooks/103.pdf"
      },
      {
        id: 48,
        title: "Twenty Thousand Leagues Under the Sea",
        author: "Jules Verne",
        category: "Fiksi Ilmiah",
        year: 1870,
        cover: "./Cover Buku/Fiksi ilmiah.png",
        description: "Petualangan Kapten Nemo di kapal selam Nautilus menjelajahi laut dalam.",
        link: "https://www.gutenberg.org/ebooks/164.pdf"
      },
      {
        id: 49,
        title: "The Complete Works of Edgar Allan Poe (selected)",
        author: "Edgar Allan Poe",
        category: "Cerpen",
        year: 1845,
        cover: "./Cover Buku/Cerpen.png",
        description: "Kumpulan cerita pendek gothic klasik Poe.",
        link: "https://www.gutenberg.org/ebooks/2147.pdf"
      },
      {
        id: 50,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        category: "Novel",
        year: 1605,
        cover: "./Cover Buku/Novel.png",
        description: "Kisah kocak Don Quixote dan Sancho Panza dalam petualangan ksatria yang salah kaprah.",
        link: "https://www.gutenberg.org/ebooks/996.pdf"
      }
    ];

let currentBooks = [...booksData];
let currentFilter = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('libraryFavorites')) || [];
let currentPage = 'home';
let currentBook = null;

const elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    pages: document.querySelectorAll('.page'),

    searchInput: document.getElementById('search-input'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    resetButton: document.getElementById('reset-filters'),

    booksGrid: document.getElementById('books-grid'),
    noResults: document.getElementById('no-results'),

    detailPage: document.getElementById('detail-page'),
    backBtn: document.getElementById('back-btn'),
    detailCover: document.getElementById('detail-cover'),
    detailTitle: document.getElementById('detail-title'),
    detailAuthor: document.getElementById('detail-author'),
    detailCategory: document.getElementById('detail-category'),
    detailYear: document.getElementById('detail-year'),
    detailDescription: document.getElementById('detail-description'),
    favoriteBtn: document.getElementById('favorite-btn'),
    readmoreBtn: document.getElementById('readmore-btn'),

    favoritesGrid: document.getElementById('favorites-grid'),
    favoritesEmpty: document.getElementById('favorites-empty'),
    favoritesCount: document.getElementById('favorites-count'),

    darkModeToggle: document.querySelectorAll('.dark-mode-btn'),
    notification: document.getElementById('notification'),
    notificationMessage: document.getElementById('notification-message'),
    loading: document.getElementById('loading'),
    menuToggle: document.getElementById('menu-toggle'),
    nav: document.querySelector('.nav'),
    drawerNav: document.getElementById('drawer-nav'),
    drawerOverlay: document.getElementById('drawer-overlay')

};

function initializeApp() {
    setupEventListeners();
    loadTheme();
    updateFavoritesCount();

    setTimeout(() => {
        displayBooks(currentBooks);
        elements.loading.classList.add('hidden');
    }, 1000);
    
    console.log('📚 E-LibraryClass initialized successfully!');
}

function setupEventListeners() {
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    elements.menuToggle.addEventListener('click', () => {
        elements.drawerNav.classList.toggle('show');
        elements.drawerOverlay.classList.toggle('show');
        elements.menuToggle.classList.toggle('active');
    });
    
    elements.drawerOverlay.addEventListener('click', () => {
        elements.drawerNav.classList.remove('show');
        elements.drawerOverlay.classList.remove('show');
        elements.menuToggle.classList.remove('active');
    });

    elements.searchInput.addEventListener('input', handleSearch);

    elements.filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });
    elements.resetButton.addEventListener('click', resetFilters);

    elements.backBtn.addEventListener('click', () => navigateToPage('home'));
    elements.favoriteBtn.addEventListener('click', toggleFavorite);
    elements.readmoreBtn.addEventListener('click', () => {
        if (currentBook && currentBook.link) {
            window.open(currentBook.link, '_blank');
        }
    });

    elements.darkModeToggle.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    document.querySelector('.logo h1').addEventListener('click', () => navigateToPage('home'));
}

/**
 * 
 * @param {Event} event 
 */
function handleNavigation(event) {
    event.preventDefault();
    const targetPage = event.currentTarget.getAttribute('data-page');
    if (targetPage) {
        navigateToPage(targetPage);
    }
}

/**
 *
 * @param {string} pageName
 */
function navigateToPage(pageName) {
    currentPage = pageName;

    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    elements.pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    switch (pageName) {
        case 'home':
            displayBooks(currentBooks);
            break;
        case 'favorites':
            displayFavorites();
            break;
        case 'about':
            break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 
 * @param {Event} event 
 */
function handleSearch(event) {
    searchQuery = event.target.value.toLowerCase().trim();
    filterAndDisplayBooks();

    if (searchQuery) {
        event.target.style.borderColor = 'var(--primary-color)';
    } else {
        event.target.style.borderColor = 'var(--border-color)';
    }
}

/**
 * 
 * @param {Event} event 
 *  
*/
function handleFilter(event) {
    const category = event.currentTarget.getAttribute('data-category');
    currentFilter = category;

    elements.filterButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    filterAndDisplayBooks();
}

function resetFilters() {
    elements.searchInput.value = '';
    searchQuery = '';

    currentFilter = 'all';
    elements.filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        }
    });

    filterAndDisplayBooks();

    elements.searchInput.style.borderColor = 'var(--border-color)';
    showNotification('Filters reset! Showing all books 📚');
}

function filterAndDisplayBooks() {
    let filteredBooks = [...booksData];

    if (currentFilter !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === currentFilter);
    }

    if (searchQuery) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(searchQuery) ||
            book.author.toLowerCase().includes(searchQuery) ||
            book.category.toLowerCase().includes(searchQuery)
        );
    }
    
    currentBooks = filteredBooks;
    displayBooks(currentBooks);

    if (filteredBooks.length === 0) {
        elements.noResults.classList.remove('hidden');
        elements.booksGrid.style.display = 'none';
    } else {
        elements.noResults.classList.add('hidden');
        elements.booksGrid.style.display = 'grid';
    }
}

/**
 * 
 * @param {Array} books 
 */
function displayBooks(books) {
    elements.booksGrid.innerHTML = '';
    
    books.forEach((book, index) => {
        const bookCard = createBookCard(book, index);
        elements.booksGrid.appendChild(bookCard);
    });

    const cards = elements.booksGrid.querySelectorAll('.book-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 *
 * @param {Object} book
 * @param {number} index 
 * @returns {HTMLElement} 
 */
function createBookCard(book, index = 0) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const isFavorite = favorites.includes(book.id);
    const heartIcon = isFavorite ? '❤️' : '🤍';
    
    card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="book-cover">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <div class="book-meta">
                <span class="category-badge">${getCategoryIcon(book.category)} ${book.category}</span>
                <span class="year-badge">${book.year}</span>
            </div>
            <button class="view-details-btn" onclick="showBookDetail(${book.id})">
                📖 View Details
            </button>
        </div>
    `;

    card.addEventListener('click', (event) => {
        if (!event.target.classList.contains('view-details-btn')) {
            showBookDetail(book.id);
        }
    });
    
    return card;
}

/**
 * 
 * @param {string} category
 * @returns {string} 
 */
function getCategoryIcon(category) {
    const icons = {
        'Cerpen': '📖',
        'Novel': '📚',
        'Ensikopledia': '🔬',
        'Legenda': '⚔️',
        'Fiksi Ilmiah': '🚀'
    };
    return icons[category] || '📘';
}

/**
 * 
 * @param {number} bookId 
 */
function showBookDetail(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    currentBook = book;
    const isFavorite = favorites.includes(book.id);

    elements.detailCover.src = book.cover;
    elements.detailCover.alt = book.title;
    elements.detailTitle.textContent = book.title;
    elements.detailAuthor.textContent = book.author;
    elements.detailCategory.textContent = `${getCategoryIcon(book.category)} ${book.category}`;
    elements.detailYear.textContent = `📅 ${book.year}`;
    elements.detailDescription.textContent = book.description;

    updateFavoriteButton(isFavorite);

    navigateToPage('detail');
}

/**
 * 
 * @param {boolean} isFavorite
 */
function updateFavoriteButton(isFavorite) {
    const heartIcon = elements.favoriteBtn.querySelector('.heart-icon');
    const btnText = elements.favoriteBtn.querySelector('.btn-text');
    
    if (isFavorite) {
        elements.favoriteBtn.classList.add('favorited');
        heartIcon.textContent = '❤️';
        btnText.textContent = 'Remove from Favorites';
    } else {
        elements.favoriteBtn.classList.remove('favorited');
        heartIcon.textContent = '🤍';
        btnText.textContent = 'Add to Favorites';
    }
}

function toggleFavorite() {
    if (!currentBook) return;
    
    const bookId = currentBook.id;
    const isFavorite = favorites.includes(bookId);
    
    if (isFavorite) {
        favorites = favorites.filter(id => id !== bookId);
        showNotification(`"${currentBook.title}" removed from favorites 💔`);
    } else {
        favorites.push(bookId);
        showNotification(`"${currentBook.title}" added to favorites! ❤️`);
    }

    localStorage.setItem('libraryFavorites', JSON.stringify(favorites));

    updateFavoriteButton(!isFavorite);
    updateFavoritesCount();

    if (currentPage === 'favorites') {
        displayFavorites();
    }
}

function displayFavorites() {
    const favoriteBooks = booksData.filter(book => favorites.includes(book.id));
    
    if (favoriteBooks.length === 0) {
        elements.favoritesEmpty.classList.remove('hidden');
        elements.favoritesGrid.style.display = 'none';
    } else {
        elements.favoritesEmpty.classList.add('hidden');
        elements.favoritesGrid.style.display = 'grid';
      
        elements.favoritesGrid.innerHTML = '';
        favoriteBooks.forEach((book, index) => {
            const bookCard = createFavoriteBookCard(book, index);
            elements.favoritesGrid.appendChild(bookCard);
        });
    }
}

/**
 * 
 * @param {Object} book
 * @param {number} index 
 * @returns {HTMLElement} 
 */
function createFavoriteBookCard(book, index = 0) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="book-cover">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <div class="book-meta">
                <span class="category-badge">${getCategoryIcon(book.category)} ${book.category}</span>
                <span class="year-badge">${book.year}</span>
            </div>
            <div class="detail-actions" style="display: flex; gap: 0.5rem;">
                <button class="view-details-btn" onclick="showBookDetail(${book.id})" style="flex: 1;">
                    📖 View Details
                </button>
                <button class="favorite-btn favorited" onclick="removeFavorite(${book.id})" style="padding: 0.75rem;">
                    ❤️
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * 
 * @param {number} bookId 
 */
function removeFavorite(bookId) {
    const book = booksData.find(b => b.id === bookId);
    favorites = favorites.filter(id => id !== bookId);

    localStorage.setItem('libraryFavorites', JSON.stringify(favorites));

    updateFavoritesCount();
    displayFavorites();

    if (book) {
        showNotification(`"${book.title}" removed from favorites 💔`);
    }
}

function updateFavoritesCount() {
    elements.favoritesCount.textContent = favorites.length;

    if (favorites.length === 0) {
        elements.favoritesCount.style.display = 'none';
    } else {
        elements.favoritesCount.style.display = 'inline-block';
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('libraryTheme', newTheme);

    const themeMessage = newTheme === 'dark'
        ? 'Dark mode activated 🌙'
        : 'Light mode activated ☀️';

    showNotification(themeMessage);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('libraryTheme')
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    document.body.setAttribute('data-theme', savedTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('libraryTheme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

/**
 * 
 * @param {string} message
 * @param {number} duration
 */
function showNotification(message, duration = 3000) {
    elements.notificationMessage.textContent = message;
    elements.notification.classList.remove('hidden');
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
        setTimeout(() => {
            elements.notification.classList.add('hidden');
        }, 300);
    }, duration);
}

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            elements.searchInput.focus();
        }

        if (event.key === 'Escape') {
            elements.searchInput.blur();
            if (currentPage === 'detail') {
                navigateToPage('home');
            }
        }
    });
}

function addLoadingStates() {
    // Add loading to search
    let searchTimeout;
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        elements.booksGrid.style.opacity = '0.6';
        
        searchTimeout = setTimeout(() => {
            elements.booksGrid.style.opacity = '1';
        }, 300);
    });
}

function initializeAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.book-card, .about-section, .feature-card').forEach(el => {
        observer.observe(el);
    });
}

window.showBookDetail = showBookDetail;
window.removeFavorite = removeFavorite;

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    addSmoothScrolling();
    setupKeyboardShortcuts();
    addLoadingStates();
    setTimeout(initializeAnimations, 500);
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && elements.booksGrid) {
        elements.booksGrid.style.gridTemplateColumns = '1fr';
    }

});

