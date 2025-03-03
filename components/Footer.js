function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-white pt-12 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Soyuz Konditer</h3>
                            <p className="text-gray-400">
                            Створюйте смачні моменти з першокласними інгредієнтами
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Посилання</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white">Головна</a></li>
                                <li><a href="#products" className="text-gray-400 hover:text-white">Продукт</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white">Про нас</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Контакти</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center">
                                    <i className="fas fa-map-marker-alt w-5"></i>
                                    вул. Черкасова 31, м. Кривий ріг
                                <br />Дніпропетровська обл., 30079
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-phone w-5"></i>
                                    +38 (067) 543 69 71
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope w-5"></i>
                                    info@vyrobnykplyus.com
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Соціальні мережі</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6">
                        <p className="text-center text-gray-400">
                            © {new Date().getFullYear()} Soyuz Konditer.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
