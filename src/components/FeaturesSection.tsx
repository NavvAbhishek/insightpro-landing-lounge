
import {
  BarChart3,
  TrendingUp,
  History,
  Users,
  Trophy,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-cricket-600" />,
    title: "Advanced Analytics",
    description:
      "Get in-depth statistical analysis of teams, players, and match conditions to make data-driven predictions.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-cricket-600" />,
    title: "Performance Trends",
    description:
      "Visualize team and player performance trends over time to identify patterns and predict future outcomes.",
  },
  {
    icon: <History className="h-10 w-10 text-cricket-600" />,
    title: "Historical Data",
    description:
      "Access comprehensive historical match data and head-to-head statistics for informed decision making.",
  },
  {
    icon: <Users className="h-10 w-10 text-cricket-600" />,
    title: "Expert Community",
    description:
      "Join a community of cricket enthusiasts and experts to discuss predictions and share insights.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-cricket-600" />,
    title: "Prediction Contests",
    description:
      "Participate in prediction contests and compete with others to test your cricket knowledge.",
  },
  {
    icon: <Clock className="h-10 w-10 text-cricket-600" />,
    title: "Real-time Updates",
    description:
      "Receive real-time match updates and instantly updated predictions as conditions change.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Powerful Prediction Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform offers comprehensive tools to help you make accurate cricket predictions and gain an edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
