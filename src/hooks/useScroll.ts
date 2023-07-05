import { useEffect, useState } from "react";

export const useScroll = (): number => {
    const isBrowser = typeof window !== "undefined";

    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = () => {
        const currentScroll = isBrowser ? window.scrollY : 0;
        setScroll(currentScroll);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return scroll;
};
