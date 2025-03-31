
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for casual cricket fans",
    features: [
      "Basic match predictions",
      "Limited historical data",
      "1 saved prediction per week",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "15",
    description: "For serious cricket enthusiasts",
    features: [
      "Advanced match predictions",
      "Full historical database",
      "Player performance tracking",
      "Unlimited saved predictions",
      "Expert analysis articles",
      "Email notifications",
    ],
    cta: "Try Pro Free",
    popular: true,
  },
  {
    name: "Premium",
    price: "29",
    description: "For professional analysts",
    features: [
      "Everything in Pro",
      "API access",
      "Custom prediction models",
      "Team comparison tools",
      "Priority support",
      "Exclusive webinars",
      "CSV/Excel exports",
    ],
    cta: "Try Premium Free",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${
                plan.popular
                  ? "bg-white shadow-lg border-cricket-400 relative"
                  : "bg-white border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cricket-600 text-white text-xs font-bold uppercase py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  ${plan.price}
                </span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-cricket-600 mr-2 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-cricket-600 hover:bg-cricket-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Need a custom plan for your organization?{" "}
            <a href="#" className="text-cricket-600 font-medium hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
