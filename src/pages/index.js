import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="hero__pretext"></div>
        <Heading as="h1" className="hero__title" style={{ textAlign: "left" }}>
          Tinaye H Tsinakwadi
        </Heading>
        <p
          className="hero__subtitle"
          style={{ width: "100%", textAlign: "left" }}
        >
          Hello, I'm currently doing my MSc in Informatiks at Universitat
          Liechtenstein. Interested in Data Analysis, AI, and Quant Finance.
        </p>
        <div className={styles.buttons} style={{ justifyContent: "left" }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ alignSelf: "left" }}
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="banner__img">
        <img
          src={"img/personal.jpg"}
          alt="at something"
          style={{ maxWidth: "90%", borderRadius: "2em" }}
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
