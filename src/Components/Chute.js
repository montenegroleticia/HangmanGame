export default function Chute(
  palavraEscondida,
  pesquisa,
  setPesquisa,
  setPalavraMostrada,
  setGanhou,
  setState,
  state
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
    }
  }

  return (
    <div className="palavra-chute">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        placeholder=""
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        disabled={state}
      ></input>
      <button data-test="guess-button" onClick={pesquisar}>
        Chutar
      </button>
    </div>
  );
}
