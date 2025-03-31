
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-cricket-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Ready to transform your cricket predictions?
            </h2>
            <p className="text-cricket-100 text-lg">
              Join thousands of cricket fans who've improved their prediction accuracy with InsightPro.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-cricket-700 hover:bg-cricket-50">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-cricket-700">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
