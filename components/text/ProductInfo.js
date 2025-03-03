function ProductInfo() {
    try {
        return (
            <section data-name="product-info" className="py-12">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-name="product-image-container">
                            <img 
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                                alt="Premium Headphones" 
                                className="product-image w-full"
                                data-name="product-image"
                            />
                        </div>
                        <div data-name="product-details">
                            <h2 className="text-3xl font-bold mb-4">Premium Wireless Headphones</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    Experience crystal-clear sound quality with our premium wireless headphones. 
                                    Featuring advanced noise cancellation technology and comfortable design for 
                                    extended listening sessions.
                                </p>
                                <ul className="space-y-2">
                                    <li data-name="feature-item" className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        40-hour battery life
                                    </li>
                                    <li data-name="feature-item" className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        Active noise cancellation
                                    </li>
                                    <li data-name="feature-item" className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        Premium build quality
                                    </li>
                                </ul>
                                <div data-name="price-container" className="mt-6">
                                    <p className="text-2xl font-bold">
                                        $199.99 <span className="text-lg line-through text-gray-500">$299.99</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProductInfo component error:', error);
        reportError(error);
        return null;
    }
}
