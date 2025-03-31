
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Fantasy Cricket Player",
    content:
      "InsightPro has completely transformed my fantasy cricket strategy. The statistical analysis and player performance predictions are incredibly accurate. I've seen a massive improvement in my team selections.",
    image: "/avatar-1.jpg",
    stars: 5,
  },
  {
    name: "Priya Patel",
    role: "Cricket Blogger",
    content:
      "As someone who writes about cricket predictions, InsightPro has become my secret weapon. The historical data and match-up analysis gives me insights that I couldn't find anywhere else.",
    image: "/avatar-2.jpg",
    stars: 5,
  },
  {
    name: "Michael Clarke",
    role: "Sports Analyst",
    content:
      "The depth of analysis available on InsightPro is impressive. I particularly appreciate the weather impact modeling and pitch condition analysis. It's the most comprehensive cricket prediction tool I've used.",
    image: "/avatar-3.jpg",
    stars: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of cricket fans who use InsightPro to make better predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-slate-200"
            >
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
              </div>
              <p className="text-slate-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
