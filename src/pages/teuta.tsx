import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

export default function Teuta(): JSX.Element {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  console.log("themeConfig", themeConfig.footer);
  return (
    <Layout
      //   title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>teutaaaaa</main>
    </Layout>
  );
}
