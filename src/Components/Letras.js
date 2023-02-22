import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Letras({state, palavraEscondida, setLetrasClicadas, letrasClicadas, setLetrasCertas, letrasCertas, setGanhou, setPerdeu, setContador, contador, setState}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function ganhouJogo(){
        if (palavraEscondida.includes(letrasCertas)){
           setGanhou('ganhou');
           setState(true);
        }
    }

    function perdeuJogo(){
        if (contador === 6){
            setGanhou('perdeu');
            setState(true);
        }
    }

    function verificarPalavra(palavraEscondida, l){
        if (palavraEscondida.includes(l)){
            setLetrasClicadas([...letrasClicadas, l]);
            setLetrasCertas([...letrasCertas, l]);
            ganhouJogo();

        } else {
            setLetrasClicadas([...letrasClicadas, l]);
            contador = contador + 1;
            setContador(contador);
            setPerdeu(images[contador]);
            perdeuJogo(contador);
        }
    }

    return (
        <>
        <div className="letras">
            {alfabeto.map((l, index)=>
            <button data-test="letter" onClick={() => verificarPalavra(palavraEscondida, l)} key={index} disabled={letrasClicadas.includes(l) ? true : state}>{l}</button>
            )}
        </div>
        </>
    )
}