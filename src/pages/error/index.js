import './error.css'

import {Link} from 'react-router-dom'

function Error(){
    return(
        <div className='container-error'>
            <img src="./notfound.svg" alt="pagina nao econtrada" />
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}

export default Error;