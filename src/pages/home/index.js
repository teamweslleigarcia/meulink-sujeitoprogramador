import {FiLink} from 'react-icons/fi'

import './home.css'

function Home() {
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
                placeholder='Cole seu link aqui' />
              </div>
              <button>Encurtar Link</button>
          </div>
      </div>
    </div>
  );
}

export default Home;
