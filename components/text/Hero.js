function Hero() {
    try {
        return (
            <section data-name="hero-section" id="home" className="hero-section flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        ТМ «Союз Кондитер» – мистецтво смаку у кожному десерті!
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                        Ласкаво просимо у світ витончених солодощів від ТМ «Союз Кондитер» – компанії, 
                        що вже багато років дарує радість своїм клієнтам. Ми поєднуємо традиційні рецепти з сучасними технологіями, створюючи торти та тістечка, які підкорюють з першого шматочка.
                        </p>
                        <a 
                            href="#products"
                            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full 
                                     font-medium hover:bg-blue-100 transition duration-300"
                        >
                            Каталог
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
} 