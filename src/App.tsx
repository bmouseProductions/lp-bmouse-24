import { SectionOne } from "./sections/SectionOne";
import { SectionTwo } from "./sections/SectionTwo";
import Border from "./assets/image/border.svg";
import { SectionThree } from "./sections/SectionThree";
import { SectionFour } from "./sections/SectionFour";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <SectionOne></SectionOne>
      <img src={Border} alt="" className="mx-auto w-[100%]" />
      <SectionTwo></SectionTwo>
      <img src={Border} alt="" className="mx-auto w-[100%]" />
      <SectionThree></SectionThree>
      <img src={Border} alt="" className="mx-auto w-[100%]" />
      <SectionFour></SectionFour>
    </div>
  );
}

export default App;
