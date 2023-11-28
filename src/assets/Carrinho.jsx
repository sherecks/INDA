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
    <div className="flex justify-center font-mono">
      {items.map(({ id, img, title, price }) => (
        <div key={id}>
          <img className="rounded-xl" src={img} alt={title} />
          <div>
            <p className="text-lg mt-2">{title}</p>
            <p className="text-lg mt-2">{price}</p>
            <button
              type="button"
              className="bg-green-500 rounded-xl text-xl mt-2 font-semibold text-black"
            >
             <Link className="m-2" to="/">
                Finalizar Pedido
              </Link>
            </button>
            <p className="text-xl w-400 mt-2 mb-2">
              Feita de algodão macio e resistente, ela tem um corte casual.
              Esta camiseta é perfeita para o uso diário.
              Design Aspect...
            </p>
            <button
              type="button"
              className="bg-blue-800 rounded-xl mt-2 text-xl font-semibold text-white"
            >
              <Link className="m-2" to="/">
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