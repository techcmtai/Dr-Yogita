"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AwardsSection() {
  const awards = [
    {
      title: "Excellence in Physiotherapy",
      organization: "Indian Association of Physiotherapists",
      year: "2018",
      icon: "/award-badge-gold.png",
    },
    {
      title: "Healthcare Innovator",
      organization: "Health & Wellness Foundation",
      year: "2020",
      icon: "/award-badge-silver.png",
    },
    {
      title: "Best Physiotherapy Clinic",
      organization: "Gurgaon Medical Association",
      year: "2022",
      icon: "/award-badge-blue.png",
    },
  ]

  const mediaFeatures = [
    { name: "The Times of India", logo: "/media-logo-toi.png" },
    { name: "Hindustan Times", logo: "/media-logo-ht.png" },
    { name: "NDTV Health", logo: "/media-logo-ndtv.png" },
    { name: "Dainik Bhaskar", logo: "/media-logo-db.png" },
    { name: "Healthline India", logo: "/media-logo-healthline.png" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence and innovation in the field of physiotherapy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-pink-100 hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <motion.div
                    className="relative w-24 h-24 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={award.icon || "/placeholder.svg"}
                      alt={award.title}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        opacity: [0, 0.5, 0],
                        x: ["-100%", "100%", "100%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                        duration: 1.5,
                      }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{award.title}</h3>
                  <p className="text-pink-500 font-medium mb-1">{award.organization}</p>
                  <p className="text-gray-500 text-sm">{award.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Featured In</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {mediaFeatures.map((media, index) => (
            <motion.div
              key={index}
              className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={media.logo || "/placeholder.svg"}
                alt={media.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
