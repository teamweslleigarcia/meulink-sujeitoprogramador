
import './linkitem.css'

import {FiX, FiClipboard} from 'react-icons/fi'

function LinkItem({closeModal}){
    return(
        <div className='modal-container'>
            <div className="modal-header">
                <h2>Link encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                https://sujeitoprogramador.com
            </span>

            <button className='modal-link'>
                https://bit.ly/wefsdv
                <FiClipboard size={20} color='#fff' />
            </button>
            
        </div>
    )
}

export default LinkItem;