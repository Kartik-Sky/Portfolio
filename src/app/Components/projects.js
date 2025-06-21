"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const projects = [
  {
    title: "Satellite Tracker",
    description: "Live orbital tracker rendering data from NORAD TLE feeds with real-time updates.",
    imgUrl: projImg1,
    tags: ["React", "CesiumJS", "TLE", "REST API"],
    link: "https://github.com/yourname/satellite-tracker"
  },
  {
    title: "AI Shadow Remover",
    description: "Transformer + CGAN-based shadow removal for remote sensing images.",
    imgUrl: projImg2,
    tags: ["PyTorch", "Swin Transformer", "CGAN", "Satellite"],
    link: "https://github.com/yourname/shadow-removal"
  },
  {
    title: "Sonar PointNet Classifier",
    description: "Radar point cloud classification using a custom-trained PointNet+ architecture.",
    imgUrl: projImg3,
    tags: ["PointNet", "Radar", "Deep Learning", "HDF5"],
    link: "https://github.com/yourname/radar-pointnet"
  },
  {
    title: "Smart Hearing Monitor",
    description: "Android app tracking headphone volume/time and computing Safe Hearing Score.",
    imgUrl: projImg1,
    tags: ["Flutter", "Audio Analysis", "TensorFlow Lite"],
    link: "https://github.com/yourname/hearing-app"
  },
  {
    title: "Frame Interpolator",
    description: "Satellite image temporal upsampler using ConvLSTM-enhanced GAN.",
    imgUrl: projImg2,
    tags: ["GAN", "ConvLSTM", "Remote Sensing"],
    link: "https://github.com/yourname/frame-interpolator"
  },
  {
    title: "Cyber Portfolio Site",
    description: "This very site. Built to showcase AI + Robotics projects with a cyber aesthetic.",
    imgUrl: projImg3,
    tags: ["Next.js", "Framer Motion", "CSS Grid"],
    link: "#"
  },
];

export const Projects = () => {
  return (
    <section className="hud-projects-section" id="projects">
      <Container>
        <h2 className="hud-title">Projects</h2>
        <div className="hud-grid">
          {projects.map((proj, i) => (
            <div className="hud-card" key={i}>
              <div className="hud-image">
                <Image src={proj.imgUrl} alt={proj.title} width={300} height={160} />
              </div>
              <div className="hud-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="hud-tags">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="hud-tag">{tag}</span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="hud-button">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
