import { useState, useEffect, useCallback, useMemo } from "react";
import jinxImg from "../../assets/personagens/jinx.jpg";
import JinxBanner from "../../assets/personagens/jinx-banner.jpg"; 
import Vi from '../../assets/personagens/Vi.png'
import ViBanner from '../../assets/personagens/Vi-banner.jpg'
import Viktor from '../../assets/personagens/Viktor.jpg'
import ViktorBanner from '../../assets/personagens/Viktor-banner.jpg'
import Jayce from '../../assets/personagens/Jayce.jpg'
import JayceBanner from '../../assets/personagens/Jayce-banner.jpg'
import Ekko from '../../assets/personagens/ekko.jpg'
import EkkoBanner from '../../assets/personagens/ekko-banner.jpg'
import Caitlyn from '../../assets/personagens/caitlyn.jpg'
import CaitlynBanner from '../../assets/personagens/caitlyn-banner.jpg'
import Vander from '../../assets/personagens/vander.jpg'
import VanderBanner from '../../assets/personagens/vander-banner.jpg'
import Mel from '../../assets/personagens/mel.jpg'
import MelBanner from '../../assets/personagens/mel-banner.jpg'
import { X } from "lucide-react";

export default function Personagens() {
  const personagens = useMemo(
    () => [
      {
        id: 1,
        nome: "Jinx",
        local: "Zaun",
        image: jinxImg,
        banner: JinxBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Jinx, uma criminosa desequilibrada e impulsiva da Subferia, é atormentada pelas consequências de seu passado, mas isso não a impede de deixar sua marca caótica de pandemônio em Piltover e Zaun. Ela usa um arsenal de armas autorais para provocar efeitos devastadores, desencadeando torrentes de explosões coloridas e disparos, inspirando a resistência e a rebelião dos marginalizados com o caos que deixa pela caminho.",
            historiaCompleta: 'Jinx, antes conhecida como Powder, cresceu nas ruas de Zaun ao lado da irmã mais velha Vi e sob os cuidados de Vander, um homem que tentava manter a paz entre Zaun e Piltover. Desde pequena, Powder era criativa e sonhadora, mas insegura por causa de seus fracassos com invenções. Em uma missão para roubar cristais mágicos em Piltover, sua invenção causa uma explosão que mata seus amigos e Vander. Desesperada, ela procura consolo em Vi, mas é rejeitada e chamada de “Jinx”, o que destrói completamente sua inocência. pós Vi ser presa, Powder é encontrada por Silco, um criminoso que a adota como filha e a molda em uma nova pessoa: Jinx, uma inventora genial, mas mentalmente instável e perigosa. Sob sua influência, ela cria armas letais e se torna uma das figuras mais temidas de Zaun. Ao mesmo tempo, ela é atormentada por vozes e alucinações das pessoas que perdeu, refletindo a culpa e o trauma que nunca conseguiu superar. Anos depois, Vi é libertada da prisão e reencontra Jinx. O choque é profundo — Vi ainda vê a irmã que amava, mas Jinx acredita que Vi a abandonou e que agora prefere Caitlyn, uma policial de Piltover. Esse ciúme e a paranoia levam Jinx a cometer atos cada vez mais destrutivos, incapaz de distinguir entre amor, medo e ódio. No clímax da história, Jinx mata Silco acidentalmente e, em um ato final de desespero e afirmação, aceita totalmente sua nova identidade. Sentando-se diante de Vi, ela declara que “Powder se foi” e dispara um canhão Hextech contra o Conselho de Piltover, prestes a aprovar a independência de Zaun. Essa explosão simboliza não apenas o início da guerra entre as cidades, mas também o ponto sem retorno para Jinx — a menina perdida que se tornou o caos encarnado.', 
        },
        vulgo: 'o Gatilho Desenfreado',
      },
      {
        id: 2,
        nome: "Vi",
        local: "Piltover",
        image: Vi,
        banner: ViBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Criada nas ruas impiedosas de Zaun, Vi é uma mulher temível, impulsiva e explosiva sem respeito algum pelas autoridades. Ela sempre foi uma sobrevivente astuta, tanto das confusões que causava no Ladoalto na juventude quanto de uma pena injustamente longa na Prisão de Aguamansa. Agora, trabalhando lado a lado com os Defensores de Piltover para manter a paz em vez de acabar com ela, Vi porta poderosas manoplas hextec capazes de esmagar paredes e criminosos com extrema facilidade.",
            historiaCompleta: 'Vi, cujo nome verdadeiro é Violet, cresceu nas ruas de Zaun junto com sua irmã Powder (depois conhecida como Jinx) e outras crianças sob os cuidados de Vander, um ex-revolucionário que se tornou uma figura paterna. Vi sempre foi forte, corajosa e protetora, agindo como a líder do grupo e, principalmente, como a guardiã de sua irmã. Seu maior medo era perder as pessoas que amava — algo que se tornaria realidade após o desastre causado por Powder durante um assalto a Piltover. Quando a explosão acidental de Powder mata seus amigos e Vander, Vi, em um momento de desespero e raiva, culpa a irmã e a chama de “Jinx”. Logo depois, é capturada pelos Enforcers (a polícia de Piltover) e levada para a prisão, enquanto Powder é acolhida por Silco, o inimigo de Vander. Essa separação marca o início da tragédia: Vi perde tudo e passa anos encarcerada, acreditando que sua irmã ainda pode ser salva. Anos mais tarde, Vi é libertada por Caitlyn Kiramman, uma jovem policial de Piltover que busca acabar com o tráfico da droga Shimmer. Juntas, elas voltam a Zaun e descobrem que Silco domina a cidade e que Jinx é sua principal aliada. Vi tenta reconquistar a confiança da irmã e fazê-la lembrar de quem era, mas percebe que a menina doce que conheceu foi completamente corrompida pela dor e pela manipulação. No fim da temporada, Vi é forçada a aceitar que talvez não consiga mais salvar Powder. Ao ver Jinx abraçar definitivamente sua nova identidade e atacar Piltover, Vi entende que o vínculo entre elas está quebrado — mas, mesmo assim, continua a amá-la. Sua jornada em Arcane é a de uma mulher dividida entre a força e o arrependimento, entre o dever de lutar e o desejo de redimir a única família que lhe restou.', 
        },
        vulgo: 'a Defensora de Piltover',
      },
      {
        id: 3,
        nome: "Viktor",
        local: "Zaun",
        image: Viktor,
        banner: ViktorBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "A evolução biomecânica de seu antigo eu, Viktor abraçou a Gloriosa Evolução e tornou-se uma espécie de messias para seus seguidores. Ele sacrificou sua própria humanidade partindo da lógica de que eliminar as emoções acabaria com o sofrimento. Agora, busca compartilhar a revelação do Núcleo Hex com o resto do mundo, mesmo que os outros não consigam entender os benefícios. Afinal, para esse mestre do Arcano, a violência não passa de uma variável necessária para equilibrar a equação final.",
            historiaCompleta: 'Viktor nasceu em Zaun, uma cidade marcada pela pobreza e pela doença, mas desde jovem demonstrou um intelecto brilhante e uma paixão pela ciência. Fascinado pela ideia de melhorar a vida das pessoas através da tecnologia, ele dedicou-se à pesquisa e trabalhou ao lado de Heimerdinger, um renomado cientista de Piltover. Apesar de viver cercado por desigualdade e sofrimento, Viktor acreditava profundamente que o progresso científico poderia libertar a humanidade de suas limitações físicas e sociais. Quando conhece Jayce Talis, os dois formam uma parceria poderosa e dão início ao projeto Hextech, que combina ciência com magia pura. Viktor vê nisso a chance de transformar o mundo, especialmente para ajudar os doentes e marginalizados como os de Zaun. No entanto, à medida que o projeto cresce e o poder do Hextech se torna cada vez mais cobiçado, Viktor entra em conflito entre sua ética e sua ambição. Ele começa a acreditar que o corpo humano é fraco e imperfeito, e que a verdadeira evolução exige ir além da natureza. Enquanto Jayce se envolve na política de Piltover, Viktor mergulha em experimentos cada vez mais perigosos. Lutando contra uma doença terminal, ele usa o Hexcore — um artefato experimental alimentado por magia — para tentar se curar. Porém, o processo o transforma lentamente, misturando carne e máquina e o afastando de sua humanidade. Sua assistente Sky, que o amava em silêncio, morre tragicamente em um de seus experimentos, o que o mergulha ainda mais na culpa e na solidão. No fim da temporada, Viktor é um homem dividido: salvo pela tecnologia que criou, mas ao custo da própria alma. Ele se torna um símbolo do preço do progresso — um visionário que queria salvar o mundo, mas acabou perdendo a si mesmo no processo. Sua história em Arcane é uma tragédia sobre ambição, dor e o desejo desesperado de transcender os limites humanos.', 
        },
        vulgo: 'o Arauto do Arcano',
      },
      {
        id: 4,
        nome: "Jayce",
        local: "Piltover",
        image: Jayce,
        banner: JayceBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Jayce Talis é um inventor brilhante que, ao lado do amigo Viktor, fez as primeiras grandes descobertas no campo da tecnologia hextec. Glorificado em Piltover, ele tenta fazer jus à reputação de ''Homem do Progresso'', mas costuma sofrer com as expectativas depositadas nele. Por isso, Jayce começou a enxergar como sua inovação aprofundou a divisão entre Piltover e Zaun e, armado com seu martelo hextec, está pronto para defender o amanhã.",
            historiaCompleta: 'Jayce Talis nasceu em Piltover, uma cidade que valoriza o progresso e a inovação. Desde jovem, ele se destacou como um inventor talentoso e idealista, guiado por um profundo desejo de usar a ciência para melhorar a vida das pessoas. Sua visão do mundo mudou quando, ainda criança, foi salvo por uma figura misteriosa que usava magia — um evento que o inspirou a descobrir como unir ciência e magia em algo novo. Essa obsessão o levou a desafiar as normas rígidas de Piltover, que proibia o estudo da magia por considerá-la perigosa. Durante suas pesquisas, Jayce conheceu Viktor, um cientista de Zaun que compartilhava seu ideal de progresso, e juntos desenvolveram a base do Hextech, uma tecnologia capaz de canalizar energia mágica com segurança. Com o apoio político de Mel Medarda, uma conselheira influente e estrategista, Jayce conseguiu transformar o Hextech em um marco de revolução tecnológica, elevando Piltover a um novo patamar de poder e riqueza. No entanto, o sucesso trouxe também o peso da responsabilidade e da política, campos nos quais Jayce se mostrou inexperiente. Conforme o Hextech começa a ser usado não apenas para o bem, mas também como arma, Jayce se vê dividido entre seu idealismo e a dura realidade do poder. Ele tenta equilibrar o progresso com a moral, mas suas decisões — como se aliar a forças militares e autorizar ataques em Zaun — o fazem questionar se ainda é o mesmo homem que queria apenas ajudar as pessoas. Sua relação com Mel se aprofunda, e ela o ensina o lado estratégico e cruel da política de Piltover, o que o transforma de inventor em líder, ainda que relutante. No fim da temporada, Jayce tenta negociar com Silco para impedir uma guerra entre Piltover e Zaun, mostrando que ainda busca a paz e acredita no diálogo. No entanto, o ataque de Jinx ao Conselho interrompe suas tentativas de reconciliação, provando que suas invenções e escolhas tiveram consequências muito maiores do que imaginava. Jayce se torna, assim, a representação do dilema do progresso em Arcane: um homem que queria salvar o mundo, mas acabou alimentando o conflito que pode destruí-lo.', 
        },
        vulgo: 'o Defensor do Amanhã',
      },
            {
        id: 5,
        nome: "Ekko",
        local: "Zaun",
        image: Ekko,
        banner: EkkoBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Prodígio das ruas violentas de Zaun, Ekko é capaz de manipular o tempo e reverter qualquer situação a seu favor. Ele usa sua própria invenção, o Revo-Z, para explorar as possíveis ramificações da realidade, criando o momento perfeito para realizar o que parecia impossível na primeira vez todas as vezes. Embora Ekko valorize muito sua liberdade, quando algo ameaça as pessoas de quem gosta, ele e seus Fogolumes não medem esforços para defendê-las.",
            historiaCompleta: 'Ekko cresceu nas ruas de Zaun, entre sucata, fumaça e caos, mas desde pequeno se destacou por sua inteligência, curiosidade e habilidade com tecnologia. Amigo de infância de Vi e Powder (Jinx), ele fazia parte do mesmo grupo de crianças lideradas por Vander, que lhes dava abrigo e segurança. Ekko sempre admirou a coragem de Vi e o talento criativo de Powder, mas viu sua infância ruir com a tragédia que separou as duas irmãs — o dia em que a explosão causada por Powder matou Mylo, Claggor e Vander, e mergulhou Zaun em ainda mais violência. Anos depois, Ekko sobreviveu e amadureceu. Enquanto Zaun afundava sob o domínio de Silco e da droga Shimmer, ele reuniu jovens rebeldes e formou o grupo Firelights, uma resistência que lutava para proteger seu povo sem recorrer à crueldade ou à corrupção. Ele se tornou um símbolo de esperança, acreditando que Zaun ainda podia ter um futuro melhor. Criativo como sempre, usou sucata e engenhosidade para construir armas, veículos e até dispositivos temporais — reflexo de sua mente genial e visionária. Quando reencontra Vi e Caitlyn, Ekko mostra o quanto mudou: de um garoto de rua, tornou-se um líder forte e estratégico, com um senso de justiça puro e pragmático. No entanto, seu reencontro mais doloroso é com Jinx, sua antiga amiga de infância, agora uma criminosa instável e perigosa. Em uma luta intensa e emocional, Ekko consegue derrotá-la, mas hesita em matá-la, lembrando-se da menina que ela foi — o que revela que, apesar de tudo, ele ainda guarda carinho e compaixão por ela. Ekko representa o lado esperançoso e humano de Zaun, em contraste com o desespero de Silco e a loucura de Jinx. Ele acredita no poder das pessoas de mudarem o próprio destino e recusa-se a deixar que a dor o corrompa. Ao final da temporada, Ekko permanece como um símbolo de resistência e renovação — alguém que carrega o passado, mas luta todos os dias para construir um futuro diferente para Zaun.', 
        },
        vulgo: 'o Rapaz que Estilhaçou o Tempo',
      },
                  {
        id: 6,
        nome: "Caitlyn",
        local: "Piltover",
        image: Caitlyn,
        banner: CaitlynBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Conhecida como sua melhor pacificadora, Caitlyn Kiramman também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos. É comum que ela faça dupla com Vi, agindo como um contraponto de calmaria para a natureza impetuosa de sua parceira. Mesmo carregando um rifle hextec único, a arma mais poderosa de Caitlyn é seu intelecto superior, que permite que ela prepare elaboradas armadilhas para qualquer fora da lei tolo o suficiente para operar na Cidade do Progresso.",
            historiaCompleta: 'Caitlyn Kiramman nasceu em Piltover, em uma das famílias mais influentes e ricas da cidade. Desde jovem, cresceu cercada por conforto, educação refinada e expectativas de seguir o caminho político da família. No entanto, Caitlyn sempre teve um espírito curioso, justo e independente, o que a afastava da vida luxuosa e superficial da elite. Enquanto sua mãe queria que ela se tornasse uma figura política, Caitlyn preferia a ação direta: ela sonhava em descobrir a verdade por trás da corrupção que via nas sombras de Piltover. Movida por esse ideal, ela se tornou uma enforcer, uma policial dedicada a investigar crimes e proteger os inocentes, mesmo que isso significasse desafiar as ordens de seus superiores. Durante uma investigação, Caitlyn descobre pistas que ligam a droga Shimmer e os ataques de Zaun a uma rede de corrupção dentro do próprio sistema de Piltover. Suas descobertas acabam levando-a a cruzar o caminho de Vi, uma prisioneira zaunita que parece saber mais do que ninguém sobre o submundo. A parceria entre Caitlyn e Vi começa com desconfiança — duas mulheres de mundos completamente opostos —, mas rapidamente evolui para uma relação de respeito e cumplicidade. Através de Vi, Caitlyn vê a dura realidade de Zaun e percebe que os “inimigos” que sempre imaginou são, na verdade, vítimas de um sistema injusto. Essa jornada transforma profundamente sua visão de mundo, fazendo com que ela questione as políticas de Piltover e o próprio papel da elite que sempre serviu. Ao longo da série, Caitlyn prova ser corajosa, empática e incrivelmente determinada. No final da temporada, ela tenta, ao lado de Vi, impedir o conflito entre as duas cidades e salvar Jinx de si mesma. No entanto, a explosão iminente causada por Jinx simboliza a falência dos ideais que Caitlyn lutou para preservar. Sua história em Arcane é a de uma mulher que tenta equilibrar dever e compaixão — alguém que abandona os privilégios da nobreza para buscar justiça real, mesmo que isso a coloque contra o próprio mundo em que nasceu.', 
        },
        vulgo: 'a Xerife de Piltover',
      },
                        {
        id: 7,
        nome: "Warwick",
        local: "Zaun",
        image: Vander,
        banner: VanderBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Warwick é um monstro que caça pelas ruas cinzentas de Zaun. Transformado por experimentos agonizantes, seu corpo agora é fundido a um sistema complexo de câmaras e bombas, um maquinário que enche suas veias com fúria química. Ele surge das sombras para caçar os criminosos que aterrorizam o submundo da cidade. Warwick fica enfurecido quando sente o cheiro de sangue… e ninguém que o derrama consegue escapar.",
            historiaCompleta: 'Vander foi um dos líderes da antiga rebelião de Zaun contra Piltover, um homem forte, carismático e movido pelo desejo de liberdade para seu povo. Após ver o conflito terminar em massacre, ele se arrepende da violência e faz um juramento de paz, decidindo proteger os moradores de Zaun de forma mais humana. Abandona a luta armada, abre o bar The Last Drop e passa a ser conhecido como o “Protetor de Zaun”, cuidando especialmente das crianças órfãs da guerra — entre elas, Vi e Powder, que ele cria como filhas. Durante anos, Vander tenta manter a paz entre as duas cidades, agindo como mediador entre o submundo de Zaun e os Enforcers de Piltover. Porém, seu passado volta a assombrá-lo quando Silco, um antigo aliado que ele traiu para pôr fim à revolta, retorna buscando vingança e poder. Quando as ações impensadas de Vi e Powder provocam uma explosão em Piltover, Vander tenta protegê-las, mas acaba capturado por Silco. É nesse momento que sua figura de pai e herói é posta à prova, e sua vida toma um rumo trágico. Durante o resgate, Vi tenta salvar Vander, mas o plano de Powder dá errado, causando a morte de amigos e deixando Vander gravemente ferido. Para salvar Vi, ele bebe o Shimmer, a substância criada por Silco, e se transforma em uma criatura monstruosa, lutando até o fim para proteger suas filhas. Seu sacrifício é um dos momentos mais emocionantes da série — a queda de um homem que fez de tudo para conter a violência, apenas para ser consumido por ela no final. Nos momentos finais da temporada, é sugerido que Vander sobrevive e se transforma em Warwick, um ser mutante criado nos experimentos de Singed. Nos jogos de League of Legends, Warwick é descrito como uma besta atormentada por memórias fragmentadas de uma vida anterior — ecos de sua antiga humanidade. Assim, Vander se torna o retrato da tragédia de Zaun: um homem bom transformado em monstro por um mundo cruel, e um lembrete de que até os mais nobres podem sucumbir ao desespero.', 
        },
        vulgo: 'a Ira Desimpedida de Zaun',
      },
                              {
        id: 8,
        nome: "Mel",
        local: "Noxus",
        image: Mel,
        banner: MelBanner,
        moreInfoPerso: {
          idade: 19,
          resumoHistoria:
            "Mel Medarda é a suposta herdeira da família Medarda, que já foi uma das mais poderosas em Noxus. Sob a aparência de uma aristocrata elegante, ela esconde uma política talentosa que faz questão de saber cada detalhe a respeito de todas as pessoas que conhece. Depois de um encontro com a misteriosa Rosa Negra, Mel descobriu a extensão da farsa de sua mãe e, pela primeira vez, enfrentou uma situação potencialmente fora de seu controle. Com poderes mágicos recém-despertados, ela zarpou para casa em busca de respostas. Por mais que muitos ainda tentem apagar a luz dentro dela, a alma de Mel permanece indomável.",
            historiaCompleta: 'Mel Medarda nasceu em Noxus, uma nação poderosa e militarista conhecida por sua brutalidade e ambição. Filha de uma família aristocrática, Mel sempre foi diferente de seus parentes: enquanto eles valorizavam a guerra e a força, ela acreditava no poder da inteligência, da arte e da diplomacia. Por desafiar os ideais de sua mãe, Ambessa Medarda, Mel foi exilada de Noxus e acabou encontrando refúgio em Piltover, onde usou sua astúcia para conquistar um lugar no Conselho da cidade. Em Piltover, Mel rapidamente se destacou como uma estrategista política brilhante. Ambiciosa, elegante e manipuladora quando necessário, ela via o poder não como um fim em si, mas como uma ferramenta para moldar o mundo de forma mais civilizada. Quando conhece Jayce Talis, um inventor promissor, enxerga nele não apenas potencial tecnológico, mas também uma oportunidade de influência. Ao apoiar o projeto Hextech, Mel impulsiona Jayce ao poder e consolida sua própria posição como a conselheira mais influente de Piltover. Com o tempo, a relação entre os dois ultrapassa a política e se torna emocional. Mel vê em Jayce algo que perdeu em Noxus: idealismo e esperança. No entanto, sua aproximação também a confronta com dilemas morais — ela começa a perceber que o progresso e o poder têm custos humanos, e que as decisões do Conselho frequentemente servem mais à elite do que ao povo. Sua conexão com Jayce a humaniza, mostrando um lado mais vulnerável por trás de sua postura calculista. No final da temporada, Mel é surpreendida pela chegada de sua mãe, Ambessa, que a alerta sobre os perigos da tecnologia Hextech e as ameaças externas a Piltover. Esse reencontro desperta em Mel lembranças do passado e a coloca entre dois mundos: o pragmatismo militar de Noxus e o idealismo de Piltover. Quando Jinx ataca o Conselho com o canhão Hextech, Mel está presente no local, e a cena final sugere que sua vida está em risco. Sua história em Arcane é a de uma mulher que fugiu da guerra para construir o poder através da diplomacia — mas que, no fim, se vê novamente cercada pela destruição que tentou deixar para trás.', 
        },
        vulgo: 'o Reflexo da Alma',
      },
    ],
    []
  );

  const [search, setSearch] = useState("");
  const filtro = personagens.filter((p) => 
    p.nome.toLowerCase().includes(search.toLowerCase())
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
      <div className="absolute inset-0 bg-black/70" />
      <div className="w-[85%] relative flex flex-col gap-10 items-center justify-center pb-20">
        <div className="flex flex-col text-center w-full justify-center mt-50 items-center">
            <span className="text-white text-[1em] md:text-[1.5em] font-(family-name:--fontAll) font-semibold tracking-[2px]">Personagens</span>
          <h1 className="text-amber-500 text-[1.3em] md:text-[1.8em] lg:text-[2.5em] font-(family-name:--fontAll) font-bold tracking-[5px]">
            ESCOLHA O SEU FAVORITO
          </h1>
          <span className="text-white text-[0.9em] md:text-[1em] md:max-w-[70%]">Com personalidades marcantes e histórias entrelaçadas, cada um reflete o conflito entre Piltover e Zaun.
Descubra seus passados, suas lutas e o que os move em um mundo dividido entre progresso e caos.</span>
        </div>


        <div className="w-full flex flex-col justify-center items-center">
                                                    <div className="w-full flex items-center justify-center my-10">
                        <div className="w-[70%] h-1 bg-amber-500 rounded-[50%]"></div>
                      </div>
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className=" font-bold text-[1.3em] font-(family-name:--fontAll) text-amber-500">Filtro</h2>
                <div className="w-full flex flex-col items-center justify-center mt-1">
                    <input className="p-3 w-full max-w-100 bg-white rounded-md text-center" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar" />
                </div>
            </div>
        </div>


        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtro.map((personagem) => (
            <div
              key={personagem.id}
              className="w-full h-130 overflow-hidden flex flex-col cursor-pointer hover:scale-110 duration-400 rounded-md border-1 border-amber-500"
              onClick={() => openModal(personagem)}
            >
              <div className="border-b-5 border-amber-500 rounded-[10px] h-105">
                <img
                  className="w-full h-full object-cover"
                  src={personagem.image}
                  alt={personagem.nome}
                />
              </div>
              <div className="bg-slate-950 text-center flex flex-col justify-center flex-auto p-2">
                <h1 className="text-amber-500 font-(family-name:--fontAll) font-bold text-[20px] uppercase">
                  {personagem.nome}
                </h1>
                <span className="text-amber-100/70 tracking-[2px] text-[0.75em] uppercase font-bold">
                  {personagem.vulgo}
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
            className={`relative w-[95%] md:w-[70%]  max-h-[80vh] rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
              isClosing
                ? "opacity-0 scale-95 translate-y-4"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <div className=" bg-slate-950 overflow-y-auto max-h-[calc(80vh-60px)]">
              {selectedPersonagem ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="relative flex justify-center items-center w-full">
                    <img
                      src={selectedPersonagem.banner}
                      alt={selectedPersonagem.nome}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors cursor-pointer"
                      aria-label="Fechar modal"
                    >
                      <X className="text-white text-xl bg-black/50 hover:bg-amber-500/100 duration-300 p-1 w-10 h-10 rounded-[50%]" />
                    </button>
                    <div className="hidden xl:flex flex-col absolute bottom-50 left-10 right-10 rounded-lg h-[50%] ">
                      <h3 className="text-2xl font-bold text-amber-500/60 uppercase italic font-(family-name:--fontAll)">
                        {selectedPersonagem.vulgo}
                      </h3>
                                            <h4 className="text-5xl my-5 font-bold text-white uppercase italic font-(family-name:--fontAll)">
                        {selectedPersonagem.nome}
                      </h4>
                      <h3 className="text-xl italic font-(family-name:--fontAll) text-white mt-4 mb-2">
                        Resumo
                      </h3>
                      <p className="text-white  max-w-[60%] italic ">
                        {selectedPersonagem.moreInfoPerso?.resumoHistoria ||
                          "História não disponível"}
                      </p>
                    </div>
                  </div>
                     <div className="flex xl:hidden flex-col p-5 md:p-10 rounded-lg h-[50%]">
                                            <h3 className="text-[1.3em] font-bold text-amber-500/60 uppercase italic font-(family-name:--fontAll)">
                        {selectedPersonagem.vulgo}
                      </h3>
                      <h3 className="text-4xl my-4 font-bold text-white uppercase italic font-(family-name:--fontAll)">
                        {selectedPersonagem.nome}
                      </h3>
                      <p className="tracking-wider text-[1.2em] text-white font-(family-name:--fontAll) font-medium">
                        {selectedPersonagem.local}
                      </p>

                      <div className="w-full mt-5">
                        <div className="w-full h-1 bg-amber-500 rounded-[50%]"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-4 mb-2 font-(family-name:--fontAll) text-center">
                        História
                      </h3>
                      <p className="text-white whitespace-pre- italic text-center">
                        {selectedPersonagem.moreInfoPerso?.historiaCompleta ||
                          "História não disponível"}
                      </p>
                    </div>


                          <div className="hidden xl:flex flex-col p-10 rounded-lg h-[50%]">
                                          <div className="w-full mt-5">
                        <div className="w-full h-1 bg-amber-500 rounded-[50%]"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-4 mb-2 font-(family-name:--fontAll) text-center">
                        História
                      </h3>
                      <p className="text-white whitespace-pre- italic text-center">
                        {selectedPersonagem.moreInfoPerso?.historiaCompleta ||
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
