import { useEffect, useRef } from 'react';

function useIntersectionObserver(callback, options) {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                callback();
            }
        }, options);

        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [callback, options]);

    return targetRef;
}

export default useIntersectionObserver;
