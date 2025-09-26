import { useEffect } from "react";

const StructuredData = ({ type = "WebSite", data }) => {
  useEffect(() => {
    // Remove structured data anterior se existir
    const existingScript = document.querySelector(
      "script[data-structured-data]"
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Criar novo script de structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-structured-data", "true");

    let structuredData = {};

    switch (type) {
      case "WebSite":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: data.name || "Portal de Documentação - Aguiar Sistemas",
          description:
            data.description ||
            "Portal de documentação legal dos aplicativos da Aguiar Sistemas",
          url: data.url || "https://asdocs.vercel.app",
          publisher: {
            "@type": "Organization",
            name: "Aguiar Sistemas LTDA",
            url: "https://asdocs.vercel.app",
          },
          inLanguage: "pt-BR",
        };
        break;

      case "WebPage":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: data.name,
          description: data.description,
          url: data.url,
          isPartOf: {
            "@type": "WebSite",
            name: "Portal de Documentação - Aguiar Sistemas",
            url: "https://asdocs.vercel.app",
          },
          inLanguage: "pt-BR",
          datePublished: data.datePublished || "2025-09-26",
          dateModified: data.dateModified || "2025-09-26",
        };
        break;

      case "LegalDocument":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "DigitalDocument",
          name: data.name,
          description: data.description,
          url: data.url,
          publisher: {
            "@type": "Organization",
            name: "Aguiar Sistemas LTDA",
          },
          inLanguage: "pt-BR",
          datePublished: data.datePublished || "2025-09-26",
          dateModified: data.dateModified || "2025-09-26",
          about: {
            "@type": "SoftwareApplication",
            name: data.appName,
            applicationCategory: "BusinessApplication",
          },
        };
        break;

      default:
        structuredData = {
          "@context": "https://schema.org",
          "@type": type,
          ...data,
        };
    }

    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(
        "script[data-structured-data]"
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
