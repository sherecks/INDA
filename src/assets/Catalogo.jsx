import { Link } from 'react-router-dom';
import '../style/catalogo.css'

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
        <div className="catalogo">
          {items.map(({ id, img, title, price }) => (
            <div key={id} className="bloco">
              <img className="foto" src={img} alt={title} />
              <p className="nome">{title}</p>
              <p className="preco">{price}</p>
              <button
                type="button"
                className="botao"
                onClick={() => addToCart({ id, img, title, price })}
              >
                <Link
                  className="link"
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

 