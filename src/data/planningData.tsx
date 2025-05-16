// data/planningToolsData.tsx
export interface PlanningTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const planningToolsData: PlanningTool[] = [
  {
    icon: "🗓️",
    title: "Teaching Calendar Planner",
    description: "Your roadmap to organized, stress-free teaching",
    link: "#",
  },
  {
    icon: "🎯",
    title: "Class Goals Planner",
    description: "Set targets that inspire, track progress that matters.",
    link: "#",
  },
  {
    icon: "📚",
    title: "Curriculum Mapper",
    description: "Visualize your teaching journey from standards to outcomes.",
    link: "#",
  },
  {
    icon: "🧘",
    title: "Reflection Diary",
    description: "Reflect. Refine. Grow with every lesson.",
    link: "#",
  },
];
