export type PhysiotherapyCenter = {
  id: string
  name: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
  email: string
  coordinates: {
    lat: number
    lng: number
  }
  specialties: string[]
  openingHours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  image: string
  featured: boolean
}

export const physiotherapyCenters: PhysiotherapyCenter[] = [
  {
    id: "center-1",
    name: "Dr. Yogita Physiotherapy - Main Center",
    address: "Plot 45, Sector 14",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122001",
    phone: "+91 98765 43210",
    email: "main@dryogita.com",
    coordinates: {
      lat: 28.46718,
      lng: 77.04232,
    },
    specialties: ["Back Pain", "Sports Injuries", "Posture Correction", "Chronic Pain Management"],
    openingHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    image: "/centers/main-center.png",
    featured: true,
  },
  {
    id: "center-2",
    name: "Dr. Yogita Physiotherapy - South City",
    address: "C-12, South City Mall, Golf Course Road",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122018",
    phone: "+91 98765 43211",
    email: "southcity@dryogita.com",
    coordinates: {
      lat: 28.452343,
      lng: 77.09564,
    },
    specialties: ["Neurological Rehabilitation", "Pediatric Physiotherapy", "Geriatric Care"],
    openingHours: {
      monday: "10:00 AM - 8:00 PM",
      tuesday: "10:00 AM - 8:00 PM",
      wednesday: "10:00 AM - 8:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 8:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "11:00 AM - 4:00 PM",
    },
    image: "/centers/south-city-center.png",
    featured: true,
  },
  {
    id: "center-3",
    name: "Dr. Yogita Physiotherapy - DLF Phase 3",
    address: "Shop 7, DLF Phase 3 Market",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122010",
    phone: "+91 98765 43212",
    email: "dlf@dryogita.com",
    coordinates: {
      lat: 28.49468,
      lng: 77.08952,
    },
    specialties: ["Sports Rehabilitation", "Post-Surgery Recovery", "Women's Health"],
    openingHours: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    image: "/centers/dlf-center.png",
    featured: false,
  },
  {
    id: "center-4",
    name: "Dr. Yogita Physiotherapy - Sohna Road",
    address: "204, Good Earth City Centre, Sohna Road",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122018",
    phone: "+91 98765 43213",
    email: "sohna@dryogita.com",
    coordinates: {
      lat: 28.41295,
      lng: 77.04388,
    },
    specialties: ["Respiratory Physiotherapy", "Cardiac Rehabilitation", "Pain Management"],
    openingHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    image: "/centers/sohna-center.png",
    featured: false,
  },
  {
    id: "center-5",
    name: "Dr. Yogita Physiotherapy - New Delhi",
    address: "K-12, Greater Kailash Part 1",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110048",
    phone: "+91 98765 43214",
    email: "delhi@dryogita.com",
    coordinates: {
      lat: 28.55392,
      lng: 77.24156,
    },
    specialties: ["Orthopedic Rehabilitation", "Vestibular Rehabilitation", "Manual Therapy"],
    openingHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    image: "/centers/delhi-center.png",
    featured: true,
  },
]

export function getAllCenters(): PhysiotherapyCenter[] {
  return physiotherapyCenters
}

export function getFeaturedCenters(): PhysiotherapyCenter[] {
  return physiotherapyCenters.filter((center) => center.featured)
}

export function getCenterById(id: string): PhysiotherapyCenter | undefined {
  return physiotherapyCenters.find((center) => center.id === id)
}

export function getCentersByCity(city: string): PhysiotherapyCenter[] {
  return physiotherapyCenters.filter((center) => center.city.toLowerCase() === city.toLowerCase())
}

export function getAllCities(): string[] {
  const cities = new Set<string>()
  physiotherapyCenters.forEach((center) => {
    cities.add(center.city)
  })
  return Array.from(cities)
}

export function getAllSpecialties(): string[] {
  const specialties = new Set<string>()
  physiotherapyCenters.forEach((center) => {
    center.specialties.forEach((specialty) => {
      specialties.add(specialty)
    })
  })
  return Array.from(specialties).sort()
}

export function getCentersBySpecialty(specialty: string): PhysiotherapyCenter[] {
  return physiotherapyCenters.filter((center) =>
    center.specialties.some((s) => s.toLowerCase() === specialty.toLowerCase()),
  )
}
