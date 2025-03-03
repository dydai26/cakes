
function VideoSection() {
    try {
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Виробництво
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="video-container rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Behind the Scenes"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('VideoSection component error:', error);
        reportError(error);
        return null;
    }
}
