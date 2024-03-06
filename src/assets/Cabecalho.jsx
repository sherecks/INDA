import { Link } from 'react-router-dom';
import '../style/Cabecalho.css'


export function Cabecalho (){ 
    return (
        <header>
          <div className="cabecalho">
            <h1>
              <Link 
                to="/"
                className='titulo'
              >
                INDA: STREET W HOMIES
              </Link>
            </h1>
      
            <ul className='menu'>
              <li>
                <Link
                  to="./Product"
                  className='links'
                >
                  Products
                </Link>
              </li>
              <li>Contact</li>
              <li>Sales</li>
              <li>
                <Link
                  to="./Cart"
                  className='links'
                >
                    Kit
                </Link>
              </li>
            </ul>
          </div>
        </header>
      );
}