import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="hero_left">
        <h1>Tinaye H Tsinakwadi</h1>
        <ul>
          <li>Student at Universitat Liechtenstein</li>
          <li>Currently doing my Masters is Information Systems</li>
          <li>Data/Financial Analyst</li>
        </ul>
      </div>
      <div className="hero_right">
        <img src="img/logo.svg" />
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
