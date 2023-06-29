interface ColorElement{
    (setStyle: any,
    color: string): void
}
export const colorElement : ColorElement = (setStyle, color) =>{
    setStyle({color: "black", background: color });
}