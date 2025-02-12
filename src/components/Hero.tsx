import { useState } from "react";
import { AlertCircle, Home, Zap, Phone, ArrowRight } from "lucide-react";

interface FormData {
  squareFootage: string;
  electricityBill: string;
  heatingBill: string;
  name: string;
  email: string;
  phone: string;
}

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    squareFootage: "",
    electricityBill: "",
    heatingBill: "",
    name: "",
    email: "",
    phone: "",
  });

  const questions = [
    {
      step: 1,
      question: "What is the approximate square footage of your home?",
      subtext: "Just a guess is fine",
      field: "squareFootage",
      type: "select",
      options: [
        "Up to 1500 sq ft",
        "1501 - 1900 sq ft",
        "1901 - 2300 sq ft",
        "2301 - 2700 sq ft",
        "2701 - 4000 sq ft",
        "More than 4000 sq ft",
      ],
    },
    {
      step: 2,
      question: "What's your average monthly electricity bill?",
      subtext: "Just a guess is fine",
      field: "electricityBill",
      type: "number",
      prefix: "$",
      placeholder: "0.00",
    },
    {
      step: 3,
      question: "What's your average monthly heating bill?",
      subtext: "Just a guess is fine",
      field: "heatingBill",
      type: "number",
      prefix: "$",
      placeholder: "0.00",
    },
    {
      step: 4,
      question: "What is your name?",
      field: "name",
      type: "text",
      placeholder: "Full Name",
    },
    {
      step: 5,
      question:
        "What is the best email to send your instant savings estimate to?",
      field: "email",
      type: "email",
      placeholder: "email@example.com",
    },
    {
      step: 6,
      question: "What is the best phone number to reach you at?",
      field: "phone",
      type: "tel",
      placeholder: "(123) 456-7890",
    },
  ];

  const currentQuestion = questions[currentStep - 1];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateStep = () => {
    const currentValue = formData[currentQuestion.field as keyof FormData];

    if (!currentValue) {
      setError("Please provide an answer to continue");
      return false;
    }

    if (currentQuestion.type === "number") {
      const numValue = parseFloat(currentValue);
      if (isNaN(numValue) || numValue <= 0) {
        setError("Please enter a valid amount");
        return false;
      }
    }

    if (currentQuestion.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(currentValue)) {
        setError("Please enter a valid email address");
        return false;
      }
    }

    if (currentQuestion.type === "tel") {
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!phoneRegex.test(currentValue)) {
        setError("Please enter a valid phone number");
        return false;
      }
    }

    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) return;

    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setError("");
    }
  };

  return (
    <div className="relative min-h-[20vh] bg-gray-950 ">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 "
        style={{
          backgroundImage: 'url("/assets/main.webp")',
          opacity: 0.4,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
      {showResults ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                  Monthly Costs & Savings
                </h2>

                <div className="flex items-center gap-3 mb-8 bg-blue-50 p-4 rounded-xl">
                  <Home className="w-8 h-8 text-[#3498db]" />
                  <span className="text-lg text-gray-700 font-medium">
                    Square Footage: {formData.squareFootage}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="font-bold text-xl mb-6 text-gray-800">
                      Current Monthly Costs
                    </h3>

                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="p-2  rounded-lg">
                            <Zap className="w-6 h-6 text-[#3498db]" />
                          </div>
                          <span className="font-medium">Electricity</span>
                        </div>
                        <span className="text-xl font-bold text-red-500">
                          ${formData.electricityBill}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg">
                            <Home className="w-6 h-6 text-[#3498db]" />
                          </div>
                          <span className="font-medium">Heating</span>
                        </div>
                        <span className="text-xl font-bold text-red-500">
                          ${formData.heatingBill}
                        </span>
                      </div>

                      <div className="pt-4 border-t-2 border-gray-200">
                        <div className="flex justify-between items-center p-4">
                          <span className="text-lg font-bold">
                            Total Current Cost
                          </span>
                          <span className="text-2xl font-bold text-red-500">
                            $
                            {parseFloat(formData.electricityBill) +
                              parseFloat(formData.heatingBill)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 rounded-2xl shadow-lg text-white bg-gray-50">
                    <div className="bg-[#2ecc71] p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-6">
                        Monthly Savings
                      </h3>
                      <div className="text-center mb-8">
                        <div className="text-5xl font-bold mb-3 drop-shadow-lg">
                          $
                          {(
                            (parseFloat(formData.electricityBill) +
                              parseFloat(formData.heatingBill)) *
                            0.42
                          ).toFixed(2)}
                        </div>
                        <div className="text-2xl font-semibold bg-white/20 rounded-full py-2 px-4 inline-block">
                          42% Less
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t bg-white ">
                      <div className="text-center ">
                        <div className="font-medium text-lg text-black mb-2">
                          New Monthly Cost
                        </div>
                        <div className="text-3xl text-[#2ecc71] p-2 font-bold">
                          $
                          {(
                            (parseFloat(formData.electricityBill) +
                              parseFloat(formData.heatingBill)) *
                            0.58
                          ).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Ready to maximize your savings?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover exactly how much you can save on your monthly heating
                  and electric bills. Our experts are ready to help you start
                  saving today!
                </p>
                <a
                  href={`tel:8339328371`}
                  className=" inline-flex items-center justify-center gap-3 bg-[#3498db] text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 animate-bounce" />
                  Call Now: (833) 932-8371
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white  rounded-3xl p-8 ">
              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  {questions.map((q, index) => (
                    <div
                      key={index}
                      className={`w-1/6 h-3 rounded-full mx-1 transition-all duration-500 ${
                        index + 1 === currentStep
                          ? "bg-[#3498db] scale-110"
                          : index + 1 < currentStep
                          ? "bg-[#3498db]"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500 text-center">
                  Step {currentStep} of {questions.length}
                </p>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                See how much upgrading to an energy efficient heat pump could
                save you
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Take this quick{" "}
                <span className="text-red-500 font-semibold">30 second</span>{" "}
                survey to see how much you can{" "}
                <span className="text-green-500 font-semibold">save</span>
              </p>
              <form onSubmit={handleNext} className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.subtext && (
                    <p className="text-gray-600 mb-6">
                      {currentQuestion.subtext}
                    </p>
                  )}

                  {currentQuestion.type === "select" ? (
                    <select
                      value={formData[currentQuestion.field as keyof FormData]}
                      onChange={(e) =>
                        handleInputChange(
                          currentQuestion.field as keyof FormData,
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    >
                      <option value="">Select an option</option>
                      {currentQuestion.options?.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="relative">
                      {currentQuestion.prefix && (
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                          {currentQuestion.prefix}
                        </span>
                      )}
                      <input
                        type={currentQuestion.type}
                        value={
                          formData[currentQuestion.field as keyof FormData]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            currentQuestion.field as keyof FormData,
                            e.target.value
                          )
                        }
                        className={`w-full ${
                          currentQuestion.prefix ? "pl-8" : "pl-4"
                        } pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder={currentQuestion.placeholder}
                      />
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center gap-2 mt-4 text-red-500 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{error}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className={`flex-1 px-6 py-4 bg-[#3498db] text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                      currentStep === 1 ? "w-full" : ""
                    }`}
                  >
                    {currentStep === questions.length
                      ? "See Your Savings"
                      : "Next"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
