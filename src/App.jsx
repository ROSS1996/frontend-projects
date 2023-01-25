import Layout from "./components/layout";
import styles from "./assets/styles/Index.module.css";

function App() {
  return (
    <Layout>
      <div>
        <h2>More than just shorter links</h2>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <form>
        <input type="text" name="" id="" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
      </form>
      <p>
        Advanced Statistics Track how your links are performing across the web
        with our advanced statistics dashboard.
      </p>
      <div>
        <div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div>
        Boost your links today
        <button>Get Started</button>
      </div>
    </Layout>
  );
}

export default App;
