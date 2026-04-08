export default function Different() {
    return (
      <section className="mx-4">
        <h2 className="text-white text-center">What makes us different </h2>
  
        <div className="grid grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
            <img
              src="/icon-energise.svg"
              alt="Card image"
              className="w-full h-48 object-fit"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
              Relationships: Strong, collaborative partnership to understand your business needs
              </h3>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
          <img
              src="/icon-energise.svg"
              alt="Card image"
              className="w-full h-48 object-fit"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
              Curiosity: Continuous research and innovation to bring you the best solutions
              </h3>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
          <img
              src="/icon-energise.svg"
              alt="Card image"
              className="w-full h-48 object-fit"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
              Impact: Measurable change in skills, mindset and performance
              </h3>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
          <img src="/icon-energise.svg"
              alt="Card image"
              className="w-full h-48 object-fit"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
              Professionalism: High-quality, credible programmes that inspire confidence
              </h3>
            </div>
          </div>
  
        </div>
      </section>
    );
  }