import '../style/Rodape.css'

export function Rodape(){
    return (
        <footer>
          <div className="rodape">
            <p className="texto">
              <a
                className="detail"
                href="https://www.joaopedropn.com.br/"
              >
                DESIGN BY JOÃO PEDRO
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                PRIVACIDADE
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                SOBRE NÓS
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                FALE CONOSCO
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                SEGURANÇA
              </a>
            </p>
          </div>
        </footer>
      );
}
