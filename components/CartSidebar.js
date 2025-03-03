function CartSidebar() {
    try {
        const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = React.useContext(CartContext);

        if (!isCartOpen) return null;

        const handleCheckout = () => {
            setIsCartOpen(false);
            window.location.hash = 'checkout';
        };

        return (
            <div className="fixed inset-0 z-50 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
                <div className="absolute right-0 top-0 bottom-0 w-96 bg-white shadow-xl">
                    <div className="flex flex-col h-full">
                        <div className="p-4 border-b flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Твій кошик</h2>
                            <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4">
                            {cart.length === 0 ? (
                                <p className="text-center text-gray-500">Твій кошик</p>
                            ) : (
                                <div className="space-y-4">
                                    {cart.map(item => (
                                        <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="flex-grow">
                                                <h3 className="font-medium">{item.name}</h3>
                                                <p className="text-gray-600">{item.price} грн</p>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-gray-500 hover:text-gray-700"
                                                    >
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-gray-500 hover:text-gray-700"
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t">
                            <div className="flex justify-between mb-4">
                                <span className="font-semibold">Total:</span>
                                <span className="font-semibold">{getCartTotal().toFixed(2)} грн</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-rose-600 text-white py-3 rounded-lg
                                         hover:bg-rose-700 transition duration-300"
                                disabled={cart.length === 0}
                            >
                                Оформити замовлення
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CartSidebar component error:', error);
        reportError(error);
        return null;
    }
}
