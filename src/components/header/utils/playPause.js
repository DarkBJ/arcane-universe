export function togglePlayPause(videoRef, isPaused, setIsPaused) {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
        video.play();
        setIsPaused(false);
    } else {
        video.pause();
        setIsPaused(true);
    }
}