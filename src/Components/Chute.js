export default function Chute(){
    return (
        <div className="palavra-chute esconder">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" ></input>
            <button data-test="guess-button" >Chutar</button>
        </div>
    )
}