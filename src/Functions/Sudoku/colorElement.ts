import React, {Dispatch} from "react";

interface ColorElementInterface {
    (setStyle: Dispatch<React.SetStateAction<object>>,
     color: string): void
}

export const colorElement: ColorElementInterface = (setStyle, color) => {
    setStyle({color: "black", background: color});
}