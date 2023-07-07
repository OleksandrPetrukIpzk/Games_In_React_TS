interface IsRightColumnInterface {
    (i: number,
     firstElement: number,
     lastElement: number): boolean
}

export const isRightColumn: IsRightColumnInterface = (i, firstElement, lastElement) => {
    return i >= firstElement && i <= lastElement
}