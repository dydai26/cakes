function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav 
            data-name="main-navigation" 
            className={`fixed top-4 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Логотип */}
                    <div 
                        data-name="logo" 
                        className="text-2xl font-bold text-white transition-colors duration-300 drop-shadow-[1px_1px_2px_rgba(128,128,128,1)]"
                    >
                        Soyuz Konditer
                    </div>

                    {/* Бургер-кнопка */}
                    <button 
                        data-name="menu-button"
                        className="md:hidden text-white transition-colors duration-300 drop-shadow-[1px_1px_2px_rgba(128,128,128,1)]"
                        onClick={toggleMenu}
                    >
                        <i className="fas fa-bars text-2xl"></i>
                    </button>

                    {/* Десктопне меню */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white transition-colors duration-300 drop-shadow-[1px_1px_2px_rgba(128,128,128,1)]">Головна</a>
                        <a href="#products" className="text-white transition-colors duration-300 drop-shadow-[1px_1px_2px_rgba(128,128,128,1)]">Продукти</a>
                        <a href="#about" className="text-white transition-colors duration-300 drop-shadow-[1px_1px_2px_rgba(128,128,128,1)]">Про нас</a>
                        <a href="#contact" className="text-white transition-colors duration-300 drop-shadow-[1px_1px_2px_rgba(128,128,128,1)]">Контакти</a>
                    </div>
                </div>
            </div>

            {/* Мобільне меню */}
            <div 
                data-name="mobile-menu"
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
            >
                <div className="p-4">
                    <button 
                        onClick={toggleMenu}
                        className="mb-8 text-gray-600"
                    >
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                    <div className="flex flex-col space-y-4">
                        <a href="#home" className="text-gray-800" onClick={toggleMenu}>Головна</a>
                        <a href="#products" className="text-gray-800" onClick={toggleMenu}>Продукти</a>
                        <a href="#about" className="text-gray-800" onClick={toggleMenu}>Про нас</a>
                        <a href="#contact" className="text-gray-800" onClick={toggleMenu}>Контакти</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
