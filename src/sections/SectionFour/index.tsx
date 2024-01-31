import Text from "../../assets/image/SectionFour/text.svg";
import Image from "../../assets/image/header-section-1.svg";

const info = [
  {
    img: Image,
    title: "AgroMouse",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "AgroMouse",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "AgroMouse",
    text: "Saindo do campo para o digital!",
  },
  {
    img: Image,
    title: "AgroMouse",
    text: "Saindo do campo para o digital!",
  },
];

export const SectionFour = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col gap-20">
        <div className="flex items-center justify-between gap-10 text-white">
          <img src={Text} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            quisquam voluptas tenetur accusamus eligendi recusandae omnis
            impedit voluptates libero iste inventore doloribus laborum error
            animi ab atque, illo perferendis amet.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {info.map((item) => {
            return (
              <div
                className=" flex-1 flex flex-col items-center justify-end rounded-[29px] bg-header-section !h-[420px] w-full"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="efeito-vidro rounded-[29px] flex items-center justify-between gap-10 text-white h-[160px] w-full px-10">
                  <div className="flex flex-col gap-5">
                    {" "}
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <p>{item.text}</p>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
