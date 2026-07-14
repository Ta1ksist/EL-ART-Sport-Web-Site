'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { PROJECTS, FILTER_TYPES } from "@/lib/projects";
import styles from "./projects.module.css";
import ProjectSoon from "@/components/projectSoon/projectSoon";

type Filter = { style: string | null; type: string | null; location: string | null };


export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>({ style: null, type: null, location: null });

  const locations = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.location.split(",").pop()!.trim()))).sort(),
    []
  );

  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => {
        // if (filter.style && p.style !== filter.style) return false;
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
          Избранные коммерческие и спортивные объекты, спроектированные нашей командой. 
          Каждый проект — это тонкий баланс между строгими техническими нормативами и 
          премиальной архитектурной эстетикой.
        </p>
      </header>

      <div className={styles.filtersContainer}>
        {/* <FilterGroup label="Стиль" value={filter.style} options={FILTER_STYLES as unknown as string[]} onChange={(v) => setFilter((f) => ({ ...f, style: v }))} /> */}
        <FilterGroup label="Тип объекта" value={filter.type} options={FILTER_TYPES as unknown as string[]} onChange={(v) => setFilter((f) => ({ ...f, type: v }))} />
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
        <ProjectSoon isRightColumn={false} />
        {filtered.map((p, i) => {
          // Если анонс убрать: расскоментировать след. строку
          // const isRightColumn = i % 2 === 1;
          const isRightColumn = (i+1) % 2 === 1;
          const cardClass = `${styles.projectCard} ${isRightColumn ? styles.gridLinkOdd : ""}`;

          return (
            <Link key={p.slug} href={`/Projects/${p.slug}`} className={cardClass}>
              <div className={styles.imageWrapper}>
                <img src={p.cover} alt={p.title} loading="lazy" className={styles.image} />
              </div>
              <div className={styles.metaInfo}>
                <div className={styles.metaTextContainer}>
                  <div className={styles.styleLocation}>
                    {p.type} · {p.location}
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
