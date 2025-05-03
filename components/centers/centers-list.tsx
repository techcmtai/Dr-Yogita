"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllCenters } from "@/lib/centers"

export default function CentersList() {
  const centers = getAllCenters()

  return (
    <section id="centers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Physiotherapy Centers</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our network of state-of-the-art physiotherapy centers, each offering specialized care and expert
            treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-pink-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={center.image || "/placeholder.svg?height=192&width=384&query=physiotherapy center"}
                    alt={center.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {center.featured && (
                    <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{center.name}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        {center.address}, {center.city}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{center.phone}</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{center.email}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.specialties.slice(0, 3).map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block bg-pink-50 text-pink-600 text-xs px-2.5 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                      {center.specialties.length > 3 && (
                        <span className="inline-block bg-gray-50 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                          +{center.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`#center-${center.id}`}
                    onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
