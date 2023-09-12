import { useState } from "react";
import styles from "./job_portal.module.scss";
import JobOpening from "./openings/opening";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";

const JobPortal = () => {
  const openings = [
    {
      id: "1",
      role: "Back office Executive",
      description: "Back office Executive",
      experience: "Fresher",
      responsiblities: {
        type: "paragraph",
        points: [
          "Required Candidates with any Bachelors degree , good communication skills, Analytical skills and computer skills.",
          "Candidates should be fresher or experienced and ready to take new challenges.",
        ],
      },
      department: " Administrative management",
      employmentType: "Full Time, Permanent",
      education: "UG: B.Com in Any Specialization, Any Graduate",
      skills: ["Ms office", "Typing skill"],
    },
    {
      id: "2",
      role: "Tally Accounts",
      experience: "0 - 2 Years",
      locations: "Tuticorin, Tirunelveli, Kanyakumari, Chennai",
      description:
        '"Required Candidates with any Bachelors degree , good communication skills, Analytical skills and computer skills.',
      responsiblities: {
        type: "paragraph",
        points: [
          "Required Candidates with any Bachelors degree , good communication skills, Analytical skills and computer skills.",
          "Candidates should be fresher or experienced and ready to take new challenges.",
        ],
      },
      department: "Finance & Accounting",
      employmentType: "Full Time, Permanent",
      education: "PG: b.com,M.Com in Any Specialization, ",
      skills: ["Well verse knowledge in accounts", "TallyAccounts"],
    },
    {
      id: "3",
      role: "Personal assistant",
      experience: "Accountant",
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
              "•	Visit shops and purchase personal and office goods.",
              "•	Visit banks for form submissions and fun transfers.",
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
    },
  ];

  const inreaseBy = 1
  const [max, setMax] = useState(inreaseBy);

  return (
    <div className={styles.job_portal}>
      <h4>Openings</h4>
      <div className={styles.openings}>
        {openings.map((opening, i) => {
          if (i < max) {
            return <JobOpening key={opening.id} data={opening} />;
          }
        })}
      </div>
      <CustomButton
        clickHandler={() => {
          if (max === openings.length) {
            setMax(inreaseBy);
          } else {
            setMax((prev) => prev + inreaseBy);
          }
        }}
      >
        {max === openings.length ? "Less" : "More"}
      </CustomButton>
    </div>
  );
};

export default JobPortal;
