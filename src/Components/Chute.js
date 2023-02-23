import forca6 from "../assets/forca6.png";

export default function Chute(
  palavraEscondida,
  pesquisa,
  setPesquisa,
  setPalavraMostrada,
  setGanhou,
  setState,
  state,
  setPerdeu
) {
  function pesquisar() {
    if (pesquisa === palavraEscondida) {
      setPalavraMostrada(palavraEscondida);
      setGanhou("ganhou");
      setState(true);
    } else {
      setPalavraMostrada(palavraEscondida);
      setGanhou("perdeu");
      setState(true);
      setPerdeu(forca6);
    }
  }

  return (
    <div className="palavra-chute">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        placeholder=""
        value={pesquisa} 
        onChange={e => setPesquisa(e.target.value)}
        disabled={state}
      ></input>
      <button data-test="guess-button" onClick={pesquisar}>
        Chutar
      </button>
    </div>
  );
}
