import { Link } from 'react-router-dom';

export function Catalogo(){

    const items = [
        {
            id:1,
            img: "./src/assets/Imagens/1.png",
            title: "Outkast",
            price: "R$:69,90"
        },
        {
            id:2,
            img: "./src/assets/Imagens/2.png",
            title: "Rodman",
            price: "R$:169,90"
        },
        {
            id:3,
            img: "./src/assets/Imagens/3.png",
            title: "Source",
            price: "R$:89,90"
        },
        {
            id:4,
            img: "./src/assets/Imagens/10.png",
            title: "BOB",
            price: "R$:189,90"
        },
        {
            id:5,
            img: "./src/assets/Imagens/8.png",
            title: "The Pharcyde",
            price: "R$:99,90"
        },
        {
            id:6,
            img: "./src/assets/Imagens/9.png",
            title: "Busta Rhymes",
            price: "R$:139,90"
        },
    ];


    return (
        <div className="flex flex-wrap justify-center mx-auto font-mono">
          {items.map(({ id, img, title, price }) => (
            <div key={id} className="m-4">
              <img className="border-10 rounded-lg" src={img} alt={title} />
              <p className="m-0 p-4 text-12">{title}</p>
              <p className="p-4 text-16">{price}</p>
              <button
                type="button"
                className="btn p-4 rounded-lg transition duration-200 ease-in-ou"
                onClick={() => addToCart({ id, img, title, price })}
              >
                <Link
                  className="w-260 h-50 text-16 font-bold font-mono text-black no-underline transition duration-200 ease-in-out"
                >
                  Adicionar ao Carrinho
                </Link>
              </button>
            </div>
          ))}
        </div>
      );
}

  export default Catalogo;

 