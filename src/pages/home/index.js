import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import LinkItem from '../../components/LinkItem';
import Menu from '../../components/Menu';

import './home.css'

function Home() {

  const [link, setLink] = useState('');

  const [showModal, setShowModal] = useState(false);

  function handleShortLink(){
    setShowModal(true);
  }

  return (
    <div className="App">
      <div className="container-home">
          <div className="area-logo">
              <img src="/logo.png" alt="meu link logo" />
              <h1>Meu Link</h1>
              <span>Cole seu link para encurtar</span>
          </div>
          <div className="area-input">
              <div>
                <FiLink size={24} color='#fff' />
                <input
                placeholder='Cole seu link aqui' 
                value = {link}
                onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <button onClick={handleShortLink}>Encurtar Link</button>
          </div>
      </div>
      <Menu />

      {/* se showModal(True) modal aparece... && condicao de afirmar*/}
      {showModal && (
        <LinkItem 
          closeModal = { ()=> setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Home;
