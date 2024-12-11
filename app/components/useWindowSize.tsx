'use client'
import React from "react";
import {throttle} from "./utils";

export const useWindowSize = (ms: number = 200) => {

    const [windowSize, setWindowSize] = React.useState<{width: number; height: number}>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        const throttledHandleResize = throttle(handleResize, ms);
        window.addEventListener("resize", throttledHandleResize);
        handleResize();
        return () => window.removeEventListener("resize", throttledHandleResize);
    }, []);

    return windowSize;
};