import Text from "../../assets/image/SectionTwo/text.svg";

export const SectionTwo = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col gap-20 items-center justify-center">
        <div className="flex items-center gap-10 justify-between">
          <img src={Text} alt="" />
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            ex incidunt, accusamus natus optio neque consectetur, odio sapiente
            dolores quis totam! Reiciendis facilis quae similique quia? Commodi
            iusto consequuntur accusantium!
          </p>
        </div>
        <iframe
          className="w-full h-[715px] rounded-3xl"
          src="https://www.youtube.com/embed/cq9rtR_XWl8?si=XOxYbcGCkXYv4INJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};
