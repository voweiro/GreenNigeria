import topic from "../../assets/icons/topics.png";


const GreenHeading = () => {
    return (
      <section className="bg-[#49AF45] py-6 px-4 w-full lg:h-[120px]">
        <div className=" font-albert lg:mt-5 container grid items-center grid-cols-2 gap-6 mx-auto text-center sm:grid-cols-4">
          {/* Topic 1 */}
          <div className="flex items-center justify-center gap-2">
            <span className="lg:text-[26px] lg:font-[600]  text-lg font-medium text-white">Climate Change</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
            />
          </div>
  
          {/* Topic 2 */}
          <div className="flex items-center justify-center gap-2">
            <span className="lg:text-[26px] lg:font-[600] text-lg font-medium text-white">Renewable Energy</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className=" w-6 h-6 lg:w-[30px] lg:h-[30px]"
            />
          </div>
  
          {/* Topic 3 */}
          <div className="flex items-center justify-center gap-2">
            <span className="lg:text-[26px] lg:font-[600] text-lg font-medium text-white">Green Economy</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6  lg:w-[30px] lg:h-[30px]"
            />
          </div>
  
          {/* Topic 4 */}
          <div className="flex items-center justify-center gap-2">
            <span className="lg:text-[26px] lg:font-[600]  text-lg font-medium text-white">Climate Change</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6  lg:w-[30px] lg:h-[30px]"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default GreenHeading;