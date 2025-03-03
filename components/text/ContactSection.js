function ContactSection() {
    try {
        return (
            <section id="contact" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Контакти</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Адреса:</h3>
                                <p className="text-gray-600">
                                вул. Черкасова 31, м. Кривий ріг
                                <br />Дніпропетровська обл., 30079
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Робочі дні</h3>
                                <p className="text-gray-600">
                                ПН - ПТ: 9год - 18год<br />
                                СБ: 10год - 4год<br />
                                НД: Вихідний
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Контакти</h3>
                                <p className="text-gray-600">
                                +38 (067) 543 69 71<br />
                                info@vyrobnykplyus.com
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:border-rose-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input 
                                        type="Phone"
                                        className="w-full px-4 py-2 border rounded-lg focus:border-rose-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea 
                                        rows="4"
                                        className="w-full px-4 py-2 border rounded-lg focus:border-rose-500 focus:outline-none"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-yellow-700 
                                             transition duration-300"
                                >
                                    Відправити
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ContactSection component error:', error);
        reportError(error);
        return null;
    }
}
