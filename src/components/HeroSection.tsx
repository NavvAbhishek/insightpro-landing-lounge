import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
    // Here you'd normally send this to your backend
  };

  return (
    <section className="relative w-full bg-hero-pattern bg-cover bg-center py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Analyze Player Performance and Provide Predictions Using {" "}
            <span className="text-cricket-400">ML/AI in Cricket</span>
          </h1>
          <p className="mb-10 text-xl text-slate-300">
            Leverage advanced analytics and AI to make informed cricket
            predictions. Stay ahead of the game with InsightPro's powerful
            prediction tools.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col justify-center items-center gap-4 sm:flex-row"
          >
            {/* <input
              type="email"
              placeholder="Enter your email"
              className="flex h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cricket-600 focus:ring-offset-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /> */}
            <Link to="/player-comparison">
              <Button type="submit" className="hero-button hero-button-primary">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </form>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <p className="text-sm text-slate-200">No credit card required</p>
            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
            <p className="text-sm text-slate-200">7-day free trial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
