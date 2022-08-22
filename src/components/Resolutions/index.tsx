import React, { FC, useMemo } from "react";
import { Global, CSSObject, css } from "@emotion/react";

interface ResolutionsObject {
    "1200.800": CSSObject;
    "1280.720": CSSObject;
    "1280.1024": CSSObject;
    "1360.768": CSSObject;
    "1366.768": CSSObject;
    "1440.900": CSSObject;
    "1536.864": CSSObject;
    "1600.900": CSSObject;
    "1920.1080": CSSObject;
}

interface ResolutionsProps {
    resolutions?: Partial<ResolutionsObject>;
}

const DefaultResolutions = {
    "1200.800": { zoom: 0.8 },
    "1280.720": { zoom: 0.8 },
    "1280.1024": { zoom: 0.9 },
    "1360.768": { zoom: 0.8 },
    "1366.768": { zoom: 0.9 },
    "1440.900": { zoom: 0.9 },
    "1536.864": { zoom: 1 },
    "1600.900": { zoom: 0.9 },
    "1920.1080": { zoom: 1 },
};

const Resolutions: FC<ResolutionsProps> = props => {
    const { resolutions = DefaultResolutions } = props;
    const styles = useMemo(
        () =>
            Object.entries(resolutions)
                .map(value => {
                    const [width, height] = value[0].split(".");
                    const key = `@media only screen and (min-width: ${width}px) and (min-height: ${height}px)`;
                    return `${key} { body { ${css(value[1]).styles} } }`;
                })
                .join("\n\n"),
        [resolutions],
    );

    return (
        <Global
            styles={css`
                ${styles}
            `}
        />
    );
};

export default Resolutions;
export { ResolutionsObject, ResolutionsProps, DefaultResolutions };
