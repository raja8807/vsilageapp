import { useState } from "react";
import styles from "./uplaod_application.module.scss";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import { Row } from "react-bootstrap";
import { Check2Circle, ClockFill, XCircleFill } from "react-bootstrap-icons";
import { useRouter } from "next/router";
const UploadApllication = (props) => {
  const { setCurrentPdf } = props;

  const [applicantData, setApplicantData] = useState({
    applicationId: "",
    name: "",
    email: "",
    phone: "",
    url: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(false);
  const [fileData, setFileData] = useState(null);

  const [formError, setFormError] = useState({
    email: null,
    phone: null,
    file: null,
  });

  function generate_uuidv4() {
    // return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    //   /[xy]/g,
    //   function (c) {
    //     var uuid = (Math.random() * 16) | 0,
    //       v = c == "x" ? uuid : (uuid & 0x3) | 0x8;
    //     return uuid.toString(16);
    //   }
    // );
    return Math.floor(1000 + Math.random() * 9000);
  }

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (ValidateEmail(applicantData.email)) {
      setIsLoading(true);
      try {
        const file = event.target[3].files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "resume");

        const isExist = await fetch("api/resume/checkIsExist", {
          method: "POST",
          body: JSON.stringify(applicantData),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());

        if (isExist) {
          setIsLoading(false);
          setExist(true);
        } else {
          fetch("https://api.cloudinary.com/v1_1/djea4vipn/image/upload", {
            method: "POST",
            body: formData,
          })
            .catch((err) => {
              setError(true);
              throw new Error(err);
            })
            .then((res) => {
              return res.json();
            })
            .then((cloudinaryUploadedData) => {
              setCurrentPdf(cloudinaryUploadedData.secure_url);
              fetch("api/resume", {
                method: "POST",
                body: JSON.stringify({
                  ...applicantData,
                  applicationId: generate_uuidv4(),
                  url: cloudinaryUploadedData.secure_url,
                }),
              })
                .then((res) => {
                  setIsLoading(false);
                  return res.json();
                })
                .then((dbPostedData) => {
                  setIsSubmitted(dbPostedData.applicationId);
                  fetch("https://formspree.io/f/maygjegz", {
                    method: "POST",
                    body: JSON.stringify({
                      email: dbPostedData.email,
                      message: dbPostedData,
                    }),

                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.ok) {
                        setApplicantData({
                          applicationId: "",
                          name: "",
                          email: "",
                          phone: "",
                          url: "",
                        });
                      }
                    });
                });
            });
        }
      } catch (err) {
        setIsLoading(false);
        setIsSubmitted(false);
        setError(true);
        console.log("err--->", err);
      }
    } else {
      setFormError((prev) => ({ ...prev, email: true }));
    }
  };

  const router = useRouter();

  return (
    <div className={styles.upload_application}>
      {isLoading && (
        <div className={styles.submitted}>
          <ClockFill />
          <p>Yuor Resume is being Submitted Please Wait...</p>
        </div>
      )}
      {isSubmitted && (
        <div className={styles.submitted}>
          <Check2Circle />

          <p>Your Resume Has Been Submitted Succesfully.</p>
          <p>We Will Get Back To You Soon.</p>
          <strong>Your Apllication No. is : {isSubmitted}</strong>
          <CustomButton
            clickHandler={() => {
              router.push("/");
            }}
          >
            Home
          </CustomButton>
        </div>
      )}

      {error && (
        <div className={`${styles.submitted}`}>
          <XCircleFill style={{ color: "red" }} />
          <p style={{ textAlign: "center" }}>
            Something went Wrong
            <br />
            <small>Please Contact Admin</small>
          </p>

          <CustomButton
            clickHandler={() => {
              router.push("/");
            }}
          >
            Home
          </CustomButton>
        </div>
      )}
      {exist && (
        <div className={`${styles.submitted}`}>
          <XCircleFill style={{ color: "red" }} />
          <p style={{ textAlign: "center" }}>
            Already Exist
            <br />
            {/* <small>Please Contact Admin</small> */}
          </p>

          <CustomButton
            clickHandler={() => {
              router.push("/");
            }}
          >
            Home
          </CustomButton>
        </div>
      )}
      {!isSubmitted && !isLoading && !error && !exist && (
        <>
          <h4>Submit Your Resume</h4>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              required
              value={applicantData.name}
              onChange={(e) => {
                setApplicantData((prev) => ({ ...prev, name: e.target.value }));
              }}
            />

            <br />
            <br />

            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              required
              value={applicantData.email}
              onChange={(e) => {
                setApplicantData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              className={formError.email ? styles.inputError : ""}
            />
            <br />
            <br />
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              value={applicantData.phone}
              onChange={(e) => {
                setApplicantData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }));
              }}
            />
            <br />
            <br />
            <label>Resume</label>
            <input
              type="file"
              required
              accept="application/pdf"
              onChange={(e) => {
                setFileData(e.target.files[0]);
              }}
            />
            <small style={{ display: "block" }}>
              <span style={{ color: "red" }}>
                <b>Note : </b>
              </span>
              Max File Size : <b>2 MB </b>(only .pdf)
            </small>

            {fileData?.size > 1048576 * 2 && (
              <small style={{ display: "block" }}>
                <span style={{ color: "red" }}>
                  File Size Exceeds <b>2 MB</b>
                </span>
              </small>
            )}

            <br />
            <CustomButton
              type="Submit"
              disabled={
                !applicantData.name ||
                !applicantData.email ||
                !applicantData.phone ||
                !fileData ||
                fileData?.size > 1048576 * 2 ||
                !fileData.type === "application/pdf"
              }
            >
              Submit
            </CustomButton>
          </form>
        </>
      )}
    </div>
  );
};

export default UploadApllication;
