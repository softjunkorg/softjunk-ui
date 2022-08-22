import React, { FC, ReactNode } from "react";

interface NuiProps {
    show: boolean;
    children?: ReactNode;
}

const Nui: FC<NuiProps> = props => {
    const { show, children } = props;
    return <div style={{ display: show ? "block" : "none" }}>{children}</div>;
};

export default Nui;
export { NuiProps };
