import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "₹0",
      features: ["Basic writing tools", "Limited prompts", "Community support"],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Pro",
      price: "₹499/mo",
      features: [
        "Unlimited writing & planning",
        "Custom AI templates",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      title: "Team",
      price: "₹1499/mo",
      features: ["All Pro features", "Team collaboration", "Admin controls"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Simple & Transparent Pricing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you're an individual or a team, Mindly AI has a plan that fits
          your workflow.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-xl shadow-md transition bg-[#101012] ${
                plan.highlight
                  ? "border-purple-500 scale-105"
                  : "border-t-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-700 space-y-2 mb-6 flex flex-col items-start">
                {plan.features.map((feature, i) => (
                  <li className="flex gap-3 items-center text-white" key={i}>
                    <svg
                      className="bg-white text-black rounded-full p-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-check size-3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium 
                               ${
                                 plan.highlight
                                   ? "bg-purple-600 text-white hover:bg-purple-700"
                                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                               }
                              `}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
