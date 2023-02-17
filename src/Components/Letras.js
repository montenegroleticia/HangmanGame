export default function Letras({state, palavraEscondida, setLetrasClicadas, letrasClicadas, setGanhou, ganhou}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // function ganhouJogo(){
    //    if (palavraEscondida != null && letrasClicadas != null && palavraEscondida.length === letrasClicadas.length){
    //        console.log("aee");
    //       setGanhou("ganhou");
    //    }
    // }

    // ganhouJogo();

    function verificarPalavra(palavraEscondida, l){
        if (palavraEscondida.includes(l)){
            setLetrasClicadas([...letrasClicadas, l]);
            return true;
        } else {
            console.log("NÃOOOOO");
            return false;
        }
    }

    return (
        <>
        <div className="letras">
            {alfabeto.map((l, index)=>
            <button onClick={() => verificarPalavra(palavraEscondida, l)} key={index} disabled={letrasClicadas.includes(l) ? true : state}>{l}</button>
            )}
        </div>
        </>
    )
}