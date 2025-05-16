import Evaluationimg from "../assets/Evaluation.png";
import AssesGenrator from "../assets/Asses-Generator.png";
import HomeWorkimg from "../assets/Homework.png";
import Reportimg from "../assets/Report-card.png";
import type { ReactElement } from "react";


export interface Assistant {
  icon: string;
  title: string;
  desc: string;
}


export interface ResumeCard {
  icon: string;
  title: string;
  subtitle: string;
}

export interface TeachingTool {
  title: string;
  category: string;
  color: string;
  icon: string | ReactElement;
}



export const assistants: Assistant[] = [
  {
    icon: "🧠",
    title: "AI PLANNING ASSISTANT",
    desc: "Plan your year with ease — set goals, align curriculum, and auto-schedule lessons.",
  },
  {
    icon: "✍️",
    title: "AI CLASS ASSISTANT",
    desc: "Design daily content — quizzes, homework, and assignments, personalized by AI",
  },
  {
    icon: "🎨",
    title: "AI RESOURCE GENERATOR",
    desc: "Create personalized classroom materials — flashcards, slides, and visual aids in seconds",
  },
  {
    icon: "📊",
    title: "AI ADMIN ASSISTANT",
    desc: "Track student progress, send reports, and manage communication in one place",
  },
  {
    icon: "🌱",
    title: "AI GROWTH ASSISTANT",
    desc: "Achieve your PD goals — self-assess, earn certifications, and grow with AI support.",
  },
  {
    icon: "🧑‍🏫",
    title: "AI CO-TEACHER",
    desc: "Teach with an AI avatar — co-deliver lessons, explain concepts, and guide students.",
  },
];

export const resumeCards: ResumeCard[] = [
  {
    icon: "📚",
    title: "CONTINUE WORKING ON GRADE 6 SCIENCE LESSON?",
    subtitle: "Last opened: Worksheet Builder · 2 days ago",
  },
  {
    icon: "👩‍💻",
    title: "CONTINUE WORKING ON JULIA - YOUR AI CO-TEACHER?",
    subtitle: "Last opened: Avatar Hub · 3 days ago",
  },
  {
    icon: "🎨",
    title: "CONTINUE CREATING GRADE 7 CHEMISTRY EXPERIMENT?",
    subtitle: "Last opened: Content Lab · 4 days ago",
  },
];

export const teachingTools: TeachingTool[] = [
  {
    title: "Curriculum Mapper",
    category: "📘Planning Tools",
    color: "bg-yellow-400",
    icon: "📚",
  },
  {
    title: "Class Goals Planner",
    category: "📘Planning Tools",
    color: "bg-yellow-400",
    icon: "🎯",
  },
  {
    title: "Teaching Calendar Planner",
    category: "📘Planning Tools",
    color: "bg-yellow-400",
    icon: "🗓️",
  },
  {
    title: "Reflection Diary",
    category: "📘Planning Tools",
    color: "bg-yellow-400",
    icon: "🧘",
  },

  {
    title: "Lesson Planner",
    category: "Instruction Design Tools",
    color: "bg-blue-500",
    icon: "📘",
  },
  {
    title: "Quiz Builder",
    category: "Instruction Design Tools",
    color: "bg-blue-500",
    icon: "📝",
  },
  {
    title: "Worksheet Generator",
    category: "Instruction Design Tools",
    color: "bg-blue-500",
    icon: "📄",
  },
  {
    title: "Homework Creator",
    category: "Instruction Design Tools",
    color: "bg-blue-500",
    icon: (
      <img
        src={HomeWorkimg}
        alt="Evaluation Assistant"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Assignment Designer",
    category: "Instruction Design Tools",
    color: "bg-blue-500",
    icon: "📊",
  },

  {
    title: "Assignment Designer",
    category: "Assessment Tools",
    color: "bg-red-500",
    icon: "📊",
  },
  {
    title: "Assessment Generator",
    category: "Assessment Tools",
    color: "bg-red-500",
    icon: (
      <img
        src={AssesGenrator}
        alt="Assessment Generator"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Evaluation Assistant",
    category: "Assessment Tools",
    color: "bg-red-500",
    icon: (
      <img
        src={Evaluationimg}
        alt="Evaluation Assistant"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Report Card Generator",
    category: "Assessment Tools",
    color: "bg-red-500",
    icon: (
      <img src={Reportimg} alt="Evaluation Assistant" width={20} height={20} />
    ),
  },

  {
    title: "Mnemonic Maker",
    category: "🔡Text & Mnemonic-Based Tools",
    color: "bg-pink-400",
    icon: "🧠",
  },
  {
    title: "Flashcard Generator",
    category: "🔡Text & Mnemonic-Based Tools",
    color: "bg-pink-400",
    icon: "🃏",
  },
];


