/**
 * AURA-INSIGHT DASHBOARD CORE
 * ===========================
 * Implementing Advanced JS Patterns
 */

// 1. STATE MANAGEMENT (Module Pattern)
const DashboardState = (function () {
    let tasks = [
        { id: 1, title: "Review Pull Request", priority: "High" },
        { id: 2, title: "Optimize Images", priority: "Medium" },
        { id: 3, title: "Fix CSS bug", priority: "Low" }
    ];

    return {
        getTasks: () => [...tasks],
        addTask: (task) => { tasks.push(task); },
        removeTask: (id) => { tasks = tasks.filter(t => t.id !== id); }
    };
})();


// 2. ADVANCED DOM: Shadow DOM Component
class CryptoTicker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Encapsulated Styles & HTML
        this.shadowRoot.innerHTML = `
            <style>
                .ticker {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .coin {
                    display: flex;
                    justify-content: space-between;
                    background: rgba(255,255,255,0.05);
                    padding: 8px;
                    border-radius: 6px;
                    font-size: 0.9rem;
                }
                .up { color: #4ade80; }
                .down { color: #f87171; }
            </style>
            <div class="ticker">
                <div class="coin">
                    <span>BTC</span>
                    <span class="up">$45,230 (+2.1%)</span>
                </div>
                <div class="coin">
                    <span>ETH</span>
                    <span class="down">$3,120 (-0.5%)</span>
                </div>
                <div class="coin">
                    <span>SOL</span>
                    <span class="up">$104 (+5.4%)</span>
                </div>
            </div>
        `;
    }
}
customElements.define('crypto-ticker', CryptoTicker);


// 3. ADVANCED DOM: Document Fragment (Batch Rendering)
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ""; // Clear current

    const fragment = document.createDocumentFragment();
    const tasks = DashboardState.getTasks();

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task.title}</span>
            <span style="font-size:0.8rem; opacity:0.7">${task.priority}</span>
        `;
        fragment.appendChild(li);
    });

    taskList.appendChild(fragment); // Single Reflow
}


// 4. API LAYER: AbortController & Async/Await
async function fetchWeather() {
    const weatherContainer = document.getElementById('weather-data');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    try {
        // Simulation of API call
        // const response = await fetch('https://api.weather.com...', { signal: controller.signal });

        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const data = { temp: 24, condition: "Sunny", loc: "San Francisco" };

        weatherContainer.innerHTML = `
            <div style="font-size: 3rem; font-weight: bold;">${data.temp}°</div>
            <div>${data.condition}</div>
            <div style="opacity: 0.7; font-size: 0.9rem"><i class="fa-solid fa-location-dot"></i> ${data.loc}</div>
        `;

    } catch (error) {
        if (error.name === 'AbortError') {
            weatherContainer.innerHTML = `<span style="color: #ffcccc">Request timed out</span>`;
        } else {
            weatherContainer.innerHTML = `<span style="color: #ffcccc">Error loading data</span>`;
        }
    } finally {
        clearTimeout(timeoutId);
    }
}


// 5. EVENT HANDLING: Debouncing
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const handleSearch = debounce((e) => {
    console.log(`Searching for: ${e.target.value}`);
    // Implement actual search logic here
}, 400);

document.getElementById('global-search').addEventListener('input', handleSearch);


// 6. EVENT HANDLING: Custom Context Menu
const contextMenu = document.getElementById('context-menu');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.display = 'block';
});

document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});


// 7. KEYBOARD SHORTCUTS
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K to focus search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('global-search').focus();
    }
});


// 8. DRAG & DROP API (Simple Implementation)
const draggables = document.querySelectorAll('[draggable="true"]');
const container = document.getElementById('dashboard-grid');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        container.appendChild(draggable);
    } else {
        container.insertBefore(draggable, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    fetchWeather();
    console.log("Aura-Insight Dashboard Initialized");
});

// Global functions for context menu
window.refreshDashboard = () => {
    document.getElementById('weather-data').innerHTML = '<div class="loader">Reloading...</div>';
    fetchWeather();
};

window.toggleTheme = () => {
    alert("Theme toggle logic would go here!");
};
