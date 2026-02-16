# 🚀 JavaScript Mastery Course: Beginner to Pro

Welcome to the ultimate JavaScript learning resource! This repository is meticulously structured to take you from writing your first variable to building complex, high-performance web applications.

It combines deep theoretical knowledge, rigorous interview preparation, and hands-on project building.

## 📂 Course Architecture

The course is divided into three main pillars:

### 1. 🧠 Core Knowledge & Interview Prep
Master the language and ace your technical interviews.

*   **`learn-js.js`**: A living textbook. Run this in your console!
    *   **Basics**: Variables, Types, Loops, Functions.
    *   **Advanced**: Execution Context, Call Stack, Event Loop, Closures, Prototypes.
    *   **Expert**: Design Patterns (Module, Singleton), Meta-programming, Memory Management.
*   **`interview-theory.txt`**: 100+ "Must-Know" questions covering:
    *   JS Core (Hoisting, Coercion, Scopes).
    *   Web APIs (DOM, Shadow DOM, Storage).
    *   Performance (Critical Rendering Path, Tree Shaking).
*   **`interview-practice.js`**: 50+ Coding Challenges.
    *   **Level 1**: Array methods, Palindromes, Logic.
    *   **Level 2**: Polyfills for `Map`/`Promise`, Memoization, Flattening arrays, Debounce/Throttle implementation.

---

### 2. 🔨 DOM Manipulation Mini-Projects
Practice essential DOM skills with isolated, focused projects.

| Project | Concepts Learned | Location |
| :--- | :--- | :--- |
| **Color Flipper** | Event Listeners, `Math.random()`, Style manipulation. | `mini-project-1-color-flipper` |
| **Interactive Counter** | State management, Conditionals, ClassList toggling. | `mini-project-2-counter` |
| **Modal Popup** | CSS visibility transitions, Overlay logic, DOM selection. | `mini-project-3-modal` |

---

### 3. 🌟 Master Project: Aura-Insight Dashboard
A professional-grade Single Page Application (SPA) demonstrating modern frontend architecture. 

**Location**: `aura-insight-dashboard/`

#### Key Features & Technologies:
*   **💎 Glassmorphism UI**: High-end aesthetic using `backdrop-filter` and semi-transparent gradients.
*   **⚡ Advanced DOM**:
    *   **Shadow DOM**: Encapsulated styles for the `crypto-ticker` component.
    *   **DocumentFragment**: High-performance batch rendering for the Task List.
*   **🎮 Event Handling**:
    *   **Drag & Drop API**: Reorderable dashboard widgets.
    *   **Custom Context Menu**: Right-click interaction override.
    *   **Keyboard Shortcuts**: Global `Cmd/Ctrl + K` search trigger.
*   **📡 API Layer**:
    *   **AbortController**: Cancelling stale fetch requests on timeout.
    *   **Debouncing**: Optimized search input processing.
    *   **Async/Await**: Clean asynchronous data fetching.

## 🏁 How to Start

1.  **Clone or Download** this repository.
2.  Open **`index.html`** in your browser. This is your Course Hub.
3.  **To Learn**: Open the browser console (F12) while on the hub to interact with `learn-js.js`.
4.  **To Build**: Navigate to the `aura-insight-dashboard` folder strings and open its `index.html` to see the master project in action.

---

### 📌 Study Guide
1.  **Week 1**: Read `learn-js.js` and complete Mini Projects 1-3.
2.  **Week 2**: Solve the first 25 problems in `interview-practice.js`.
3.  **Week 3**: Study `interview-theory.txt` and attempt Advanced challenges.
4.  **Week 4**: Dissect and recreate the **Aura-Insight Dashboard** from scratch.

Happy Coding! 💻
