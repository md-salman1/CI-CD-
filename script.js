// ... existing JS content ...

// FIXED: Update portfolio change element
function updatePortfolioValue() {
    if (portfolioEl) {
        const change = (Math.random() - 0.5) * 500;
        portfolioValue += change;
        portfolioEl.textContent = portfolioValue.toFixed(2);
        
        // Update portfolio change element
        const portfolioChange = document.querySelector('.portfolio-change');
        if (portfolioChange) {
            const isPositive = change >= 0;
            portfolioChange.textContent = `${isPositive ? '+' : ''}${(change/portfolioValue*100).toFixed(2)}% (24h)`;
            portfolioChange.className = `portfolio-change ${isPositive ? 'positive' : 'negative'}`;
        }
    }
}

// FIXED: Network node creation
function createNetworkNode() {
    const hero = document.querySelector('.hero'); // Should work now
    if (!hero) return;
    
    // ... rest of the function ...
}

// FIXED: Remove conflicting 3D effects
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px)';
        card.style.boxShadow = '0 25px 50px rgba(0, 102, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
    
    // REMOVED the mousemove 3D rotation
});