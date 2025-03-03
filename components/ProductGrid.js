function ProductGrid() {
    try {
        const [selectedProduct, setSelectedProduct] = React.useState(null);
        
        const products = [
            {
                id: 1,
                name: "Торт Ryzhyk",
                shortDescription: "Rich, moist chocolate cake with ganache",
                description: 
                "Торт 'Ryzhyk' – смачний витвір з золотистого бісквіту та ніжного крему. Насолоджуйтесь його багатим смаком та м’якою текстурою!",
                ingredients: "смачний витвір з золотистого бісквіту та ніжного крему.",
                price: 30.00,
                image: "./img/HImage4.jpg"
            },
            {
                id: 2,
                name: "Торт 'SPARTAK з чорносливом'",
                shortDescription: "Торт 'SPARTAK з чорносливом'",
                description: 
                "Торт 'SPARTAK з чорносливом' — класичний шоколадний торт із вишуканим смаком чорносливу.",
                ingredients: "класичний шоколадний торт із вишуканим смаком чорносливу.",
                price: 24.99,
                image: "./img/HImage5.jpg"
            },
            {
                id: 3,
                name: "Торт SPARTAK",
                shortDescription: "Торт 'SPARTAK з чорносливом'",
                description: 
                "Торт 'Медовий з чорною смородиною' — ніжні медові коржі в поєднанні з освіжаючою чорною смородиною для справжньої гастрономічної насолоди.",
                ingredients: "класичний шоколадний торт із вишуканим смаком чорносливу.",
                price: 24.99,
                image: "./img/HImage2.jpg"
            },
            {
                id: 4,
                name: "Бісквітний уголок 'Горішок'",
                shortDescription: "Бісквітний уголок 'Горішок'",
                description: 
                "Бісквітний уголок 'Горішок' — ароматний десерт з ніжним бісквітом і насиченим смаком згущеного молока.",
                ingredients: "ароматний десерт з ніжним бісквітом і насиченим смаком згущеного молока.",
                price: 32.99,
                image: "./img/HImage7.jpg"
            },
            {
                id: 5,
                name: "Заварне зі згущеним увареним молоком",
                shortDescription: "Тістечко 'Заварне зі згущеним увареним молоком'",
                description: 
                " хрустке заварне тісто з густим і ароматним кремом із згущеного молока. ",
                ingredients: "  насиченим смаком згущеного молока.",
                price: 32.99,
                image: "./img/HImage00005.jpg"
            },
            {
                id: 6,
                name: "Тістечко заверне 'Манго'",
                shortDescription: "Тістечко заверне 'Манго'",
                description: 
                "Тістечка заварні 'МАНГО' – насичений смак екзотичного манго в ніжному заварному тісті. Свіжість та аромат тропіків у кожному шматочку!",
                ingredients: "насичений смак екзотичного манго в ніжному заварному тісті",
                price: 32.99,
                image: "./img/HImage00006.jpg"
            },
            {
                id: 7,
                name: "Тістечко заверне 'З сирковим кремом'",
                shortDescription: "Тістечко заверне 'З сирковим кремом'",
                description: 
                "Тістечка заварні з сирковим кремом – ніжне заварне тісто, наповнене кремом із сиру, що дарує неперевершену легкість і свіжість смаку. Ідеальний десерт для справжніх гурманів!" ,
                ingredients: "ніжне заварне тісто, наповнене кремом із сиру",
                price: 32.99,
                image: "./img/HImage00007.jpg"
            },
            {
                id: 8,
                name: "Тістечко заверне 'COCOLOVE'",
                shortDescription: "Тістечко заверне 'COCOLOVE'",
                description: 
                "Бісквітний уголок 'Горішок' — ароматний десерт з ніжним бісквітом і насиченим смаком згущеного молока.",
                ingredients: "ароматний десерт з ніжним бісквітом і насиченим смаком згущеного молока.",
                price: 32.99,
                image: "./img/HImage00009.jpg"
            },
        ];

        return (
            <section id="products" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Каталог</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                        {products.map(product => (
                            <ProductCard 
                                key={product.id}
                                product={product}
                                onOpen={setSelectedProduct}
                            />
                        ))}
                    </div>
                </div>
                {selectedProduct && (
                    <ProductModal 
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </section>
        );
    } catch (error) {
        console.error('ProductGrid component error:', error);
        reportError(error);
        return null;
    }
}
