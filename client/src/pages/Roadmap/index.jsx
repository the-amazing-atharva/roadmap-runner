import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SidebarLayout from "../../components/SidebarLayout";
import roadmapData from "../../data/opensource.json";
// import roadmapData from "../../data/frontend.json";
import Section from "./Section";
import "./index.css";

const Roadmap = () => {
  const { id } = useParams();

  const [roadmap, setRoadmap] = useState();

  useEffect(() => {
    async function fetchRoadmaps() {
      setRoadmap(roadmapData);
    }

    fetchRoadmaps();
  }, []);

  console.log(roadmap)

  return (
    <SidebarLayout>
      <div className="roadmap-container">
        <div>
          <h1>
            {roadmap?.name} {id}
          </h1>
          <button className="roadmap-enroll-btn">Enroll</button>

          <div className="roadmap">
            {roadmap &&
              roadmap.sections &&
              roadmap.sections.map((section) => <Section section={section} />)}
          </div>
        </div>

        <div className="roadmap-info">
          <div>
            <img src={roadmap?.bannerImage} alt="" />
            <h2 style={{color: "white", marginBottom: "1rem", fontSize: "1.5rem"}}>{roadmap?.name}</h2>
            <p className="description">{roadmap?.description}</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Roadmap;
