interface ColorTable{
    (
        setStyleTable:any,
        fills: string
    ):void
}
export const colorTable : ColorTable = (setStyleTable, fills) =>{
    setStyleTable({border: fills});
}