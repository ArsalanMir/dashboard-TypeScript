
export interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface VisualTool {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export interface immersiveTool {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export interface activityTool {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface templateTool {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MediaTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}
export interface AudioTool {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const toolsData: Tool[] = [
  {
    icon: "🧠",
    title: "Mnemonic Maker",
    description: "Create acronyms, rhymes, or memory phrases for any topic",
    link: "#",
  },
  {
    icon: "🃏",
    title: "Flashcard Generator",
    description: "Generate term-definition, Q&A, or image-word flashcards",
    link: "#",
  },
  {
    icon: "📝",
    title: "Smart Notes Builder",
    description: "Summarize topics into study-ready note snippets",
    link: "#",
  },
  {
    icon: "📌",
    title: "Key Point Extractor",
    description: "Auto-pull key takeaways or learning objectives",
    link: "#",
  },
  {
    icon: "🧭",
    title: "Mind Map Designer",
    description: "Create Venn/table-style comparisons",
    link: "#",
  },
  {
    icon: "⚖️",
    title: "Compare & Contrast Card",
    description: "Break down concepts into visual mind maps",
    link: "#",
  },
  {
    icon: "🔁",
    title: "Flowchart Builder",
    description: "Convert step-based processes into flow visuals",
    link: "#",
  },
  {
    icon: "🧬",
    title: "Concept Mapper",
    description: "Build deep hierarchical relationship trees",
    link: "#",
  },
];

export const visualToolsData: VisualTool[] = [
  {
    title: "Storyboard Creator",
    description: "Design visual narratives for storytelling or sequencing",
    icon: "🎬",
  },
  {
    title: "Timeline Designer",
    description: "Show historical or event sequences with clarity",
    icon: "🕒",
  },
  {
    title: "Poster Maker",
    description: "Design motivational, thematic, or concept posters",
    icon: "📢",
  },
  {
    title: "Infographic Composer",
    description: "Turn complex data into visual infographics",
    icon: "📊",
  },
  {
    title: "Diagram Labeler",
    description: "Auto-generate labeled scientific diagrams",
    icon: "🧷",
  },
  {
    title: "Concept Visual Creator",
    description: "Generate visual metaphors or abstract ideas",
    icon: "🔍",
  },
  {
    title: "Cognitive Map Builder",
    description: "Create branched conceptual frameworks",
    icon: "🧠",
  },
  {
    title: "Chart Generator",
    description: "Generate bar, pie, or custom academic charts",
    icon: "📉",
  },
  {
    title: "Comic Panel Generator",
    description: "Create comic strips to illustrate concepts",
    icon: "🎭",
  },
];

export const interactiveMultimediaToolsData: MediaTool[] = [
  {
    icon: "🖥️",
    title: "Slide Show Maker",
    description: "AI-powered presentation deck with visuals + voiceovers",
    link: "#",
  },
  {
    icon: "🎥",
    title: "Micro-Video Maker",
    description: "AI-powered presentation deck with visuals + voiceovers",
    link: "#",
  },
  {
    icon: "🔁",
    title: "GIF/Loop Animator",
    description: "Make GIFs to explain repeating concepts",
    link: "#",
  },
  {
    icon: "🧪",
    title: "Simulation Designer",
    description: "Create interactive science/math simulations",
    link: "#",
  },
  {
    icon: "🧩",
    title: "Drag & Drop Builder",
    description: "Build sequence/categorize/match card activities",
    link: "#",
  },
  {
    icon: "🧠",
    title: "Whiteboard Explainer Tool",
    description: "AI-generated whiteboard-style visualizations",
    link: "#",
  },
];

export const audioBasedToolsData: AudioTool[] = [
  {
    icon: "🎙️",
    title: "Podcast Generator",
    description: "Create short audio explainers or topic reviews",
    link: "#",
  },
  {
    icon: "🎧",
    title: "Audio Flashcard Builder",
    description: "Turn text flashcards into spoken prompts",
    link: "#",
  },
  {
    icon: "🗣️",
    title: "Pronunciation Coach",
    description: "Practice and review subject vocabulary aloud",
    link: "#",
  },
  {
    icon: "🎼",
    title: "Rhyme & Rap Composer",
    description: "Generate rhymes or raps for formulas and facts",
    link: "#",
  },
  {
    icon: "🧘",
    title: "Guided Prompt Generator",
    description: "Create reflective audio thinking prompts",
    link: "#",
  },
  {
    icon: "🎵",
    title: "Soundscape Mixer",
    description: "Add ambient background sounds for immersive lessons",
    link: "#",
  },
];


export const immersiveToolsData : immersiveTool[] = [
  {
    title: "AR Object Viewer",
    description: "Explore 3D/AR academic models interactively",
    icon: "🌀",
  },
  {
    title: "3D Model Generator",
    description: "Build and label virtual structures or objects",
    icon: "🏗️",
  },
  {
    title: "Roleplay Script Writer",
    description: "Auto-generate dialogue scenarios for learning",
    icon: "🎭",
  },
  {
    title: "Scenario Card Creator",
    description: "Build and label virtual structures or objects",
    icon: "🧾",
  },
  {
    title: "Gallery Card Generator",
    description: "Create classroom walkaround concept cards",
    icon: "🖼️",
  },
  {
    title: "Virtual Tour Generator",
    description: "Build narrated location or museum-style tours",
    icon: "🌐",
  },
];

export const activityToolsData : activityTool[] = [
  {
    title: "Do-It Card Generator",
    description: "Instant hands-on task cards (DIY, Experiments)",
    icon: "🧠",
  },
  {
    title: "Think-Pair-Share Prompter",
    description: "Class discussion prompt generator",
    icon: "👥",
  },
  {
    title: "Quick Poll Card Creator",
    description: "Design rapid quiz or class voting cards",
    icon: "❓",
  },
  {
    title: "Discussion Prompt Maker",
    description: "Create warm-up and open-ended prompts",
    icon: "🗣️",
  },
  {
    title: "Problem Card Generator",
    description: "Turn math/science questions into activity cards",
    icon: "➗",
  },
  {
    title: "Creativity Prompt Engine",
    description: "Inspire design-based or imaginative thinking",
    icon: "🎨",
  },
];

export const templateToolsData : templateTool[]= [
  {
    title: "Summary Template Builder",
    description: "Build structured subject summaries",
    icon: "🧾",
  },
  {
    title: "Checklist Generator",
    description: "Create revision or concept checklists",
    icon: "✅",
  },
  {
    title: "Graphic Organizer Tool",
    description: "Create visual tools like T-charts, Frayer models",
    icon: "🗂️",
  },
  {
    title: "Exit Ticket Generator",
    description: "Wrap up a class with review or reflection tickets",
    icon: "🎟️",
  },
  {
    title: "Anchor Chart Builder",
    description: "Create reference posters for wall displays",
    icon: "🧱"
  },
  {
    title: "Poster Set Designer",
    description: "Create bundled visuals for classroom themes",
    icon:"🧩",
  },
  {
    title: "Debate & Speech Prompt Tool",
    description: "Create argumentation or speech scenarios",
    icon: "🗣️",
  },
];