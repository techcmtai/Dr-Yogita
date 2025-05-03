"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function MeetDrYogita() {
  const credentials = [
    { title: "Experience", content: "22+ Years" },
    { title: "Education", content: "BPT, MPT, Psychology" },
    { title: "Trained At", content: "AIIMS, ISIC" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Dr. Yogita</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/female-physiotherapist-smiling.png"
                alt="Dr. Yogita"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          <div>
            <motion.div
              className="typewriter mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-pink-500">Dedicated to Your Healing Journey</h3>
            </motion.div>

            <motion.p
              className="text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Dr. Yogita brings over two decades of specialized experience in physiotherapy, combining traditional
              techniques with modern approaches to deliver personalized care. Her holistic methodology addresses not
              just the symptoms but the root causes of pain and discomfort, ensuring long-lasting relief and improved
              quality of life.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="border-pink-200 hover:border-pink-400 transition-colors duration-300">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-pink-500 font-medium">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
