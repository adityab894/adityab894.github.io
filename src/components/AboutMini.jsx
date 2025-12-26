import React from "react";
import image from "../assets/me.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const AboutMini = ({ htitle, container, container2 }) => {
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js", "SQL", "Power BI", "Python"];
  const isMobile = useMediaQuery({ maxWidth: 950 });

  return (
    <>
      {htitle !== "homeabout" ? (
        <div className="allow-select text-base md:text-lg">
          <motion.p
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
            Hey! You can call me
            <span className="texthilit1"> Adi's</span>!!
          </motion.p>
          <motion.p
            variants={container2(0.9)}
            initial="hidden"
            animate="visible"
            className="relative py-5"
          >
            I'm an <span className="font-bold">aspiring Product Manager</span>{" "}
            with a strong technical foundation&nbsp;
            <span className="xplain decoration-lhilit-1 dark:decoration-dhilit-1 underline-offset-4 dark:relative dark:underline">
              MERN stack & Data Analyst
            </span>
            <span>. </span>
            <div className="hide texthilit1 dark:bg-primary bg-2ndry-1 absolute p-3">
              MERN & Data stands for <span>{mern.join(", ")}</span>
            </div>
             My background helps me collaborate effectively with engineers while making informed product decisions.
          </motion.p>
          <motion.div
            variants={container2(1.1)}
            initial="hidden"
            animate="visible"
          >
            <img
              className="size-60 object-contain md:float-right"
              src={image}
              alt="profilepic"
            />
          </motion.div>
          <motion.p
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
          I have hands on exposure to core product management practices, including writing PRDs, defining user stories and user flows, feature scoping, backlog management, and roadmap planning. I have worked closely with design tools like Figma and Framer. With a technical background in Python, SQL, and full-stack development (React.js, Node.js, REST APIs), I am comfortable working with data, dashboards, and data pipelines, and collaborating closely with engineering teams. 
          </motion.p>
          <motion.p
            {...(isMobile
              ? {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 0.5 },
                }
              : {
                  variants: container(1.5),
                  initial: "hidden",
                  animate: "visible",
                })}
            className="py-5"
          >
            Beyond individual projects, I'm an active organizer in the API community, bringing together developers, product professionals, and industry practitioners to share knowledge and tackle real-world product challenges. This experience has strengthened my skills in stakeholder alignment, cross-functional collaboration, and execution within Agile/Scrum environments using tools like Jira.
          </motion.p>
          <motion.p
            {...(isMobile
              ? {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 0.5 },
                }
              : {
                  variants: container2(1.9),
                  initial: "hidden",
                  animate: "visible",
                })}
            className="py-5"
          >
            Let's connect and build something awesome together!
          </motion.p>
        </div>
      ) : (
        <div className="allow-select text-base md:text-lg">
          <motion.p
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
            Hey! You can call me
            <span className="texthilit1"> Adi's</span>!!
          </motion.p>
          <motion.p
            {...(isMobile
              ? {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 0.5 },
                }
              : {
                  variants: container2(1.1),
                  initial: "hidden",
                  animate: "visible",
                })}
            className="relative py-5"
          >
            I'm an <span className="font-bold">aspiring Product Manager</span>{" "}
            with a strong techinical foundation in the&nbsp;
            <span className="xplain decoration-lhilit-1 dark:decoration-dhilit-1 relative underline underline-offset-4">
              MERN stack & Data
            </span>
            <div className="hide texthilit1 dark:bg-primary bg-2ndry-1 absolute p-3">
              MERN & Data Stands for <span>{mern.join(", ")}</span>
            </div>
            &nbsp;With hands-on experience from full-stack development training, I'm eager to apply product thinking to real-world problems and grow into an industry ready PM. I am particularly interested in product discovery, feature prioritization, and shaping intuitive, user-centric solutions. I'm constantly learning through side projects, product frameworks, and data analysis, and I'm excited to work with experienced product teams where I can contribute meaningfully and grow every day.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="py-5"
          >
           Let's connect and build products that solve real user problems.
          </motion.p>
        </div>
      )}
    </>
  );
};

export default AboutMini;
