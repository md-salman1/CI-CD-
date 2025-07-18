// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contact-form');

// Loading Screen Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(6px, 6px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });
});

// Crypto Price Ticker Animation
const cryptoPrices = {
    btc: 45230,
    eth: 3180,
    ada: 0.48,
    dot: 28.50,
    sol: 105.20
};

function updateCryptoPrices() {
    Object.keys(cryptoPrices).forEach(crypto => {
        const element = document.getElementById(`${crypto}-price`);
        if (element) {
            // Simulate price fluctuation
            const currentPrice = cryptoPrices[crypto];
            const fluctuation = (Math.random() - 0.5) * 0.02; // ±1% change
            const newPrice = currentPrice * (1 + fluctuation);
            cryptoPrices[crypto] = newPrice;
            
            // Update display
            if (crypto === 'ada') {
                element.textContent = newPrice.toFixed(2);
            } else if (crypto === 'dot') {
                element.textContent = newPrice.toFixed(2);
            } else if (crypto === 'sol') {
                element.textContent = newPrice.toFixed(2);
            } else {
                element.textContent = Math.floor(newPrice).toLocaleString();
            }
            
            // Add color animation based on change
            if (fluctuation > 0) {
                element.style.color = '#00ff88';
            } else {
                element.style.color = '#ff4444';
            }
            
            setTimeout(() => {
                element.style.color = '#00ff88';
            }, 1000);
        }
    });
}

// Update prices every 3 seconds
setInterval(updateCryptoPrices, 3000);

// Blockchain Visualization
let blockCount = 1;
const blockChain = document.querySelector('.block-chain');

function createNewBlock() {
    const newBlock = document.createElement('div');
    newBlock.className = 'block';
    newBlock.innerHTML = `
        <div class="block-header">Block #${blockCount}</div>
        <div class="block-content">
            <div class="block-data">Hash: 0x${Math.random().toString(16).substr(2, 8)}...</div>
            <div class="block-data">Transactions: ${Math.floor(Math.random() * 50) + 1}</div>
            <div class="block-data">Timestamp: ${new Date().toLocaleTimeString()}</div>
        </div>
    `;
    
    blockChain.appendChild(newBlock);
    blockCount++;
    
    // Remove old blocks to prevent overflow
    if (blockChain.children.length > 5) {
        blockChain.removeChild(blockChain.firstChild);
    }
    
    // Scroll to show new block
    blockChain.scrollLeft = blockChain.scrollWidth;
}

// Add new block every 8 seconds
setInterval(createNewBlock, 8000);

// Initialize first timestamp
document.addEventListener('DOMContentLoaded', () => {
    const timestamp = document.querySelector('.timestamp');
    if (timestamp) {
        timestamp.textContent = new Date().toLocaleTimeString();
    }
});

// Network Statistics Animation
const networkStats = {
    hashrate: 127.5,
    nodes: 12847,
    blockheight: 745230
};

function updateNetworkStats() {
    const hashrateEl = document.getElementById('hashrate');
    const nodesEl = document.getElementById('nodes');
    const blockheightEl = document.getElementById('blockheight');
    
    if (hashrateEl) {
        networkStats.hashrate += (Math.random() - 0.5) * 2;
        hashrateEl.textContent = `${networkStats.hashrate.toFixed(1)} TH/s`;
    }
    
    if (nodesEl) {
        networkStats.nodes += Math.floor((Math.random() - 0.5) * 10);
        nodesEl.textContent = networkStats.nodes.toLocaleString();
    }
    
    if (blockheightEl) {
        networkStats.blockheight += Math.random() > 0.7 ? 1 : 0;
        blockheightEl.textContent = networkStats.blockheight.toLocaleString();
    }
}

setInterval(updateNetworkStats, 5000);

// Portfolio Value Animation
let portfolioValue = 25847.50;
const portfolioEl = document.getElementById('portfolio-value');

function updatePortfolioValue() {
    if (portfolioEl) {
        const change = (Math.random() - 0.5) * 500;
        portfolioValue += change;
        portfolioEl.textContent = portfolioValue.toFixed(2);
        
        // Animate the change
        portfolioEl.style.transform = 'scale(1.05)';
        setTimeout(() => {
            portfolioEl.style.transform = 'scale(1)';
        }, 200);
    }
}

setInterval(updatePortfolioValue, 7000);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Feature Cards Interactive Effects
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) rotateX(5deg)';
        card.style.boxShadow = '0 25px 50px rgba(0, 102, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0)';
        card.style.boxShadow = 'none';
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
        
        // Reset form
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
            submitBtn.disabled = false;
        }, 3000);
    }, 2000);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const networkAnimation = document.querySelector('.network-animation');
    
    if (hero && networkAnimation) {
        const rate = scrolled * -0.5;
        networkAnimation.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});

// Dynamic Background Color Changes
const heroBackground = document.querySelector('.hero-bg');
const colors = [
    'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, #2e1a1a 50%, #3e1621 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, #1a2e1a 50%, #213e16 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
];

let currentColorIndex = 0;
function changeBackgroundColor() {
    if (heroBackground) {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        heroBackground.style.background = colors[currentColorIndex];
    }
}

setInterval(changeBackgroundColor, 15000);

// Typing Animation for Hero Title
function typeAnimation() {
    const titleLines = document.querySelectorAll('.title-line');
    const texts = ['Decentralized', 'Future', 'Awaits'];
    
    titleLines.forEach((line, index) => {
        const text = texts[index];
        line.textContent = '';
        let i = 0;
        
        setTimeout(() => {
            const interval = setInterval(() => {
                line.textContent += text[i];
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                }
            }, 100);
        }, index * 800);
    });
}

// Initialize typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeAnimation, 3000);
});

// Blockchain Network Visualization
function createNetworkNode() {
    const hero = document.querySelector('.hero');
    const node = document.createElement('div');
    node.className = 'network-node';
    node.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(0, 212, 255, 0.8);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        pointer-events: none;
        z-index: 1;
    `;
    
    // Random position
    node.style.left = Math.random() * 100 + '%';
    node.style.top = Math.random() * 100 + '%';
    
    // Random animation
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;
    
    node.style.animation = `networkFloat ${duration}s ease-in-out ${delay}s infinite`;
    
    hero.appendChild(node);
    
    // Remove node after animation
    setTimeout(() => {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }, (duration + delay) * 1000);
}

// Add network animation keyframes
const networkStyles = document.createElement('style');
networkStyles.textContent = `
    @keyframes networkFloat {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.2); opacity: 1; }
    }
`;
document.head.appendChild(networkStyles);

// Create network nodes periodically
setInterval(createNetworkNode, 800);

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Set initial timestamps
    updateNetworkStats();
    updateCryptoPrices();
    
    // Add smooth transitions to all elements
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
        el.style.transition = 'all 0.3s ease';
    });
    
    console.log('🔗 CryptoChain blockchain website initialized');
    console.log('⛓️ All systems operational');
});