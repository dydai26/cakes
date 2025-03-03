const CartContext = React.createContext();

function CartProvider({ children }) {
    try {
        const [cart, setCart] = React.useState([]);
        const [isCartOpen, setIsCartOpen] = React.useState(false);

        const addToCart = (product) => {
            setCart(prevCart => {
                const existingItem = prevCart.find(item => item.id === product.id);
                if (existingItem) {
                    return prevCart.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prevCart, { ...product, quantity: 1 }];
            });
            setIsCartOpen(true);
        };

        const removeFromCart = (productId) => {
            setCart(prevCart => prevCart.filter(item => item.id !== productId));
        };

        const updateQuantity = (productId, newQuantity) => {
            if (newQuantity < 1) return;
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );
        };

        const clearCart = () => {
            setCart([]);
        };

        const getCartTotal = () => {
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        };

        return (
            <CartContext.Provider value={{
                cart,
                isCartOpen,
                setIsCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartTotal
            }}>
                {children}
            </CartContext.Provider>
        );
    } catch (error) {
        console.error('CartProvider error:', error);
        reportError(error);
        return null;
    }
}
