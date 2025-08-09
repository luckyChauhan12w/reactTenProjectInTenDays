import { Sparkles, PenTool, BrainCog, Settings2 } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "AI-Powered Writing",
    desc: "Generate clear, concise, and creative content with one click.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Smart Planning",
    desc: "Break down ideas and organize thoughts instantly with AI logic.",
  },
  {
    icon: <BrainCog className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Think Faster",
    desc: "Unlock productivity with real-time suggestions and insights.",
  },
  {
    icon: (
      <Settings2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    ),
    title: "Custom Workflows",
    desc: "Tailor the AI to your writing or business needs with ease.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="text-white mb-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-4xl w-fit flex justify-center items-center gap-2">
          <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
          <p>Features</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Built to Supercharge Your Workflow
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          Mindly AI blends creativity and productivity — so you can focus on
          what matters most.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
