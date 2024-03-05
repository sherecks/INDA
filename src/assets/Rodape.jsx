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
                Design By João Pedro
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                Privacy
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                About Us
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                Speak With Us
              </a>
            </p>
            <p className="texto">
              <a
                href=""
                className="detail"
              >
                Security
              </a>
            </p>
          </div>
        </footer>
      );
}
