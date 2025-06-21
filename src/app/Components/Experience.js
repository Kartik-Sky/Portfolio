"use client";

import "../globals.css";

const education = [
    {
        year: "2014 - 2017",
        title: "Vellore Institue Of Technology-Chennai",
        subtitle:"B.Tech. Computer Science And Engineering",
        desc: "Built a strong foundation about Machine Learning, Deep Learning, Databases, Operating Systems and Life.",
        gpa: "CGPA : 9.34",
        logo: "/assets/img/Education/VIT.png",
    },
    {
        year: "2010 - 2022",
        title: "Podar International School-Ahmedabad",
        subtitle:"C.B.S.E.",
        desc: "Completed with a focus on Physics, Chemistry, and Mathematics along with basics of programming like Web Development, Python and MySQL",
        logo: "/assets/img/Education/podar.png", 
    },
];

const experience = [
  {
    year: "May 2025 - Present",
    title: "Cygnet Infotech Pvt. Ltd. - Ahmedabad",
    subtitle: "AI/ML and Data Analytics Intern",
    desc: "Built large-scale data aggregation Dashboard for Sales Team across 150+ related tables and currently automating key workflows to streamline operational processes.",
    logo: "/assets/img/Experience/cygnet.png",
  },
  {
    year: "May 2025 - Present",
    title: "School Of Computer Science And Engineering - VIT CHENNAI",
    subtitle: "Research Intern",
    desc: "Developing a mobile app that promotes safe listening habits by tracking headphone usage time, volume exposure, and ambient noise levels along with Pure Tone Audiometry for early detection of Noise Induced Hearing Loss.",
    logo: "/assets/img/Education/VIT.png",
  },
  {
    year: "2020 - 2022",
    title: "IEEE Robotics And Automation Society VIT CHENNAI",
    subtitle: "Chairperson of Student Chapter",
    desc: "Served as Vice Chair (2023-2024) and later as Chair (2024-2025). Led strategic planning, organized technical workshops, hosted many tech sessions, mentored juniors, and expanded club outreach across campus.",
    logo: "/assets/img/Experience/ieeeras.jpg",
},
{
    year: "2018 - 2020",
    title: "IEEE Computer Society VIT CHENNAI",
    subtitle: "Management Member",
    desc: "Served in Organizing Committees of various large Scale events. Managed on-ground registration and crowd control for Voyage'24 one of the largest Entrepreneurship summit on campus.",
    logo: "/assets/img/Experience/compsoc.jpg",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">
        My <span className="experience-highlight">Journey</span>
      </h2>
      <div className="experience-grid">
        <div>
          <h3 className="experience-subheading">Education</h3>
          <div className="experience-timeline">
            {education.map((item, idx) => (
              <div key={idx} className="experience-entry">
                <div className="experience-dot" />
                <div className="experience-content">
                  <div className="experience-header">
                    {item.logo && (
                      <img src={item.logo} alt="org logo" className="experience-logo" />
                    )}
                    <div>
                      <span className="experience-year">{item.year}</span>
                      <h4 className="experience-title">{item.title}</h4>
                      {item.subtitle && (
                        <p className="experience-subtitle">{item.subtitle}</p>
                        )}
                    </div>
                  </div>
                  <p className="experience-description">{item.desc}</p>
                  {item.gpa&&<p className="experience-description">{item.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="experience-subheading">Experience</h3>
          <div className="experience-timeline">
            {experience.map((item, idx) => (
              <div key={idx} className="experience-entry">
                <div className="experience-dot" />
                <div className="experience-content">
                  <div className="experience-header">
                    {item.logo && (
                      <div className="experience-logo-wrapper">
                        <img src={item.logo} alt="org logo" className="experience-logo" />
                      </div>
                    )}
                    <div>
                      <span className="experience-year">{item.year}</span>
                      <h4 className="experience-title">{item.title}</h4>
                      {item.subtitle && (
                        <p className="experience-subtitle">{item.subtitle}</p>
                        )}
                    </div>
                  </div>
                  <p className="experience-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
