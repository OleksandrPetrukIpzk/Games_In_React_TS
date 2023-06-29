
interface ChangeNumber{
    (numbers: Array<Array<object>>,
     targetId: number,
     number: number,
     setNumbers: any

    ):void
}
interface Column{
    id?: number,
    number?: number
}
export const changeNumber : ChangeNumber = (numbers, targetId, number, setNumbers) =>{
    const oldNumbers = numbers.map( row =>{
            return row.map((col:Column) => {
                if(col.id === targetId){
                    return {...col, number: number}
                }
                return col
            })
        }
    );
    setNumbers(oldNumbers);
}