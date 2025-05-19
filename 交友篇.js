// --- A. 数据模块 (Data Module) ---
const pageData = {
    "home": {
        titleBanner: "如约而至 乘兴而归",
        carouselImages: [//放图片耗费了40min!!！😭
            "交友篇-images/my_photo_3.jpg",
            "交友篇-images/my_photo_2.jpg",
            "交友篇-images/my_photo_1.jpg"
        ],
        contentListTitle: "最新活动记录",
        contentListIcon: "fa-bullhorn", // Font Awesome icon class
        contentItems: [
            {
                title: "时逢五一，嬉戏于园博园",
                date: "2025-05-02",
                summary: "利民，水派灵感，国粹交融，人文荟萃，五一出游",
                image: "https://placehold.co/400x300/7f8c8d/ffffff?text=园博园活动&font=sans",
                backgroundImage: "https://placehold.co/1200x300/bdc3c7/ffffff?text=模糊背景1&font=sans&blur=1",
                link: "交友篇.html?page=wuyi" // 主HTML文件名已更新
            },
            {
                title: "花开了，你来了",
                date: "2025-04-11",
                summary: "突发！XX生日，传闻引爆全场，众人：速来围观！",
                image: "https://placehold.co/400x300/9b59b6/ffffff?text=生日派对&font=sans",
                backgroundImage: "https://placehold.co/1200x300/8e44ad/ffffff?text=模糊背景2&font=sans&blur=1",
                link: "交友篇.html?page=birthday" // 主HTML文件名已更新
            },
            {
                title: "龙、肖二君初见于青秀",
                date: "2025-03-22",
                summary: "结伴出游，畅谈天地，不亦乐乎。",
                image: "https://placehold.co/400x300/1abc9c/ffffff?text=青秀山初见&font=sans",
                backgroundImage: "https://placehold.co/1200x300/16a085/ffffff?text=模糊背景3&font=sans&blur=1",
                link: "交友篇.html?page=longxiao" // 主HTML文件名已更新
            }
        ]
    },
    "longxiao": { 
        type: "detail",
        titleBanner: "龙肖初见",
        subNavigation: "漫游青秀", 
        mainContent: {
            image: "https://placehold.co/600x400/16a085/ffffff?text=龙肖初见主图&font=sans",
            title: "云间意洽，今朝幸会",
            text: "忆昔初识时间相与语，意气相投然若比邻。\n纵隔山海，畅谈无碍，倾心相知久矣。\n未能得见于今岁，终能把盏以为欢。\n得睹君之容，欣喜无已。" 
        },
        imageGallery: [ 
            "https://placehold.co/300x200/2ecc71/ffffff?text=风景1&font=sans",
            "https://placehold.co/300x200/27ae60/ffffff?text=合影2&font=sans",
            "https://placehold.co/300x200/3498db/ffffff?text=瞬间3&font=sans",
            "https://placehold.co/300x200/2980b9/ffffff?text=美食4&font=sans",
        ]
    },
    "wuyi": { 
        type: "detail",
        titleBanner: "五一出游",
        subNavigation: "园博园之行",
        mainContent: {
            image: "https://placehold.co/600x400/e67e22/ffffff?text=五一出游主图&font=sans",
            title: "五一畅游园博园",
            text: "阳光明媚，惠风和畅。\n五一佳节，与友同游园博园，赏奇花异草，观各地风情，不亦乐乎。\n此行收获颇丰，身心愉悦。"
        },
        imageGallery: [
            "https://placehold.co/300x200/d35400/ffffff?text=园博园1&font=sans",
            "https://placehold.co/300x200/f39c12/ffffff?text=园博园2&font=sans",
        ]
    },
    "classic": { 
        type: "detail",
        titleBanner: "经典永流传",
        subNavigation: "往昔回顾",
         mainContent: {
            image: "https://placehold.co/600x400/7f8c8d/ffffff?text=经典回顾主图&font=sans",
            title: "那些年，我们一起追过的...回忆",
            text: "时光荏苒，岁月如梭。\n总有一些瞬间，如同夜空中最亮的星，照亮我们前行的路。\n这里存放着一些值得回味的经典时刻，愿与君共享。"
        },
        imageGallery: [] 
    },
     "birthday": { 
        type: "detail",
        titleBanner: "花开了，你来了",
        subNavigation: "XX生日特别记录",
         mainContent: {
            image: "https://placehold.co/600x400/9b59b6/ffffff?text=生日快乐&font=sans",
            title: "惊喜满溢的生日庆典",
            text: "在这个特别的日子里，我们为XX精心准备了一场难忘的生日派对。\n欢声笑语，真挚祝福，愿这份美好永存心间。"
        },
        imageGallery: [
             "https://placehold.co/300x200/8e44ad/ffffff?text=生日蛋糕&font=sans",
             "https://placehold.co/300x200/c0392b/ffffff?text=欢乐合影&font=sans",
        ]
    }
};
// --- END DATA MODULE ---

// --- DOM Elements ---
const pageContentDiv = document.getElementById('page-content');
// --- END DOM Elements ---

// --- B. 渲染模块 (Rendering Module) ---
function renderHomePage() {
    const data = pageData.home;
    let html = `
        <section class="main-title-banner fade-in-section">
            <h1>${data.titleBanner}</h1>
        </section>

        <section class="carousel-container my-8 md:my-12 fade-in-section" style="animation-delay: 0.1s;">
            <div id="image-carousel" class="relative h-full">
                ${data.carouselImages.map((src, index) => `
                    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                        <img src="${src}" alt="轮播图片 ${index + 1}" loading="lazy">
                    </div>
                `).join('')}
            </div>
            <div class="carousel-indicators" id="carousel-indicators"></div>
            <button class="carousel-control prev" id="carousel-prev"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-control next" id="carousel-next"><i class="fas fa-chevron-right"></i></button>
        </section>

        <section class="container mx-auto px-6 py-8 fade-in-section" style="animation-delay: 0.2s;">
            <h2 class="text-2xl md:text-3xl font-semibold text-content-text mb-8 text-center">
                <i class="fas ${data.contentListIcon} mr-2 text-header-bg"></i>
                ${data.contentListTitle}
            </h2>
            <div class="space-y-8">
                ${data.contentItems.map(item => `
                    <a href="${item.link}" class="block content-list-item" style="background-image: url('${item.backgroundImage}');">
                        <img src="${item.image}" alt="${item.title}" class="content-list-item-image">
                        <div class="content-list-item-text">
                            <h3>${item.title}</h3>
                            <p class="date">${item.date}</p>
                            <p>${item.summary}</p>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    if (pageContentDiv) pageContentDiv.innerHTML = html;
    setupCarousel();
}

function renderDetailPage(pageKey) {
    const data = pageData[pageKey];
    if (!data || data.type !== 'detail') {
        if (pageContentDiv) pageContentDiv.innerHTML = '<p class="text-center py-20 text-content-text">抱歉，页面内容未找到或正在建设中...</p>';
        return;
    }
    let html = `
        <section class="main-title-banner detail-page-banner fade-in-section">
            <h1>${data.titleBanner}</h1>
        </section>
        ${data.subNavigation ? `
            <section class="sub-nav-filter fade-in-section" style="animation-delay: 0.1s;">
                <div class="container mx-auto px-6">
                    <span>${data.subNavigation}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </section>
        ` : ''}
        <section class="container mx-auto px-6 py-8 md:py-12 fade-in-section" style="animation-delay: 0.2s;">
            ${data.mainContent ? `
                <div class="detail-content-block bg-white p-6 md:p-8 rounded-lg shadow-lg">
                    <img src="${data.mainContent.image}" alt="${data.mainContent.title}" loading="lazy">
                    <div class="detail-content-text flex-1">
                        <h2 class="text-2xl md:text-3xl">${data.mainContent.title}</h2>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">${data.mainContent.text.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            ` : ''}
            ${data.imageGallery && data.imageGallery.length > 0 ? `
                <h3 class="text-xl md:text-2xl font-semibold mt-12 mb-6 text-content-text text-center">图片画廊</h3>
                <div class="image-gallery">
                    ${data.imageGallery.map(src => `<img src="${src}" alt="画廊图片" loading="lazy">`).join('')}
                </div>
            ` : ''}
        </section>
    `;
    if (pageContentDiv) pageContentDiv.innerHTML = html;
}
// --- END RENDERING MODULE ---

// --- C. 组件逻辑模块 (Component Logic Module) ---
// --- CAROUSEL LOGIC ---
let currentSlide = 0;
let slides, indicators;
let slideInterval;

function setupCarousel() {
    slides = document.querySelectorAll('#image-carousel .carousel-slide');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    if (!slides || !slides.length || !indicatorsContainer) {
        // console.warn("Carousel elements not found for setup.");
        return;
    }

    indicatorsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('carousel-indicator');
        if (index === 0) button.classList.add('active');
        button.addEventListener('click', () => showSlide(index));
        indicatorsContainer.appendChild(button);
    });
    indicators = document.querySelectorAll('#carousel-indicators .carousel-indicator');
    
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    if(prevButton) prevButton.addEventListener('click', prevSlide);
    if(nextButton) nextButton.addEventListener('click', nextSlide);
    
    startSlideShow();
}

function showSlide(index) {
    if (!slides || !slides.length || !indicators || !indicators.length) return;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    indicators.forEach((indicator, i) => indicator.classList.toggle('active', i === index));
    currentSlide = index;
    resetSlideShowInterval();
}

function nextSlide() {
    if (!slides || !slides.length) return;
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
     if (!slides || !slides.length) return;
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startSlideShow() {
    if (!slides || !slides.length) return;
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideShowInterval() {
    if (!slides || !slides.length) return;
    clearInterval(slideInterval);
    startSlideShow();
}
// --- END CAROUSEL LOGIC ---
// --- END COMPONENT LOGIC MODULE ---

// --- D. 路由与应用初始化模块 (Routing & App Initialization Module) ---
const MAIN_HTML_FILE = "交友篇.html"; // 确保这里是您主HTML文件的正确名称

function handleRouteChange() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page && pageData[page] && pageData[page].type === 'detail') {
        document.title = pageData[page].titleBanner || `详情 - 如约而至 乘兴而归`;
        renderDetailPage(page);
    } else {
        document.title = "如约而至 乘兴而归";
        renderHomePage();
    }
    observeFadeInSections();
    window.scrollTo(0, 0);
}
// --- END ROUTING & APP INITIALIZATION MODULE ---

// --- E. UI 效果与工具函数模块 (UI Effects & Utility Functions Module) ---
// --- FADE-IN ANIMATION ---
function observeFadeInSections() {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseFloat(entry.target.style.animationDelay) * 1000 || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}
// --- END FADE-IN ANIMATION ---
// --- END UI EFFECTS & UTILITY FUNCTIONS MODULE ---

// --- Event Listeners & Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // 更新导航链接的事件处理，以确保使用 MAIN_HTML_FILE
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            // 检查链接是否是针对当前主HTML文件的内部页面导航
            if (href && (href.startsWith(MAIN_HTML_FILE + '?page=') || href === MAIN_HTML_FILE || href === '/' || href === './')) { // 增加了对 './' 的判断
                event.preventDefault();
                
                let pageKey = 'home'; // 默认为首页
                const urlObject = new URL(this.href, window.location.origin);
                const pageParam = urlObject.searchParams.get('page');

                if (pageParam) {
                    pageKey = pageParam;
                } else if (href === MAIN_HTML_FILE || href === '/' || href === './') { // 如果链接直接指向主文件或根路径
                    pageKey = 'home';
                }
                
                const newQuery = pageKey && pageKey !== 'home' ? `?page=${pageKey}` : '';
                // 使用 MAIN_HTML_FILE 来构建新的URL路径
                history.pushState({ page: pageKey || 'home' }, '', `${MAIN_HTML_FILE}${newQuery}`);
                handleRouteChange();

                const menuToggle = document.getElementById('menu-toggle');
                if (menuToggle && menuToggle.checked) {
                    menuToggle.checked = false;
                }
            }
            // 对于其他外部链接或不同HTML文件的链接，浏览器会执行默认跳转
        });
    });

    window.addEventListener('popstate', (event) => {
        handleRouteChange();
    });
    
    handleRouteChange(); // 初始页面加载
});
// --- END Event Listeners & Initial Load ---
