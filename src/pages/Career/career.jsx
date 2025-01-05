import React, { useState } from "react";
import "./styles.css";

const Career = () => {
  const jobs = [
    {
      id: 1,
      company: "NP TECH",
      role: "Area Sales Manager",
      info: {
        openings: "4",
        qualification: "Graduate/Post Graduate in Business related streams",
        experience: "1-5 years",
        summary: `The Position will be responsible for enabling new clientele in the Industrial and distributional channel. The role would drive the sales process reviews & mitigation plan for gaps identified in sales process reviews. This role requires working with & through organization-wide cross-functional teams & working directly with industrial purchase leaders in the field.`,
        skills: [
          "Strong communication & presentation skills and proficiency in English",
          "Proficient in report writing",
          "Proficient with Excel and PowerPoint",
          "Strong analytical ability",
          "Strong customer centrality focus",
          "Good knowledge of life Packaging business will be preferred",
        ],
        location: "Chhatrapati Sambhajinagar (Aurangabad), Pune, Ahmednagar, Nashik",
        reporting: "Senior Sales Manager",
      },
    },
    {
      id: 2,
      company: "NP TECH",
      role: "Procurement Manager",
      experience: "3-6 years",
      location: "Chhatrapati Sambhajinagar (Aurangabad)",
      logo: "/img/npl.png",
      info: {
        openings: "4",
        qualification: "Graduate / Post Graduate in Business related streams.",
        experience: "3-6 years",
        summary: "1) Responsible for selection of suppliers, who can provide goods/services in accordance with the needs of the internal customers, negotiate rates, set up contracts, and manage supplier relationships. 2) Adapt new skill sets of contract negotiation/closure and phasing out of the role as transaction processors. 3)Perform Ongoing relationship management 4) Set up meetings with appropriate functional heads and lead the discussions",
        skills: ["Understanding of Industrial packaging requirements.", "Understands macroeconomics and leverage from the supply & demand gap", "Strong negotiation skills and analysis of cost", "Strong interpersonal and communication skills", "Strong process understanding and adherence to processes."],
        location: "Chhatrapati Sambhajinagar (Aurangabad)",
        reporting: "ONP Head",
      },
    },
    {
      id: 3,
      company: "NP TECH",
      role: "Relationship Manager",
      logo: "/img/npl.png",
      info: {
        openings: "2",
        qualification: "Higher secondary certified/graduated in any field",
        experience: "0-3 years",
        summary: "The Position will be responsible for Service to sales for the existing clients as well as new appointment generation with concerned prospects from Industrial and distributional channels. The role would drive growth in sales and service simultaneously.",
        skills: ["This role requires skills like assisting clients with on-call service and generating sales through appointments with purchase leaders.", "Strong communication & presentation skills and proficiency in English", "Proficient in report writing", "Proficient with excel and PowerPoint", "Strong analytical ability", "Strong customer centrality focus", "Good knowledge of life Packaging business will be preferred."],
        location: "Chhatrapati Sambhajinagar (Aurangabad)",
        reporting: "Area Sales Manager",
      },
    },
    {
      id: 4,
      company: "NP TECH",
      role: "Logistic Executive",
      experience: "1-3 years",
      location: "Chhatrapati Sambhajinagar (Aurangabad), Pune",
      logo: "/img/logo-no.png",
      info: {
        openings: "4",
        qualification: "Graduate / Post Graduate in Business related streams.",
        experience: "1-3 years",
        summary: "The Position will be responsible for enabling new clientele in the Industrial and distributional channel. The role would drive the sales process reviews & mitigation plan for gaps identified in sales process reviews. This role requires working with & through organization-wide cross-functional teams & working directly with industrial purchase leaders in the field.",
        skills: ["Strong communication & presentation skills and proficiency in English", "Proficient in report writing", "Proficient with excel and PowerPoint", "Strong analytical ability", "Strong customer centrality focus", "Good knowledge of life Packaging business will be preferred."],
        location: "Chhatrapati Sambhajinagar (Aurangabad), Pune, Ahmednagar, Nashik",
        reporting: "Senior Sales Manager",
      },
    },
  ];

  const internships = [
    {
      id: 1,
      title: "CSE/IT",
      info: {
        timePeriod: "3-6 months",
        mode: "Remote/Offline",
        stipend: "Paid/Unpaid",
        learning: [
          "Hands-on coding experience",
          "Exposure to real-world projects",
          "Understanding of Agile methodologies",
          "Knowledge of industry-standard tools and frameworks",
        ],
      },
    },
    {
      id: 2,
      title: "Mechanical",
      info: {
        timePeriod: "3-6 months",
        mode: "Remote/Offline",
        stipend: "Paid/Unpaid",
        learning: [
          "Practical exposure to design tools (e.g., CAD)",
          "Understanding of manufacturing processes",
          "Project-based problem-solving",
          "Collaboration with cross-functional teams",
        ],
      },
    },
    {
      id: 3,
      title: "Civil",
      info: {
        timePeriod: "3-6 months",
        mode: "Remote/Offline",
        stipend: "Paid/Unpaid",
        learning: [
          "Site supervision techniques",
          "Structural analysis tools",
          "Project planning and management",
          "Exposure to sustainable construction practices",
        ],
      },
    },
    {
      id: 4,
      title: "Electrical",
      info: {
        timePeriod: "3-6 months",
        mode: "Remote/Offline",
        stipend: "Paid/Unpaid",
        learning: [
          "Practical exposure to circuit design",
          "Testing and troubleshooting of systems",
          "Project-based learning",
          "Knowledge of energy-efficient systems",
        ],
      },
    },
    {
      id: 5,
      title: "Electronics",
      info: {
        timePeriod: "3-6 months",
        mode: "Remote/Offline",
        stipend: "Paid/Unpaid",
        learning: [
          "Hands-on experience with embedded systems",
          "Working with sensors and IoT devices",
          "Understanding signal processing",
          "Project-based learning in VLSI design",
        ],
      },
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const openPopup = (item, type) => {
    if (type === "job") setSelectedJob(item);
    if (type === "internship") setSelectedInternship(item);
  };

  const closePopup = () => {
    setSelectedJob(null);
    setSelectedInternship(null);
  };

  return (
    <div className="career-container">
      <h2 className="title">Explore The Opportunities</h2>
      <div className="job-cards">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="card"
            onClick={() => openPopup(job, "job")}
          >
            <h3 className="card__title">{job.role}</h3>
            <p className="card__content">{job.info.summary.slice(0, 50)}...</p>
            <div className="card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>


      <h2 className="title title-internship">Explore Internships</h2>
      <div className="job-cards">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="card"
            onClick={() => openPopup(internship, "internship")}
          >
            <h3 className="card__title">{internship.title}</h3>
            <p className="card__content">Learn more about this internship...</p>
            <div className="card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {(selectedJob || selectedInternship) && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            { selectedJob && (
              <>
                <h2>
                  {selectedJob.role} at {selectedJob.company}
                </h2>
                <p>
                  <strong>No. of Openings:</strong> {selectedJob.info.openings}
                </p>
                <p>
                  <strong>Qualification:</strong> {selectedJob.info.qualification}
                </p>
                <p>
                  <strong>Required Experience:</strong> {selectedJob.info.experience}
                </p>
                <h3>Job Summary:</h3>
                <p>{selectedJob.info.summary}</p>
                <h3>Skills Required:</h3>
                <ul className="skills-list">
                  {selectedJob.info.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <p>
                  <strong>Location:</strong> {selectedJob.info.location}
                </p>
                <p>
                  <strong>Reporting to:</strong> {selectedJob.info.reporting}
                </p>

                <button
                  className="apply-btn"
                  onClick={() =>
                    window.location.href = `/apply?type=job&role=${encodeURIComponent(
                      selectedJob.role
                    )}`
                  }
                >
                  Apply Now
                </button>
              </>

            )}
            { selectedInternship && (
              <>
                <h2>Internship in {selectedInternship.title}</h2>
                <p>
                  <strong>Time Period:</strong> {selectedInternship.info.timePeriod}
                </p>
                <p>
                  <strong>Mode:</strong> {selectedInternship.info.mode}
                </p>
                <p>
                  <strong>Stipend:</strong> {selectedInternship.info.stipend}
                </p>
                <h3>What You'll Learn:</h3>
                <ul>
                  {selectedInternship.info.learning.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  className="apply-btn"
                  onClick={() =>
                    (window.location.href = `/apply?type=internship&role=${encodeURIComponent(
                      selectedInternship.title
                    )}`)
                  }
                >
                  Apply Now
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;