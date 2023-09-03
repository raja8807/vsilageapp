import { Row } from "react-bootstrap";
import ResumeCard from "./resume_card/resume_card";
import { useEffect, useState } from "react";

const Resumes = () => {
  const [resumes, setResumes] = useState(null);
  const [loading, setIsLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetch("api/resume").then((r) => r.json());
      setResumes(data);
      setIsLoading(false);
    };
    fetchData();
    // setIsLoading(false);
  }, []);

  return (
    <Row>
      {
        loading && <p>Loading... Please Wait.</p>
      }
      {resumes && resumes.length === 0 && (
        <p style={{ textAlign: "center" }}>No Resumes Found</p>
      )}
      {resumes?.[0] &&
        resumes?.map((resume) => (
          <ResumeCard key={resume.applicationId} data={resume} />
        ))}
    </Row>
  );
};

export default Resumes;
