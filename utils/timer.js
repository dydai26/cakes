function calculateTimeLeft() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3); // 3 days from now
    
    const difference = endDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
    };
}
