"use client";
import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What interior design services do you offer?",
    answer: "We offer a comprehensive range of interior design services including space planning, furniture selection, color consultation, lighting design, custom millwork, and full project management. Our team handles everything from initial concept to final installation.",
  },
  {
    id: 2,
    question: "How does the design process work from start to finish?",
    answer: "Our process begins with an initial consultation to understand your vision and requirements. We then develop concept designs, create detailed plans and 3D visualizations, manage procurement of materials and furniture, and oversee the entire installation process.",
  },
  {
    id: 3,
    question: "How long does an interior design project typically take?",
    answer: "Project timelines vary based on scope and complexity. A single room redesign typically takes 4-8 weeks, while a full home renovation can take 3-6 months. We provide detailed timelines during the initial consultation phase.",
  },
  {
    id: 4,
    question: "Can you help design small spaces or single rooms?",
    answer: "Absolutely! We love working on projects of all sizes. Whether it's a cozy apartment, a single room refresh, or a complete home transformation, we bring the same level of creativity and attention to detail to every project.",
  },
  {
    id: 5,
    question: "How do you determine the project budget?",
    answer: "We work collaboratively with you to establish a realistic budget based on your goals and priorities. Our transparent pricing includes detailed breakdowns of design fees, materials, furnishings, and installation costs so there are no surprises.",
  },
];

export default function Section6() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-neutral-100 py-20 px-5 md:px-10">
      {/* Top Border */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-8">
        {/* Header */}
        <span className="font-sans text-xs font-semibold tracking-widest text-black uppercase mb-12 block">
          YOU MIGHT ASK US
        </span>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left - Title */}
          <div className="lg:w-1/4">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-black">
              FAQ:
            </h2>
          </div>

          {/* Right - Accordion */}
          <div className="lg:w-3/4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-gray-300"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-sans text-base md:text-lg font-medium text-black pr-8 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl text-black shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                
                {/* Answer - Collapsible */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === faq.id ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}

            {/* Ask Question CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 gap-4">
              <span className="font-sans text-sm text-gray-400">
                If you want to know anything else:
              </span>
              <a
                href="#contact"
                className="font-sans text-base font-medium text-black flex items-center gap-2 group hover:text-gray-600 transition-colors"
              >
                Ask your Question
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
