import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is a heat pump?",
      answer:
        "A heat pump is a highly efficient heating and cooling system that transfers heat from the outside air to inside your home (or vice versa) to maintain a comfortable temperature year-round.",
    },
    {
      question: "How much can I save with a heat pump?",
      answer:
        "Savings vary depending on your current heating system and energy usage, but many homeowners save 30-60% on their heating costs.",
    },
    {
      question: "Are there any rebates available for heat pumps?",
      answer:
        "Yes, many states and utilities offer rebates for heat pump installations. Additionally, there are federal tax credits available. Our team can help you identify and claim all applicable rebates and incentives.",
    },
    {
      question: "What are the program participation requirements?",
      answer:
        "To participate, you must be an Enbridge Gas customer with a home heated by natural gas at the time of your initial and/or follow-up energy assessment. You must also complete an initial home energy assessment before starting any renovation work or installing upgrades.",
    },

    {
      question: "What are the assessment requirements?",
      answer:
        "A pre-retrofit energy assessment must be completed by a Registered Energy Advisor before any upgrades are installed. A post-retrofit assessment must be completed within 120 days of the initial assessment or by December 31, 2025, whichever comes first.",
    },
    {
      question: "How does the rebate process work?",
      answer:
        "Rebate cheques will be awarded starting January 2025 after successful completion of the program. Participants must provide copies of receipts/invoices and property tax bills before the Registered Energy Advisor can submit the file for payment.",
    },
    {
      question: "Can I participate in multiple rebate programs?",
      answer:
        "If you've received or expect to receive rebates from other programs for the same upgrades, you must inform your Registered Energy Advisor. The combined total of rebates from Enbridge Gas and other programs cannot exceed the actual cost of the upgrade.",
    },
    {
      question: "Do upgrades need to be professionally installed?",
      answer:
        "While some upgrades can be done by homeowners, larger upgrades like installing a heat pump must be done by a professional.",
    },
    {
      question: "Are there any financing options?",
      answer:
        "Enbridge suggests checking out the Canada Greener Homes Loan before installing any upgrades, though this is a separate application from the Home Efficiency Rebate program.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
