export type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  contribution: string;
  stack: string[];
  image?: string;
  note?: string;
};

export const projects: PortfolioProject[] = [
  {
    title: "Kitchen Display System (KDS)",
    category: "Freelance · Restaurant technology",
    summary:
      "A kitchen order display system for monitoring incoming orders and following their progress through preparation and service.",
    contribution:
      "Implemented order-status workflows and Firestore-backed order updates, with time-based alerts to help staff monitor orders.",
    stack: ["Flutter", "Dart", "Firebase Firestore", "Provider", "GoRouter"],
    // Add the screenshot at public/images/kds.png, then uncomment:
    // image: "/images/kds.png",
    note:
      "Use screenshots that you own or have permission to share. Do not include customer data or confidential business information.",
  },
  {
    title: "FCS Logistics System",
    category: "Logistics",
    summary:
      "A business system supporting logistics and operational workflows.",
    contribution:
      "Contributed to application development and features supporting logistics operations.",
    stack: ["Flutter", "Dart", "REST APIs"],
    // image: "/images/fcs-logistics.png",
  },
  {
    title: "Smoove",
    category: "Tourism",
    summary:
      "A business system supporting logistics and operational workflows.",
    contribution:
      "Contributed to application development and features supporting logistics operations.",
    stack: ["Flutter", "Dart", "REST APIs"],
    image: "/images/smoove/smoove_1.png",
  },
  {
    title: "Foresight Petrol Station Management",
    category: "Business application",
    summary:
      "A mobile application for petrol station management workflows.",
    contribution:
      "Developed Flutter application features and worked with Firebase-backed data and application workflows.",
    stack: ["Flutter", "Dart", "Firebase", "Provider"],
    image: "/images/sme/sme_1.png",
  },
  {
    title: "FCS Logistics System",
    category: "Logistics",
    summary:
      "A business system supporting logistics and operational workflows.",
    contribution:
      "Contributed to application development and features supporting logistics operations.",
    stack: ["Flutter", "Dart", "REST APIs"],
    // image: "/images/fcs-logistics.png",
  },
];
