function App() {
    try {
        React.useEffect(() => {
            observeElements();
        }, []);

        const currentPath = window.location.hash;

        return (
            <CartProvider>
                <div data-name="app-container">
                    <Navigation />
                    {currentPath === '#checkout' ? (
                        <div className="pt-20">
                            <CheckoutPage />
                            <Footer />
                        </div>
                    ) : (
                        <div className="scroll-snap-container">
                            <Hero />
                            <ProductGrid />
                            <VideoSection />
                            <AboutUs />
                            <ContactSection />
                            <Footer />
                        </div>
                    )}
                    <CartSidebar />
                </div>
            </CartProvider>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
