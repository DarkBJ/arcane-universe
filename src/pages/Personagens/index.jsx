import jinxImg from "../../assets/personagens/jinx.jpg";

export default function Personagens() {

    const personagens = [
        {
            nome: 'Jinx',
            local: 'Zaun',
            image: jinxImg
        },
                {
            nome: 'Jinx2',
            local: 'Zaun',
            image: jinxImg
        }
    ]

    console.log('PERSONAGENS CARREGADOS: ', personagens)

    return (
        <div className="w-screen h-full min-h-screen flex flex-col items-center justify-center bg-black">
            <div
                className="absolute inset-0 bg-cover bg-center shadow-[inset_0_-80px_50px_rgba(0,0,0,0.7)] bg-[url('./assets/header/arc-perso.jpg')]"
            ></div>
            <div className="absolute inset-0 bg-black/90"></div>

            <div className="w-[85%] relative flex flex-col gap-10 items-center justify-center">
                <div className="flex w-full justify-center mt-50">
                    <h1 className="text-amber-600 text-[1.5em] font-(family-name:--fontAll) font-semibold tracking-[5px]">PERSONAGENS</h1>
                </div>

                <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                    {personagens.map((personagem, index) => (
                        <div className="w-full h-100 border-2 border-red-500 bg-white" key={index}>
                            <div className="border-b-2 border-amber-600">
                                <img src={personagem.image} alt="" />    
                            </div>

                            <h1 className="text-black">{personagem.nome}</h1>
                            <span>{personagem.local}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}




                                                                     {/* <div
                        className="w-full flex items-end md:max-w-65 h-180 md:h-100 bg-cover bg-center"
                        style={{ backgroundImage: `url(${jinxImg})` }}
                    >
                        <div className="border-t-1 border-amber-500 w-full text-center h-20 bg-black/70 flex items-center flex-col justify-center">
                            <h2 className="text-amber-500 tracking-[2px]">{ personagens.nome }</h2>
                            <span className="text-amber-100 tracking-[2px] text-[0.85em]">ZAUN</span>
                        </div>
                    </div>  */}