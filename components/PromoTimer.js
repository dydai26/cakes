function PromoTimer() {
    try {
        const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

        React.useEffect(() => {
            const timer = setInterval(() => {
                const newTimeLeft = calculateTimeLeft();
                setTimeLeft(newTimeLeft);
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        return (
            <div data-name="promo-timer" className="timer-container py-6 px-4 mb-8">
                <h3 className="text-center text-xl mb-4">Offer Ends In:</h3>
                <div className="grid grid-cols-4 gap-4 text-center">
                    <div data-name="timer-days">
                        <span className="timer-digit text-3xl font-bold block">{timeLeft.days}</span>
                        <span className="text-sm">Days</span>
                    </div>
                    <div data-name="timer-hours">
                        <span className="timer-digit text-3xl font-bold block">{timeLeft.hours}</span>
                        <span className="text-sm">Hours</span>
                    </div>
                    <div data-name="timer-minutes">
                        <span className="timer-digit text-3xl font-bold block">{timeLeft.minutes}</span>
                        <span className="text-sm">Minutes</span>
                    </div>
                    <div data-name="timer-seconds">
                        <span className="timer-digit text-3xl font-bold block">{timeLeft.seconds}</span>
                        <span className="text-sm">Seconds</span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('PromoTimer component error:', error);
        reportError(error);
        return null;
    }
}
