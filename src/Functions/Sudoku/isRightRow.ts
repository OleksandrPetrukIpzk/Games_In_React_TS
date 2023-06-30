
interface isRightRowInterface{
    (i: number, firstElement: number, secondElement:number, lastElement:number): boolean
}


export const isRightRow : isRightRowInterface = (i, firstElement, secondElement, lastElement) =>{
    return i === firstElement || i === secondElement || i === lastElement
}