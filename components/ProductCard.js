function ProductCard({ product, onOpen }) {
    try {
        const [isFlipped, setIsFlipped] = React.useState(false);
        const { addToCart } = React.useContext(CartContext);

        return (
            <div 
                data-name="product-card-container"
                className="product-card-wrapper"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                <div className={`product-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* Front of card */}
                    <div className="product-card product-card-front min-h-[450px] flex flex-col justify-between p-4">
                        <div className="aspect-w-4 aspect-h-3 mb-4">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-roboto mb-2">{product.name}</h3>
                        <p className="text-lg font-bold text-grafit-600">{product.price} грн</p>
                    </div>

                    {/* Back of card */}
                    <div className="product-card product-card-back min-h-[450px] flex flex-col justify-between p-4">
                        <h3 className="text-xl font-roboto mb-4">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="mb-4">
                            <h4 className="font-roboto mb-2">Склад:</h4>
                            <p className="text-gray-600 text-sm">{product.ingredients}</p>
                        </div>
                        <div className="flex space-x-2">
                        <button 
        onClick={(e) => {
            e.stopPropagation();
            onOpen(product);
        }}
        className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-roboto hover:bg-gray-700 transition duration-300"
    >
        Детальніше
    </button>
    <button 
        onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
        }}
        className="flex-1 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-roboto hover:bg-rose-700 transition duration-300"
    >
        Додати в кошик
    </button>
</div>

                        </div>
                    </div>
                </div>
            
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}
