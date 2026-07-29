'use client';

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { PROJECTS } from "@/lib/projects";
import styles from "./projects.module.css";
import ProjectSoon from "@/components/projectSoon/projectSoon";

type Filter = { style: string | null; type: string | null; location: string | null };


export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>({ style: null, type: null, location: null });

  const types = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.type.split(",").pop()!.trim()))).sort(),
    []
  );

  const locations = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.location.split(",").pop()!.trim()))).sort(),
    []
  );

  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => {
        if (filter.type && p.type !== filter.type) return false;
        if (filter.location && !p.location.endsWith(filter.location)) return false;
        return true;
      }),
    [filter]
  );

  return (
    <div className={styles.centerWrapper}>
      <header className={styles.header}>
        <div>
          <div className={styles.eyebrow}>Портфолио</div>
          <h1 className={styles.mainTitle}>Наши проекты</h1>
        </div>
        <p className={styles.heroDesc}>
          Спортивные комплексы, коммерческие объекты и жилые пространства.
           В основе каждого решения лежит баланс между техническими нормативами,
            авторской идеей и архитектурной эстетикой.
        </p>
      </header>

      <div className={styles.filtersContainer}>
        <FilterGroup label="Тип объекта" value={filter.type} options={types} onChange={(v) => setFilter((f) => ({ ...f, type: v }))} />
        <FilterGroup label="Локация" value={filter.location} options={locations} onChange={(v) => setFilter((f) => ({ ...f, location: v }))} />
      </div>

      <div className={styles.statusBar}>
        <div>Всего объектов: {filtered.length}</div>
        {(filter.style || filter.type || filter.location) && (
          <button className={styles.clearFiltersBtn} onClick={() => setFilter({ style: null, type: null, location: null })}>
            Сбросить фильтры
          </button>
        )}
      </div>

      <div className={styles.projectsGrid}>
        {filtered.map((p, i) => {
          if (p.isSoon) {
            return <ProjectSoon key={p.slug} project={p} />;
          }

          return (
            <Link key={p.slug} href={`/Projects/${p.slug}`} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                    className={styles.image}
                  />
              </div>
              <div className={styles.metaInfo}>
                <div className={styles.metaTextContainer}>
                  <div className={styles.styleLocation}>
                    {p.type} · {p.area} · {p.location}
                  </div>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                </div>
                <div className={styles.year}>{p.year}</div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className={styles.noResults}>
          <p className={styles.noResultsTitle}>Нет объектов, соответствующих выбранным критериям.</p>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string | null; onChange: (v: string | null) => void }) {
  return (
    <div>
      <div className={styles.filterGroupLabel}>{label}</div>
      <div className={styles.filterButtonsRow}>
        <button className={`${styles.filterBtn} ${value === null ? styles.activeFilterBtn : styles.inactiveFilterBtn}`} onClick={() => onChange(null)}>
          Все
        </button>
        {options.map((o) => (
          <button key={o} className={`${styles.filterBtn} ${value === o ? styles.activeFilterBtn : styles.inactiveFilterBtn}`} onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
