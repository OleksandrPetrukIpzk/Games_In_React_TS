
export const Game  = ({game}:any) => {
    const {status, secretWord} = game;
    return (<div className={status ? 'status__win' : 'status__lose'}>
        <h2>{status ? 'Win' : 'Lose'}</h2>
        <p>True answer: {secretWord}</p>
    </div>)
}