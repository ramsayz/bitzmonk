import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";
import Price from "../components/Price";

const Home = (props) => (
  <Layout>
    <div className="container" style={{ color: "orange" }}>
      <h5>Welcome to BitzMonk</h5>
      <h6>Prices last updated on {props.time.updated}</h6>

      <Price bpi={props.bpi} />
    </div>
  </Layout>
);
Home.getInitialProps = async () => {
  const result = await Fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await result.json();
  return {
    time: data.time,
    bpi: data.bpi,
  };
};
export default Home;
