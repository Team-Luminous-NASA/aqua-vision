import { IQuizQuestion } from "./beginner";

export const advancedQuizData: IQuizQuestion[] = [
  {
    id: 1,
    question:
      "What is the primary tool used by NASA's PACE mission to monitor ocean color?",
    options: ["HARP2", "SPEXone", "Ocean Color Instrument (OCI)", "MODIS"],
    correctAnswer: 2, // C) Ocean Color Instrument (OCI)
  },
  {
    id: 2,
    question:
      "What mechanism in the PACE mission involves the bending of light as it enters water, affecting the perception of ocean color?",
    options: ["Reflection", "Refraction", "Scattering", "Absorption"],
    correctAnswer: 1, // B) Refraction
  },
  {
    id: 3,
    question:
      "Which law helps scientists understand the absorption and attenuation of light in water in the PACE mission?",
    options: [
      "Ocean Color Theory",
      "Radiative Transfer Theory",
      "Thin Layer Absorption Theory",
      "Beer-Lambert Law",
    ],
    correctAnswer: 3, // D) Beer-Lambert Law
  },
  {
    id: 4,
    question:
      "What does the HARP2 instrument in the PACE mission primarily measure?",
    options: [
      "Phytoplankton concentration",
      "Aerosol and cloud properties",
      "Ocean color",
      "Water salinity",
    ],
    correctAnswer: 1, // B) Aerosol and cloud properties
  },
  {
    id: 5,
    question: "How does the PACE mission contribute to climate models?",
    options: [
      "By analyzing volcanic activity",
      "By measuring the impact of phytoplankton on the carbon cycle",
      "By detecting underground water resources",
      "By monitoring plate tectonics",
    ],
    correctAnswer: 1, // B) By measuring the impact of phytoplankton on the carbon cycle
  },
  {
    id: 6,
    question:
      "What theory correlates the color of the ocean with the concentration of phytoplankton in PACE's research?",
    options: [
      "Radiative Transfer Theory",
      "Ocean Color Theory",
      "Thin Layer Absorption Theory",
      "Diffusion Theory",
    ],
    correctAnswer: 1, // B) Ocean Color Theory
  },
  {
    id: 7,
    question:
      "Which process describes how sunlight bouncing off the ocean surface provides clues about substances like phytoplankton?",
    options: ["Scattering", "Absorption", "Reflection", "Refraction"],
    correctAnswer: 2, // C) Reflection
  },
  {
    id: 8,
    question:
      "What is the function of the SPEXone instrument in the PACE mission?",
    options: [
      "Measuring water temperature",
      "Investigating aerosol characteristics",
      "Monitoring sea level rise",
      "Detecting chlorophyll concentration",
    ],
    correctAnswer: 1, // B) Investigating aerosol characteristics
  },
  {
    id: 9,
    question:
      "Which mechanism is crucial for analyzing the optical properties of the ocean in the PACE mission?",
    options: ["Reflection", "Scattering", "Absorption", "Polarization"],
    correctAnswer: 1, // B) Scattering
  },
  {
    id: 10,
    question: "What future advancement is expected in the PACE mission?",
    options: [
      "Analyzing tectonic shifts",
      "Enhanced capabilities for long-term environmental monitoring",
      "Building new space stations",
      "Studying gravitational waves",
    ],
    correctAnswer: 1, // B) Enhanced capabilities for long-term environmental monitoring
  },
];
