// ============================================
// Frontend Effect Playground - Animated Mesh
// ============================================

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        colors: ['#6750A4', '#EADDFF', '#9381FF', '#B794F6'],
        nodeCount: 8,
        particleCount: 20,
        connectionDistance: 200,
        mouseInfluenceRadius: 150,
        animationSpeed: 0.001
    };

    // State
    let canvas = null;
    let ctx = null;
    let width = 0;
    let height = 0;
    let nodes = [];
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let animationId = null;

    // Node class for mesh control points
    class MeshNode {
        constructor(x, y) {
            this.baseX = x;
            this.baseY = y;
            this.x = x;
            this.y = y;
            this.phaseX = Math.random() * Math.PI * 2;
            this.phaseY = Math.random() * Math.PI * 2;
            this.amplitude = 30 + Math.random() * 20;
            this.speedX = 0.5 + Math.random() * 0.5;
            this.speedY = 0.3 + Math.random() * 0.3;
            this.radius = 4 + Math.random() * 3;
            this.colorIndex = Math.floor(Math.random() * CONFIG.colors.length);
        }

        update(time) {
            // Animate with sine waves for organic movement
            this.x = this.baseX + Math.sin(time * this.speedX + this.phaseX) * this.amplitude;
            this.y = this.baseY + Math.cos(time * this.speedY + this.phaseY) * this.amplitude;

            // Mouse interaction
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONFIG.mouseInfluenceRadius) {
                const force = (CONFIG.mouseInfluenceRadius - distance) / CONFIG.mouseInfluenceRadius;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 20;
                this.y -= Math.sin(angle) * force * 20;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = CONFIG.colors[this.colorIndex];
            ctx.fill();
        }
    }

    // Particle class for floating elements
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = 1 + Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = 0.3 + Math.random() * 0.4;
            this.colorIndex = Math.floor(Math.random() * CONFIG.colors.length);
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse influence
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONFIG.mouseInfluenceRadius) {
                const force = (CONFIG.mouseInfluenceRadius - distance) / CONFIG.mouseInfluenceRadius;
                this.x -= dx / distance * force * 2;
                this.y -= dy / distance * force * 2;
            }

            // Wrap around edges
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = CONFIG.colors[this.colorIndex];
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    // Draw gradient background
    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#F0EBF8');
        gradient.addColorStop(0.5, '#EDE7F6');
        gradient.addColorStop(1, '#E8E0F0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    }

    // Draw curved connections between nodes
    function drawMesh() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[j].x - nodes[i].x;
                const dy = nodes[j].y - nodes[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONFIG.connectionDistance) {
                    const opacity = (1 - distance / CONFIG.connectionDistance) * 0.3;

                    // Draw Bezier curve connection
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);

                    const midX = (nodes[i].x + nodes[j].x) / 2;
                    const midY = (nodes[i].y + nodes[j].y) / 2;
                    const offset = 30;

                    ctx.quadraticCurveTo(
                        midX + Math.sin(Date.now() * 0.001) * offset,
                        midY + Math.cos(Date.now() * 0.001) * offset,
                        nodes[j].x,
                        nodes[j].y
                    );

                    const gradient = ctx.createLinearGradient(
                        nodes[i].x, nodes[i].y,
                        nodes[j].x, nodes[j].y
                    );
                    gradient.addColorStop(0, CONFIG.colors[nodes[i].colorIndex]);
                    gradient.addColorStop(1, CONFIG.colors[nodes[j].colorIndex]);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1.5;
                    ctx.globalAlpha = opacity;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    // Draw connections between particles and nearby nodes
    function drawParticleConnections() {
        particles.forEach(particle => {
            nodes.forEach(node => {
                const dx = node.x - particle.x;
                const dy = node.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 80) {
                    const opacity = (1 - distance / 80) * 0.4;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(node.x, node.y);
                    ctx.strokeStyle = CONFIG.colors[node.colorIndex];
                    ctx.lineWidth = 0.5;
                    ctx.globalAlpha = opacity;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            });
        });
    }

    // Initialize mesh nodes
    function initNodes() {
        nodes = [];
        const cols = 4;
        const rows = 2;
        const cellWidth = width / (cols + 1);
        const cellHeight = 80 / (rows + 1);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = cellWidth * (col + 1);
                const y = cellHeight * (row + 1);
                nodes.push(new MeshNode(x, y));
            }
        }
    }

    // Initialize particles
    function initParticles() {
        particles = [];
        for (let i = 0; i < CONFIG.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Main animation loop
    let time = 0;
    function animate() {
        time += 16;
        drawBackground();

        // Update and draw
        nodes.forEach(node => {
            node.update(time * CONFIG.animationSpeed);
            node.draw();
        });

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawMesh();
        drawParticleConnections();

        animationId = requestAnimationFrame(animate);
    }

    // Handle resize
    function handleResize() {
        const container = canvas.parentElement;
        width = container.offsetWidth;
        height = container.offsetHeight;

        canvas.width = width;
        canvas.height = height;

        initNodes();
        initParticles();
    }

    // Handle mouse movement
    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    // Handle mouse leave
    function handleMouseLeave() {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    // Public API
    window.MeshBackground = {
        init: function(canvasId) {
            canvas = document.getElementById(canvasId);
            if (!canvas) {
                console.error('Canvas element not found:', canvasId);
                return;
            }

            ctx = canvas.getContext('2d');

            // Initial setup
            handleResize();

            // Event listeners
            window.addEventListener('resize', handleResize);
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mouseleave', handleMouseLeave);

            // Start animation
            animate();
        },

        destroy: function() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            window.removeEventListener('resize', handleResize);
            if (canvas) {
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('mouseleave', handleMouseLeave);
            }
        }
    };

})();
