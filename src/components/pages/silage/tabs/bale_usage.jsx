import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import Link from "next/link";

const {
  default: CustomSection,
} = require("@/components/pages/home/section/section");
const { Row, Col, Image } = require("react-bootstrap");

const BaleUsageTab = () => {
  return (
    <div>
      <CustomSection heading="Bale Usage & Precaution">
        <br />
        <p>
          After the silage production is completed via different methods, it
          ought to be stored with the help of silage bales. Before we cover the
          topic of bale usage, let us first understand what the process of
          baling signifies.
        </p>
        <br />
        <br />
        <Row>
          <Col md={7}>
            <h4>Bale Silage Use</h4>
            <p>
              Round <b>bale silage</b> is a very common method of silage storage
              and is used widely. As a low-cost option, silage bales can be an
              effective storage mechanism for small & large farmers alike. By
              placing the bales in strategic locations around the farm, the
              farmers can provide feeding to animals at quick intervals.
            </p>
            <br />
            <p>
              It is essential that you wrap your silage bales to control feeding
              losses. Studies have even shown losses upto 40 – 50% when large
              silage bales are left open on the ground without wrapping. Using a
              single ring feeder, these losses can be reduced significantly.
            </p>
            <br />
            <p>
              One more important thing to be noted when using silage bales is
              that, in some cases, bales might have a very high quantity of
              legumes. Using them to feed cattle might result in over feeding.
              This is why, you ought to pay attention to the details and
              restrict the size of bales/number of bales during feeding when the
              legume quantity is high.
            </p>
            <br />
            <p>
              The other advantage of using silage bales in addition to the ones
              already mentioned is that it reduces the harvesting time
              significantly.
            </p>
            <br />
            <Link href="/contact">
              <CustomButton>Contact Us</CustomButton>
            </Link>
            <br/>
            <br/>
          </Col>
          <Col md={5}>
            <Image src="/images/silage/bales2.jpg" alt="silage_1" fluid />
          </Col>
        </Row>
        <br />
        <h4>Precautions to be adopted when using silage bales</h4>
        <br />
        <ul>
          <li>
            <p>
              Disposal of plastic bags or wrappers needs to be done to prevent
              environmental damage.
            </p>
          </li>
          <li>
            <p>Over-mature forage crops should not be used for silage bales.</p>
          </li>
          <li>
            <p>Bales should contain accurate dry matter content.</p>
          </li>
          <li>
            <p>
              Bales should be compressed as much as possible to reduce air
              pockets.
            </p>
          </li>
          <li>
            <p>
              Do not store the silage bales in rodent or weed infested regions.
              Also, avoid storing it under trees or near a fence.
            </p>
          </li>
          <li>
            <p>Seal the silage bales when not in use, with plastic.</p>
          </li>
          <li>
            <p>Inspect your silage bales regularly for holes in it.</p>
          </li>
        </ul>
        <br />
      </CustomSection>
    </div>
  );
};

export default BaleUsageTab;
