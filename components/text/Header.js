function Header() {
    try {
        return (
            <header data-name="header" className="hero-section py-16">
                <div className="container">
                    <h1 data-name="main-heading" className="text-4xl md:text-5xl font-bold mb-4">
                        Limited Time Offer!
                    </h1>
                    <p data-name="subtitle" className="text-xl md:text-2xl opacity-90">
                        Don't miss out on our exclusive promotional deals
                    </p>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
