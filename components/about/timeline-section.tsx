"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function TimelineSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const timelineEvents = [
    {
      year: "2001",
      title: "Started Professional Journey",
      description: "Graduated with a Bachelor's in Physiotherapy and began clinical practice at AIIMS.",
      icon: "🎓",
    },
    {
      year: "2004",
      title: "Advanced Specialization",
      description: "Completed Master's in Physiotherapy with specialization in Orthopedics.",
      icon: "📚",
    },
    {
      year: "2007",
      title: "Senior Physiotherapist",
      description: "Promoted to Senior Physiotherapist at Indian Spinal Injuries Centre (ISIC).",
      icon: "⬆️",
    },
    {
      year: "2010",
      title: "Psychology Studies",
      description: "Pursued additional studies in Psychology to enhance holistic patient care.",
      icon: "🧠",
    },
    {
      year: "2013",
      title: "Private Practice",
      description: "Established private practice in Gurgaon focusing on personalized care.",
      icon: "🏥",
    },
    {
      year: "2016",
      title: "International Certification",
      description: "Received international certification in advanced manual therapy techniques.",
      icon: "🌍",
    },
    {
      year: "2019",
      title: "Online Consultations",
      description: "Pioneered virtual physiotherapy consultations for remote patients.",
      icon: "💻",
    },
    {
      year: "2023",
      title: "22 Years Milestone",
      description: "Celebrated 22 years of transforming lives through expert physiotherapy care.",
      icon: "🎉",
    },
  ]

  return (
    <section className="py-20 bg-rose-50/50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over two decades of dedication, learning, and healing in the field of physiotherapy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200 rounded-full"></div>

          {/* Progress Indicator */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-500 rounded-full origin-top"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />

          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <motion.div
                  className={`w-1/2 px-6 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md border border-pink-100 ${index % 2 === 0 ? "ml-auto" : "mr-auto"} max-w-md`}
                  >
                    <div className="text-pink-500 font-bold text-xl mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center text-xl z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {event.icon}
                  </motion.div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
