import Layout from "./components/layout";
import styles from "./assets/styles/Index.module.css";
import Shorter from "./components/shorter";

import illustration from "./assets/images/illustration-working.svg";
import recognitionIcon from "./assets/images/icon-brand-recognition.svg";
import recordedIcon from "./assets/images/icon-detailed-records.svg";
import customIcon from "./assets/images/icon-fully-customizable.svg";

function App() {
  return (
    <Layout>
      <div className={styles.description}>
        <div>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <img src={illustration} alt="Illustration" />
      </div>
      <Shorter />
      <div className={styles.statistics}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={styles.features}>
        <div>
          <div className={styles.featureIcons}>
            <img src={recognitionIcon} alt="" />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={styles.featuresLine}></div>
        <div>
          <div className={styles.featureIcons}>
            <img src={recordedIcon} alt="" />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={styles.featuresLine}></div>
        <div>
          <div className={styles.featureIcons}>
            <img src={customIcon} alt="" />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div className={styles.boost}>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
    </Layout>
  );
}

export default App;
