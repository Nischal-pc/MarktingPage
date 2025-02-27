import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalculator,
  faPiggyBank,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className="w-10 h-10 text-white" />,
      title: "Tell us about your home",
      description:
        "Fill out a quick survey about your existing system and home details.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faCalculator} className="w-10 h-10 text-white" />
      ),
      title: "See your savings analysis",
      description: "Get an instant estimate of your potential savings.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faPiggyBank} className="w-10 h-10 text-white" />
      ),
      title: "Claim rebates & save",
      description:
        "We'll help you claim your rebate and schedule your heat pump installation.",
    },
  ];

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How it works
        </h2>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md w-full md:w-64 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="absolute -top-8 bg-[#42A5F5] p-4 rounded-full">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#42A5F5] mt-8">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-4">{step.description}</p>

              {/* Arrows - Hidden on small screens */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-60px] transform -translate-y-1/2">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-10 h-10 text-[#42A5F5]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={ScrollToTop}
            className="bg-[#ef4444] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Claim Your Rebate Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
