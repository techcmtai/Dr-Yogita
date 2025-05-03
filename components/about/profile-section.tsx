"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, FileText } from "lucide-react"

export default function ProfileSection() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Dr. Yogita</h1>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated to transforming lives through expert physiotherapy for over two decades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/dr-yogita-full-portrait.png"
                alt="Dr. Yogita Full Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Transforming Lives Through <span className="text-pink-500">Expert Care</span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Yogita is a highly skilled physiotherapist with over 22 years of experience in treating a wide range
              of musculoskeletal conditions. Her journey began at the prestigious All India Institute of Medical
              Sciences (AIIMS), where she received her foundational training in physiotherapy.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              After completing her Bachelor's in Physiotherapy (BPT), she pursued a Master's degree (MPT) with
              specialization in orthopedic physiotherapy. Her thirst for knowledge led her to further studies in
              Psychology, enabling her to take a holistic approach to patient care that addresses both physical and
              psychological aspects of healing.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Dr. Yogita's approach combines evidence-based techniques with personalized care plans tailored to each
              patient's unique needs. Her expertise spans back pain management, posture correction, sports injuries, and
              chronic pain conditions, helping thousands of patients regain mobility and live pain-free lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Book an Appointment
              </Button>
              <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
