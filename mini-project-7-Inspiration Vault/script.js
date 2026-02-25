/**
 * PROJECT LOGIC: FROM BASIC TO ADVANCED
 */

const gallery = document.getElementById('gallery');
const fetchBtn = document.getElementById('fetch-btn');
const clearBtn = document.getElementById('clear-btn');
const emptyState = document.getElementById('empty-state');
const toast = document.getElementById('toast');

// --- THE API LOGIC ---

async function fetchInspiration() {
    // Show loading animation on button
    fetchBtn.disabled = true;
    fetchBtn.innerHTML = `<div class="w-5 h-5 loader border-2 border-white border-solid rounded-full"></div> <span>Fetching...</span>`;

    try {
        // Fetching random quotes from API
        const response = await fetch('https://dummyjson.com/quotes/random/3');
        const data = await response.json();
        
        // Hide the empty state message
        if (emptyState) emptyState.style.display = 'none';

        // Map through data and build UI
        data.forEach((item, index) => {
            createInspirationCard(item.quote, item.author, index);
        });

        showToast(`Found ${data.length} new insights`);

    } catch (error) {
        console.error('API Error:', error);
        showToast('Failed to fetch data. Try again!');
    } finally {
        // Reset button state
        fetchBtn.disabled = false;
        fetchBtn.innerHTML = `<span>Generate Gallery</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="M22 2v6h-6"/><path d="m22 8-4-4"/></svg>`;
    }
}

// --- DOM MANIPULATION (The Core) ---

function createInspirationCard(text, author, index) {
    // 1. Create the container
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col opacity-0 translate-y-4 transition-all duration-500';
    
    // 2. Add an image
    const randomId = Math.floor(Math.random() * 1000);
    const imageHtml = `
        <div class="h-48 overflow-hidden bg-slate-200">
            <img 
                src="https://picsum.photos/seed/${randomId}/600/400" 
                alt="Inspiration" 
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
            >
        </div>
    `;

    // 3. Add the content
    const contentHtml = `
        <div class="p-6 flex flex-col flex-grow">
            <div class="flex-grow">
                <svg class="text-indigo-200 mb-2" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M10 12V9C10 8.44772 9.55228 8 9 8H6C5.44772 8 5 8.44772 5 9V15C5 15.5523 5.44772 16 6 16H9C10.1046 16 11 16.8954 11 18V21M10 12H11"/></svg>
                <p class="text-slate-700 leading-relaxed font-medium italic mb-4">"${text}"</p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span class="text-indigo-600 font-bold text-sm tracking-wide uppercase">— ${author}</span>
                <button class="delete-btn text-slate-300 hover:text-red-500 transition-colors" title="Remove card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
            </div>
        </div>
    `;

    card.innerHTML = imageHtml + contentHtml;

    // 4. Attach individual delete listener
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
            card.remove();
            if (gallery.children.length === 0) {
                emptyState.style.display = 'block';
            }
        }, 300);
    });

    // 5. Append and trigger entry animation
    gallery.appendChild(card);
    
    // Stagger animation based on index
    setTimeout(() => {
        card.classList.remove('opacity-0', 'translate-y-4');
        card.classList.add('opacity-100', 'translate-y-0');
    }, index * 100);
}

function clearGallery() {
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
    gallery.appendChild(emptyState);
    emptyState.style.display = 'block';
    showToast('Gallery cleared');
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-10');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-10');
        toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3000);
}

// --- EVENT BINDING ---
fetchBtn.addEventListener('click', fetchInspiration);
clearBtn.addEventListener('click', clearGallery);