import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import styles from "./contact_form.module.scss";
import { useState } from "react";
import { Check, X } from "react-bootstrap-icons";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      await axios.post("https://formspree.io/f/maygjegz", {
        email: formData.email,
        message: {
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        },
      });
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.contact_form}>
      <form>
        <div>
          <label>
            Your Name
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </div>
        <div>
          <label>
            Your Email
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </div>
        <div>
          <label>
            Your Phone
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            value={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, phone: e.target.value }));
            }}
          />
        </div>
        <div>
          <label>
            Message
            <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            value={formData.message}
            placeholder="Type Something..."
            rows="3"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, message: e.target.value }));
            }}
          />
        </div>
        <div>
          {isError && (
            <p style={{ color: "red" }}>
              <X size="25px" />
              Message Not Sent. Try Again.
            </p>
          )}
          {isSuccess ? (
            <p style={{ color: "green" }}>
              <Check size="25px" />
              Message Sent Success.
            </p>
          ) : (
            <CustomButton
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.message
              }
              clickHandler={async () => {
                await handleSubmit();
              }}
            >
              {isLoading ? <Spinner size="sm" /> : "Send"}
            </CustomButton>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
