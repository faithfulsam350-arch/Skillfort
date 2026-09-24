import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

const asset = (name: string) => `/assets/${name}`;

type Course = {
  image: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  /** Figma frames cards 1 and 4 with a taller, offset image; 2 and 3 are plain cover fits. */
  imageStyle?: CSSProperties;
  /** Bottom gradient colour (cards 3 and 4 use a lighter shade in the design). */
  shade?: string;
};

const courses: Course[] = [
  {
    image: "a5f19.png",
    imageStyle: { height: "140.74%", top: "-9.26%" },
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
    shade: "rgb(0 0 0 / 70%)",
    title: "Introduction to Network Cabling",
    description:
      "Understand the basics of structured cabling systems and network layout planning.",
    duration: "11 hrs",
    price: "5,000",
  },
  {
    image: "e3edd.png",
    imageStyle: { height: "140.74%", top: "-7.16%" },
    shade: "rgb(0 0 0 / 70%)",
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
  small = false,
}: {
  children: React.ReactNode;
  secondary?: boolean;
  small?: boolean;
}) {
  const className = ["button", secondary && "button-secondary", small && "button-sm"]
    .filter(Boolean)
    .join(" ");
  return <button className={className}>{children}</button>;
}

/**
 * The hero is drawn on Figma's 1440px canvas. --k scales that canvas down on
 * narrower screens (821px+); --sk scales just the artwork in the stacked
 * mobile layout.
 */
function useHeroScale<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const width = document.documentElement.clientWidth;
      el.style.setProperty("--k", String(Math.min(1, width / 1440)));
      el.style.setProperty("--sk", String(Math.min(1, (width - 40) / 687)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return ref;
}

function SectionHeading({
  children,
  accent = "right",
  underline,
}: {
  children: React.ReactNode;
  accent?: "right" | "center";
  underline: string;
}) {
  return (
    <h2 className={`section-title section-title-${accent}`}>
      <span>{children}</span>
      <img
        className="section-title-wave"
        src={asset(underline)}
        alt=""
        aria-hidden="true"
      />
    </h2>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Telecommunications");
  const heroRef = useHeroScale<HTMLElement>();

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
        <section className="hero" id="top" ref={heroRef}>
          <div className="hero-canvas">
            <img className="hero-wave" src={asset("cd888.svg")} alt="" aria-hidden="true" />
            <div className="hero-copy">
              <h1>
                Take Courses That Teach What <span>Really Matters</span>
              </h1>
              <p>
                Build job-ready skills at your own pace. Learn online or
                on-site, get certified, and start moving forward.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="hero-stage-wrap">
              <div className="hero-stage">
                <img className="hero-glow" src={asset("5ba97.svg")} alt="" aria-hidden="true" />
                <div className="hero-arc hero-arc-inner" aria-hidden="true">
                  <img src={asset("1479d.svg")} alt="" />
                </div>
                <div className="hero-arc hero-arc-outer" aria-hidden="true">
                  <img src={asset("7dba3.svg")} alt="" />
                </div>
                <div className="hero-circle" aria-hidden="true">
                  <img src={asset("fa1a2.png")} alt="" />
                </div>
                <div className="hero-person">
                  <img
                    src={asset("fa1a2.png")}
                    alt="A Skillfort telecom professional wearing safety equipment"
                  />
                </div>
                <div className="course-count">
                  <strong>20+</strong>
                  <span>Active Courses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <SectionHeading accent="center" underline="c2da0.svg">
            Find the Right Course for You
          </SectionHeading>
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
                {item === "View all" && (
                  <img src={asset("b04aa.svg")} alt="" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div
                  className="course-image"
                  style={course.shade ? ({ "--shade": course.shade } as CSSProperties) : undefined}
                >
                  <img src={asset(course.image)} alt="" style={course.imageStyle} />
                  <div className="course-meta">
                    <span>
                      Certification
                      <span className="icon-cert">
                        <img src={asset("3a8e9.svg")} alt="" aria-hidden="true" />
                      </span>
                    </span>
                    <span>
                      {course.duration}
                      <span className="icon-time">
                        <img src={asset("8fa69.svg")} alt="" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="course-content">
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <div className="course-action">
                    <Button small>View Course</Button>
                    <strong className="course-price">
                      <img src={asset("27bd2.svg")} alt="Naira" />
                      {course.price}
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section steps-section">
          <SectionHeading underline="446ef.svg">How it Works</SectionHeading>
          <div className="steps">
            <img
              className="step-path"
              src={asset("a09ed.svg")}
              alt=""
              aria-hidden="true"
            />
            {steps.map((step) => (
              <article className="step" key={step.title}>
                <div className="step-art">
                  <img src={asset(step.image)} alt="" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <Button secondary>Browse All Courses</Button>
        </section>

        <section className="section why-section" id="about">
          <SectionHeading underline="6e5f0.svg">Why Skillfort</SectionHeading>
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
          <SectionHeading underline="90b43.svg">
            Choose Your Plan
          </SectionHeading>
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
          <SectionHeading accent="center" underline="35dd1.svg">
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
