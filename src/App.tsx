import { useState } from "react";

const asset = (name: string) => `/assets/${name}`;

const courses = [
  {
    image: "a5f19.png",
    title: "Fiber Optic Cable Installation",
    description:
      "Learn how to handle, splice, and install fiber optic cables safely and professionally.",
    duration: "10 hrs",
    price: "5,000",
  },
  {
    image: "dc3c7.png",
    title: "Telecom Site Safety Essentials",
    description:
      "Master the safety protocols required for field engineers working on telecom sites.",
    duration: "3 hrs",
    price: "3,000",
  },
  {
    image: "c01ec.png",
    title: "Introduction to Network Cabling",
    description:
      "Understand the basics of structured cabling systems and network layout planning.",
    duration: "11 hrs",
    price: "5,000",
  },
  {
    image: "e3edd.png",
    title: "Wireless Communication",
    description:
      "Explore how wireless technologies (Wi-Fi, LTE) work in modern telecom environments.",
    duration: "15 hrs",
    price: "8,000",
  },
];

const steps = [
  {
    image: "802e9.png",
    title: "Choose a Course",
    description: "Browse courses and pick what fits your goals.",
  },
  {
    image: "65ca5.svg",
    title: "Learn at Your Pace",
    description:
      "Watch videos, attend live sessions, and complete lessons anywhere, anytime.",
  },
  {
    image: "4c021.svg",
    title: "Get Certified",
    description:
      "Take quizzes and earn verifiable certificates you can use to grow your career.",
  },
];

const plans = [
  {
    name: "Per course",
    price: "Varies by course",
    features: [
      "One-time payment",
      "No subscription required",
      "Certification on completion",
      "Lifetime access to that course",
    ],
    action: "View Courses",
  },
  {
    name: "Monthly Plan",
    price: "15,000",
    features: [
      "Access to all courses",
      "New courses added monthly",
      "Certification for every course",
      "Cancel anytime",
    ],
    action: "Get Started",
    featured: true,
  },
  {
    name: "Annual Plan",
    price: "60,000",
    features: [
      "Unlimited access to all courses",
      "Includes all certifications",
      "Save 33% compared to monthly plan",
    ],
    action: "Get Started",
  },
];

const reviews = [
  {
    quote:
      "We’ve worked with the team for over 2 years and their service delivery has been consistent and dependable.",
    name: "Chinedu Okonkwo",
    role: "Field Maintenance Engineer",
  },
  {
    quote:
      "SkillFort helped me switch from retail to telecom in just 4 months. The courses are practical, and now I have a real career.",
    name: "James Ajibade",
    role: "Network Technician",
  },
  {
    quote:
      "Learning at my own pace while raising my kids seemed impossible until I found SkillFort. Now I work remotely and earn better.",
    name: "Chioma Adeleke",
    role: "Digital Marketing Specialist",
  },
];

function Button({
  children,
  secondary = false,
}: {
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <button className={secondary ? "button button-secondary" : "button"}>
      {children}
    </button>
  );
}

function SectionHeading({
  children,
  accent = "right",
}: {
  children: React.ReactNode;
  accent?: "right" | "center";
}) {
  return (
    <h2 className={`section-title section-title-${accent}`}>
      <span>{children}</span>
    </h2>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Telecommunications");

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="Skillfort home">
          <img src={asset("ca949.png")} alt="Skillfort" />
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#top">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <Button secondary>Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <img className="hero-wave" src={asset("cd888.svg")} alt="" />
          <div className="hero-copy">
            <h1>Take Courses That Teach What Really Matters</h1>
            <p>
              Build job-ready skills at your own pace. Learn online or on-site,
              get certified, and start moving forward.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="hero-visual">
            <img
              className="hero-ring hero-ring-one"
              src={asset("1479d.svg")}
              alt=""
            />
            <img
              className="hero-ring hero-ring-two"
              src={asset("7dba3.svg")}
              alt=""
            />
            <img
              className="hero-person"
              src={asset("fa1a2.png")}
              alt="A Skillfort telecom professional wearing safety equipment"
            />
            <div className="course-count">
              <strong>20+</strong>
              <span>Active Courses</span>
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <SectionHeading>Find the Right Course for You</SectionHeading>
          <div className="category-list" aria-label="Course categories">
            {[
              "Telecommunications",
              "Finance & Business",
              "Soft Skills",
              "Digital Skills",
              "Technical Skills",
              "View all",
            ].map((item) => (
              <button
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div className="course-image">
                  <img src={asset(course.image)} alt="" />
                  <div className="course-meta">
                    <span>Certification</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="course-content">
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <div className="course-action">
                    <Button>View Course</Button>
                    <strong>
                      <span>₦</span>
                      {course.price}
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section steps-section">
          <SectionHeading accent="center">How it Works</SectionHeading>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={step.title}>
                <div className="step-art">
                  <img src={asset(step.image)} alt="" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 && (
                  <span className="step-connector" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
          <Button secondary>Browse All Courses</Button>
        </section>

        <section className="section why-section" id="about">
          <SectionHeading>Why Skillfort</SectionHeading>
          <div className="why-layout">
            <div className="why-visual">
              <img className="why-ring" src={asset("fbbc4.svg")} alt="" />
              <img
                className="why-photo"
                src={asset("36f43.png")}
                alt="Two Skillfort professionals in safety equipment"
              />
              <img
                className="why-play"
                src={asset("d28ec.svg")}
                alt="Play introduction"
              />
            </div>
            <div className="why-content">
              <p className="why-description">
                Skillfort is a modern learning platform built to help
                individuals gain practical, in-demand skills across a wide
                range of industries. Our flexible courses are designed to
                support both beginners and professionals looking to grow,
                upskill, or switch careers. Learn at your own pace, earn
                certifications that matter, and build confidence for
                what’s next.
              </p>
              <div className="benefit-grid">
                {[
                  ["a7811.svg", "Certificate Of Completion"],
                  ["d76e2.svg", "Verifiable Credentials"],
                  ["ecd8e.svg", "Industry Relevant"],
                ].map(([image, label]) => (
                  <div className="benefit" key={label}>
                    <div>
                      <img src={asset(image)} alt="" />
                    </div>
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <SectionHeading accent="center">Choose Your Plan</SectionHeading>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article
                className={plan.featured ? "plan plan-featured" : "plan"}
                key={plan.name}
              >
                <div className="plan-head">
                  <h3>{plan.name}</h3>
                  <strong>
                    {plan.price !== "Varies by course" && <span>₦</span>}
                    {plan.price}
                  </strong>
                  {plan.featured && <small>Billed monthly</small>}
                </div>
                <div className="plan-body">
                  <h4>What&apos;s included</h4>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <img src={asset("df480.svg")} alt="" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button>{plan.action}</Button>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <SectionHeading accent="center">
            What Our Learners Are Saying
          </SectionHeading>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review" key={review.name}>
                <img src={asset("a19ba.svg")} alt="" />
                <p>{review.quote}</p>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div>
            <h2>Ready to Learn Something That Matters?</h2>
            <p>
              Start building practical skills, earn certificates, and take real
              steps toward your goals, all in one place.
            </p>
            <Button>Get Started</Button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-about">
            <img src={asset("ca949.png")} alt="Skillfort" />
            <p>
              Practical online courses to help you learn, grow, and get
              certified.
            </p>
            <strong>Socials</strong>
            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="X">
                <img className="social-bg" src={asset("83ab7.svg")} alt="" />
                <img className="social-x" src={asset("2a286.svg")} alt="" />
              </a>
              <a href="#" aria-label="Facebook">
                <img className="social-bg" src={asset("83ab7.svg")} alt="" />
                <img className="social-facebook" src={asset("bef9d.svg")} alt="" />
              </a>
              <a href="#" aria-label="Instagram">
                <img className="social-bg" src={asset("83ab7.svg")} alt="" />
                <img className="social-instagram" src={asset("a684f.svg")} alt="" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={asset("a327d.svg")} alt="" />
              </a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#top">Home</a>
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <h3>Programs</h3>
            <a href="#courses">Telecommunications</a>
            <a href="#courses">Finance &amp; Business</a>
            <a href="#courses">Soft skills</a>
            <a href="#courses">Digital skills</a>
            <a href="#courses">Technical skills</a>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <p>
              Address: Plot P2, Remi Olowude Crescent, off Remi Olowude street,
              Marwa inside, Oniru-Lekki, Lagos
            </p>
            <a href="tel:+2347015999313">Tel: +234 701 5999 313</a>
            <a href="mailto:hr.skillfort@gmail.com">
              Mail: hr.skillfort@gmail.com
            </a>
          </div>
        </div>
        <p className="copyright">Copyright © 2025 All rights reserved</p>
      </footer>
    </div>
  );
}
