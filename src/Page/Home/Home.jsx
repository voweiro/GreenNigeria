import Climate from "../../Components/Climate/Climate";
import Main from "../../Components/Footer/Main";
import Hero from "../../Components/Hero/Hero";
import StatsAndProcess from "../../Components/Stats/Stats";

function Home() {
  return (
    <div>
      <Hero />
      <Climate />
      <StatsAndProcess />

      <Main />
    </div>
  );
}

export default Home;
