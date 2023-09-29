import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./career.module.scss";
import CustomSection from "../home/section/section";
import UploadApllication from "./uplaod_application/uplaod_application";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { useRef, useState } from "react";
import JobPortal from "./job_portal/job_portal";

const CareersScreen = () => {
  // const [currentPdf, setCurrentPdf] = useState();

  const openings = [
    {
      id: "1",
      role: "Back Office Executive",
      description:
        "Required Candidates with any Bachelors degree , good communication skills, Analytical skills and computer skills.",
      experience: "Skilled",
      responsiblities: {
        type: "paragraph",
        points: [
          "Required Candidates with any Bachelors degree , good communication skills, Analytical skills and computer skills.",
          "Candidates should be fresher or experienced and ready to take new challenges.",
        ],
      },
      desiredCandidate:
        "Good interpersonal skills, including the ability to deal with people from a wide range of backgrounds, ages and temperament excellent skills on MS Word and Excel.",
      department: " Administrative management",
      employmentType: "Full Time, Permanent",
      education: "UG: B.Com in Any Specialization, Any Graduate",
      skills: ["Ms office", "Typing skill"],
    },
    {
      id: "2",
      role: "Accountant / Accounts Executive",
      experience: "0 - 2 Years",
      locations: "Tuticorin, Tirunelveli, Kanyakumari, Chennai",
      gender: "Male or Female",
      description: "Accounting / Auditing.",
      // responsiblities: {
      //   type: "paragraph",
      //   points: [
      //     "Required Candidates with any Bachelors degree , good communication skills, Analytical skills and computer skills.",
      //     "Candidates should be fresher or experienced and ready to take new challenges.",
      //   ],
      // },
      department: "Finance & Accounting",
      employmentType: "Full Time, Permanent",
      education: "PG: b.com,M.Com in Any Specialization, ",
      skills: ["Well verse knowledge in accounts", "TallyAccounts"],
      mandatorySkill: "Well verse knowledge in accounts",
    },
    {
      id: "3",
      role: "Personal Assistant",
      experience: "Skilled",
      locations: "Tuticorin, Tirunelveli, Kanyakumari, Chennai",
      description:
        "We are looking for a skilled personal assistant for the Managing Director, to assist him in office as well as outdoor activities.",
      responsiblities: {
        type: "list",
        points: [
          {
            head: "Indoors (Office)",
            items: [
              "Schedule office and personal meetings.",
              "Attend business related phone calls and categorize the information.",
              "Book tatkal train tickets and make travel arrangements.",
              "Scan, file and organise paperworks.",
              "Supervise housekeeping staff.",
              "Assist in office as well as personal administration works.",
            ],
          },
          {
            head: "Outdoors",
            items: [
              "Drive two wheeler for outdoor works",
              "Visit shops and purchase personal and office goods.",
              "Visit banks for form submissions and fun transfers.",
              "Visit banks for form submissions and fun transfers.",
              "Attend office related programme ",
            ],
          },
        ],
      },
      department: "Administration & Facilities",
      employmentType: "Full Time, Permanent",
      education: "UG: any degree",
      skills: [
        "Travel ",
        "ms office ",
        "communication ",
        "Basic computer knowledge",
      ],
      mandatorySkill: (
        <>
          {/* <h6>Qulaification</h6> */}
          <ul>
            <li>
              <small>Can read and write in English.</small>
            </li>
            <li>
              <small>Fluent in speaking Tamil,English</small>
            </li>
            <li>
              <small>Computer knowledge to print/scan/write emails.</small>
            </li>
          </ul>
        </>
      ),
    },
    // -----------------------

    {
      id: "4",
      role: "Business Development Manager",
      experience: "2+years experience as a Marketing Coordinator .",
      // locations: "Tuticorin, Tirunelveli, Kanyakumari, Chennai",
      description: (
        <>
          <span>
            A keen interest in agriculture and the built environment as a whole
            is vital for this role, as is a proactive working approach and
            desire to build a career in marketing and sales.
          </span>
          <br />
          <br />
          <span>
            Strong written and verbal communication skill Must have a
            professional appearance Ability to use time productively, maximize
            efficiency, and meet challenging work goals Ability to take on
            additional Responsibilities as needed as well as determine and
            manage priorities with minimal guidance. Must possess and maintain
            exceptional work ethic as well as uphold company values and demand
            the highest standard of conduct from self and others
          </span>
          <br />
          <br />
          <span>
            Possess the ability to work well as a part of a team and
            independently
          </span>
        </>
      ),
      responsiblities: {
        type: "list",
        points: [
          {
            head: "The role will suit someone who can work autonomously as well as part of a team and involves:",
            items: [
              "Providing support to the Company Directors,",
              "Varying emphases throughout the year depending on the market and needs of the practice",
              "Create an effective plan to improve marketing and build the business. The marketing plan would include formulation of business strategies and implementation schedules.",
              "Drive new business presentations in line with the company s strategy.",
              "Provide a broad range of marketing communication support to the design studio.",
              "Produce marketing materials for the studio credentials presentation, press releases, project case studies.",
              "Attend events and conferences, research new events to attend and organise internal and external company events.",
              "Drive new avenues for marketing the company projects, present case studies, obtain client testimonials, write blogs, etc.",
              "Work closely with directors, Architects and in house graphic designers",
            ],
          },
        ],
      },
      department: "Agricultural Marketing & Communication",
      employmentType: "Full Time, Permanent",
      education: "UG: any degree, PG:Any Postgraduate",
      skills: ["Marketing"],
      mandatorySkill: (
        <>
          {/* <h6>Qulaification</h6> */}
          <ul>
            <li>
              <small>Can read and write in English.</small>
            </li>
            <li>
              <small>Fluent in speaking Tamil,English</small>
            </li>
            <li>
              <small>Computer knowledge to print/scan/write emails.</small>
            </li>
          </ul>
        </>
      ),
    },
    // -----------------------

    {
      id: "5",
      role: "Sales Executive",
      experience:
        "Min 0 - 3 years of experience in building material field sales",
      salary: ": 15-18K In hand + Travel - Based on Experience",
      locations: "Tuticorin, Tirunelveli, kanyakumari, Madurai",
      description:
        "We are looking for Sales Executive in one leading agriculture industry",
      responsiblities: {
        type: "list",
        points: [
          {
            head: "The role will suit someone who can work autonomously as well as part of a team and involves:",
            items: [
              "Sales, Demand general activities",
              "Attending company generated leads and developing new leads and explaining to the potential customers about the products and maintaining good relationship with contractors / customers",
              "Project / Institutional sales",
              "Maintaining stock management and generating sales by converting sites",
            ],
          },
        ],
      },
      department: "sales",
      employmentType: "Full Time, Permanent",
      education: "UG: 12th pass or Any Graduate",
      skills: ["Sales", "Marketting"],
    },

    // -----------------------

    {
      id: "6",
      role: "Business Coordinator",
      experience: "Minimum 2 years of exp. in office works.",
      description:
        "Activities related to banking, office work, monitoring of office building tiny maintenance work, cordination and supervision of existing staff, other office works depending on skills and abilities/experience",
      department: "Agriculture",
      employmentType: "Full Time, Permanent",
      education: "UG: Any Graduate | PG: MBA/PGDM in Any Specialization",
      skills: [
        "PG: MBA/PGDM in Any Specialization",
        "office coordination",
        "supervising",
      ],
    },

    // -----

    {
      id: "7",
      role: "Female Telemarketer",
      experience: "Female telemarketer",
      locations: "Tuticorin / Tirunelveli/Kanyakumari/ Chennai",
      salary:'10k - 25k',
      description:
        "In this role, you'll be responsible for reaching out to potential customers, introducing them to our exceptional [product/service], and persuading them to take action. You'll play a vital role in achieving and exceeding our sales targets by showcasing the value of our offerings and addressing customer inquiries. Strong communication skills, a persuasive attitude, and the ability to handle objections gracefully are key to success in this role.",
      // responsiblities: {
      //   type: "list",
      //   points: [
      //     {
      //       head: "Indoors (Office)",
      //       items: [
      //         "Schedule office and personal meetings.",
      //         "Attend business related phone calls and categorize the information.",
      //         "Book tatkal train tickets and make travel arrangements.",
      //         "Scan, file and organise paperworks.",
      //         "Supervise housekeeping staff.",
      //         "Assist in office as well as personal administration works.",
      //       ],
      //     },
      //     {
      //       head: "Outdoors",
      //       items: [
      //         "Drive two wheeler for outdoor works",
      //         "Visit shops and purchase personal and office goods.",
      //         "Visit banks for form submissions and fun transfers.",
      //         "Visit banks for form submissions and fun transfers.",
      //         "Attend office related programme ",
      //       ],
      //     },
      //   ],
      // },
      // department: "Administration & Facilities",
      // employmentType: "Full Time, Permanent",
      employmentType: "Full Time, Permanent",

      education: "Any degree",
      skills: [
        "Communication Skills ",
        "Lead Closure ",
        "Target Achieve",
        
      ],
      // mandatorySkill: (
      //   <>
      //     {/* <h6>Qulaification</h6> */}
      //     <ul>
      //       <li>
      //         <small>Can read and write in English.</small>
      //       </li>
      //       <li>
      //         <small>Fluent in speaking Tamil,English</small>
      //       </li>
      //       <li>
      //         <small>Computer knowledge to print/scan/write emails.</small>
      //       </li>
      //     </ul>
      //   </>
      // ),
    },
  ];

  const [applicantData, setApplicantData] = useState({
    applicationId: "",
    name: "",
    email: "",
    phone: "",
    role: "Any",
    url: "",
  });

  // console.log(x);

  return (
    <div className={styles.careers_screen}>
      <CustomContainer>
        <CustomSection heading="Careers">
          <br />
          {/* <p>
            Discover rewarding careers in the silage industry. Join our team to
            cultivate innovation, promote sustainability, and feed the world.
            Explore opportunities in farming, equipment, research, and more.
            Join us today!
          </p>
          <br /> */}
          <Row>
            <Col xs={12} md={6}>
              <h4>Join Our Team</h4>
              <p>
                Are you passionate about agriculture and silage preservation? We
                are always on the lookout for talented individuals who share our
                vision. If you are interested in joining our team at VSilage,
                check out our Careers page for opportunities to grow with us.
              </p>
              <br />
              <p>
                At VSilage, we are not just a team; we are a family united by a
                common purpose – to empower farmers with the best silage
                solutions. Meet us in person or connect with us online.
                Together, we are sowing the seeds of a brighter agricultural
                future.
              </p>
              <br />
            </Col>
            <Col xs={12} md={6}>
              <UploadApllication
                openings={openings}
                applicantData={applicantData}
                setApplicantData={setApplicantData}
              />
            </Col>
          </Row>

          <JobPortal openings={openings} setApplicantData={setApplicantData} />
        </CustomSection>
      </CustomContainer>
    </div>
  );
};

export default CareersScreen;
