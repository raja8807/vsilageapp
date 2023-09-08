const {
  default: CustomSection,
} = require("@/components/pages/home/section/section");
const { Row, Col, Image } = require("react-bootstrap");

const CropSuitableTab = () => {
  return (
    <div>
      <CustomSection heading="Crop Suitable for Silage">
        <br />
        <Row>
          <Col md={7}>
            <p>
              Crops having good percentage of sugar and appropriate (35-40% dry
              matter; 65-60% moisture.) moisture are good for silage making.
              Crops like maize, jowar, bajra, hybrid napier, oat are most
              suitable for silage making. Leguminous crops like berseem,
              Lucerne, Cowpea is not suitable, unless molasses are sprayed on
              these crops while filling silo pit. The quality of silage
              production can also be enhanced with the use of suitable additives
              such as molasses, urea, salt, formic acid etc.
            </p>
            <br />
            <h4>Harvest at proper stage</h4>
            <ul>
              <li>
                <p>
                  Crops at pre-flowering to flowering stage should be harvested
                  and should not contain 75% moisture while silage making.
                </p>
              </li>
              <li>
                <p>
                  Crops with hollow stems like maize, jowar, bajra, hybrid
                  napier should be chaffed to an inch size to prevent trapping
                  of air and spilage of silage.
                </p>
              </li>
              <li>
                <p>
                  Crops with more moisture could be dried in sunshine for 4 – 5
                  hours to reduce moisture by 15%.
                </p>
              </li>
              <li>
                <p>If the crop is too dry add water during packing silo.</p>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <Image src="/images/silage/crop1.jpg" alt="silage_1" fluid />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={5}>
            <Image src="/images/silage/crop2.jpg" alt="silage_1" fluid />
          </Col>
          <Col md={7}>
            <h4>Ideal conditions</h4>
            <p>
              The ideal moisture content for silage preparation would be 50 –
              75%. Silage production should be done taking into consideration
              several factors like the degree of compression and the amount of
              water that will be lost during the process of silage making. The
              weather for harvest also needs to be fairly dry.
            </p>
            <br />
            <p>
              To get maximum efficiency when it comes to nutrition, the pasture
              is cut when the grasses contain the highest nutrient levels during
              preparation. This level is attained just before they are fully
              mature.
            </p>
            <br />
            <p>
              The reason why it is cut just before they are fully mature is that
              all forms of preserved grass, such as hay and silage, will have
              lower amounts of nutrients than fresh pasture, so everything must
              be done to make the end product be as nutritious as possible.
            </p>
            <br />
            <p>
              The grass is allowed to wilt in the field for a few hours to
              reduce the moisture content to around 60-75% as this is the
              optimum level. If the grass is left out longer, it may get too
              dry, or it may get rained on. Both these scenarios are not
              preferred as it will reduce the efficiency of the fermentation.
            </p>
            <br />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={7}>
            <h4>Infrastructure that is generally needed:</h4>
            <p>
              In addition to choosing the right crop, there are a couple of
              boxes that need to be ticked.
            </p>
            <br />
            <ul>
              <li>
                <p>The presence of siloes</p>
              </li>
              <li>
                <p>Tractors</p>
              </li>
              <li>
                <p>Trailer</p>
              </li>
              <li>
                <p>Fodder/crop harvester</p>
              </li>
              <li>
                <p>Chaff cutter</p>
              </li>
            </ul>
            <br />
            <p>
              Getting this infrastructure might not exactly be your area of
              expertise as you may have multiple things to take care of. Here is
              where we come into play. Our experience at silage making in India
              & choosing the rich crop for maximum efficiency will be of immense
              use to your business.
            </p>
            <br />
            <p>
              Specializing in harvesting, baling as well as logistics, we work
              best with farmers by sending in a team of experts who will come to
              your farm, harvest the crop and pack it in the best possible
              conditions. Cornext offers baling & logistic services to large
              dairy farms as well as farmers who can identify the maize crop for
              silaging.
            </p>
            <br/>
          </Col>
          <Col md={5}>
            <Image src="/images/silage/crop3.jpg" alt="silage_1" fluid />
          </Col>
        </Row>
      </CustomSection>
    </div>
  );
};

export default CropSuitableTab;
