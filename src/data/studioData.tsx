export interface InstructionTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const instructionToolsData: InstructionTool[] = [
  {
    icon: "📘",
    title: "Lesson Planner",
    description: "Craft structured lessons with clarity and ease.",
    link: "#",
  },
  {
    icon: "📝",
    title: "Quiz Builder",
    description: "Test understanding with smart, customizable quizzes.",
    link: "#",
  },
  {
    icon: "📄",
    title: "Worksheet Generator",
    description: "Create printable practice in just a few clicks.",
    link: "#",
  },
  {
    icon: "🧾",
    title: "Homework Creator",
    description: "Design purposeful homework that reinforces learning.",
    link: "#",
  },
  {
    icon: "📊",
    title: "Assignment Designer",
    description: "Build engaging tasks that challenge and inspire.",
    link: "#",
  },
];

export interface AssessmentTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const assessmentToolsData: AssessmentTool[] = [
  {
    icon: "📊",
    title: "Assignment Designer",
    description: "Build engaging tasks that challenge and inspire.",
    link: "#",
  },
  {
    icon: "🧪",
    title: "Assessment Generator",
    description: "Create meaningful assessments aligned to your goals.",
    link: "#",
  },
  {
    icon: "🕵️‍♂️",
    title: "Evaluation Assistant",
    description: "Simplify grading with smart, AI-powered insights.",
    link: "#",
  },
  {
    icon: "📋",
    title: "Report Card Generator",
    description: "Deliver polished, personalized reports — instantly.",
    link: "#",
  },
];

