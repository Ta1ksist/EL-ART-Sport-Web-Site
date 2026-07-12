export interface Project {
  slug: string;
  cover: string;
  title: string;
  style: string;
  type: string;
  location: string;
  year: number;
  designCode: string;
  designPrinciple: string;
  area: string;
  timeline: string;
  gallery: string[];
}

export const FILTER_STYLES = ["Минимализм", "Модерн", "Хай-тек", "Брутализм"] as const;
export const FILTER_TYPES = ["Падел", "Фитнес", "Офисы", "Жилая", "Рестораны"] as const;

export const PROJECTS: Project[] = [
  { 
    slug: "rocket-padel-kemerovo", 
    cover: "/projects/preview/preview-rocket-padel-kem.webp", 
    title: "Падел-комплекс Rocket Kemerovo", 
    style: "Модерн", 
    type: "Падел", 
    location: "Россия, Кемерово", 
    year: 2026,
    designCode: "Кодовые слова: комфорт, функциональность, инновационность, узнаваемость.",
    designPrinciple: "Бизнес - это про окупаемость и эффективность использования каждого уголка помещения. Каждый сантиметр пространства должен работать и приносить пользу. \nЭргономика - это про комфорт человека внутри пространства. Мы мысленно проживаем каждый возможный маршрут гостя, чтобы ему везде было удобно, понятно и приятно находиться. \nКонцепция – это создании истории. Дизайн для нас не просто оформление, а целый мир со своим характером, атмосферой и сюжетностью.",
    area: "#### м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/rocket-padel-kem/1.jpg", 
      "/projects/rocket-padel-kem/2.jpg", 
      "/projects/rocket-padel-kem/3.jpg",
      "/projects/rocket-padel-kem/4.jpg", 
      "/projects/rocket-padel-kem/5.jpg"
    ]
  },
  { 
    slug: "rocket-padel-vlg", 
    cover: "/projects/preview/preview-rocket-padel-vlg.png", 
    title: "Падел-комплекс Rocket Volgograd", 
    style: "Минимализм", 
    type: "Падел", 
    location: "Россия, Волгоград", 
    year: 2026,
    designCode: "Вечное лето — это не сезон. Это внутреннее состояние. Наш проект — это попытка материализовать это ощущение через объём, свет и форму. Мы проектировали не стены, а само лето.",
    designPrinciple: "Бизнес - это про окупаемость и эффективность использования каждого уголка помещения. Каждый сантиметр пространства должен работать и приносить пользу. \nЭргономика - это про комфорт человека внутри пространства. Мы мысленно проживаем каждый возможный маршрут гостя, чтобы ему везде было удобно, понятно и приятно находиться. \nКонцепция – это создании истории. Дизайн для нас не просто оформление, а целый мир со своим характером, атмосферой и сюжетностью.",
    area: "#### м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/rocket-padel-vlg/1.png", 
      "/projects/rocket-padel-vlg/2.png", 
      "/projects/rocket-padel-vlg/3.png",
      "/projects/rocket-padel-vlg/4.png"
    ]
  },
  { 
    slug: "studio-flex-msc", 
    cover: "/projects/preview/preview-studio-flex-msc.jpg", 
    title: "Студия женского фитнеса «THE FLEX»", 
    style: "Хай-тек", 
    type: "Фитнес", 
    location: "Россия, Москва", 
    year: 2025,
    designCode: "Пространство, где спорт становится частью образа жизни: тренировки, основанные на женской физиологии, сообщество, в котором нет давления, пространство, где хочется оставаться.",
    designPrinciple: "Пространство было разработано многоуровневым, часть функций перенесены на второй этаж: тренерские, технические узлы и комната отдыха для персонала.",
    area: "421 м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/studio-flex-msc/1.jpg", 
      "/projects/studio-flex-msc/2.jpg", 
      "/projects/studio-flex-msc/3.jpg", 
      "/projects/studio-flex-msc/4.jpg",
      "/projects/studio-flex-msc/5.jpg"
    ]
  },
  { 
    slug: "padel-club-viv", 
    cover: "/projects/preview/preview-padel-club-viv.png", 
    title: "Падел-клуб VIV", 
    style: "Минимализм", 
    type: "Падел", 
    location: "ОАЭ, Дубай",
    year: 2025,
    designCode: "Все помещения спроектированы как потенциальные сцены для мероприятий. Здесь легко можно провести как турнир, так и арт-вечер.",
    designPrinciple: "Мы выстроили целый мир вокруг спортивного ядра. После игры гости могут продолжить день, не покидая пространство: поработать в коворкинге, провести встречу в лаунж-зоне или насладиться ужином.",
    area: "#### м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/padel-club-viv/1.png", 
      "/projects/padel-club-viv/2.png", 
      "/projects/padel-club-viv/3.png",
      "/projects/padel-club-viv/4.png"
    ]
  },
];

export function getAllProjects(): Project[] { 
  return PROJECTS; 
}

export function getProjectBySlug(slug: string): Project | undefined { 
  return PROJECTS.find((p) => p.slug === slug); 
}
