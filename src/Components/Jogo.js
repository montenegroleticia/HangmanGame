import palavras from "../palavras";

export default function Jogo({setPalavraEscondida, palavraEscondida, image, setLetrasClicadas, ganhou}){

    function pegarPalavra(){
        setLetrasClicadas("");
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