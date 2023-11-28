export function Rodape(){
    return (
        <footer>
          <div className="flex flex-wrap justify-center mx-auto mt-10 font-mono rounded-sm">
            <p className="text-lg mt-8 m-2">
              Design By{' '}
              <a
                className="text-black font-bold"
                href="https://www.joaopedropn.com.br/"
              >
                João Pedro
              </a>
            </p>
            <p className="text-lg mt-8 m-2">
              <a
                href=""
                className="text-black font-bold"
              >
                Privacidade
              </a>
            </p>
            <p className="text-lg mt-8 m-2">
              <a
                href=""
                className="text-black font-bold"
              >
                Sobre nós
              </a>
            </p>
            <p className="text-lg mt-8 m-2">
              <a
                href=""
                className="text-black font-bold"
              >
                Fale conosco
              </a>
            </p>
            <p className="text-lg mt-8 m-2">
              <a
                href=""
                className="text-black font-bold transition duration-200 ease-in-out hover:text-gray-400"
              >
                Segurança
              </a>
            </p>
          </div>
        </footer>
      );
}
