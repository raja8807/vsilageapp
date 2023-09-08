import WhatIsSilageTab from "./tabs/what_is_silage";
import { useState } from "react";
import styles from "./silage.module.scss";
import WhyBaledSilageTab from "./tabs/why_baled_silage";
import CropSuitableTab from "./tabs/crops_suitable_for_silage";
import BaleUsageTab from "./tabs/bale_usage";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const { default: CustomSection } = require("../home/section/section");

const SilageScreen = () => {
  const [currentTab, setCurrentTab] = useState("0");

  const tabs = [
    {
      id: "0",
      component: <WhatIsSilageTab />,
      title: "What is Silage?",
    },
    {
      id: "1",
      component: <WhyBaledSilageTab />,
      title: "Why Baled Silage?",
    },
    {
      id: "2",
      component: <CropSuitableTab />,
      title: "Crop Suitable For Silage",
    },
    {
      id: "3",
      component: <BaleUsageTab />,
      title: "Bale Usage & Precaution",
    },
  ];

  return (
    <CustomContainer>
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              onClick={() => {
                setCurrentTab(tab.id);
              }}
              className={`${styles.tab} ${
                tab.id === currentTab && styles.active
              }`}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>{tabs[currentTab]?.component}</div>
    </CustomContainer>
  );
};

export default SilageScreen;
