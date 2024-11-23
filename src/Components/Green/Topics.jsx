import topic from "../../assets/icons/topics.png";


const Topics = () => {
    return (
      <section className="bg-green-600 py-6 px-4 w-full">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center">
          {/* Topic 1 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-medium text-lg">Climate Change</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6"
            />
          </div>
  
          {/* Topic 2 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-medium text-lg">Renewable Energy</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6"
            />
          </div>
  
          {/* Topic 3 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-medium text-lg">Green Economy</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6"
            />
          </div>
  
          {/* Topic 4 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-medium text-lg">Climate Change</span>
            {/* Placeholder for leaf image */}
            <img
              src={topic}
              alt="Leaf Icon"
              className="w-6 h-6"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Topics;
  