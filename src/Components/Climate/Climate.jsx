
import climateimage from "../../assets/image/climate-image.png"; // Replace with your image path
import leave from "../../assets/image/leave.png";
import earth from "../../assets/image/earth.png";

const Climate = () => {
  return (
    <section className="bg-[#f3fdf5] py-12 px-6 sm:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={climateimage}
            alt="Green Revolution"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <p className="text-green-700 font-medium text-sm uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-albert  text-black mb-6">
            Leading the Charge in Africa’s Green Revolution
          </h2>
          <div className="flex items-start gap-4 mb-6">
            <img src={leave} alt="Mission Icon" className="w-8 h-8" />
            <p className="text-gray-700">
              <strong>Our Mission:</strong> To drive innovation in clean and
              green technologies across Africa.
            </p>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <img src={earth} alt="Vision Icon" className="w-8 h-8" />
            <p className="text-gray-700">
              <strong>Our Vision:</strong> To be the leading force in the green
              economy, driving sustainability through comprehensive
              environmental protection solutions and renewable energy
              initiatives.
            </p>
          </div>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-green-700 text-white font-medium rounded-md shadow hover:bg-green-800 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Climate;
