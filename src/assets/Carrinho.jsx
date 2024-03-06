import { Link } from 'react-router-dom';
import '../style/Carrinho.css'

export function Carrinho(){

  const items = [
    {
        id:1,
        img: "./src/assets/Imagens/1.png",
        title: "Outkast",
        price: "R$:69,90"
    },
];

  return (
    <div>
      {items.map(({ id, img, title, price }) => (
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
            <p className='detalhe'>
              Feita de algodão macio e resistente, ela tem um corte casual.
              Esta camiseta é perfeita para o uso diário.
              Design Aspect...
            </p>
            <button
              type="button"
              className='botao'
            >
              <Link className="link" to="/">
                Continuar Comprando
              </Link>
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Carrinho;