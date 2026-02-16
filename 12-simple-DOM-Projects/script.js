        // 1. Color Flipper
        function flipColor() {
            const hex = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.getElementById('flipper-bg').style.backgroundColor = hex;
            document.getElementById('flipper-bg').innerText = hex.toUpperCase();
        }

        // 2. Counter App
        let count = 0;
        function updateCounter(val) {
            if (val === 0) count = 0;
            else count += val;
            document.getElementById('counter-val').innerText = count;
        }

        // 3. Digital Clock
        setInterval(() => {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString();
        }, 1000);

        // 4. Word Counter
        document.getElementById('word-input').addEventListener('input', (e) => {
            const text = e.target.value.trim();
            document.getElementById('char-count').innerText = text.length;
            document.getElementById('word-count').innerText = text ? text.split(/\s+/).length : 0;
        });

        // 5. Modal
        function toggleModal(show) {
            document.getElementById('modal').style.display = show ? 'flex' : 'none';
        }

        // 6. To-Do List
        function addTodo() {
            const input = document.getElementById('todo-input');
            if (!input.value) return;
            const li = document.createElement('li');
            li.className = "flex justify-between items-center bg-white/5 p-2 rounded";
            li.innerHTML = `${input.value} <button class="text-red-400" onclick="this.parentElement.remove()">✕</button>`;
            document.getElementById('todo-list').appendChild(li);
            input.value = '';
        }

        // 7. Search Filter
        function filterItems() {
            const term = document.getElementById('search-input').value.toLowerCase();
            const items = document.querySelectorAll('#item-list li');
            items.forEach(item => {
                item.style.display = item.innerText.toLowerCase().includes(term) ? 'block' : 'none';
            });
        }

        // 8. Drum Kit
        function playDrum(type) {
            const msg = new SpeechSynthesisUtterance(type);
            msg.rate = 2; // Simulate sound impact
            window.speechSynthesis.speak(msg);
            // Visual feedback
            const pads = document.querySelectorAll('.drum-pad');
            pads.forEach(p => { if(p.innerText.includes(type)) { p.classList.add('bg-white/20'); setTimeout(()=>p.classList.remove('bg-white/20'), 100); }});
        }
        window.addEventListener('keydown', (e) => {
            if(e.key.toLowerCase() === 'a') playDrum('Kick');
            if(e.key.toLowerCase() === 's') playDrum('Snare');
            if(e.key.toLowerCase() === 'd') playDrum('Hi-Hat');
        });

        // 9. Dice Roller
        function rollDice() {
            const dice = document.getElementById('dice');
            dice.style.transform = "rotate(360deg)";
            setTimeout(() => {
                const nums = ['⚀','⚁','⚂','⚃','⚄','⚅'];
                dice.innerText = nums[Math.floor(Math.random()*6)];
                dice.style.transform = "rotate(0deg)";
            }, 300);
        }

        // 10. Password Gen
        function generatePass() {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
            let retVal = "";
            for (let i = 0; i < 10; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            document.getElementById('pass-output').value = retVal;
        }

        // 11. Accordion
        function toggleAcc(id) {
            const el = document.getElementById(`acc-${id}`);
            el.classList.toggle('hidden');
        }

        // 12. Image Slider
        let currentImg = 10;
        function moveSlider(dir) {
            currentImg += dir;
            document.getElementById('slider').style.backgroundImage = `url('https://picsum.photos/id/${currentImg}/400/200')`;
        }
