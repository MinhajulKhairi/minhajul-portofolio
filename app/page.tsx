import Navbar from "@/components/Navbar";
import SectionRail from "@/components/SectionRail";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import {
  CertificateCard,
  ProjectCard,
  type Certificate,
  type Project,
} from "@/components/PortfolioInteractions";

const PROJECTS: Project[] = [
  {
    index: "01",
    kind: "Lead Researcher",
    period: "Okt 2025 — Jan 2026",
    title: "Dashboard ABSA — Campus Service Sentiment Analysis",
    short:
      "An NLP framework built on fine-tuned IndoBERT to classify sentiment across four aspects of campus service.",
    description:
      "An NLP framework built on fine-tuned IndoBERT, using a synthetic-to-real transfer learning strategy to overcome labeled-data scarcity in a low-resource domain, delivered through an interactive analytics dashboard.",
    metrics: [
      { value: "1,000+", label: "synthetic data points" },
      { value: "75.49%", label: "F1-Macro" },
      { value: "IndoBERT", label: "fine-tuned model" },
    ],
    stack: ["IndoBERT", "Streamlit", "Python", "Synthetic Data"],
    highlights: [
      "Built a synthetic-to-real transfer learning pipeline.",
      "Designed aspect-based sentiment classification for campus services.",
      "Delivered analysis results through an interactive dashboard for stakeholders.",
    ],
    image: "/projects/absa.png",
    link: "https://github.com/MinhajulKhairi/absa-mipa-unhas",
  },

  {
    index: "02",
    kind: "AI Trainer",
    period: "Nov 2024",
    title: "Classify — Smart Attendance System",
    short:
      "An automated attendance system powered by computer vision for real-time face recognition.",
    description:
      "Built an automated attendance system using YOLO for real-time face recognition, integrated with a cloud backend and mobile interface.",
    metrics: [
      { value: "0.995", label: "mAP@0.5" },
      { value: "YOLOv8m", label: "detection model" },
      { value: "3,873", label: "face images" },
    ],
    stack: [
      "YOLOv8m",
      "Computer Vision",
      "Roboflow",
      "Python",
    ],
    highlights: [
      "Built an automated attendance system using YOLO for real-time face recognition.",
      "Achieved an mAP@0.5 of 0.995.",
      "Trained on 3,873 face images across six classes.",
      "Applied data augmentation and validation across varying lighting conditions.",
    ],
    image: "/projects/classify.png",
    link: "https://github.com/MinhajulKhairi/Classify-Deep-Learning",
  },

  {
    index: "03",
    kind: "Dataset Curator",
    period: "Des 2024",
    title: "Al-Bayyan — Alignment Between Fatwa and Religious Teachings",
    short:
      "An NLP system for semantic relevance matching across fatwa texts, the Qur'an, and Hadith using IndoBERT and LSTM.",
    description:
      "A preprocessing and semantic-matching pipeline for analyzing linguistic alignment across texts, with tokenization and sequence padding ahead of testing IndoBERT and LSTM models.",
    metrics: [
      { value: "500+", label: "data points" },
      { value: "0.8", label: "similarity threshold" },
      { value: "2", label: "models tested" },
    ],
    stack: [
      "IndoBERT",
      "LSTM",
      "Semantic Matching",
      "Preprocessing",
    ],
    highlights: [
      "Curated and cleaned text datasets across multiple sources.",
      "Applied tokenization and sequence padding for the NLP pipeline.",
      "Tested semantic relevance matching using two model approaches.",
    ],
    image: "/projects/al-bayyan.png",
    link: "https://drive.google.com/file/d/1anwSQBoekUcsxOAB7OPtAQno_aNs1EhT/view?usp=sharing",
  },

  {
    index: "04",
    kind: "Full-stack Developer",
    period: "Jun 2024",
    title: "Car Rental — Rental Management Platform",
    short:
      "A web-based car rental platform automating vehicle search, booking, availability, and payment.",
    description:
      "A car rental platform integrating frontend and backend via API to manage fleet, users, bookings, payments, and vehicle availability.",
    metrics: [
      { value: "2", label: "user roles" },
      { value: "REST API", label: "frontend ↔ backend" },
      { value: "Real-time", label: "availability" },
    ],
    stack: [
      "ReactJS",
      "Flask",
      "REST API",
      "Database",
    ],
    highlights: [
      "Led frontend development using ReactJS.",
      "Built the backend using Python Flask.",
      "Built frontend–backend integration via API.",
      "Delivered registration, login, booking, payment, and admin management workflows.",
    ],
    image: "/projects/car-rental.jpeg",
    link: "https://github.com/MinhajulKhairi/Car-Rental",
  },

  {
    index: "05",
    kind: "Full-stack Developer",
    period: "May 2024",
    title: "EpicBooks — Book Service Application",
    short:
      "A mobile application for searching and viewing detailed book information through REST API integration.",
    description:
      "A mobile application providing book information such as title, author, publisher, and reviews — built with Android Studio using Java and Retrofit.",
    metrics: [
      { value: "Java", label: "application language" },
      { value: "Retrofit", label: "API communication" },
      { value: "Mobile", label: "application platform" },
    ],
    stack: [
      "Android Studio",
      "Java",
      "Retrofit",
      "REST API",
    ],
    highlights: [
      "Developed a mobile application using Android Studio and Java.",
      "Integrated Retrofit for communication with an external API.",
      "Delivered book information including author, publisher, and reviews.",
    ],
    image: "/projects/epicbooks.png",
    link: "https://github.com/MinhajulKhairi/EpicBooks-Project",
  },

  {
    index: "06",
    kind: "Machine Learning Developer",
    period: "2024",
    title: "SweetLife — Diabetes Prediction System",
    short:
      "A web-based diabetes prediction system using Random Forest to classify risk from health data.",
    description:
      "A machine learning-based prediction system using Random Forest for diabetes classification, delivered as a website.",
    metrics: [
      { value: "Random Forest", label: "ML algorithm" },
      { value: "Binary", label: "classification" },
      { value: "Web", label: "deployment interface" },
    ],
    stack: [
      "Python",
      "Random Forest",
      "Machine Learning",
      "Web Application",
    ],
    highlights: [
      "Built a diabetes classification model using Random Forest.",
      "Performed data preprocessing and analysis.",
      "Evaluated model performance using classification metrics.",
      "Integrated the model into a website-based prediction system.",
    ],
    image: "/projects/sweetlife.jpeg",
    link: "https://github.com/MinhajulKhairi/DM-ML24-Projeck",
  },
];

const CERTIFICATIONS: Certificate[] = [
  {
    index: "01",
    type: "Certification",
    title: "The Complete Machine Learning Course: From Zero to Expert",
    org: "Udemy",
    year: "2025",
    description:
      "A machine learning certification strengthening foundations in supervised learning, model evaluation, and the machine learning workflow.",
    link: "https://www.udemy.com/certificate/UC-b82146d1-a793-4bd3-a59b-5ab5e716a6d0/",
  },
  {
    index: "02",
    type: "Publication",
    title: "Published Paper — HealthSense: Journal of Public Health Perspective",
    org: "Universitas Hasanuddin",
    year: "2024",
    description:
      "An academic publication reflecting research experience and the application of data and AI in the public health domain.",
    link: "https://journal.ininnawaparaedu.com/healthsense/article/view/149",
  },
];

const SKILLS = [
  "Python",
  "SQL",
  "NLP",
  "Machine Learning",
  "AI Evaluation",
  "Sentiment Analysis",
  "Data Preprocessing",
  "PostgreSQL",
  "Streamlit",
  "Power BI",
  "Tableau",
  "Google Workspace",
  "Google Colab",
  "GitHub",
  "Notion",
  "Feishu / Lark",
];

const COURSEWORK = [
  "Deep Learning",
  "Machine Learning",
  "Business Intelligence",
  "Big Data",
  "Information Visualization",
  "Software Testing / QA",
  "Software Engineering",
  "OOP",
  "Mobile Programming",
  "Web Programming",
  "Entrepreneurship",
];

const EVENTS = [
  {
    year: "2026",
    title: "Data Series 19.0: Data Engineer, Data Analyst, Data Scientist",
    organizer: "Dibimbing",
    role: "Participant",
    description:
      "Explores the entire data ecosystem and machine learning, emphasizing that technical tools and models are only effective when grounded in clear business problem-solving.",
    link: "https://drive.google.com/file/d/1VYBs_5hy1qjM3KyshnAmHCQpFdQ8pGXJ/view?usp=sharing",
  },
  {
    year: "2024",
    title: "Data Analytics Competition",
    organizer: "FIND IT",
    role: "Team Member",
    description:
      "Participated as a contestant in the Data Analytics Competition at FIND IT! 2024, organized by KMTETI, Faculty of Engineering, Universitas Gadjah Mada.",
    link: "https://drive.google.com/file/d/1gH0a2-KgGPA4qzdu3T8h3Vi9ndyWokOi/view?usp=sharing",
  },
  {
    year: "2024",
    title: "ICT Scientific Paper Competition",
    organizer: "Gemastik XVII",
    role: "Team Member",
    description:
      "Strengthening Digital Democracy: Applying Machine Learning Classification Models to Recognize Public Opinion Misinformation in Politics on the Tiktok Platform.",
    link: "https://drive.google.com/file/d/1A3oMbSeDLHDcEm6wewKSv07Q0ZQLFrlp/view?usp=sharing",
  },
  {
    year: "2023",
    title: "CEO Talk: Memimpin di Era Perubahan",
    organizer: "Universitas Hasanuddin",
    role: "Participant",
    description:
      "Gained insights into adaptive leadership strategies, change management, and organizational resilience to navigate dynamic industry shifts. ",
    link: "https://drive.google.com/file/d/1m8gezUv6UxEpdbk-Ll9iT3YTawNNziQk/view?usp=sharing",
  },
  {
    year: "2022",
    title: "UI/UX Competition",
    organizer: "SwitchFest",
    role: "Team Member",
    description:
      "Concepted and designed the UI/UX for 'Qerja', a mobile job-search application tailored to improve economic opportunities for the lower-middle class. ",
    link: "https://drive.google.com/file/d/1jqfwzoR91CIZneS40wMBDSaqts5xDZ6-/view?usp=sharing",
  },
];


const EDUCATION = [
  {
    level: "01",
    type: "Bachelor’s Degree",
    institution: "Universitas Hasanuddin",
    degree: "Bachelor of Computer (S.Kom.)",
    major: "Information Systems",
    period: "Aug 2022 — May 2026",
    gpa: "3.90 / 4.00",
    courses: [
      "Deep Learning",
      "Machine Learning",
      "Business Intelligence",
      "Big Data",
      "Information Visualization",
      "Software Testing/QA",
      "Object-Oriented Programming",
      "Mobile Programming",
      "Web Programming",
      "Entrepreneurship",
    ],
  },
  {
    level: "02",
    type: "Senior High School",
    institution: "SMA Kartika XX-1 Makassar",
    degree: "High School Diploma",
    major: "Natural Sciences",
    period: "2019 — 2022",
    gpa: "90 / 100",
    courses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#07090d] text-white">
      <Navbar />
      <SectionRail />

      {/* OVERVIEW */}
      <section
        id="overview"
        className="relative flex min-h-screen items-center px-5 pb-16 pt-32 sm:px-8"
      >
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="mb-7 flex items-center gap-3 text-[18px] font-mono font-medium uppercase tracking-[.16em]" style={{color: "#34d399"}}>
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
              Available for full-time opportunities
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-5xl text-balance text-[clamp(3.7rem,10vw,8.7rem)] font-semibold leading-[.88] tracking-[-.06em]">
              Minhajul
              <br />
              <span className="text-white/25">Yusri Khairi.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 text-xl font-mono text-cyan-300 sm:text-2xl">
              <Typewriter
                words={[
                  "AI Evaluator & Data Analyst",
                  "NLP Researcher — ABSA",
                  "Data Pipeline & EDA",
                ]}
              />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-8 font-bold text-white/65 sm:text-xl">
              Build something useful with data.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-cyan-200"
              >
                Explore my work ↘
              </a>

              <a
                href="https://github.com/MinhajulKhairi"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-base text-white/70 transition hover:border-white/30 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/minhajulkhairi/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-base text-white/70 transition hover:border-white/30 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <Eyebrow n="01" label="About" />
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Building at the intersection of{" "}
                <span className="text-white/30">
                  AI, data, and evaluation.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Passionate about turning data into decisions that matter, 
                at the intersection of AI/ML and business insight. Information Systems graduate from Universitas Hasanuddin, 
                with academic research applying a synthetic-to-real transfer learning approach on IndoBERT for aspect-based sentiment analysis, 
                and currently working as an AI Evaluation & Annotation contractor at T-Maxx International, 
                benchmarking LLM outputs against strict SOPs. 
                Now focused on applying that same analytical thinking to data analytics, 
                and looking for a Data Analyst role where I can turn raw data into insights that drive business decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow n="02" label="Work Experience" />

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Experience
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-white/10">
            {[
              {
                role: "AI Evaluation & Annotation (Contractor)",
                org: "T-Maxx International — Beijing, China (Remote)",
                period: "May 2026 — Present",
                tags: [
                  "LLM Benchmarking",
                  "DCG Scoring",
                  "Rubric Design",
                  "SOP Calibration",
                ],
                bullets: [
                  "Constructed standardized objective (0 to 1 scale) and subjective grading rubrics to benchmark LLM capabilities across mathematical reasoning, open-ended, and closed-ended tasks.",
                  "Assessed Text-to-Image (T2I) and Image-to-Image (I2I) outputs utilizing Discounted Cumulative Gain (DCG) scoring and stability tagging for safety compliance, structural integrity, and aesthetic quality.",
                  "Refined evaluation metrics in alignment with SOPs, calibrating error tagging logic and model performance across user intent identification, readability, and content value dimensions.",
                ],
              },
              {
                role: "IT Support Intern",
                org: "PT. Tiran Indonesia — North Konawe, Indonesia",
                period: "Mar 2025 — Apr 2025",
                certificateLink:
                  "https://drive.google.com/file/d/1PrwLCB6zeG1Jon9LybuEJ71dUSJ-Gpkc/view?usp=sharing",
                tags: [
                  "Technical Reporting",
                  "Troubleshooting",
                  "Cross-functional",
                ],
                bullets: [
                  "Generated daily technical reports to document system performance, network status, and resolved incidents for management review.",
                  "Collaborated with cross-functional teams to troubleshoot hardware/software issues, ensuring operational stability and data integrity.",
                ],
              },
            ].map((j, i) => (
              <Reveal key={j.role} delay={i * 100}>
                <article className="group grid gap-7 border-b border-white/10 py-10 lg:grid-cols-[210px_1fr] lg:gap-14">
                  <div className="font-mono text-base leading-7 text-white/55">
                    <span className="text-cyan-300">0{i + 1}</span>

                    <div className="mt-3">{j.period}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white transition group-hover:text-cyan-200 sm:text-3xl">
                      {j.role}
                    </h3>

                    <p className="mt-2 text-lg leading-7 text-white/55">
                      {j.org}
                    </p>

                    <ul className="mt-6 max-w-3xl space-y-4">
                      {j.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-lg leading-8 text-white/70"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {j.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/55"
                        >
                          {t}
                        </span>
                      ))}
                      {"certificateLink" in j && j.certificateLink && (
                        <a
                          href={j.certificateLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-300/[0.04] px-5 py-2.5 text-sm font-medium text-emerald-300 transition duration-300 hover:border-emerald-300/50 hover:bg-emerald-300/10"
                        >
                          View Internship Certificate
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/10 bg-white/[.018] px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow n="03" label="Skills" />

            <div className="mt-5 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                A toolkit for
                <br />
                <span className="text-white/25">data-driven work.</span>
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {SKILLS.map((s, i) => (
                  <div
                    key={s}
                    className="rounded-xl border border-white/10 bg-[#0b0e13] p-5 text-base text-white/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white sm:text-lg"
                  >
                    <span className="mr-2 font-mono text-[10px] text-cyan-300/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative overflow-hidden px-5 py-32 sm:px-8"
        >
        <div className="mx-auto max-w-7xl">

            <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div>
                <Eyebrow n="04" label="Projects" />

                <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
                    A closer look
                    <br />
                    <span className="text-white/25">
                    at the work.
                    </span>
                </h2>
                </div>

                <div className="max-w-md">
                <p className="text-lg leading-8 text-white/60">
                    A selection of work across NLP, AI evaluation, data
                    preprocessing, and analytical systems.
                </p>
                </div>
            </div>
            </Reveal>

            {/* PROJECT LIST */}
            <div className="mt-16">
            {PROJECTS.map((project, index) => (
                <Reveal
                key={project.title}
                delay={index * 120}
                >
                <ProjectCard
                    project={project}
                    reverse={index % 2 === 1}
                />
                </Reveal>
            ))}
            </div>

            {/* PROJECT FOOTER */}
            <Reveal delay={250}>
            <div className="mt-10 border-t border-white/10 pt-8">
                <div className="flex flex-col justify-between gap-4 text-sm font-mono uppercase tracking-[0.15em] text-white/30 sm:flex-row">
                <span>Selected work · 2024 — 2026</span>

                <span>
                    Research · NLP · Data · AI Evaluation
                </span>
                </div>
            </div>
            </Reveal>

        </div>
      </section>

      {/* CERTIFICATION */}
      <section
        id="certification"
        className="border-t border-white/10 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow n="05" label="Certification & Publication" />

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Proof of learning.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <CertificateCard certificate={c} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* EVENTS */}
      <section
        id="events"
        className="border-t border-white/10 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow n="06" label="Events & Competitions" />

            <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Challenges that
                <br />
                <span className="text-white/25">
                  shaped how I build.
                </span>
              </h2>

              <p className="max-w-md text-lg leading-8 text-white/60">
                Competitions, hackathons, and events that shaped my learning process and sharpened my technical and problem-solving skills.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 border-t border-white/10">
            {EVENTS.map((event, index) => (
              <Reveal key={`${event.title}-${index}`} delay={index * 100}>
                <article className="group grid gap-7 border-b border-white/10 py-10 lg:grid-cols-[150px_1fr_auto] lg:items-start lg:gap-12">
                  {/* YEAR */}
                  <div className="font-mono text-base text-white/45">
                    <span className="text-cyan-300">
                      {event.year}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="text-sm font-mono uppercase tracking-[.18em] text-white/35">
                      {event.role}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold text-white transition group-hover:text-cyan-200 sm:text-3xl">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-lg text-white/50">
                      {event.organizer}
                    </p>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">
                      {event.description}
                    </p>

                    <a
                      href={event.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-sm font-medium text-white/60 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-200"
                    >
                      Click to view
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>

                  {/* ARROW */}
                  <div className="hidden pt-1 lg:block">
                    <span className="text-3xl text-white/15 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300/60">
                      ↗
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-t border-white/10 bg-white/[.018] px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow n="07" label="Education" />

            <div className="mt-5">
              <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Academic foundation
                <br />
                <span className="text-white/25">
                  behind the work.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {EDUCATION.map((education, index) => (
              <Reveal key={education.level} delay={index * 120}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e13] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/25 sm:p-9">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/[0.035] blur-3xl transition duration-500 group-hover:bg-cyan-300/[0.07]" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-cyan-300">
                        {education.level}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-white/40">
                        {education.type}
                      </span>
                    </div>

                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">
                      {education.degree}
                    </h3>

                    <p className="mt-3 text-xl text-white/70">
                      {education.institution}
                    </p>

                    <div className="mt-2 text-lg text-cyan-300/80">
                      {education.major}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-5">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/30">
                          Period
                        </div>

                        <div className="mt-2 text-base text-white/65">
                          {education.period}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/30">
                          GPA
                        </div>

                        <div className="mt-2 text-base font-semibold text-white">
                          {education.gpa}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <div className="text-xs font-mono uppercase tracking-widest text-white/30">
                        Relevant Courses
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {education.courses.map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/50 transition group-hover:border-white/15 group-hover:text-white/65"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="px-5 pb-10 pt-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow n="08" label="Contact" />

            <h2 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-.04em] sm:text-7xl">
              Get in touch
              <br />
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
              Open to opportunities in Data Science, Analytics, and AI Evaluation.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
              <a
                href="mailto:minhajulkhairi@gmail.com"
                className="group py-6 sm:px-7"
              >
                <span className="text-sm font-mono uppercase tracking-widest text-white/40">
                  Email
                </span>

                <div className="mt-3 text-lg text-white/70 group-hover:text-cyan-200">
                  minhajulkhairi@gmail.com ↗
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/minhajulkhairi/"
                target="_blank"
                rel="noreferrer"
                className="group py-6 sm:px-7"
              >
                <span className="text-sm font-mono uppercase tracking-widest text-white/40">
                  LinkedIn
                </span>

                <div className="mt-3 text-lg text-white/70 group-hover:text-cyan-200">
                  /in/minhajulkhairi ↗
                </div>
              </a>

              <a
                href="https://github.com/MinhajulKhairi"
                target="_blank"
                rel="noreferrer"
                className="group py-6 sm:px-7"
              >
                <span className="text-sm font-mono uppercase tracking-widest text-white/40">
                  GitHub
                </span>

                <div className="mt-3 text-lg text-white/70 group-hover:text-cyan-200">
                  /MinhajulKhairi ↗
                </div>
              </a>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col justify-between gap-3 text-xs font-mono uppercase tracking-widest text-white/25 sm:flex-row">
            <span>Jakarta, Indonesia · (+62) 822 9696 5023</span>

            <span>
              © {new Date().getFullYear()} Minhajul Yusri Khairi · Next.js
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Eyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-base font-mono uppercase tracking-[.18em] text-white/50 sm:text-lg">
      <span className="text-cyan-300">{n}</span>

      <span className="h-px w-12 bg-white/15" />

      <span>{label}</span>
    </div>
  );
}