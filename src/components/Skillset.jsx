import { motion } from "framer-motion";

const Skillset = () => {
  const skillsets = [
    {
      id: "productm",
      softUsed: ["PRDs", "User Stories", "User Flows", "Figma", "Feature Scoping", "Backlog Management", "Roadmap Planning"],
      title: "Product Management",
    },
    {
      id: "producta",
      softUsed: ["Mixpanel, Google Analytics, A/B Testing, Experimentation Design, Cohort & Funnel Analysis"],
      title: "Product Analytics",
    },
    {
      id: "dad",
      softUsed: ["Python, SQL, dashboards, data pipelines, React.js, Node.js, REST APIs, BigQuery, Looker Studio"],
      title: "Data & Development",
    },
    {
      id: "toolsc",
      softUsed: ["Jira, Agile/Scrum, Cross-Functional Communication, Stakeholder Alignment, Rapid Execution, Documentation"],
      title: "Tools & Collaboration",
    },
    {
      id: "ai",
      softUsed: ["Prompt Engineering", "RAG Workflows", "Multi-Agent Systems", "AI Automation", "LLM's", "AI Agents"  ],
      title:" AI & LLMs",
    },
    {
      id: "others",
      softUsed: ["HTML", "CSS", "EJS", "REST API"],
      title: "Others",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {skillsets.map((skillset, index) => (
          <table>
            <motion.div
              key={skillset.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.5, ease: "easeIn" }}
              className="dark:border-2ndry-2 border-primary-2 rounded border-2 p-2 text-center"
            >
              <div className="mb-2 border-b-1 font-bold">{skillset.title}</div>
              <div>{skillset.softUsed.join(", ")}</div>
            </motion.div>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
