import climateimage from "../../assets/image/climate-image.png"; // Replace with your image path
import leave from "../../assets/image/leave.png";
import earth from "../../assets/image/earth.png";

const Climate = () => {
  return (
    <section className="bg-[#f3fdf5] py-12 px-6 sm:px-10 lg:px-20 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center lg:w-1/2">
          <img
            src={climateimage}
            alt="Green Revolution"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-10 md:mt-16">
          <p className="text-green-700 font-medium text-sm uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl lg:text-[46px] font-bold font-albert mb-12 text-black">
            Leading the Charge in Africa’s Green Revolution
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
          <div className="flex items-start gap-4 mb-6 pt-8">
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
              className="inline-block px-6 py-3 bg-green-700 text-white font-medium rounded-md shadow hover:bg-green-800 transition"
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
