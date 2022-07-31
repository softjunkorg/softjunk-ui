import { useEffect } from "react";

export default function useOutsideClick(
    ref: HTMLElement,
    handler: (doc: Document, ev: MouseEvent) => any,
) {
    useEffect(() => {
        const listener = (...args) => {
            if (ref && ref?.contains(args[0].target)) return;
            handler(args[0], args[1]);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}
