import { Cabecalho } from "../assets/Cabecalho";
import { Tipos } from "../assets/Tipos";
import { Catalogo } from "../assets/Catalogo";
import { Rodape } from "../assets/Rodape";


function Product() {
    return(
        <main className="">
        <div>
        <Cabecalho />
        <Tipos />
        <Catalogo />
        <Rodape />
        </div>
        </main>
    );
}
    
export default Product
