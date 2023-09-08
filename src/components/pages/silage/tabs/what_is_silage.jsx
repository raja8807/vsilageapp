import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import Link from "next/link";

const {
  default: CustomSection,
} = require("@/components/pages/home/section/section");
const { Row, Col, Image } = require("react-bootstrap");

const WhatIsSilageTab = () => {
  return (
    <CustomSection heading="What is Silage?">
      <br />
      <Row>
        <Col md={7}>
          <p>
            Silage is a fermented feed resulting from the storage of high
            moisture crops under anaerobic conditions in a structure called as
            silo. In brief, Silage is a high moisture fodder that farmers use to
            feed their domestic animals, especially during the dry season. Made
            up of grass, corn, maize, and others, silages are made by chopping
            the crops into small pieces and then storing them.
          </p>
          <br />
          <p>
            The common methods used to store silages are silos, bunkers, silage
            bags and silage bales. Silos and bunkers are used when there are
            large quantities present, whilst bags and bales are used when there
            are only small quantities to be stored and can be transported to the
            nearby market/farms in a short time.
          </p>
          <br />
          <p>
            The silage is then fermented to provide feed for livestock. The
            fermentation process of silage is done in multiple phases and takes
            around 3 weeks to be completed. The process of fermentation is done
            to improve dry matter intake and create a more digestible feed.
          </p>
          <br />
          <Link href="/contact">
            <CustomButton>Contact Us</CustomButton>
          </Link>
          <br />
          <br />
        </Col>
        <Col md={5}>
          <Image src="/images/silage/silage1.jpg" alt="silage_1" fluid />
        </Col>
      </Row>
      <br />
      <h4>How Silage is prepared?</h4>
      <p>
        During the silage making process, the pasture is cut when the grasses
        contain the highest nutrient levels. This level is attained just before
        they are fully mature.
      </p>
      <br />
      <p>
        The reason why it is cut just before they are fully mature is that all
        forms of preserved grass, such as hay and silage, will have lower
        amounts of nutrients than fresh pasture, so everything must be done to
        make the end product be as nutritious as possible.
      </p>
      <br />
      <p>
        During Silage preparation, the grass is allowed to wilt in the field for
        a few hours to reduce the moisture content to around 60-75% as this is
        the optimum level. If the grass is left out longer, it may get too dry,
        or it may get rained on – and both these will reduce the efficiency of
        the fermentation.
      </p>
      <br />
      <Row>
        <Col md={5}>
          <Image src="/images/silage/silage2.jpg" alt="silage_2" fluid />
        </Col>
        <Col md={7}>
          <h4>Fermentation process:</h4>
          <p>
            During the fermentation process, the cut grass is chopped into even
            smaller pieces (0.5 inches or 1.3 cms) and then compressed to eject
            the oxygen more efficiently.
          </p>
          <br />
          <p>
            This is important because the microorganisms especially, lactic acid
            bacteria, grow best under anaerobic (oxygen-free) conditions.
          </p>
          <br />
          <p>
            When oxygen remains, plant enzymes and other bacteria react with the
            plant sugars and proteins to make energy, thus reducing the amount
            of nutrients in the final product.
          </p>
        </Col>
      </Row>

      <br />
      <h4>Storage of silage:</h4>
      <p>
        After the first two steps, the next step is to seal the compressed grass
        with plastic to keep oxygen out. Mounds of silage are covered with huge
        polythene (plastic) sheets and weighted down (usually with old tires) to
        ensure maximum compression. Bales, on the other hand, are just covered
        with plastic wrapping.
      </p>
      <br />
      <p>
        In cases where the silage is to be stored in a large pit, tractors and
        other machinery are usually driven over the grass pile until it is firm.
        If the silage is stored as bales, baling machines will be used to
        compress the grass.
      </p>
      <br />
      <Row>
        <Col md={7}>
          <h4>Preserving technique:</h4>
          <p>
            After the fermentation process is done and once all of the oxygen is
            used up, lactic acid bacteria start to multiply. These are the
            bacteria that are needed to make the silage. They play a key role in
            turning the plant sugars into lactic acid causing the pH to drop
            (mixture becomes more acidic). Once the pH is around 4-5, the sugars
            stop breaking down and the grass is preserved until the silage is
            opened and exposed to oxygen.
          </p>
          <br />
          <p>
            If the pH isn’t low enough, a different kind of bacteria will start
            fermenting the silage, producing by-products (like ammonia) that
            taste bad to cows and sheep. Thus, the latter situation needs to be
            avoided at all costs.
          </p>
          <br />
          <p>
            At Cornext, the best corn silage suppliers in India offers silage
            bales & baling services to large dairy farms as well as farmers who
            can identify the maize crop for silaging. Specializing in harvesting
            and baling process, we work best with farmers by sending in a team
            of experts who will come to your farm, harvest the crop and pack it
            in the best possible conditions.
          </p>
        </Col>
        <Col md={5}>
          <Image src="/images/silage/silage3.jpg" alt="silage_3" fluid />
        </Col>
      </Row>
      <br />
      <h4>Advantages of silage making:</h4>
      <ul>
        <li>
          <p>
            Silage preserves close to 85 percent of the nutrition value of the
            crops.
          </p>
        </li>
        <li>
          <p>
            Silage can ensure the supply of quality forage in the lean months
            and during droughts. When green production is in excess, it can be
            preserved for future use in the form of silage.
          </p>
        </li>
        <li>
          <p>
            Accommodates more dry weight of feed than a cubic foot of long hay
            stored in the heap.
          </p>
        </li>
      </ul>
    </CustomSection>
  );
};

export default WhatIsSilageTab;
