import Text from "../../assets/image/text-section-1.svg";

import { BotaoEscuro } from "../../components/BotaoEscuro";

export const SectionOne = () => {
  return (
    <section className="bg-section-one">
      <div className="container mx-auto flex gap-10 flex-col">
        <div className=" flex items-end gap-10 justify-between my-10">
          <div className="flex-1 flex flex-col gap-10">
            <img src={Text} alt="" className="w-[80%]" />
            <div className="flex items-center justify-between gap-10">
              <div className="w-full">
                <BotaoEscuro
                  tipo="tipo1"
                  text="Ver nosso Portfólio"
                ></BotaoEscuro>
              </div>
              <div className="w-full">
                <BotaoEscuro tipo="tipo2" text="RECAP 2023"></BotaoEscuro>
              </div>
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-center justify-end rounded-[29px] bg-header-section !h-[700px] w-full">
            <div className="efeito-vidro rounded-[29px] flex items-center justify-between gap-10 text-white h-[160px] px-10">
              <div className="flex flex-col gap-5">
                {" "}
                <h1 className="text-xl font-bold">BMouse franchising</h1>
                <p>
                  Mais do uma escolha, a evolução é uma necessidade! Com a
                  BMouse, o agro sai do campo e vai para o mundo digital,
                  alcançando novos públicos.
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white"
                >
                  {" "}
                  {`>`}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between items-center  h-[430px]">
          <div className="flex flex-col items-center justify-end rounded-[29px] bg-agromouse !h-full !w-[70%]">
            <div className="efeito-vidro rounded-[29px] flex items-center justify-between gap-10 text-white h-[160px] px-10">
              <div className="flex flex-col gap-5">
                {" "}
                <h1 className="text-xl font-bold">AgroMouse</h1>
                <p>
                  Mais do uma escolha, a evolução é uma necessidade! Com a
                  BMouse, o agro sai do campo e vai para o mundo digital,
                  alcançando novos públicos, novos horizontes e novos lugares
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white"
                >
                  {" "}
                  {`>`}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end rounded-[29px] bg-story !h-full !w-[30%]">
            <div className="efeito-vidro rounded-[29px] w-full flex items-center justify-between gap-10 h-[160px] text-white p-10">
              <div className="flex flex-col gap-5">
                {" "}
                <h1 className="text-xl font-bold">Storytellers</h1>
                <p>Somos contadores de historias!</p>
              </div>
              <div>
                <a
                  href=""
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white"
                >
                  {" "}
                  {`>`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
