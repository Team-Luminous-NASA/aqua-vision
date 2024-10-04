// Define the structure of a quiz question
export interface IQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const beginnerQuizData: IQuizQuestion[] = [
  {
    id: 1,
    question: "What does PACE stand for?",
    options: [
      "Planetary Aerosol Cloud Experiment",
      "Plankton, Aerosol, Cloud, ocean Ecosystem",
      "Planetary Atmospheric Climate Environment",
      "Photonic Atmospheric Climate Energy",
    ],
    correctAnswer: 1, // 0-based index, B is the correct answer
  },
  {
    id: 2,
    question: "When was the PACE satellite launched?",
    options: ["January 2024", "February 2024", "March 2024", "April 2024"],
    correctAnswer: 1, // B is the correct answer
  },
  {
    id: 3,
    question: "What type of orbit does the PACE satellite operate in?",
    options: [
      "Geostationary orbit",
      "Low Earth orbit",
      "Sun-synchronous polar orbit",
      "Eccentric orbit",
    ],
    correctAnswer: 2, // C is the correct answer
  },
  {
    id: 4,
    question: "What is the primary function of the PACE satellite?",
    options: [
      "Monitoring terrestrial ecosystems",
      "Tracking ocean color",
      "Observing solar activity",
      "Measuring land surface temperature",
    ],
    correctAnswer: 1, // B is the correct answer
  },
  {
    id: 5,
    question: "How high does the PACE satellite orbit above Earth?",
    options: ["300 km", "500 km", "676.5 km", "800 km"],
    correctAnswer: 2, // C is the correct answer
  },
  {
    id: 6,
    question: "What advanced sensors does PACE use to collect data?",
    options: [
      "Infrared sensors",
      "Radar sensors",
      "Ocean color sensors",
      "Thermal sensors",
    ],
    correctAnswer: 2, // C is the correct answer
  },
  {
    id: 7,
    question:
      "What is the expected operational lifespan of the PACE satellite?",
    options: ["1 year", "3 years", "5 years", "10 years"],
    correctAnswer: 1, // B is the correct answer
  },
  {
    id: 8,
    question:
      "What kind of data latency can users expect from the PACE satellite?",
    options: ["1 hour", "3 to 24 hours", "24 to 48 hours", "1 to 3 days"],
    correctAnswer: 1, // B is the correct answer
  },
  {
    id: 9,
    question: "Which organization is responsible for the PACE satellite?",
    options: [
      "European Space Agency (ESA)",
      "National Aeronautics and Space Administration (NASA)",
      "Indian Space Research Organisation (ISRO)",
      "Russian Federal Space Agency",
    ],
    correctAnswer: 1, // B is the correct answer
  },
  {
    id: 10,
    question: "What critical environmental elements does PACE monitor?",
    options: [
      "Land use and forestry",
      "Oceans, aerosols, and clouds",
      "Urban pollution",
      "Weather patterns",
    ],
    correctAnswer: 1, // B is the correct answer
  },
];
