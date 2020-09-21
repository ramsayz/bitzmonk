const { default: Navbar } = require("./Navbar");
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>Bitzcoin_Price </title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/minty/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container" style={{ marginTop: "45px" }}>
      {props.children}
    </div>
  </div>
);
export default Layout;
