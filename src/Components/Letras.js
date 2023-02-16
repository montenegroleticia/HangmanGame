export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <>
        <div className="letras">
            {alfabeto.map((l, index)=>
            <button key={index} disabled={props.state}>{l}</button>
            )}
        </div>
        <div className="palavra-chute esconder">
            <p>Já sei a palavra!</p>
            <input></input>
            <button>Chutar</button>
        </div>
        </>
    )
}