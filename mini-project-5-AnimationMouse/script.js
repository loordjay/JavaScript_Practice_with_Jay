 const smallCursor = document.getElementById('small-cursor');
        const shadowCursor = document.getElementById('shadow-cursor');
        const container = document.getElementById('cursor-container');

        // Mouse coordinates
        let mouseX = 0;
        let mouseY = 0;
        
        // Shadow cursor coordinates (for easing)
        let shadowX = 0;
        let shadowY = 0;

        // Linear interpolation (lerp) factor - controls the "lag"
        // Lower = more lag/smoothness, Higher = snappier
        const lerpFactor = 0.15;

        // Hide cursor if it leaves window
        document.addEventListener('mouseleave', () => {
            container.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            container.style.opacity = '1';
        });

        // Track mouse position
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move small cursor immediately for responsiveness
            smallCursor.style.left = `${mouseX}px`;
            smallCursor.style.top = `${mouseY}px`;
        });

        // Animation loop for the shadow cursor easing
        function animate() {
            // Lerp calculation: current + (target - current) * factor
            shadowX += (mouseX - shadowX) * lerpFactor;
            shadowY += (mouseY - shadowY) * lerpFactor;

            shadowCursor.style.left = `${shadowX}px`;
            shadowCursor.style.top = `${shadowY}px`;

            requestAnimationFrame(animate);
        }

        // Start animation loop
        requestAnimationFrame(animate);

        // Interaction Listeners
        const hoverTargets = document.querySelectorAll('.hover-target');
        const textTargets = document.querySelectorAll('.hover-text');

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                container.classList.add('cursor-active');
            });
            target.addEventListener('mouseleave', () => {
                container.classList.remove('cursor-active');
            });
        });

        textTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                container.classList.add('cursor-text');
            });
            target.addEventListener('mouseleave', () => {
                container.classList.remove('cursor-text');
            });
        });

        // Click effect
        window.addEventListener('mousedown', () => {
            container.classList.add('cursor-clicking');
        });

        window.addEventListener('mouseup', () => {
            container.classList.remove('cursor-clicking');
        });

        // Handle Touch (Disable custom cursor on touch devices to avoid ghosting)
        window.addEventListener('touchstart', () => {
            container.style.display = 'none';
            document.body.style.cursor = 'auto';
        }, { once: true });
