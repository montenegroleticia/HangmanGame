import palavras from "../palavras";
import forca0 from "../assets/forca0.png";

export default function Jogo({setPalavraEscondida, palavraEscondida, image, setLetrasClicadas, setLetrasCertas, setGanhou, ganhou, setPerdeu, setContador}){

    function pegarPalavra(){
        setLetrasClicadas('');
        setLetrasCertas('');
        setGanhou('');
        setPerdeu(forca0);
        setContador(0);
        const index = Math.floor(Math.random() * palavras.length);
        const arrayPalavra = palavras[index].split('');
        //const escondePalavra = arrayPalavra.replace('_');
        setPalavraEscondida(arrayPalavra);
        //console.log(escondePalavra);
      }
      
    return (
        <div className='container'>
            <img src={image} alt='forca' />
            <div className='palavra'>
                <button onClick={() => pegarPalavra()}>Escolher Palavra</button>
                <p className={ganhou} >{palavraEscondida}</p>
            </div>
        </div>
    )
}