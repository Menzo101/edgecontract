import "./amosportfolio.css";
import edgeLogo from "./assets/edgelogo.jpeg";
import heroImage from "./assets/edgeconstructionimage.jpg";

const services = [
    {
        number: "01",
        title: "Property Development, Consultancy & Contracting Services",
        description: "Building and designing of housing with emphasis on residential, public and institutional buildings.",
        items: ["Preparation of project feasibility studies and appraisal"],
    },
    {
        number: "02",
        title: "Mechanical Engineering Consultancy & Contracting Services",
        description: "Mechanical engineering consultancy and contracting services.",
        items: ["Design and construction of storage tanks", "Maintenance and rehabilitation of plants and equipment", "Design, supply and installation of spark arrestors"],
    },
    {
        number: "03",
        title: "Electrical Engineering Consultancy & Contracting Services",
        description: "Electrical engineering consultancy and contracting services.",
        items: ["Design, supply and installation of electrical distribution panels", "Design, supply and installation of control panels", "Supply and installation of change-over switches, transformers and feeder pillars", "Cable supply and installation", "Design, supply and installation of fire and gas detection systems"],
    },
    {
        number: "04",
        title: "Civil Engineering Consultancy & Contracting Services",
        description: "Civil engineering consultancy and contracting services.",
        items: ["Design and construction of buildings", "Design and construction of highways and roads", "Building services", "Construction management services"],
    },
    {
        number: "05",
        title: "Procurement Services",
        description: "Supply and specification of interior decoration components and office furniture.",
        items: ["Supply of carpets, partitions and office landscaping", "Design and specification of office furniture"],
    },
    {
        number: "06",
        title: "Project Management Services (PMS)",
        description: "Project and construction management services.",
        items: ["Project controls (scheduling and costs)", "Manage interface between client and contractor, subcontractors and suppliers", "Procurement follow-up and expediting", "Provision of key professionals and other personnel", "Assist in bid process and award of contract"],
    },
    {
        number: "07",
        title: "Quality Assurance & Control Services",
        description: "Quality assurance and control services.",
        items: ["Third-party certification", "Document control and personnel training", "Inspection and control of non-conformity", "Start-up and commissioning"],
    },
];

const projects = [
    {
        number: "01", name: "C & I Leasing", description: "Office Headquarters.", location: "Lekki, Lagos",
        service: "Architecture", status: "Completed", period: "2004–2005",
    },
    {
        number: "02", name: "Greenville Properties Limited", description: "Low Income Housing Estate.", location: "Port Harcourt",
        service: "Arch./Engr. Design", status: "Under Construction", period: "To date",
    },
    {
        number: "03", name: "Lekki Sands Hotel Resort", description: "Arch. Design & Interior.", location: "Alpha Beach, Lagos",
        service: "Arch./Construction", status: "Under Construction", period: "To date",
    },
    {
        number: "04", name: "Reals Pharmaceuticals Ltd.", description: "Office Headquarters / Warehouse.", location: "Agidingbi, Ikeja",
        service: "Architecture", status: "Partial Completion", period: "2002–date",
    },
    {
        number: "05", name: "Christ the Redeemer School", description: "Design / Construction of Primary School.", location: "Sagamu, Ogun State",
        service: "Design / Construction", status: "Under Construction", period: "2006",
    },
    {
        number: "06", name: "Coomtech Technical College", description: "Technical and Vocational College.", location: "Okuku, Osun State",
        service: "Design / Project Management", status: "Under Construction", period: "2008",
    },
];

const leadership = [
    {
        name: "Oladipo Amos",
        role: "Executive Director · Architecture",
        qualifications: "M.Sc., B.Sc. (Arch), ABU",
        experience: "25+ years",
        summary: "M.Sc graduate of Architecture from the Ahmadu Bello University, Zaria. Has overseen major projects from inception to completion as an architect, Project Manager and Executive Director.",
        selectedWork: ["Housing design", "Interior remodeling", "Project management"],
    },
    {
        name: "Okebukunola A. A. (Abayomi)",
        role: "Executive Director · Civil Engineering",
        qualifications: "MNSE, M.Sc., B.Sc. (Hons) Civil Engineering (Unilag)",
        experience: "25+ years",
        summary: "M.Sc graduate of Civil Engineering from the University of Lagos. Heads the Civil Engineering Department and is a fully registered member of the Nigeria Society of Engineers (COREN).",
        selectedWork: ["Concrete design", "Structural steel design", "Civil engineering project management"],
    },
    {
        name: "Ajibola Joseph Bisi",
        role: "Project Manager · Consultant Quantity Surveyor",
        qualifications: "Graduate, Ahmadu Bello University · ANIQS",
        experience: "15+ years",
        summary: "Project Manager and Consultant Quantity Surveyor. Spent 10 years with G. Cappa Plc. as Chief Planning Officer / Project Manager; Member of the Nigerian Institute of Quantity Surveyors (ANIQS).",
        selectedWork: ["Chevron Texaco Office Complex, Warri", "Chevron Office Complex, Escravos", "Management Houses, Ogunu Warri and Eket", "Recreational and Hospital Centre"],
    },
    {
        name: "Rotimi Ikugbayigbe",
        role: "Executive Director · Electrical Engineering",
        qualifications: "MNSE, B.Eng. (Hons) Electrical Engineering (Unilorin)",
        experience: "17+ years",
        summary: "B.Eng. graduate in Electrical Engineering from the University of Ilorin. Corporate member of the Nigeria Society of Engineers and registered with COREN (Reg. 5163).",
        selectedWork: ["Low, medium and high voltage systems", "Fire detection, telephone and data systems", "Rural electrification", "Power generation design and installation"],
    },
    {
        name: "Segun Balogun",
        role: "Electrical Engineering · Building Services",
        qualifications: "HND (Hons) · PGD Building Services Engineering",
        experience: "7+ years",
        summary: "HND graduate in Electrical Engineering from the Federal Polytechnic, Ado-Ekiti, with a postgraduate diploma in Building Services Engineering from the Federal University of Technology, Akure.",
        selectedWork: ["Silverbird Galleria, Victoria Island, Lagos", "Church projects at Mbanusi and Ogbor Hill, Abia State", "Port Harcourt Stake Center II & III"],
    },
    {
        name: "Rasaq Shittu",
        role: "Project Director · Civil Construction",
        qualifications: "HND (Hons) Civil Engineering, Yaba College of Technology",
        experience: "15+ years",
        summary: "Project Director with experience at Inaolaji Builders Ltd., Honeywell Enterprises Ltd. and Vita Construction Ltd., where he advanced from Project Engineer to Project Manager.",
        selectedWork: ["Concrete works", "Project engineering and construction management", "Civil Engineering HND with distinction"],
    },
    {
        name: "Sunday Nestor Atsu",
        role: "Site Foreman",
        qualifications: "Lycee Technique, Lome, Togo",
        experience: "10 years",
        summary: "Foreman with experience managing company sites from inception to completion with minimal supervision. Trained at Lycee Technique in Lome, Togo.",
        selectedWork: ["Site supervision", "Managing works from inception to completion", "Site delivery with minimal supervision"],
    },
];

const projectReferences = [
    {
        client: "C & I Leasing — Headquarters Building",
        location: "Lekki Phase 1, Eti-Osa LGA, Lagos",
        contact: "Mr. Emeka Ndu, Managing Director",
        phone: "08034030466",
        sector: "Finance, industrial and equipment leasing",
        scope: "Architectural design consulting",
        duration: "1 year",
    },
    {
        client: "Reals Pharmaceuticals — All Seasons Plaza",
        location: "Agidingbi, Ikeja, Lagos",
        contact: "Mr. Ade Popoola, Managing Director",
        phone: "08022234151",
        sector: "Manufacturing and pharmaceuticals",
        scope: "Architectural design and project management",
        duration: "2002–2004",
    },
    {
        client: "Lone Star Leisure Resort Hotels Limited",
        location: "Victoria Garden City, Lekki Peninsula, Lagos",
        contact: "Mr. Taiwo Alabi, Managing Director / CEO",
        phone: "",
        sector: "Hotel services",
        scope: "Building construction",
        duration: "2007–2011",
    },
];

const companyRoles = [
    ["Director", "Leads client relations and multidisciplinary teams."],
    ["Project Manager", "Coordinates project delivery and specialist support."],
    ["Senior Architect / Engineer / Quantity Surveyor", "Leads design teams and monitors quality."],
    ["Graduate Architect / Engineer / Quantity Surveyor", "Supports design, engineering and cost checks."],
    ["Technician / AutoCAD Operator", "Prepares technical drawings and supports design."],
    ["AutoCAD Operator", "Produces drawings from sketches and specifications."],
    ["Drafting Assistant / Clerk", "Manages drawing records, filing and reproduction."],
    ["Secretary", "Provides typing and general office support."],
];

const organizationRoles = [
    "Managing Director",
    "General Managers (Soft Construction, Construction, Finance)",
    "Architects and graduate architects",
    "Project Manager and Chief Estimator",
    "AutoCAD technicians and supervisors",
    "Accountant, graduate quantity surveyor, accounts clerk",
    "Technician, secretary, typist, office assistant",
];

const AmosPortfolio = () => {
    return (
        <div className="portfolio" id="top">
            <header className="site-header">
                <a className="brand" href="#top" aria-label="EDGE Contracting home">
                    <img className="brand-logo" src={edgeLogo} alt="" />
                    <span className="brand-copy">
                        <strong>CONTRACTING</strong>
                        <span>LIMITED</span>
                    </span>
                </a>

                <nav className="main-nav" aria-label="Main navigation">
                    <a href="#about">Introduction</a>
                    <a href="#services">Our Services</a>
                    <a href="#projects">Our Clients</a>
                    <a href="#team">Technical Executive Personnel</a>
                </nav>

                <a className="header-contact" href="#contact">
                    Contact us <span aria-hidden="true">↗</span>
                </a>
            </header>

            <main>
                <section className="hero hero-banner" aria-labelledby="hero-title">
                    <img className="hero-background" src={heroImage} alt="" />
                    <div className="hero-banner-content">
                        <h1 id="hero-title">EDGE Contracting Limited</h1>
                    </div>
                </section>

                <section className="intro-section" id="about" aria-labelledby="intro-title">
                    <div className="section-shell intro-grid">
                        <div className="section-kicker">
                            <span className="eyebrow">1.0 / INTRODUCTION</span>
                            <span className="vertical-rule" />
                        </div>
                        <div className="intro-content">
                            <h2 id="intro-title">Introduction / Background Information</h2>
                            <div className="intro-detail">
                                <p>
                                    Edge Contracting Ltd. was incorporated in January 2006, to provide
                                    first class services in construction, architecture, engineering, cost
                                    and quantity surveying and interior decoration services. The company
                                    is a fully owned Nigerian Company.
                                </p>
                                <p>
                                    Edge Contracting Ltd. is a fully incorporated multi-disciplinary consortium
                                    with vast interest in building construction, interior remodeling, engineering
                                    and project / cost management. The company is composed of experienced
                                    architects, engineers and quantity surveyors in diverse areas of specialization.
                                </p>
                                <a className="text-link text-link-dark" href="#team">Our Technical Executive Personnel <span aria-hidden="true">↗</span></a>
                            </div>
                        </div>
                        <div className="intro-stat">
                            <strong>2006</strong>
                            <span>Date of incorporation<br />January 2006</span>
                        </div>
                    </div>
                </section>

                <section className="services-section section-shell" id="services" aria-labelledby="services-title">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow"><span /> 7.0 / OUR SERVICES</p>
                            <h2 id="services-title">Our Services</h2>
                        </div>
                        <p className="section-summary">
                            Our broad range of professional services includes Architecture; Design &amp;
                            Interior Planning &amp; Furniture; Construction; Building and Road Construction;
                            Engineering; Civil, Mechanical and Electrical; Project Management; Cost Appraisals
                            and Quality Control.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <article className="service-card" key={service.number}>
                                <span className="service-number">{service.number}</span>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-items">
                                    {service.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                                <span className="service-arrow" aria-hidden="true">↗</span>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="projects-section" id="projects" aria-labelledby="projects-title">
                    <div className="section-shell">
                        <div className="section-heading projects-heading">
                            <div>
                                <p className="eyebrow"><span /> 2.0 / OUR CLIENTS</p>
                                <h2 id="projects-title">Our Clients cut across Public and Private Sector.</h2>
                            </div>
                            <p className="section-summary">
                                Below are a selected few and their details.
                            </p>
                        </div>
                        <div className="project-gallery">
                            {projects.map((project) => (
                                <article className="project-card" key={project.number}>
                                    <div className={`project-art project-art-${project.number}`} aria-hidden="true">
                                        <span className="project-art-label">EDGE CONTRACTING LIMITED</span>
                                        <span className="project-art-number">{project.number}</span>
                                        <span className="project-art-frame project-art-frame-back" />
                                        <span className="project-art-frame project-art-frame-front" />
                                        <span className="project-art-ground" />
                                    </div>
                                    <div className="project-info">
                                        <p className="project-type">{project.service}</p>
                                        <h3>{project.name}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <dl className="project-facts">
                                            <div><dt>Location</dt><dd>{project.location}</dd></div>
                                            <div><dt>Remarks</dt><dd>{project.status}</dd></div>
                                            <div><dt>Date</dt><dd>{project.period}</dd></div>
                                        </dl>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="credentials-section section-shell" aria-labelledby="credentials-title">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow"><span /> 3.0 / MANAGEMENT &amp; CORPORATE SYSTEM</p>
                            <h2 id="credentials-title">Our Management / Corporate System</h2>
                        </div>
                        <p className="section-summary">
                            Architecture, engineering, construction, and project and cost management.
                        </p>
                    </div>
                    <div className="credentials-grid">
                        <article className="credential-panel">
                            <span className="credential-index">01</span>
                            <h3>Work Schedule of Various Company Personnel</h3>
                            <ul className="role-list">
                                {companyRoles.map(([role, description]) => (
                                    <li key={role}><strong>{role}</strong><span>{description}</span></li>
                                ))}
                            </ul>
                        </article>
                        <article className="credential-panel">
                            <span className="credential-index">02</span>
                            <h3>Our Organizational Structure</h3>
                            <ul className="organization-list">
                                {organizationRoles.map((role) => <li key={role}>{role}</li>)}
                            </ul>
                            <p className="quality-summary"><strong>QA-QC:</strong> ISO 9001-based quality checks. The profile does not confirm current certification.</p>
                        </article>
                        <article className="credential-panel partnership-panel">
                            <span className="credential-index">03</span>
                            <h3>Technical Partnership / Alliance</h3>
                            <p className="credential-intro">Strategic alliance for specialized personnel and floor systems.</p>
                            <div className="partner-details">
                                <strong>Interface South Africa</strong>
                                <span>P.O. Box 6534, Henley on Klip 1962, South Africa</span>
                                <span>Tel. +27 16 366 1033 · Fax +27 16 366 0622</span>
                                <span>Contact Person: Lesley Firmuc</span>
                                <a href="mailto:lesley.fidrmuc@eu.interfaceinc.com">lesley.fidrmuc@eu.interfaceinc.com</a>
                                <a href="https://www.interface.com/" target="_blank" rel="noreferrer">interface.com ↗</a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="team-section" id="team" aria-labelledby="team-title">
                    <div className="section-shell">
                        <div className="section-heading">
                            <div>
                                <p className="eyebrow"><span /> 8.0 / OUR TECHNICAL EXECUTIVE PERSONNEL</p>
                                <h2 id="team-title">Our Technical Executive Personnel</h2>
                            </div>
                            <p className="section-summary">
                                The company profile introduces the architects, engineers, quantity
                                surveyors and project personnel who oversee projects from inception to completion.
                            </p>
                        </div>
                        <div className="leadership-grid">
                            {leadership.map((person, index) => (
                                <article className="leader-card" key={person.name}>
                                    <div className="leader-card-top">
                                        <span className="leader-avatar" aria-hidden="true">{person.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}</span>
                                        <span className="leader-number">{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <p className="leader-role">{person.role}</p>
                                    <h3>{person.name}</h3>
                                    <p className="leader-qualifications">{person.qualifications}</p>
                                    <p className="leader-summary">{person.summary}</p>
                                    <div className="leader-experience">
                                        <span className="leader-experience-number">{person.experience}</span>
                                        <span>Experience</span>
                                    </div>
                                    <div className="leader-work">
                                        <h4>Selected experience</h4>
                                        <ul>
                                            {person.selectedWork.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="references-section section-shell" aria-labelledby="references-title">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow"><span /> CONTRACT REFERENCES</p>
                            <h2 id="references-title">Contracts Executed in Recent Past</h2>
                        </div>
                        <p className="section-summary">
                            We are also pleased to provide three references of contracts executed in recent past.
                        </p>
                    </div>
                    <div className="reference-grid">
                        {projectReferences.map((reference, index) => (
                            <article className="reference-card" key={reference.client}>
                                <span className="reference-number">0{index + 1} / CONTRACT REFERENCE</span>
                                <h3>{reference.client}</h3>
                                <p className="reference-location">{reference.location}</p>
                                <dl>
                                    <div><dt>Contact</dt><dd>{reference.contact}</dd></div>
                                    {reference.phone && <div><dt>Telephone</dt><dd><a href={`tel:${reference.phone}`}>{reference.phone}</a></dd></div>}
                                    <div><dt>Market</dt><dd>{reference.sector}</dd></div>
                                    <div><dt>Scope</dt><dd>{reference.scope}</dd></div>
                                    <div><dt>Duration / period</dt><dd>{reference.duration}</dd></div>
                                </dl>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="company-details-section section-shell" aria-label="Company particulars">
                    <p className="eyebrow">COMPANY PARTICULARS</p>
                    <div className="company-facts">
                        <div><span>Name of Company</span><strong>Edge Contracting Ltd.</strong></div>
                        <div><span>Ownership</span><strong>Fully owned Nigerian Company</strong></div>
                        <div><span>Date of incorporation</span><strong>January 2006</strong></div>
                        <div><span>Bankers</span><strong>Access Bank Plc., Awolowo Road, Ikoyi, Lagos · Guaranty Trust Bank Plc., Catholic Mission Street, Lagos Island</strong></div>
                        <div><span>E-mail Address</span><strong><a href="mailto:info@edgecontract.org">info@edgecontract.org</a></strong></div>
                        <div><span>Contact Names</span><strong>Oladipo Amos · 08023039133 · Hakeem O. Smith · 08033019606</strong></div>
                    </div>
                    <p className="company-facts-note">Company particulars are as stated in the company profile.</p>
                </section>

                <section className="approach-section section-shell" aria-labelledby="approach-title">
                    <div className="approach-label">
                        <p className="eyebrow">9.0 / SUMMARY &amp; CONCLUSION</p>
                        <span>Our operational objective</span>
                    </div>
                    <h2 id="approach-title">Quality services<br />at very competitive terms.</h2>
                    <div className="approach-copy">
                        <p>
                            Edge Contracting renders a comprehensive support service to the banking
                            and financial sectors, and the upstream and downstream sectors of the Oil
                            Industry. We guarantee competitive pricing, short lead times and excellent
                            post-contract services.
                        </p>
                        <a className="text-link text-link-dark" href="#contact">Contact Names <span aria-hidden="true">↗</span></a>
                    </div>
                </section>

                <section className="contact-section" id="contact" aria-labelledby="contact-title">
                    <div className="section-shell">
                        <div className="contact-content">
                            <div>
                                <p className="eyebrow"><span /> EDGE CONTRACTING LIMITED</p>
                                <h2 id="contact-title">Contact Details</h2>
                            </div>
                            <div className="contact-action">
                                <p>Name of Company: Edge Contracting Ltd.<br />E-mail Address: info@edgecontract.org</p>
                                <a className="button button-light" href="mailto:edgecontract@yahoo.co.uk?subject=Project%20or%20tender%20enquiry">
                                    E-mail Address <span aria-hidden="true">↗</span>
                                </a>
                                <a className="contact-email" href="mailto:info@edgecontract.org">info@edgecontract.org</a>
                            </div>
                        </div>
                        <div className="office-grid">
                            <article className="office-card">
                                <p className="office-label">REGISTERED BUSINESS ADDRESS · LAGOS OFFICE</p>
                                <h3>Lagos</h3>
                                <address>Suite LC3, 4th Floor, Entrance 4,<br />East Pavilion, Tafawa Balewa Square,<br />Race Course, Lagos, Nigeria.</address>
                                <a className="office-map" href="https://maps.google.com/?q=Suite+LC3+East+Pavilion+Tafawa+Balewa+Square+Lagos" target="_blank" rel="noreferrer">View location ↗</a>
                                <div className="office-contacts">
                                    <a href="tel:+2348085862053"><span>Office mobile</span>+234 808 586 2053</a>
                                    <a href="tel:+23417203982"><span>Office telephone</span>01-720 3982</a>
                                    <span className="office-contact-text"><span>Fax (as listed)</span>01-264 7315</span>
                                </div>
                            </article>
                            <article className="office-card">
                                <p className="office-label">ABUJA OFFICE</p>
                                <h3>Abuja</h3>
                                <address>37 Road, House 8,<br />Gwarinpa Estate,<br />Abuja, Nigeria.</address>
                                <a className="office-map" href="https://maps.google.com/?q=37+Road+House+8+Gwarinpa+Estate+Abuja" target="_blank" rel="noreferrer">View location ↗</a>
                                <div className="office-contacts">
                                    <a href="tel:+2348023039133"><span>Oladipo Amos · direct</span>+234 802 303 9133</a>
                                    <a href="tel:+23495200604"><span>Office telephone (as listed)</span>09-520 0604</a>
                                    <a href="tel:+2348033019606"><span>Hakeem O. Smith · direct</span>+234 803 301 9606</a>
                                </div>
                            </article>
                        </div>
                        <p className="contact-source-note">
                            Office addresses and telephone numbers are as listed in the company profile.
                        </p>
                    </div>
                </section>

            </main>

            <footer className="site-footer">
                <div className="section-shell footer-main">
                    <a className="brand footer-brand" href="#top" aria-label="EDGE Contracting home">
                        <img className="brand-logo" src={edgeLogo} alt="" />
                        <span className="brand-copy">
                            <strong>CONTRACTING</strong>
                            <span>LIMITED</span>
                        </span>
                    </a>
                    <div className="footer-offices">
                        <div>
                            <strong>Lagos registered office</strong>
                            <span>Suite LC3, 4th Floor, Entrance 4,<br />East Pavilion, Tafawa Balewa Square,<br />Race Course, Lagos, Nigeria</span>
                            <a href="tel:+2348085862053">+234 808 586 2053</a>
                            <a href="tel:+23417203982">Office: 01-720 3982</a>
                        </div>
                        <div>
                            <strong>Abuja office</strong>
                            <span>37 Road, House 8,<br />Gwarinpa Estate, Abuja, Nigeria</span>
                            <a href="tel:+2348023039133">Oladipo Amos: +234 802 303 9133</a>
                            <a href="tel:+23495200604">Office: 09-520 0604</a>
                            <a href="tel:+2348033019606">Hakeem O. Smith: +234 803 301 9606</a>
                        </div>
                    </div>
                    <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
                </div>
                <div className="section-shell footer-bottom">
                    <span>© {new Date().getFullYear()} EDGE Contracting Limited</span>
                    <span>Architecture · Construction · Engineering</span>
                    <span>Fax: 01-264 7315</span>
                    <a href="mailto:info@edgecontract.org">info@edgecontract.org↗</a>
                </div>
            </footer>
        </div>
    )
}

export default AmosPortfolio
