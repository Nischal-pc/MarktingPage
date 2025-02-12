import { useEffect } from "react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Milad Ebrahimpour",
      image: "/assets/Milad.png",
      rating: 5,
      text: "I couldn't be happier with the service and product provided by Weaver Eco Home. Their team installed a heat pump that has significantly reduced my energy bills. They were professional, efficient, and went above and beyond to ensure I got the maximum rebates from Enbridge. The whole process was seamless and stress-free. I highly recommend Weaver Eco Home for anyone looking to improve their home's energy efficiency and save money in the long run!",
    },
    {
      name: "Maryam",
      image: "/assets/Maryam.png",
      rating: 5,
      text: "Thank you to Weaver Eco Home for providing me information and answering my questions regarding heat pumps / furnace. I was assisted by their rep Yemen who explained everything to me in addition to clearing up any concerns I had. Yemen was very knowledgeable and attentive to my needs. Thank you again for being so friendly and professional. I will be calling back to finalize some things!",
    },
    {
      name: "Zubin Es Haqzai",
      image: "/assets/Zubin.png",
      rating: 5,
      text: "Just received my $7100 rebate for my brand new Heat Pump install and already see a difference in my bills as well!",
    },
  ];
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          See what other Ontario homeowners have to say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
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

export default Testimonials;
