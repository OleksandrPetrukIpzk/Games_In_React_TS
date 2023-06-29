import {useEffect, useRef} from "react";
import {MAXIMUM_WRONG_COUNT, MINIMAL_WRONG_COUNT, WRONG_CUBES} from "../../../Constants/hangman";
import {useSelector} from "react-redux";

export const Canvas = () => {
    const wrong = useSelector((state:any) => state.rules.wrong);
    const canvasRef = useRef<any>(null);
    useEffect(() => {
        const canvas = canvasRef?.current;
        const context = canvas.getContext('2d');
        if (wrong >= MINIMAL_WRONG_COUNT && wrong <= MAXIMUM_WRONG_COUNT ) {
            const {fillStyle, fillRect} = WRONG_CUBES[Number(wrong)]; // At this moment i have trouble...
            context.fillStyle = fillStyle;
            context.fillRect(fillRect, 0, 50, 50)
        }
    }, [wrong])
    return (<canvas ref={canvasRef}/>)
}