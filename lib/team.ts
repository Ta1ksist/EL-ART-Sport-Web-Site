export interface TeamMember {
  name: string;
  role: string;
  img: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Закирова Элина', role: "Основатель и руководитель EL'ART", img: '/Team/Закирова Элина.png' },
  { name: 'Гадецкая Елизавета', role: "Главный дизайнер студии EL'ART", img: '/Team/Гадецкая Елизавета.png' },
  { name: 'Гадецкая Диана', role: "Руководитель проектной части EL'ART", img: '/Team/Гадецкая Диана.png' },
  { name: 'Шакиров Азат', role: "Проектный менеджер", img: '/Team/Шакиров Азат.png' },
  { name: 'Герасимова Дарья', role: "Дизайнер", img: '/Team/Герасимова Дарья.png' },
  { name: 'Фролова Елизавета', role: "Дизайнер-визуализатор", img: '/Team/Фролова Елизавета.png' },
  { name: 'Попова Дарина', role: "Визуализатор", img: '/Team/Попова Дарина.png' },
  { name: 'Худяк Дарья', role: "Дизайнер-визуализатор", img: '/Team/Худяк Дарья.png' },
  { name: 'Хмара Елизавета', role: "Визуализатор", img: '/Team/Хмара Елизавета.png' },
];


export function getAllServices(): TeamMember[] { 
  return TEAM; 
}