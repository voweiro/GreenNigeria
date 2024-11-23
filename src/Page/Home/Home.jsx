import Climate from "../../Components/Climate/Climate";
import Main from "../../Components/Footer/Main";
import Topics from "../../Components/Green/Topics";
import Hero from "../../Components/Hero/Hero";
import StatsAndProcess from "../../Components/Stats/Stats";

function Home() {
  return (
    <div>
      <Hero />
      <Topics/>
      <Climate />
      <StatsAndProcess />

      <Main />
    </div>
  );
}

export default Home;
