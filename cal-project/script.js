// --- Navigation Logic ---
        function switchTab(tabName) {
            // Update Buttons
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`tab-${tabName}`).classList.add('active');

            // Update Content
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            document.getElementById(`content-${tabName}`).classList.remove('hidden');
        }

        // --- Calculator Logic ---
        let calcBuffer = "0";
        let calcHistoryStr = "";

        function updateCalcUI() {
            document.getElementById('calc-output').innerText = calcBuffer;
            document.getElementById('calc-history').innerText = calcHistoryStr;
        }

        function calcNum(num) {
            if (calcBuffer === "0" && num !== ".") {
                calcBuffer = num;
            } else {
                if (num === "." && calcBuffer.includes(".")) return;
                calcBuffer += num;
            }
            updateCalcUI();
        }

        function calcOp(op) {
            const lastChar = calcBuffer.slice(-1);
            if (['+','-','*','/'].includes(lastChar)) {
                calcBuffer = calcBuffer.slice(0, -1) + op;
            } else {
                calcBuffer += op;
            }
            updateCalcUI();
        }

        function calcClear() {
            calcBuffer = "0";
            calcHistoryStr = "";
            updateCalcUI();
        }

        function calcEqual() {
            try {
                // Using Function constructor instead of eval for slightly better safety
                const result = new Function(`return ${calcBuffer}`)();
                calcHistoryStr = calcBuffer + " =";
                calcBuffer = Number.isInteger(result) ? result.toString() : result.toFixed(4).replace(/\.?0+$/, "");
            } catch (e) {
                calcBuffer = "Error";
            }
            updateCalcUI();
        }

        // --- BMI Logic ---
        function calculateBMI() {
            const h = parseFloat(document.getElementById('bmi-height').value) / 100;
            const w = parseFloat(document.getElementById('bmi-weight').value);
            const panel = document.getElementById('bmi-result-panel');

            if (!h || !w || h <= 0 || w <= 0) {
                alert("Please enter valid height and weight values.");
                return;
            }

            const bmi = (w / (h * h)).toFixed(1);
            panel.classList.remove('hidden');

            const valEl = document.getElementById('bmi-value');
            const statusEl = document.getElementById('bmi-status');
            const descEl = document.getElementById('bmi-desc');

            valEl.innerText = bmi;

            if (bmi < 18.5) {
                statusEl.innerText = "Underweight";
                statusEl.className = "inline-block px-4 py-1 rounded-full text-sm font-bold bg-amber-500/20 text-amber-300";
                descEl.innerText = "Your body weight is lower than healthy. Consider consulting a nutritionist.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                statusEl.innerText = "Normal Weight";
                statusEl.className = "inline-block px-4 py-1 rounded-full text-sm font-bold bg-emerald-500/20 text-emerald-300";
                descEl.innerText = "Great job! You are in the healthy weight range for your height.";
            } else if (bmi >= 25 && bmi <= 29.9) {
                statusEl.innerText = "Overweight";
                statusEl.className = "inline-block px-4 py-1 rounded-full text-sm font-bold bg-orange-500/20 text-orange-300";
                descEl.innerText = "You are slightly above the healthy range. Regular exercise is recommended.";
            } else {
                statusEl.innerText = "Obese";
                statusEl.className = "inline-block px-4 py-1 rounded-full text-sm font-bold bg-rose-500/20 text-rose-300";
                descEl.innerText = "High BMI indicates a risk for health issues. Please consult a professional.";
            }
        }

        // --- Form Validator Logic ---
        function handleFormSubmit(e) {
            e.preventDefault();
            
            const name = document.getElementById('val-name').value.trim();
            const email = document.getElementById('val-email').value.trim();
            const pass = document.getElementById('val-pass').value;
            
            let isValid = true;

            // Name Check
            if (name.length < 3) {
                document.getElementById('err-name').innerText = "Name must be at least 3 characters";
                isValid = false;
            } else {
                document.getElementById('err-name').innerText = "";
            }

            // Email Check (Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('err-email').innerText = "Please enter a valid email address";
                isValid = false;
            } else {
                document.getElementById('err-email').innerText = "";
            }

            // Password Check
            if (pass.length < 8) {
                document.getElementById('err-pass').innerText = "Password must be at least 8 characters";
                isValid = false;
            } else {
                document.getElementById('err-pass').innerText = "";
            }

            if (isValid) {
                document.getElementById('val-success').classList.remove('hidden');
                document.getElementById('reg-form').reset();
                setTimeout(() => {
                    document.getElementById('val-success').classList.add('hidden');
                }, 4000);
            }
        }