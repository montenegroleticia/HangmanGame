export default function Jogo(props){
    return (
        <div className='container'>
            <img src={props.image} alt='forca' />
            <div className='palavra'>
                <button>Escolher Palavra</button>
                <p>{props.palavra}</p>
            </div>
        </div>
    )
}