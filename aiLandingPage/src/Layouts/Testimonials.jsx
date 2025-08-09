import React from "react";

const testimonials = [
  {
    quote:
      "Mindly AI transformed the way I write. It feels like having a co-writer in my pocket.",
    author: "Priya Sharma",
    role: "Content Strategist, TechSolutions",
  },
  {
    quote:
      "Our team plans faster, writes smarter, and delivers more in less time with Mindly AI.",
    author: "Rahul Verma",
    role: "Marketing Head, Creativex",
  },
  {
    quote:
      "As a founder, I need clarity. Mindly helps me think and structure ideas 10x faster.",
    author: "Neha Patel",
    role: "Founder, DesignHub",
  },
  {
    quote: "It’s like Notion meets ChatGPT — but more intuitive and focused.",
    author: "Amit Singh",
    role: "Product Manager, Buildify",
  },
  {
    quote:
      "Mindly is my personal AI assistant for note-taking and brainstorming every day.",
    author: "Deepika Joshi",
    role: "Operations Lead, FlowTech",
  },
  {
    quote:
      "From technical docs to blog drafts, Mindly nails the tone every time.",
    author: "Vikram Mehta",
    role: "Developer, CodeSprint",
  },
  {
    quote: "It organizes my thoughts before I even finish typing. Incredible!",
    author: "Ananya Reddy",
    role: "UX Designer, PixelSoft",
  },
  {
    quote:
      "In one week, Mindly boosted our productivity 2x. Game-changing tool.",
    author: "Karan Malhotra",
    role: "CEO, StartUpX",
  },
];

export default function TestimonialGrid() {
  return (
    <section
      id="testimonial"
      className="bg-black text-white py-16 px-6 flex flex-col items-center gap-2"
    >
      <div className="text-center mb-3 bg-white/10 backdrop-blur-md px-4 py-1 rounded-4xl w-fit flex justify-center items-center gap-2">
        <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
        <p>Testeminial</p>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Loved by Teams and Creators Worldwide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#101012] hover:border-purple-600 border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">{t.author}</p>
              <p>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
