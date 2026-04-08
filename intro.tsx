

export default function Intro() {
    return (
       
<section className="bg-gray-50 mx-auto py-6">
  <div className="grid grid-cols-[1fr_auto_1fr] gap-x-[30px] items-start">
    
    {/* LEFT */}
    <div className="flex justify-end pr-[10px] my-auto">
  <p className="text-left md:text-right text-[16px] text-[#231F20] w-48 align-middle">
    We help leaders, teams and individuals elevate their performance through professional development.
  </p>
</div>

    {/* DIVIDER */}
    <div className="w-px bg-[#231F20] self-stretch"></div>

    {/* RIGHT */}
    <div className="text-[#231F20] w-80">
      <p className="text-[12px]">
        We combine research and psychology to deliver training and development solutions that ignite genuine behaviour change that drives results.
      </p>
      <p className="mt-4 text-[12px]">
        For over 20 years, we&apos;ve helped organisations unlock potential by blending evidence-based research with real world application. Our training and development solutions challenge thinking, bring greater impact and deliver powerful results.
      </p>
    </div>

  </div>
</section>
    );
  }