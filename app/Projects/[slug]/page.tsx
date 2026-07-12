import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./project.module.css";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectHero from "@/components/projectHero/projectHero";
import ProjectBrief from "@/components/projectBrief/projectBrief";
import ProjectGallery from "@/components/projectGallery/projectGallery";
import ProjectNext from "@/components/projectNext/projectNext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);

  if (!p) {
    return {
      title: "Проект не найден — EL'ART",
      robots: "noindex",
    };
  }

  return {
    title: `${p.title} — EL'ART`,
    description: p.designCode,
    openGraph: {
      title: `${p.title} — EL'ART`,
      description: p.designCode,
      images: [{ url: p.cover }],
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);

  if (!p) {
    return (
      <div className={styles.centerWrapper} style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className={styles.eyebrow}>404</div>
        <h1 className={styles.mainTitle} style={{ marginTop: '1rem' }}>Проект не найден</h1>
        <Link href="/Projects" className={`${styles.linkUnderline} ${styles.clearFiltersBtn}`} style={{ marginTop: '2rem', display: 'inline-flex' }}>
          Вернуться в портфолио
        </Link>
      </div>
    );
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((proj) => proj.slug === p.slug);
  const next = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article>
      <ProjectHero project={p}/>
      <ProjectBrief project={p}/>
      <ProjectGallery project={p}/>
      <ProjectNext currentSlug={p.slug}/>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.specItem}>
      <dt className={styles.specLabel}>{label}</dt>
      <dd className={styles.specValue}>{value}</dd>
    </div>
  );
}
