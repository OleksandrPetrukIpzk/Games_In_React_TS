import React, {Dispatch} from "react";

interface ColorTableInterface {
    (
        setStyleTable: Dispatch<React.SetStateAction<object>>,
        fills: string
    ): void
}

export const colorTable: ColorTableInterface = (setStyleTable, fills) => {
    setStyleTable({border: fills});
}