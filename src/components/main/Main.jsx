import React from "react";
import main1 from "../../assets/main1.png";
import element from "../../assets/element.png";
import search from "../../assets/search.png";
import pharmasy from "../../assets/pharmasy.png";
import consultation from "../../assets/consultation.png";
import info from "../../assets/info.png";
import emergancy from "../../assets/emergancy.png";
import tracking from "../../assets/tracking.png";
import providers from "../../assets/providers.png";

function Main() {
  return (
    <main>
      <section>
        <div className="flex items-center justify-center mt-24 relative">
          <img src={element} alt="" className="absolute top-0 left-0" />
          <div className="section__context px-20">
            <h1 className="text-5xl text-[#3C567B] ">
              Virtual healthcare Saviour for you
            </h1>
            <p className="text-xl text-[#93C1F9] pt-7">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <button className="px-[30px] py-[15px] bg-[#458FF6] text-[white] rounded-[55px]  text-[19px] mt-[100px] ml-[40px]">
              Consult today
            </button>
          </div>
          <img src={main1} alt="" className="max-w-[769px] max-h-[554px]" />
        </div>
      </section>
      <section>
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-col justify-center items-center mt-48 ">
            <h2 className="text-5xl text-[#462E6A] relative before:cotent before:absolute before:bottom-[-30px] before:left-36 before:h-[2px] before:w-[56px] before:bg-[#000000]">
              Services we Offer
            </h2>
            <p className="text-[19px] text-[#CCD2E9] mt-[61px] max-w-[900px] text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <div className="cards max-w-full grid grid-cols-3 gap-[34px] mt-[86px]">
              <div className="card flex flex-col items-center justify-end pt-0 px-[42px] pb-[46px] h-[354px] gap-[20px] rounded-[20px] shadow-md">
                <span>
                  <img src={search} alt="" />
                </span>
                <p className="text-[24px] font-medium"> Search doctor</p>
                <p className="text-[16px] leading-7 text-[#7D7987] font-light">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
              <div className="card flex flex-col items-center justify-end pt-0 px-[42px] pb-[46px] h-[354px] gap-[20px] rounded-[20px] shadow-md">
                <img src={pharmasy} alt="" />
                <p className="text-[24px] font-medium">Online pharmacy</p>
                <p className="text-[16px] leading-7 text-[#7D7987] font-light">
                  Buy your medicines with our mobile application with a simple
                  delivery system
                </p>
              </div>
              <div className="card flex flex-col items-center justify-end pt-0 px-[42px] pb-[46px] h-[354px] gap-[20px] rounded-[20px] shadow-md">
                <img src={consultation} alt="" />
                <p className="text-[24px] font-medium">Consultation</p>
                <p className="text-[16px] leading-7 text-[#7D7987] font-light">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
              <div className="card flex flex-col items-center justify-end pt-0 px-[42px] pb-[46px] h-[354px] gap-[20px] rounded-[20px] shadow-md">
                <span>
                  <img src={info} alt="" />
                </span>
                <p className="text-[24px] font-medium"> Details info</p>
                <p className="text-[16px] leading-7 text-[#7D7987] font-light">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
              <div className="card flex flex-col items-center justify-end pt-0 px-[42px] pb-[46px] h-[354px] gap-[20px] rounded-[20px] shadow-md">
                <img src={emergancy} alt="" />
                <p className="text-[24px] font-medium">Emergency care</p>
                <p className="text-[16px] leading-7 text-[#7D7987] font-light">
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
              <div className="card flex flex-col items-center justify-end pt-0 px-[42px] pb-[46px] h-[354px] gap-[20px] rounded-[20px] shadow-md">
                <img src={tracking} alt="" />
                <p className="text-[24px] font-medium">Tracking</p>
                <p className="text-[16px] leading-7 text-[#7D7987] font-light">
                  Track and save your medical history and health data
                </p>
              </div>
            </div>

            <button className="px-[40px] py-[10px] bg-transparent text-[#458FF6] rounded-[55px]  text-[19px] mt-[100px] border-solid border-blue-500 border-[1px] duration-500 hover:bg-[#458FF6] hover:text-white mb-[190px]">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex items-center justify-center">
            <div className="left w-full">
              <img src={providers} alt="" />
            </div>
            <div className="right max-w-[486px]">
              <h2 className="max-w-[455px] text-4xl leading-[56px] text-[#462E6A] relative before:cotent before:absolute before:bottom-[-30px] before:left-0 before:h-[2px] before:w-[56px] before:bg-[#000000]">
                Leading healthcare providers
              </h2>
              <p className="mt-[60px] text-lg leading-[30px] text-[#7D7987]">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
              <button className="px-[40px] py-[10px] bg-transparent text-[#458FF6] rounded-[55px]  text-[19px] mt-[37px] border-solid border-blue-500 border-[1px] duration-500 hover:bg-[#458FF6] hover:text-white mb-[20px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
