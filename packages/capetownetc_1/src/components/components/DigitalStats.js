import React from "react";
import CountUp from "react-countup";

const DigitalStats = () => {
  const countUpDuration = 7;
  return (
    <div class="contact_page_section_2_parent" style={{ margin: "40px 0px" }}>
      <div style={{ width: "100%" }}>
        <div className="contact_page_stats_parent_1 content_spacing_top_2">
          <div className="contact_page_stat_container_1">
            {/* <h1>+505k</h1> */}
            <CountUp start={0} end={505} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Readership</p>
          </div>
          <div className="contact_page_stat_container_1">
            {/* <h1>+1.6 mil</h1> */}
            <CountUp start={0} end={6} delay={0} duration={6}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +1.
                    <span ref={countUpRef} /> mil
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Combined Reach</p>
          </div>
          <div className="contact_page_stat_container_1">
            {/* <h1>+330k</h1> */}
            <CountUp start={0} end={330} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Digital Unique Browsers</p>
          </div>
          <div className="contact_page_stat_container_1">
            {/* <h1>+202k</h1> */}
            <CountUp start={0} end={202} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Facebook</p>
          </div>
        </div>
        <div className="contact_page_stats_parent_1 content_spacing_bottom_2">
          <div className="contact_page_stat_container_1">
            {/* <h1>+k</h1> */}
            <CountUp start={0} end={398} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Twitter</p>
          </div>
          <div className="contact_page_stat_container_1">
            {/* <h1>+81k</h1> */}
            <CountUp start={0} end={81} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Instagram</p>
          </div>
          <div className="contact_page_stat_container_1">
            {/* <h1>+88k</h1> */}
            <CountUp start={0} end={88} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Webletter Subscribers</p>
          </div>
          <div className="contact_page_stat_container_1">
            {/* <h1>+49k</h1> */}
            <CountUp start={0} end={49} delay={0} duration={countUpDuration}>
              {({ countUpRef }) => (
                <div>
                  <h1>
                    +<span ref={countUpRef} />k
                  </h1>
                </div>
              )}
            </CountUp>
            <p>Promo Mailer Subscribers</p>
          </div>
        </div>
      </div>
      <video
        src={
          "https://ambassador.daddysdeals.co.za/features/capetownetc-assets/CTE-Website-Video.mp4"
        }
        className="contact_page_video_1"
        controls
      />
    </div>
  );
};

export default DigitalStats;
