import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import styles from "./contact_info.module.scss";
import SocialMedia from "@/components/social_media/social_media";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <div className={styles.contact_info}>
        {/* <div>
          <h4>Office </h4>
          <p>
            <GeoAltFill />
            1017R/1A, Kamaraj Nagar, <br />
            &nbsp; &nbsp; &nbsp; Court opposite,
            <br />
            &nbsp; &nbsp; &nbsp; Tirunelveli - 627002.
          </p>
        </div> */}
        <div>
          <h4>Phone</h4>
          <p>
            <TelephoneFill />
            +91 74833 77777
          </p>
          <p>
            <Whatsapp />
            +91 90429 36647
          </p>
        </div>
        <div className={styles.email}>
          <h4>Email</h4>
          <p>
            <EnvelopeAtFill />
            <Link href="mailto:info@vsilage.com">
              <span>info@vsilage.com</span>
            </Link>

            <small> - for General Information</small>
          </p>
          <p>
            <EnvelopeAtFill />

            <Link href="mailto:sales@vsilage.com">
              <span>sales@vsilage.com</span>
            </Link>

            <small> - for Sales</small>
          </p>
          <p>
            <EnvelopeAtFill />
            <Link href="mailto:hr@vsilage.com">
              <span>hr@vsilage.com</span>
            </Link>
            <small>- for Job Opportunities</small>
          </p>
          <br />
          <Link href="/careers">Join Our Team</Link>{" "}
          <small> - Submit Your Resume</small>
        </div>
      </div>
      <SocialMedia black />
    </>
  );
};

export default ContactInfo;
