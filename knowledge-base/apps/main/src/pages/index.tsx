import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import projectConfig from "@academic-lab/config/project.config";

export default function HomePage(): ReactNode {
  return (
    <Layout
      title={projectConfig.PROJECT_DISPLAY_NAME || projectConfig.PROJECT_NAME}
      description={projectConfig.SITE_TAGLINE}
    >
      <main
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <Heading as="h1" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          {projectConfig.PROJECT_DISPLAY_NAME || projectConfig.PROJECT_NAME}
        </Heading>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--ifm-color-emphasis-700)",
            marginBottom: "2.5rem",
          }}
        >
          {projectConfig.SITE_TAGLINE}
        </p>

        <div
          style={{
            padding: "2.5rem",
            borderRadius: "12px",
            border: "1px solid var(--ifm-border-color)",
            backgroundColor: "var(--ifm-background-surface-color)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Heading as="h2" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Pesquisador: {projectConfig.AUTHOR_NAME}
          </Heading>
          <p
            style={{
              color: "var(--ifm-color-emphasis-600)",
              lineHeight: "1.6",
              maxWidth: "640px",
              margin: "0 auto 2rem auto",
            }}
          >
            Ambiente dedicado à estruturação de conhecimento acadêmico,
            documentação técnica e experimentação prática.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Acessar Documentação
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              Ver Artigos do Blog
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
