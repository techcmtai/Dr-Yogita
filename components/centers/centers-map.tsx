"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react"
import { getAllCenters, type PhysiotherapyCenter } from "@/lib/centers"
import Image from "next/image"

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function CentersMap() {
  const [selectedCenter, setSelectedCenter] = useState<PhysiotherapyCenter | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const googleMapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const centers = getAllCenters()

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsAPI = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      window.initMap = () => {
        setMapLoaded(true)
      }

      return () => {
        document.head.removeChild(script)
        delete window.initMap
      }
    }

    // For demo purposes, we'll use a mock implementation without the actual API key
    const mockGoogleMapsAPI = () => {
      setTimeout(() => {
        setMapLoaded(true)
      }, 500)
    }

    // In a real implementation, use loadGoogleMapsAPI()
    mockGoogleMapsAPI()
  }, [])

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return

    // In a real implementation, this would use the actual Google Maps API
    // For demo purposes, we'll create a mock map implementation
    const createMockMap = () => {
      // Create a mock map container
      const mapContainer = mapRef.current
      if (!mapContainer) return

      // Add a mock map image
      const mockMapImage = document.createElement("div")
      mockMapImage.style.width = "100%"
      mockMapImage.style.height = "100%"
      mockMapImage.style.backgroundColor = "#e5e7eb"
      mockMapImage.style.position = "relative"
      mockMapImage.style.overflow = "hidden"
      mapContainer.appendChild(mockMapImage)

      // Add markers for each center
      centers.forEach((center, index) => {
        const marker = document.createElement("div")
        marker.style.position = "absolute"
        marker.style.width = "30px"
        marker.style.height = "30px"
        marker.style.backgroundColor = selectedCenter?.id === center.id ? "#ec4899" : "#f472b6"
        marker.style.borderRadius = "50%"
        marker.style.transform = "translate(-50%, -50%)"
        marker.style.cursor = "pointer"
        marker.style.display = "flex"
        marker.style.alignItems = "center"
        marker.style.justifyContent = "center"
        marker.style.color = "white"
        marker.style.fontWeight = "bold"
        marker.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)"
        marker.style.border = "2px solid white"
        marker.style.transition = "all 0.3s ease"
        marker.innerHTML = `<span>${index + 1}</span>`

        // Position markers randomly for demo
        const left = 10 + index * 15 + Math.random() * 30
        const top = 20 + index * 10 + Math.random() * 40
        marker.style.left = `${left}%`
        marker.style.top = `${top}%`

        marker.addEventListener("click", () => {
          setSelectedCenter(center)

          // Highlight the selected marker
          markersRef.current.forEach((m) => {
            m.style.backgroundColor = "#f472b6"
            m.style.zIndex = "1"
          })
          marker.style.backgroundColor = "#ec4899"
          marker.style.zIndex = "2"
        })

        mockMapImage.appendChild(marker)
        markersRef.current.push(marker)
      })

      // Add map controls
      const controls = document.createElement("div")
      controls.style.position = "absolute"
      controls.style.bottom = "10px"
      controls.style.right = "10px"
      controls.style.display = "flex"
      controls.style.flexDirection = "column"
      controls.style.gap = "5px"

      const zoomIn = document.createElement("button")
      zoomIn.innerHTML = "+"
      zoomIn.style.width = "30px"
      zoomIn.style.height = "30px"
      zoomIn.style.backgroundColor = "white"
      zoomIn.style.border = "1px solid #ccc"
      zoomIn.style.borderRadius = "4px"
      zoomIn.style.cursor = "pointer"

      const zoomOut = document.createElement("button")
      zoomOut.innerHTML = "-"
      zoomOut.style.width = "30px"
      zoomOut.style.height = "30px"
      zoomOut.style.backgroundColor = "white"
      zoomOut.style.border = "1px solid #ccc"
      zoomOut.style.borderRadius = "4px"
      zoomOut.style.cursor = "pointer"

      controls.appendChild(zoomIn)
      controls.appendChild(zoomOut)
      mockMapImage.appendChild(controls)

      // Add map attribution
      const attribution = document.createElement("div")
      attribution.style.position = "absolute"
      attribution.style.bottom = "5px"
      attribution.style.left = "5px"
      attribution.style.fontSize = "10px"
      attribution.style.color = "#666"
      attribution.innerHTML = "Map data © Mock Map Provider"
      mockMapImage.appendChild(attribution)

      // Set the first center as selected by default
      if (centers.length > 0 && !selectedCenter) {
        setSelectedCenter(centers[0])
        markersRef.current[0].style.backgroundColor = "#ec4899"
        markersRef.current[0].style.zIndex = "2"
      }
    }

    createMockMap()

    return () => {
      // Clean up
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
      markersRef.current = []
    }
  }, [mapLoaded, centers, selectedCenter])

  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find a Center Near You</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our network of physiotherapy centers across Gurgaon and Delhi NCR. Click on a marker to view
            details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-pink-100 overflow-hidden h-[500px]">
              <CardContent className="p-0 h-full">
                <div ref={mapRef} className="w-full h-full">
                  {!mapLoaded && (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {selectedCenter ? (
              <Card className="border-pink-100 h-full">
                <CardContent className="p-6">
                  <div className="relative h-40 w-full mb-4 overflow-hidden rounded-md">
                    <Image
                      src={selectedCenter.image || "/placeholder.svg?height=160&width=320&query=physiotherapy center"}
                      alt={selectedCenter.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedCenter.name}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        {selectedCenter.address}, {selectedCenter.city}, {selectedCenter.state} -{" "}
                        {selectedCenter.pincode}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{selectedCenter.phone}</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{selectedCenter.email}</p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600 font-medium">Today's Hours:</p>
                        <p className="text-gray-600">
                          {new Date().getDay() === 0
                            ? selectedCenter.openingHours.sunday
                            : new Date().getDay() === 1
                              ? selectedCenter.openingHours.monday
                              : new Date().getDay() === 2
                                ? selectedCenter.openingHours.tuesday
                                : new Date().getDay() === 3
                                  ? selectedCenter.openingHours.wednesday
                                  : new Date().getDay() === 4
                                    ? selectedCenter.openingHours.thursday
                                    : new Date().getDay() === 5
                                      ? selectedCenter.openingHours.friday
                                      : selectedCenter.openingHours.saturday}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCenter.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block bg-pink-50 text-pink-600 text-xs px-2.5 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white flex-1">Book Appointment</Button>
                    <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-pink-100 h-full">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-pink-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Select a Center</h3>
                    <p className="text-gray-600">Click on a marker on the map to view details about that center.</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
