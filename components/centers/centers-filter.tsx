"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { getAllCities, getAllSpecialties } from "@/lib/centers"

export default function CentersFilter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState<string>("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all")

  const cities = getAllCities()
  const specialties = getAllSpecialties()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would trigger filtering
    console.log("Search query:", searchQuery)
  }

  const handleCityChange = (value: string) => {
    setSelectedCity(value)
    // In a real implementation, this would trigger filtering
    console.log("Selected city:", value)
  }

  const handleSpecialtyChange = (value: string) => {
    setSelectedSpecialty(value)
    // In a real implementation, this would trigger filtering
    console.log("Selected specialty:", value)
  }

  const handleReset = () => {
    setSearchQuery("")
    setSelectedCity("all")
    setSelectedSpecialty("all")
  }

  return (
    <section className="py-12 bg-rose-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-pink-100">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:w-1/3">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search Centers
                  </label>
                  <div className="relative">
                    <form onSubmit={handleSearch}>
                      <Input
                        id="search"
                        type="text"
                        placeholder="Search by name or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-pink-200 focus:border-pink-400 pr-10"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500"
                      >
                        <Search className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="w-full md:w-1/4">
                  <label htmlFor="city-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by City
                  </label>
                  <Select value={selectedCity} onValueChange={handleCityChange}>
                    <SelectTrigger id="city-filter" className="border-pink-200">
                      <SelectValue placeholder="All Cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-1/4">
                  <label htmlFor="specialty-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by Specialty
                  </label>
                  <Select value={selectedSpecialty} onValueChange={handleSpecialtyChange}>
                    <SelectTrigger id="specialty-filter" className="border-pink-200">
                      <SelectValue placeholder="All Specialties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty.toLowerCase()}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
                    onClick={handleReset}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Reset Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
