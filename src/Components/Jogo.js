import forca0 from '../assets/forca0.png';

export default function Jogo(){
    return (
        <div className='container'>
            <img src={forca0} alt='forca' />
            <div className='palavra'>
                <button>Escolher Palavra</button>
                <p>_ _ _ _ _</p>
            </div>
        </div>
    )
}