export interface AnalyticsTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const analyticsToolsData: AnalyticsTool[] = [
  {
    icon: "📊",
    title: "Completion & Progress Analytics",
    description: "Monitor learning progress at a glance.",
    link: "#",
  },
  {
    icon: "🔦",
    title: "Engagement Tracking",
    description: "See who's tuned in — and who needs support.",
    link: "#",
  },
  {
    icon: "⚖️",
    title: "Assignment Load Balancer",
    description: "Distribute work smartly, avoid student burnout.",
    link: "#",
  },
];


export interface CommunicationTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const communicationToolsData: CommunicationTool[] = [
  {
    icon: "✉️",
    title: "Parent Communication",
    description: "Keep families in the loop, effortlessly.",
    link: "#",
  },
  {
    icon: "🔔",
    title: "Notification Management",
    description: "Stay informed, without the noise.",
    link: "#",
  },
  {
    icon: "🧑‍🏫",
    title: "Co-Teacher Sync",
    description: "Plan, teach, and stay aligned — together.",
    link: "#",
  },
];
