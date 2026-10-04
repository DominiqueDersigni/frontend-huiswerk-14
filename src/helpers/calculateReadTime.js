function calculateReadTime(text) {
    const words = text.split(" ").length;
    const minutes = (words / 100) * 0.3;

    return Math.ceil(minutes);
}

export default calculateReadTime;