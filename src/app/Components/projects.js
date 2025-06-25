"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";

const projects = [
  {
    title: "Satellite Frame Interpolator",
    description: "GAN-AE pipeline to interpolate INSAT-3DR satellite frames at 30-min intervals with improved temporal coherence.",
    imgUrl: '/assets/img/Projects/Satellite.png',
    tags: ["PyTorch", "GAN", "Autoencoder", "Satellite", "SSIM"],
    link: "https://github.com/yourname/satellite-interpolator"
  },
  {
    title: "AI Shadow Remover",
    description: "2-stage Swin Transformer + STCGAN architecture for removing shadows in satellite imagery; achieved PSNR 20.2, SSIM 0.75.",
    imgUrl: '/assets/img/Projects/ShadowImage.png',
    tags: ["Swin Transformer", "STCGAN", "PyTorch", "Image-to-Image", "Remote Sensing"],
    link: "https://github.com/yourname/shadow-removal"
  },
  {
    title: "Smart Hearing Monitor",
    description: "Flutter + native Android app measuring SPL and alerting users on unsafe listening patterns using FFT and calibrated playback.",
    imgUrl: '/assets/img/Projects/Hearing.png',
    tags: ["Flutter", "SPL", "Android", "FFT", "Hearing Safety"],
    link: "https://github.com/yourname/hearing-monitor"
  },
  {
    title: "StockAI",
    description: "Stock forecasting app using LSTM models for Nifty50 prediction with real-time API integration and trade simulation.",
    imgUrl: '/assets/img/Projects/StockApp.png',
    tags: ["Flutter", "LSTM", "Sklearn", "Flask", "Stocks"],
    link: "https://github.com/yourname/stockai"
  },
  {
    title: "MediChain",
    description: "Scalable healthcare app supporting bookings, prescriptions, and test management via SQLite and secure REST APIs.",
    imgUrl: '/assets/img/Projects/healthcare.avif',
    tags: ["Flutter", "SQLite", "REST API", "Flask"],
    link: "https://github.com/yourname/medichain"
  },
  {
    title: "Fire Detection System",
    description: "Faster R-CNN based real-time fire detection with 87% mAP, deployed during CYBERX Hackathon.",
    imgUrl: '/assets/img/Projects/FireModel.png',
    tags: ["Faster R-CNN", "TensorFlow", "Computer Vision", "RoboFlow"],
    link: "https://github.com/yourname/fire-detection"
  },
  {
    title: "Password Strength Classifier",
    description: "Springer-published ML model benchmarking ANN-based password strength classification with 7% improvement over baseline.",
    imgUrl: '/assets/img/Projects/Password.png',
    tags: ["ML", "Classification", "Springer", "Security"],
    link: "https://github.com/yourname/password-strength"
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
              <Image
                src={proj.imgUrl}
                alt={proj.title}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
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
