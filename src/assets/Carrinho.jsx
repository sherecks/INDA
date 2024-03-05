import { Link } from 'react-router-dom';

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
          <img src={img} alt={title} />
          <div>
            <p >{title}</p>
            <p >{price}</p>
            <button
              type="button"
            >
             <Link className="m-2" to="/">
                Finalizar Pedido
              </Link>
            </button>
            <p>
              Feita de algodão macio e resistente, ela tem um corte casual.
              Esta camiseta é perfeita para o uso diário.
              Design Aspect...
            </p>
            <button
              type="button"
            >
              <Link to="/">
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