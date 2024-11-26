import climateimage from "../../assets/image/climate-image.png"; // Replace with your image path
import leave from "../../assets/image/leave.png";
import earth from "../../assets/image/earth.png";
import bg from "../../assets/image/baccck.jpeg"; // Replace with your image path
import green from "../../assets/image/greendot.png";


const Climate = () => {
  return (
    <section className="relative w-full px-6 py-12 sm:px-10 lg:px-20 lg:h-full"
    style={{ backgroundImage: `url(${bg})` }}>
      
      <div className="container flex flex-col items-center gap-10 mx-auto md:flex-row lg:my-[124px]">
        {/* Image Section */}
        <div className="relative flex justify-center md:w-1/2 lg:w-1/2">
          {/* Green Background Dot */}
          <img
            src={green}
            alt="Green Dot Background"
            className="absolute z-1 w-full  lg:w-[150px] lg:h-[150px] lg:bottom-[-10%] -left-[10%] opacity-90 "
          />

          {/* Climate Image */}
          <img
            src={climateimage}
            alt="Green Revolution"
            className="relative z-10 max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="mt-10 md:w-1/2 md:mt-16">
          <p className="mb-2 text-sm font-medium text-green-700 uppercase">
            About Us
          </p>
          <h2 className="text-3xl lg:text-[46px] font-bold font-albert mb-12 text-black lg:leading-[45px] md:leading-[30px]">
            Leading the Charge in <br/>Africa’s Green Revolution
          </h2>
          <div className="flex items-start gap-4 mb-6">
            <img src={leave} alt="Mission Icon" className="w-8 h-8" />
            <p className="text-gray-700 text[16px]">
              <p>
                <strong className="text-[26px] font-bold text-black">
                  Our Mission:
                </strong>
              </p>
              To drive innovation in clean and green technologies across Africa.
            </p>
          </div>
          <div className="flex items-start gap-4 pt-8 mb-6">
            <img src={earth} alt="Vision Icon" className="w-8 h-8" />
            <p className="text-gray-700 text-[16px]">
              <p>
                <strong className="text-[26px] text-black font-bold font-albert">
                  Our Vision:
                </strong>
              </p>
              To be the leading force in the green economy, driving sustainability
              through comprehensive environmental protection solutions and
              renewable energy initiatives.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-6 py-3 font-medium text-white transition bg-green-700 rounded-md shadow hover:bg-green-800"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Climate;
