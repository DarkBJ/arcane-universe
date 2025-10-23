export function toggleMute(videoRef, isMuted, setIsMuted) {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
        video.muted = false;
        setIsMuted(false);
    } else {
        video.muted = true;
        setIsMuted(true);
    }
}