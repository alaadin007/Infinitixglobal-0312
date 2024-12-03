class InfinitixSearch {
    constructor(container, options) {
        this.container = container;
        this.options = {
            industry: 'medical',
            apiUrl: 'https://api.infinitixglobal.com/search',
            ...options
        };
        this.init();
    }

    async init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <div class="${this.options.industry}-search-container">
                <div class="search-header">
                    <h2>${this.options.title || 'Search'}</h2>
                </div>
                <div class="${this.options.industry}-search-box">
                    <input type="text" placeholder="${this.options.placeholder || 'Ask a question...'}" class="search-input">
                    <div class="search-info">AI-powered search ✨</div>
                </div>
                <div class="related-questions"></div>
            </div>
        `;
    }

    attachEventListeners() {
        const input = this.container.querySelector('.search-input');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch(input.value);
            }
        });
    }

    async performSearch(query) {
        try {
            const response = await fetch(this.options.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query,
                    industry: this.options.industry
                })
            });
            const data = await response.json();
            this.displayResults(data);
        } catch (error) {
            console.error('Search failed:', error);
        }
    }

    displayResults(data) {
        // Implement results display logic
    }
}

window.InfinitixSearch = InfinitixSearch;