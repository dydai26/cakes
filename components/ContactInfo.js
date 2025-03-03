function ContactInfo() {
    try {
        return (
            <footer data-name="contact-info" className="py-12 bg-gray-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-name="contact-section">
                            <h3 className="text-xl font-bold mb-4">Контакти</h3>
                            <div className="space-y-2">
                                <p className="flex items-center">
                                    <i className="fas fa-phone mr-2"></i>
                                    +38 (067) 543 69 71
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@vyrobnykplyus.com
                                </p>
                            </div>
                        </div>
                        <div data-name="hours-section">
                            <h3 className="text-xl font-bold mb-4">Робочі дні</h3>
                            <div className="space-y-2">
                                <p>ПН - ПТ: 9год - 18год</p>
                                <p>СБ: 10год - 4год</p>
                                <p>НД: Вихідний</p>
                            </div>
                        </div>
                        <div data-name="social-section">
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-blue-400">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="hover:text-blue-400">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="hover:text-blue-400">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('ContactInfo component error:', error);
        reportError(error);
        return null;
    }
}
