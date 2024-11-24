import AppWrapper from "../../Components/AppWrapper/AppWrapper";
import Climate from "../../Components/Climate/Climate";
import GreenCleanInnovation from "../../Components/Green/GreenCleanInnovation";
import GreenHeading from "../../Components/GreenHeading/GreenHeading";
import Hero from "../../Components/Hero/Hero";
import Process from "../../Components/Process/Process";
import Services from "../../Components/Services/Services";
import StatsAndProcess from "../../Components/Stats/Stats";

function Home() {
  return (
    <div>
        <AppWrapper>
      <Hero />
      <GreenHeading />
      <Climate />
      <Services />
      <GreenCleanInnovation />
      <StatsAndProcess />
      <Process />
      </AppWrapper>
    </div>
  );
}

export default Home;
