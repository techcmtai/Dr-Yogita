"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Award, Heart } from "lucide-react"

export default function WhyChooseSection() {
  const pillars = [
    {
      title: "Experience & Expertise",
      description:
        "With 22+ years of hands-on experience and continuous learning, Dr. Yogita brings unparalleled expertise to every treatment session.",
      icon: <Clock className="h-12 w-12 text-pink-500" />,
      color: "from-pink-50 to-rose-100",
    },
    {
      title: "Personalized Approach",
      description:
        "Every patient receives a customized treatment plan tailored to their specific condition, lifestyle, and recovery goals.",
      icon: <Award className="h-12 w-12 text-pink-500" />,
      color: "from-sky-50 to-blue-100",
    },
    {
      title: "Holistic Healing",
      description:
        "Combining physical therapy with psychological well-being for complete recovery that addresses both body and mind.",
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      color: "from-rose-50 to-pink-100",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Dr. Yogita?</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the key pillars that make Dr. Yogita's approach to physiotherapy truly exceptional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-0 shadow-lg h-full overflow-hidden">
                <CardContent className={`p-0 h-full bg-gradient-to-br ${pillar.color}`}>
                  <div className="p-8 flex flex-col items-center text-center h-full">
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    >
                      {pillar.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl text-gray-700 italic">
            "My mission is to empower each patient with the knowledge, tools, and treatment they need to live a
            pain-free, active life."
          </p>
          <p className="mt-4 text-pink-500 font-medium">— Dr. Yogita</p>
        </motion.div>
      </div>
    </section>
  )
}
