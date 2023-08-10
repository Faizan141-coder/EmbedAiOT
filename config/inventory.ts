import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  slug: string
  images: string[]
  features: string[]
  sensingRanges: string[]
  applications: string[]
  description: string
  description1: string
  description2: string
  price: number
  currency: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "smart_energy_monitoring_device_1",
    name: "Smart Energy Monitoring Device",
    slug: "smart-energy-monitoring-device",
    description: 'Our Smart Energy Meters are low-cost, non - invasive / invasive , indigenous designed plug and play IoT-based three phase smart AC energy meters. Smart AC Energy Meter captures 12 essential parameters of AC Power for each phase and transmits it wirelessly to the central cloud.',
    price: 46550, 
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    features: [
      "Measures more than 23 energy parameters", 
      'Monitors upto four, 3 phase devices.', 
      'Power factor, Frequency Monitoring', 
      'Real-Time Wireless Technology', 
      'AI enabled Dashboard'
    ],
    sensingRanges: [
      "Instantaneous Energy for Phases 1, 2 & 3: 0 to 10s kJoules Power", 
      'Factor: 0 to 1 Frequency of Energy', 
      'Line: 50/60 Hz', 
      'Current Amperes: 0 to 1000'
    ],
    applications: [
      "Energy auditing and management: Monitor energy usage", 
      'Load monitoring and optimization: Optimize energy usage', 
      'Equipment maintenance: Detect electrical faults', 
      'Power quality analysis: Analyze power quality parameters', 
      'Compliance with regulations: Ensure regulatory compliance'
    ],
    description1: 'The Smart Energy Meter is backboned by the IoT framework and sends data to the cloud server. An AI embedded rich dashboard is provided with historic profiles, forecasting tools, curtail information, and analytics to alerts/notifications help users to generate which device making and strategies to decision mitigation conserve consumption and energy utilize energy resources effectively.',
    description2: 'The Energy Metering device is intended to monitor critical Electricity Energy parameters to estimate the energy being consumed by the user. ',
    currency: "USD",
  },
  {
    id: "392167ff-2199-4211-b5d4-68a47729c1f9",
    sku: "agri_farm_multi_meter_1",
    name: "Agri Farm Multi Meter",
    slug: "agri-farm-multi-meter",
    description: `In agriculture, timely usage of water maintains the health of crops. Delayed Irrigation leads to loss of nutrition of crops and overly? early irrigation saturates land which leads to various fungal and algae disease attacks on crops and plants`,
    price: 46800, 
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    features: [
      "Standalone Solar Powered Device", 
      'Measures Temperature, Gaseous, Parameters, Humidity and more', 
      'Low Power consumption', 'GRM and GPRS support'
    ],
    sensingRanges: [
      "Soil Moisture:  ±5% accuracy and 0.1% resolution", 
      'Temperature:  -20 TO 60 °C WITH ±0.5 °C ERROR.', 
      'Relative Humidity:  0 – 100'
    ],
    applications: [
      "Agricultural Usage", 
      'Progresssive Farmers'
    ],
    description1: 'A Battery-Powered handheld smart meter that can be deployed in fields. It will sense soil moisture content in real-time and log values on the cloud server',
    description2: 'AFM is capable of measuring essential parameters of the environment including temperature, humidity, and soil moisture level in the percentage. the measured environment parameters help the user to act accordingly and keep plants happy if required.',
    currency: "USD",
  },
  {
    id: "392167gf-2199-4211-b5d4-68a47729c1f9",
    sku: "sense_ball_1",
    name: "Sense Ball",
    slug: "sense-ball",
    description: `“Sense ball” is small, battery powered device that can provide you with storage monitoring features like inside temperature, humidity, light intensity and gas emissions beside GPS tracker to monitor real time supply chain. `,
    price: 56800, 
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    features: [
      "Acoustic Signatures Detection", 
      'Measures Temperature, Gaseous, Parameters, Humidity.', 
      'Light Intensity Measurement', 
      'GPS Tracking'
    ],
    sensingRanges: [
      "Temperature range: -20 – 60°C", 
      'Relative humidity: 0 – 100 %RH', 
      'CO2 concentration ranges: 400 – 8192 ppm', 
      'TVOC concentration ranges: 0– 1187 ppb'
    ],
    applications: [
      "Agricultural Storages", 
      'Industrial Storages', 
      'Commercial Warehouses', 
      'Armed Forces Depots', 
      'Supply Chain', 
      'Wildlife Management Authority', 
      'Progressive Farmers'
    ],
    description1: `Sense Ball is an IoT-based smart device that is capable of measuring environmental parameter's levels especially for storages. It will transmit data periodically through any kind of IoT network including Wi-Fi, GSM/GPRS/LoRA/Mesh technologies. Data will be sent to a web/mobile application for storage, alerts, and analytics.`,
    description2: 'A device that will revolutionize the monitoring of storage conditions like temperature, humidity, gas emission, light intensity, and acoustics related to multiple types of storage, supply chain as well as local facilities.',
    currency: "USD",
  },
  {
    id: "355167gf-2199-4211-b5d4-68a47729c1f9",
    sku: "multi_channel_power_analyzer_1",
    name: "Multi Channel Power Analyzer",
    slug: "multi-channel-power-analyzer",
    description: "Our Multi Channel Power Analyzer is a high-precision device designed for comprehensive electrical power analysis. It is capable of measuring voltage, current, power factor, harmonic distortion, and other critical parameters across multiple channels simultaneously.",
    price: 78900,
    image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
        "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    features: [
        "Simultaneous Multi-Channel Measurements",
        "Wide Frequency Range: 45Hz - 65Hz",
        "High Measurement Accuracy",
        "Harmonic Analysis up to the 50th order",
        "Real-time Data Logging and Visualization",
        "Ethernet and USB Connectivity"
    ],
    sensingRanges: [
        "Voltage: 0 - 1000V",
        "Current: 0 - 100A",
        "Frequency: 45Hz - 65Hz",
        "Power Factor: -1 to 1"
    ],
    applications: [
        "Power Quality Analysis",
        "Energy Auditing and Monitoring",
        "Industrial Power Monitoring",
        "Research and Development",
        "Electrical System Troubleshooting"
    ],
    description1: "The Multi Channel Power Analyzer provides advanced power quality analysis to help industries and researchers optimize energy usage and improve electrical system efficiency. Its multi-channel capability allows monitoring of various electrical parameters simultaneously, providing valuable insights into power consumption and distribution.",
    description2: "With its high measurement accuracy and comprehensive harmonic analysis, this power analyzer is a reliable tool for diagnosing power quality issues, ensuring compliance with regulations, and enhancing overall energy management strategies.",
    currency: "USD"
  },
  {
    id: "344167gf-2199-4211-b5d4-68a47729c1f9",
    sku: "range_sensor_1",
    name: "Range Sensor",
    slug: "range-sensor",
    description: "Our Range Sensor is a versatile and accurate distance measuring device based on advanced laser technology. It provides precise distance measurements and can be used in various applications, including robotics, industrial automation, and smart city projects.",
    price: 2150,
    image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
        "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    features: [
        "Laser Distance Measurement",
        "Wide Measuring Range",
        "High Accuracy and Resolution",
        "Fast Response Time",
        "Compact and Lightweight Design",
        "Easy Integration with Different Systems"
    ],
    sensingRanges: [
        "Range: 0.1m - 50m",
        "Resolution: 1mm",
        "Accuracy: ±2mm"
    ],
    applications: [
        "Obstacle Avoidance",
        "Object Detection",
        "Distance Measurement in Robotics",
        "Automated Guided Vehicles (AGVs)",
        "Building Automation",
        "Traffic Management",
        "Smart Parking Systems"
    ],
    description1: "The Range Sensor offers reliable and precise distance measurements, enabling robots and automation systems to navigate complex environments and avoid obstacles effectively. Its fast response time and wide measuring range make it suitable for various real-time applications.",
    description2: "With its compact form factor and easy integration capabilities, this laser-based sensor is an excellent choice for modern automation and smart city projects that require accurate distance measurements.",
    currency: "USD"
  },
  {
    id: "366167gf-2199-4211-b5d4-68a47729c1f9",
    sku: "water_quality_monitoring_system_1",
    name: "Water Quality Monitoring System",
    slug: "water-quality-monitoring-system",
    description: "Our Water Quality Monitoring System is an advanced IoT-based solution designed for continuous monitoring of water parameters in various bodies of water. It provides real-time data on key indicators such as pH, dissolved oxygen, turbidity, and more.",
    price: 15400,
    image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
        "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    features: [
        "Real-time Water Quality Monitoring",
        "Multiple Water Parameter Measurements",
        "Wireless Data Transmission",
        "Remote Monitoring and Alerts",
        "Easy Installation and Integration",
        "Long Battery Life"
    ],
    sensingRanges: [
        "pH: 0 - 14",
        "Dissolved Oxygen: 0 - 20 mg/L",
        "Turbidity: 0 - 1000 NTU",
        "Temperature: -10°C to 50°C"
    ],
    applications: [
        "Environmental Monitoring",
        "Aquaculture",
        "Water Treatment Plants",
        "Water Resource Management",
        "Research and Scientific Studies",
        "Aquatic Ecosystem Monitoring"
    ],
    description1: "The Water Quality Monitoring System plays a crucial role in maintaining the health of aquatic ecosystems and ensuring water safety for various applications. Its real-time data transmission and remote monitoring capabilities allow environmentalists, researchers, and water treatment authorities to make informed decisions and take prompt actions.",
    description2: "With its ability to measure multiple water parameters accurately, this monitoring system provides a comprehensive view of water quality, helping in the protection and conservation of water resources.",
    currency: "USD"
  },
  {
    id: "377167gf-2199-4211-b5d4-68a47729c1f9",
    sku: "wind_direction_speed_sensor_1",
    name: "Wind Direction and Speed Sensor",
    slug: "wind-direction-and-speed-sensor",
    description: "Our Wind Direction and Speed Sensor is a reliable and durable device designed to measure wind direction and velocity accurately. It is ideal for various applications, including weather monitoring, renewable energy systems, and environmental research.",
    price: 3580,
    image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
        "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg"
    ],
    features: [
        "Combined Wind Direction and Speed Measurement",
        "Durable and Weatherproof Design",
        "Wide Operating Temperature Range",
        "High Accuracy and Response Time",
        "Mounting Accessories Included",
        "Analog and Digital Output Options"
    ],
    sensingRanges: [
        "Wind Speed: 0 - 60 m/s",
        "Wind Direction: 0 - 360°"
    ],
    applications: [
        "Weather Forecasting",
        "Wind Resource Assessment",
        "Renewable Energy Systems",
        "Environmental Studies",
        "Building and Structural Design",
        "Aviation and Maritime Safety"
    ],
    description1: "The Wind Direction and Speed Sensor provides essential data for weather monitoring, renewable energy projects, and environmental research. Its rugged construction and wide operating temperature range make it suitable for various outdoor applications.",
    description2: "By accurately measuring wind direction and speed, this sensor assists in optimizing wind energy systems, conducting climate research, and ensuring safety in aviation and maritime activities.",
    currency: "USD"
  }
]
