/**
 * Romantic Digital Book Reader Engine
 * Pure Vanilla JavaScript — HTML5, CSS3, Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Application State ---
    const totalPages = BOOK_PAGES.length;
    let currentPage = 1;
    let isBookOpen = false;
    let isAnimating = false;
    let fontScale = 1.0;
    let theme = 'light';
    let isReadingMode = false;

    // --- DOM Elements ---
    const book3DWrapper = document.getElementById('book-3d-wrapper');
    const bookCover = document.getElementById('book-cover');
    const btnStartReading = document.getElementById('btn-start-reading');

    const pageLeft = document.getElementById('page-left');
    const pageRight = document.getElementById('page-right');
    const leftContent = document.getElementById('left-content');
    const rightContent = document.getElementById('right-content');
    const leftChapterTag = document.getElementById('left-chapter-tag');
    const rightChapterTag = document.getElementById('right-chapter-tag');
    const leftPageNum = document.getElementById('left-page-num');
    const rightPageNum = document.getElementById('right-page-num');

    const flipSheet = document.getElementById('flip-sheet');
    const flipFront = document.getElementById('flip-front');
    const flipBack = document.getElementById('flip-back');

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFirst = document.getElementById('btn-first');
    const btnLast = document.getElementById('btn-last');
    const currentPageDisplay = document.getElementById('current-page-display');
    const totalPagesDisplay = document.getElementById('total-pages-display');
    const progressBar = document.getElementById('progress-bar');

    const btnToc = document.getElementById('btn-toc');
    const btnCloseToc = document.getElementById('btn-close-toc');
    const tocDrawer = document.getElementById('toc-drawer');
    const tocOverlay = document.getElementById('toc-overlay');
    const tocList = document.getElementById('toc-list');

    const btnBookmark = document.getElementById('btn-bookmark');
    const btnTheme = document.getElementById('btn-theme');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    const btnFontInc = document.getElementById('btn-font-inc');
    const btnFontDec = document.getElementById('btn-font-dec');
    const btnFontReset = document.getElementById('btn-font-reset');

    const btnReadingMode = document.getElementById('btn-reading-mode');
    const btnExitReading = document.getElementById('btn-exit-reading');
    const toast = document.getElementById('toast');

    // --- Initialization ---
    initApp();

    function initApp() {
        totalPagesDisplay.textContent = totalPages;

        // Load persisted settings
        loadSavedSettings();

        // Build Table of Contents
        buildTableOfContents();

        // Attach event listeners
        attachEventListeners();

        // Check if there is a saved bookmark position
        const savedPage = parseInt(localStorage.getItem('romantic_book_page'), 10);
        if (savedPage && savedPage > 1 && savedPage <= totalPages) {
            showToast(`Continuando lectura en la página ${savedPage}`);
            currentPage = savedPage;
        }
    }

    // --- LocalStorage & Settings ---
    function loadSavedSettings() {
        // Theme
        const savedTheme = localStorage.getItem('romantic_book_theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }

        // Font scale
        const savedFontScale = parseFloat(localStorage.getItem('romantic_book_font_scale'));
        if (savedFontScale) {
            setFontScale(savedFontScale);
        }
    }

    function setTheme(newTheme) {
        theme = newTheme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('romantic_book_theme', theme);

        if (theme === 'dark') {
            iconSun.classList.add('hidden');
            iconMoon.classList.remove('hidden');
        } else {
            iconSun.classList.remove('hidden');
            iconMoon.classList.add('hidden');
        }
    }

    function setFontScale(scale) {
        fontScale = Math.min(Math.max(scale, 0.8), 1.4);
        document.documentElement.style.setProperty('--font-scale', fontScale);
        localStorage.setItem('romantic_book_font_scale', fontScale);
    }

    // --- Table of Contents Drawer ---
    function buildTableOfContents() {
        tocList.innerHTML = '';
        BOOK_METADATA.chapters.forEach(ch => {
            const item = document.createElement('button');
            item.className = 'toc-item';
            item.innerHTML = `
                <span class="toc-item-title">${ch.title}</span>
                <span class="toc-item-page">Pág. ${ch.startPage}</span>
            `;
            item.addEventListener('click', () => {
                goToPage(ch.startPage);
                closeToc();
            });
            tocList.appendChild(item);
        });
    }

    function openToc() {
        tocDrawer.classList.add('open');
        tocDrawer.setAttribute('aria-hidden', 'false');
        tocOverlay.classList.add('active');
        highlightActiveTocItem();
    }

    function closeToc() {
        tocDrawer.classList.remove('open');
        tocDrawer.setAttribute('aria-hidden', 'true');
        tocOverlay.classList.remove('active');
    }

    function highlightActiveTocItem() {
        const currentChapter = getCurrentChapter(currentPage);
        const items = tocList.querySelectorAll('.toc-item');
        items.forEach((item, index) => {
            if (index + 1 === currentChapter.num) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function getCurrentChapter(pageNum) {
        let ch = BOOK_METADATA.chapters[0];
        for (let i = BOOK_METADATA.chapters.length - 1; i >= 0; i--) {
            if (pageNum >= BOOK_METADATA.chapters[i].startPage) {
                ch = BOOK_METADATA.chapters[i];
                break;
            }
        }
        return ch;
    }

    // --- Toast Notifications ---
    function showToast(message) {
        toast.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // --- Open Book Ceremony ---
    function openBook() {
        if (isBookOpen) return;
        isBookOpen = true;
        book3DWrapper.classList.remove('state-closed');
        book3DWrapper.classList.add('state-open');
        
        // Render initial pages
        renderPages(currentPage);
        updateUI();
    }

    // --- Page Rendering Engine ---
    function renderPages(pageNum) {
        const isDualView = window.innerWidth > 850;
        const pageData = BOOK_PAGES[pageNum - 1];

        if (!pageData) return;

        const currentCh = getCurrentChapter(pageNum);

        if (isDualView) {
            // Left page shows previous page if available, or title lining
            if (pageNum > 1) {
                const prevPageData = BOOK_PAGES[pageNum - 2];
                const prevCh = getCurrentChapter(pageNum - 1);
                leftChapterTag.textContent = prevCh.title;
                leftPageNum.textContent = `Página ${pageNum - 1}`;
                leftContent.innerHTML = formatPageContent(prevPageData);
            } else {
                // Page 1: Left page shows inner title header
                leftChapterTag.textContent = "Edición Especial";
                leftPageNum.textContent = "";
                leftContent.innerHTML = `
                    <div class="chapter-break-wrapper">
                        <div class="chapter-number-script">Andre</div>
                        <h2 class="chapter-break-title">${BOOK_METADATA.title}</h2>
                        <div class="chapter-divider-ornament"></div>
                        <p style="text-align:center; font-style:italic; color:var(--text-muted);">
                            ${BOOK_METADATA.subtitle}
                        </p>
                    </div>
                `;
            }

            // Right page shows current page
            rightChapterTag.textContent = currentCh.title;
            rightPageNum.textContent = `Página ${pageNum}`;
            rightContent.innerHTML = formatPageContent(pageData);
        } else {
            // Single page view (Mobile / Small Screen)
            rightChapterTag.textContent = currentCh.title;
            rightPageNum.textContent = `Página ${pageNum}`;
            rightContent.innerHTML = formatPageContent(pageData);
        }

        // Auto-save current progress in LocalStorage
        localStorage.setItem('romantic_book_page', pageNum);
    }

    function formatPageContent(pageData) {
        if (!pageData) return '';
        
        // Check if page is start of a chapter
        const ch = BOOK_METADATA.chapters.find(c => c.startPage === pageData.pageNumber);
        
        let html = '';
        if (ch) {
            html += `
                <div class="chapter-break-wrapper">
                    <div class="chapter-number-script">Capítulo ${ch.num}</div>
                    <h2 class="chapter-break-title">${ch.title.replace(/^Capítulo [I|V|X]+:\s*/, '')}</h2>
                    <div class="chapter-divider-ornament"></div>
                </div>
            `;
        }

        // Split text content into paragraphs
        const paragraphs = pageData.content.split('\n\n');
        paragraphs.forEach(p => {
            const cleanP = p.trim();
            if (cleanP) {
                html += `<p>${cleanP.replace(/\n/g, '<br>')}</p>`;
            }
        });

        return html;
    }

    // --- Page Navigation with 3D Flip Physics ---
    function flipToNextPage() {
        if (currentPage >= totalPages || isAnimating) return;
        if (!isBookOpen) {
            openBook();
            return;
        }

        isAnimating = true;
        const nextPage = currentPage + 1;

        // Prepare 3D flip animation sheet content
        flipFront.innerHTML = rightContent.innerHTML;
        flipBack.innerHTML = formatPageContent(BOOK_PAGES[nextPage - 1]);

        flipSheet.className = 'flip-sheet animate-turn-forward';

        setTimeout(() => {
            currentPage = nextPage;
            renderPages(currentPage);
            updateUI();
            flipSheet.className = 'flip-sheet';
            isAnimating = false;
        }, 600);
    }

    function flipToPrevPage() {
        if (currentPage <= 1 || isAnimating) return;
        if (!isBookOpen) return;

        isAnimating = true;
        const prevPage = currentPage - 1;

        flipFront.innerHTML = formatPageContent(BOOK_PAGES[prevPage - 1]);
        flipBack.innerHTML = rightContent.innerHTML;

        flipSheet.className = 'flip-sheet animate-turn-backward';

        setTimeout(() => {
            currentPage = prevPage;
            renderPages(currentPage);
            updateUI();
            flipSheet.className = 'flip-sheet';
            isAnimating = false;
        }, 600);
    }

    function goToPage(targetPage) {
        if (targetPage < 1 || targetPage > totalPages || isAnimating) return;
        
        if (!isBookOpen) {
            openBook();
        }

        currentPage = targetPage;
        renderPages(currentPage);
        updateUI();
    }

    function updateUI() {
        currentPageDisplay.textContent = `Página ${currentPage}`;
        
        // Progress bar percentage calculation
        const percent = Math.round((currentPage / totalPages) * 100);
        progressBar.style.width = `${percent}%`;

        // Update nav button states
        btnPrev.disabled = (currentPage === 1);
        btnFirst.disabled = (currentPage === 1);
        btnNext.disabled = (currentPage === totalPages);
        btnLast.disabled = (currentPage === totalPages);
    }

    // --- Event Listeners Attachment ---
    function attachEventListeners() {
        // Book cover click or start button click
        btnStartReading.addEventListener('click', (e) => {
            e.stopPropagation();
            openBook();
        });

        bookCover.addEventListener('click', () => {
            if (!isBookOpen) openBook();
        });

        // Navigation buttons
        btnNext.addEventListener('click', flipToNextPage);
        btnPrev.addEventListener('click', flipToPrevPage);
        btnFirst.addEventListener('click', () => goToPage(1));
        btnLast.addEventListener('click', () => goToPage(totalPages));

        // Table of Contents
        btnToc.addEventListener('click', openToc);
        btnCloseToc.addEventListener('click', closeToc);
        tocOverlay.addEventListener('click', closeToc);

        // Bookmark button
        btnBookmark.addEventListener('click', () => {
            localStorage.setItem('romantic_book_page', currentPage);
            showToast(`📍 Marcapáginas guardado en la Página ${currentPage}`);
        });

        // Theme toggle
        btnTheme.addEventListener('click', () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
        });

        // Font scaling
        btnFontInc.addEventListener('click', () => setFontScale(fontScale + 0.1));
        btnFontDec.addEventListener('click', () => setFontScale(fontScale - 0.1));
        btnFontReset.addEventListener('click', () => setFontScale(1.0));

        // Distraction-Free Reading Mode
        btnReadingMode.addEventListener('click', () => {
            document.body.classList.add('reading-mode');
            btnExitReading.classList.remove('hidden');
            showToast('Modo Lectura activado');
        });

        btnExitReading.addEventListener('click', () => {
            document.body.classList.remove('reading-mode');
            btnExitReading.classList.add('hidden');
        });

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                flipToNextPage();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                flipToPrevPage();
            } else if (e.key === 'Home') {
                e.preventDefault();
                goToPage(1);
            } else if (e.key === 'End') {
                e.preventDefault();
                goToPage(totalPages);
            } else if (e.key === 'Escape') {
                closeToc();
                if (document.body.classList.contains('reading-mode')) {
                    document.body.classList.remove('reading-mode');
                    btnExitReading.classList.add('hidden');
                }
            }
        });

        // Touch Swipe Gestures for Mobile / Tablets
        let touchStartX = 0;
        let touchEndX = 0;

        const stage = document.getElementById('stage-container');
        stage.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        stage.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            if (Math.abs(swipeDistance) > 50) {
                if (swipeDistance < 0) {
                    flipToNextPage(); // Swipe Left -> Next Page
                } else {
                    flipToPrevPage(); // Swipe Right -> Prev Page
                }
            }
        }

        // Window resize event listener to adjust dual vs single page rendering
        window.addEventListener('resize', () => {
            if (isBookOpen) {
                renderPages(currentPage);
            }
        });
    }
});
