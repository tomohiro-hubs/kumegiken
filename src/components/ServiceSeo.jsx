import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";

export default function ServiceSeo({ name, path, description, image, faqs }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "サービス", path: "/service/" },
    { name, path },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceJsonLd({ name, path, description, image })} />
      {faqs?.length ? <JsonLd data={faqJsonLd(faqs)} /> : null}
    </>
  );
}

export function FaqSection({ faqs, title = "よくある質問" }) {
  if (!faqs?.length) return null;

  return (
    <section className="content-section content-section--gray">
      <div className="container container--narrow">
        <div className="article-content reveal">
          <h2>{title}</h2>
          {faqs.map((faq) => (
            <div key={faq.question} style={{ marginBottom: "24px" }}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
