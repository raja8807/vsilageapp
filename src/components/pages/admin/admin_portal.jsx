import CustomContainer from "@/components/ui/custom_container/custom_container";
import { useRouter } from "next/router";
import CustomSection from "../home/section/section";
import { Col, Row } from "react-bootstrap";
import Selector from "./selector/selector";
import { useState } from "react";
import Resumes from "./resumes/resumes";
import EditGallery from "./edit_gallery/edit_gallery";

const { useSession } = require("next-auth/react");

const AdminPortalScreen = () => {
  const router = useRouter();

  const session = useSession({
    required: true,
    onUnauthenticated: () => {
      // alert()
      router.push("/");
    },
  });

  const tabs = [
    {
      id: "resumes",
      name: "Resumes",
      component: Resumes,
    },
    {
      id: "gallery",
      name: "Edit Gallery",
      component: EditGallery,
    },
  ];

  const [currentTab, setCurrentTab] = useState(null);

  return session ? (
    <div>
      <CustomContainer>
        <CustomSection heading="Admin Portal">
          <Row>
            <Col md={2}>
              <Selector
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </Col>
            <Col md={10}>{currentTab && <currentTab.component />}</Col>
          </Row>
        </CustomSection>
      </CustomContainer>
    </div>
  ) : (
    <div />
  );
};

export default AdminPortalScreen;
