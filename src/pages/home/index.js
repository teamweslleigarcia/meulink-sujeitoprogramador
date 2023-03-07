import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import LinkItem from '../../components/LinkItem';
import Menu from '../../components/menu';

import api from '../../services/api'
import { saveLink } from '../../services/storeLink'

import './home.css'

function Home() {

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});


  async function handleShortLink(){

    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true);

      //função do services/storeLink chamada no pages/Links
      saveLink('@encurtaLink', response.data)

      setLink('');
    }
    catch{
      alert('OPS!... Parece que algo deu errado')
      setLink('')
    }
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
          content = {data}
        />
      )}
    </div>
  );
}

export default Home;
