import Climate from "../../Components/Climate/Climate"
import GreenCleanInnovation from "../../Components/Green/GreenCleanInnovation"
import GreenHeading from "../../Components/GreenHeading/GreenHeading"
import Hero from "../../Components/Hero/Hero"
import Services from "../../Components/Services/Services"
import StatsAndProcess from "../../Components/Stats/Stats"


function Home() {
    return (
      <div>
      <Hero/>
      <GreenHeading/>
      <Climate/>
      <Services/>
      <GreenCleanInnovation/>
      <StatsAndProcess/>
    
      </div>
      
         
          
      
    )
  }
  
  export default Home