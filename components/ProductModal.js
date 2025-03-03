function ProductModal({ product, onClose }) {
    try {
        if (!product) return null;

        return (
            <div className="overlay" onClick={onClose}>
                <div 
                    className="modal-content p-6 scale-in"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <button onClick={onClose}>
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                        <h3 className="font-semibold">Склад:</h3>
                        <p className="text-gray-600">{product.ingredients}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-rose-600">
                            {product.price} грн
                        </span>
                        <button 
                            className="bg-rose-600 text-white px-6 py-2 rounded-full
                                     hover:bg-rose-700 transition duration-300"
                        >
                            Замовити
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductModal component error:', error);
        reportError(error);
        return null;
    }
}
