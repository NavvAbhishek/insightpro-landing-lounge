
import React from "react";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up and create your InsightPro account in less than a minute. No technical knowledge required.",
  },
  {
    number: "02",
    title: "Explore Match Insights",
    description:
      "Browse upcoming matches and explore our detailed statistical analysis and predictions.",
  },
  {
    number: "03",
    title: "Make Informed Predictions",
    description:
      "Use our insights to make your own predictions or follow our expert recommendations.",
  },
  {
    number: "04",
    title: "Track Your Success",
    description:
      "Monitor your prediction accuracy over time and improve your cricket forecasting skills.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How InsightPro Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our simple four-step process helps you start making better cricket predictions today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-feature-gradient rounded-lg border border-slate-200"
            >
              <div className="text-3xl font-bold text-cricket-600 opacity-30 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Cricket Fans Choose InsightPro
              </h3>
              <p className="text-slate-600 mb-6">
                Our platform combines advanced statistics, machine learning, and expert cricket knowledge to deliver the most accurate predictions possible.
              </p>
              
              <ul className="space-y-3">
                {[
                  "95% prediction accuracy for major tournaments",
                  "Used by over 100,000 cricket fans worldwide",
                  "Trusted by professional analysts and commentators",
                  "Continuously learning algorithm that improves over time",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cricket-600 mr-2 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-100 h-full rounded-lg p-6 flex items-center justify-center">
              {/* This would be an image in a real implementation */}
              <div className="text-center">
                <div className="inline-block p-3 bg-cricket-100 rounded-full mb-4">
                  <TrophyIcon className="h-16 w-16 text-cricket-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  #1 Ranked
                </h4>
                <p className="text-slate-700">
                  Cricket Prediction Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Trophy Icon component
const TrophyIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
};

export default HowItWorksSection;
