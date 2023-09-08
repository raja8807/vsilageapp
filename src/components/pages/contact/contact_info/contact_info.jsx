import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import styles from "./contact_info.module.scss";
import SocialMedia from "@/components/social_media/social_media";


const ContactInfo = () => {


  return (
    <>
      <div className={styles.contact_info}>
        <div>
          <h4>Office </h4>
          <p>
            <GeoAltFill /> 106H,5D/6 palai road West, <br />
            &nbsp; &nbsp; &nbsp; Millerpuram, <br />
            &nbsp; &nbsp; &nbsp; Thoothukudi - 628008.
          </p>
        </div>
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
            info@vsilage.com <small> - for General Information</small>
          </p>
          <p>
            <EnvelopeAtFill />
            sales@vsilage.com <small> - for Sales</small>
          </p>
          <p>
            <EnvelopeAtFill />
            info@vsilage.com <small> - for Job Opportunities</small>
          </p>
        </div>
      </div>
      <SocialMedia black />
    </>
  );
};

export default ContactInfo;
