import { Link } from 'react-router-dom'; 


export function Cabecalho (){ 
    return (
        <header>
          <div className="flex flex-wrap justify-between mx-auto">
            <h1 className='mt-4 m-2 text-4xl'>
              <Link
                className="text-gray-800 no-underline font-mono"    
                to="/"
              >
                INDA: STREET W HOMIES
              </Link>
            </h1>
      
            <ul className="flex space-x-4 mt-6 m-2">
              <li>
                <Link
                  className="text-md text-black no-underline transition duration-400 hover:text-gray-400"
                  to="/Product"
                >
                  Produtos
                </Link>
              </li>
              <li className="text-md">Contato</li>
              <li className="text-md">Ofertas</li>
              <li>
                <Link
                  to="/Cart"
                  className="text-md text-black transition duration-200 hover:text-gray-400"
                >
                    Carrinho
                </Link>
              </li>
            </ul>
          </div>
        </header>
      );
}