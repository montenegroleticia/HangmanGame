import palavras from "../palavras";
import forca0 from "../assets/forca0.png";

export default function Jogo({setPalavraEscondida, palavraEscondida, image, setLetrasClicadas, setLetrasCertas, setGanhou, ganhou, setPerdeu, setContador, setPalavraMostrada, palavraMostrada, setState}){

    function pegarPalavra(){
        setState(false);
        setLetrasClicadas('');
        setLetrasCertas('');
        setGanhou('');
        setPerdeu(forca0);
        setContador(0);
        const index = Math.floor(Math.random() * palavras.length);
        const arrayPalavra = palavras[index].split('');
        setPalavraEscondida(arrayPalavra);
        setPalavraMostrada(arrayPalavra.map(() => "_ "));
      }
      
    return (
        <div className='container'>
            <img data-test="game-image" src={image} alt='forca' />
            <div className='palavra'>
                <button data-test="choose-word" onClick={() => pegarPalavra()}>Escolher Palavra</button>
                <p data-test="word" className={ganhou} >{palavraMostrada}</p>
            </div>
        </div>
    )
}