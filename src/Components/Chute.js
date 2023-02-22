export default function Chute(palavraEscondida, pesquisa, setPesquisa, setPalavraMostrada, setGanhou, setState){

    function pesquisar(){
        if (pesquisa === palavraEscondida){
            setPalavraMostrada(palavraEscondida);
            setGanhou('ganhou');
            setState(true);
        }
    }

    return (
        <div className="palavra-chute esconder">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" value={pesquisa} onChange={e => setPesquisa(e.target.value)} ></input>
            <button data-test="guess-button" onClick={pesquisar} >Chutar</button>
        </div>
    )
}