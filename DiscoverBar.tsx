export default function DiscoverBar() {
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-[#F2EB42] pb-8
">
      <h2 className="text-[#231F20] text-center text-base">How we work</h2>
      
      {/* Box 1 */}
      <div className="w-full max-w-2xl border-2 border-white rounded-full flex items-center gap-6">
        <div className="bg-white text-black font-semibold px-6 py-2 rounded-full whitespace-nowrap">
          DISCOVER
        </div>
        <p className="text-sm text-[#231F20] my-auto">
        Understand your organisation’s context, culture and development needs
        </p>
      </div>

      {/* Box 2 */}
      <div className="w-full max-w-2xl border-2 border-white rounded-full flex items-center gap-6">
        <div className="bg-white text-black font-semibold px-6 py-2 rounded-full whitespace-nowrap">
          DESIGN
        </div>
        <p className="text-sm text-[#231F20] my-auto">
        Tailor practical, research-backed solutions focused on real-world application
 
        </p>
      </div>

            {/* Box 3 */}
            <div className="w-full max-w-2xl border-2 border-white rounded-full flex items-center gap-6">
        <div className="bg-white text-black font-semibold px-6 py-2 rounded-full whitespace-nowrap">
          DELIVER
        </div>
        <p className="text-sm text-[#231F20] my-auto">
        Run interactive sessions that stretch participants and embed learning
        </p>
      </div>

            {/* Box 4 */}
            <div className="w-full max-w-2xl border-2 border-white rounded-full flex items-center gap-6">
        <div className="bg-white text-black font-semibold px-6 py-2 rounded-full whitespace-nowrap">
          DEBRIEF
        </div>
        <p className="text-sm text-[#231F20] my-auto">
        Measure impact with clear metrics, feedback and internal data
        </p>
      </div>

    </div>
  );
}