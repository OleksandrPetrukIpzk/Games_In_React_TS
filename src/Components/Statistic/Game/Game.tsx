export const Game = ({game}: any) => {
    const {isWin, commentaries, name} = game;
    return (<div className={isWin ? 'status__win' : 'status__lose'}>
        <h2>{isWin ? 'Win' : 'Lose'}</h2>
        <p>{name}</p>
        <p>True answer: {commentaries}</p>
    </div>)
}