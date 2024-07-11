import { Link } from 'react-router-dom';
import '../style/catalogo.css'

export function Catalogo(){

    const items = [
        {
            id:1,
            img: "./src/assets/Imagens/tshit1.png",
            title: "Topography",
            price: "R$:69,90"
        },
        {
            id:2,
            img: "./src/assets/Imagens/tshit2.png",
            title: "Gravity",
            price: "R$:169,90"
        },
        {
            id:3,
            img: "./src/assets/Imagens/tshit4.png",
            title: "Birds",
            price: "R$:89,90"
        },
        {
            id:4,
            img: "./src/assets/Imagens/tshit5.png",
            title: "Low Running",
            price: "R$:189,90"
        },
        {
            id:5,
            img: "./src/assets/Imagens/berma.png",
            title: "Berma Topography",
            price: "R$:129,90"
        },
        {
            id:6,
            img: "./src/assets/Imagens/berma3.png",
            title: "Berma Topography",
            price: "R$:139,90"
        },
        {
          id:7,
          img: "./src/assets/Imagens/cargo.png",
          title: "Cargo Topography",
          price: "R$:239,90"
        },
        {
          id:8,
          img: "./src/assets/Imagens/cargo3.png",
          title: "Cargo Topography",
          price: "R$:229,90"
        },
        {
          id:9,
          img: "./src/assets/Imagens/tshit6.png",
          title: "Busta",
          price: "R$:139,90"
        },
        {
          id:10,
          img: "./src/assets/Imagens/tshit7.png",
          title: "Outkast",
          price: "R$:139,90"
        },
        {
          id:11,
          img: "./src/assets/Imagens/tshit8.png",
          title: "The Pharcyde",
          price: "R$:139,90"
        },
        {
          id:12,
          img: "./src/assets/Imagens/tshit9.png",
          title: "Rodman",
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
                  Add To Kit
                </Link>
              </button>
            </div>
          ))}
        </div>
      );
}

  export default Catalogo;

 