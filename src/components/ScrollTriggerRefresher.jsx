// ScrollTriggerRefresher.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresher() {
    const location = useLocation();

    useEffect(() => {
        const refreshScrollTrigger = () => {
            ScrollTrigger.refresh();
        };

        const waitForImagesToLoad = () => {
            const images = Array.from(document.images);
            const unloaded = images.filter(img => !img.complete);

            if (unloaded.length === 0) {
                // All images already loaded
                setTimeout(refreshScrollTrigger, 300); // give layout time to settle
            } else {
                let loadedCount = 0;
                unloaded.forEach(img => {
                    img.addEventListener("load", () => {
                        loadedCount++;
                        if (loadedCount === unloaded.length) {
                            setTimeout(refreshScrollTrigger, 300); // all images loaded
                        }
                    });
                });

                // Fallback in case some images never load (e.g., broken links)
                setTimeout(refreshScrollTrigger, 2000);
            }
        };

        waitForImagesToLoad();

        // Optional cleanup if needed later
        return () => { };
    }, [location.pathname]);

    return null;
}