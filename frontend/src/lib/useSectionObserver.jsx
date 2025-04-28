import { useEffect, useState } from "react";
const useSectionObserver = (sectionId) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const section = document.getElementById(sectionId);
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            setOpacity(entry.isIntersecting ? 1 : 0);
            });
        },
        { threshold: 0.2 }
        );

        if (section) observer.observe(section);

        return () => {
        if (section) observer.unobserve(section);
        };
    }, [sectionId]);

    return opacity;
    }

export default useSectionObserver;