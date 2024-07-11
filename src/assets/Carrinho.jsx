import { Link } from 'react-router-dom';
import '../style/Carrinho.css'

export function Carrinho(){

  const items = [
    {
        id:1,
        img: "./src/assets/Imagens/tshit4.png",
        title: "Birds",
        price: "R$:139,90",
        detalhe: " Feita de algodão macio e resistente. Esta camiseta é perfeita para o uso diário."
    },
];

  return (
    <div>
      {items.map(({ id, img, title, price, detalhe }) => (
        <div key={id}>
          <img className='fotoC' src={img} alt={title} />
          <div>
            <p className='nome' >{title}</p>
            <p  className='preco' >{price}</p>
            <button
              type="button"
              className='botao'
            >
             <Link className="link" to="/">
                Finalizar Pedido
              </Link>
            </button>
            <br/>
            <button
              type="button"
              className='botao'
            >
              <Link className="link" to="/">
                Continuar Comprando
              </Link>
            </button>
            <p className='detalhe'>{detalhe}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Carrinho;