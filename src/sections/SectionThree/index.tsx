import Image from "../../assets/image/SectionThree/image.svg";
import Text from "../../assets/image/SectionThree/text.svg";

export const SectionThree = () => {
  return (
    <section className="bg-section-one">
      <div className="container mx-auto flex gap-10 justify-between ">
        <div className="w-[80%]">
          <img src={Image} alt="" className="rotate-180 w-full" />
        </div>
        <div className="text-white flex flex-col gap-10">
          <img src={Text} alt="" />
          <div className="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum recusandae eum nostrum numquam! Adipisci maiores,
              mollitia, unde facilis assumenda aspernatur tenetur voluptatem
              reprehenderit laboriosam nulla enim, perferendis distinctio
              commodi corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              unde dicta! Illo iusto sequi vero nisi deleniti tempore in
              veritatis officiis, laudantium earum fugit repellendus error iste
              aspernatur vel! Molestias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
