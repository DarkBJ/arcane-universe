import { useState, useEffect, useCallback, useMemo } from "react";
import jinxImg from "../../assets/personagens/jinx.jpg";
import { X } from "lucide-react";

export default function Personagens() {
  const personagens = useMemo(
    () => [
      {
        id: 1,
        nome: "Jinx",
        local: "Zaun",
        image: jinxImg,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatem. Officiis, quae similique, praesentium earum dolores reiciendis perferendis est neque fuga possimus voluptates? In quaerat adipisci impedit ipsa illo explicabo?",
        },
      },
      {
        id: 2,
        nome: "Jinx",
        local: "Zaun",
        image: jinxImg,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatem. Officiis, quae similique, praesentium earum dolores reiciendis perferendis est neque fuga possimus voluptates? In quaerat adipisci impedit ipsa illo explicabo?",
        },
      },
      {
        id: 3,
        nome: "Jinx",
        local: "Zaun",
        image: jinxImg,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatem. Officiis, quae similique, praesentium earum dolores reiciendis perferendis est neque fuga possimus voluptates? In quaerat adipisci impedit ipsa illo explicabo?",
        },
      },
      {
        id: 4,
        nome: "Jinx",
        local: "Zaun",
        image: jinxImg,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatem. Officiis, quae similique, praesentium earum dolores reiciendis perferendis est neque fuga possimus voluptates? In quaerat adipisci impedit ipsa illo explicabo?",
        },
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  

  const openModal = useCallback((personagem) => {
    setSelectedPersonagem(personagem);
    setOpen(true);
    setIsClosing(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
      setSelectedPersonagem(null);
    }, 200);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : originalOverflow || "unset";
    return () => {
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [open]);

  return (
    <div className="w-screen h-full min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="absolute inset-0 bg-cover bg-center shadow-[inset_0_-80px_50px_rgba(0,0,0,0.7)] bg-[url('./assets/header/arc-perso.jpg')]" />
      <div className="absolute inset-0 bg-black/90" />
      <div className="w-[85%] relative flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col text-center w-full justify-center mt-50 items-center">
            <span className="text-white text-[1em] md:text-[1.5em] font-(family-name:--fontAll) font-semibold tracking-[2px]">Personagens</span>
          <h1 className="text-white text-[1.8em] md:text-[2.5em] font-(family-name:--fontAll) font-semibold tracking-[5px]">
            ESCOLHA O SEU FAVORITO
          </h1>
          <span className="text-white text-[0.9em] md:text-[1em] max-w-[70%]">Com personalidades marcantes e histórias entrelaçadas, cada um reflete o conflito entre Piltover e Zaun.
Descubra seus passados, suas lutas e o que os move em um mundo dividido entre progresso e caos.</span>
        </div>


        <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-white font-bold text-[1.3em]">Filtros</h2>
                <div className="w-full flex flex-col items-center justify-center mt-5">
                    <input className="p-3 w-100 bg-white rounded-md text-center" type="text" placeholder="Buscar" />
                </div>
            </div>
        </div>


        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {personagens.map((personagem) => (
            <div
              key={personagem.id}
              className="w-full h-130 bg-white overflow-hidden flex flex-col cursor-pointer hover:scale-105 duration-300"
              onClick={() => openModal(personagem)}
            >
              <div className="border-b-1 border-amber-500 h-105">
                <img
                  className="w-full h-full object-cover"
                  src={personagem.image}
                  alt={personagem.nome}
                />
              </div>
              <div className="bg-slate-950 text-center flex flex-col justify-center flex-auto p-2">
                <h1 className="text-amber-500 font-medium text-[20px]">
                  {personagem.nome}
                </h1>
                <span className="text-amber-100 tracking-[2px] text-[0.85em]">
                  {personagem.local}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`absolute inset-0 bg-black/90 transition-opacity duration-200 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeModal}
          />
          <div
            className={`relative w-[90%] max-w-2xl max-h-[80vh] rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
              isClosing
                ? "opacity-0 scale-95 translate-y-4"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-3 border-b border-amber-600 bg-amber-500">
              <h2 id="modal-title" className="text-xl font-semibold text-white">
                Informações
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors cursor-pointer"
                aria-label="Fechar modal"
             >
                <X className="text-white text-xl" />
              </button>
            </div>
            <div className="p-6 bg-slate-950 overflow-y-auto max-h-[calc(80vh-60px)]">
              {selectedPersonagem ? (
                <div className="flex flex-col md:flex-row-reverse items-center gap-4">
                  <div className="flex flex-1/2 justify-end">
                    <img
                      src={selectedPersonagem.image}
                      alt={selectedPersonagem.nome}
                      className="w-full md:w-48 h-64 object-cover transform transition-transform rounded-md"
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                  </div>
                  <div className="animate-fade-in-up flex flex-1/2 flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedPersonagem.nome}
                    </h3>
                    <p className="text-white">
                      Idade: {selectedPersonagem.moreInfoPerso?.idade || "N/A"}{" "}
                      anos
                    </p>
                    <p className="tracking-wider text-white">
                      Local: {selectedPersonagem.local}
                    </p>
                    <h3 className="text-xl font-bold text-white mt-4 mb-2">
                      História
                    </h3>
                    <p className="text-white">
                      {selectedPersonagem.moreInfoPerso?.resumoHistoria ||
                        "História não disponível"}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-white text-center">
                  Carregando informações...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
