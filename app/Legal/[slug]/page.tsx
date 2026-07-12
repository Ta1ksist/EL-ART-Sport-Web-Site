import { getDocumentHtml, getAllDocuments } from '@/lib/documents';
import styles from '@/app/Legal/Legal.module.css';

export async function generateStaticParams() {
  const documents = getAllDocuments();
  return documents.map((a) => ({ slug: a.slug }));
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { html, data } = await getDocumentHtml(slug);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className={styles.cover}
          />
        )}
        <h1 className={styles.title}>{data.title}</h1>
        {data.description && (
          <p className={styles.description}>{data.description}</p>
        )}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}