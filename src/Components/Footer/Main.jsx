import React from "react";
import bg from "../../assets/image/backgroundfooter.jpeg";
import Down from "./Down";
import Footer from "./Footer";

function Main() {
  return (
    <section
      className="relative w-full h-auto bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay (Optional for Better Readability) */}
    

      {/* Content Wrapper */}
      <div className="relative w-[90%] mx-auto pt-16 sm:pt-20 lg:pt-24">
        <Down />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}

export default Main;
