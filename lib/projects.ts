export interface Project {
  slug: string;
  cover: string;
  title: string;
  type: string;
  location: string;
  year: string | number;
  isSoon?: boolean;
  designCode?: string;
  designPrinciple?: string;
  area: string;
  timeline?: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  // {
  //   slug: "pash-padel-soon",
  //   cover: "/projects/soon/pash-padel-soon.png",
  //   title: "Падел-комплекс «Pash padel»",
  //   type: "Падел-комплекс",
  //   area: "3500 м²",
  //   location: "Россия, Москва",
  //   year: "В разработке",
  //   isSoon: true
  // },
  { 
    slug: "place-padel-astr", 
    cover: "/projects/preview/preview-place-padel-astr.jpg", 
    title: "Падел-комплекс «Place padel»", 
    type: "Падел-комплекс", 
    location: "Россия, Астрахань", 
    year: 2026,
    designCode: "Кодовые слова: энергия, динамика, движение, функциональность, структура.",
    designPrinciple: "Открытая экосистема — создавая первый падел-клуб в Астрахани, мы сделали ставку на абсолютную прозрачность. Игровые корты и зоны отдыха бесшовно соединены. Это позволяет гостям легко считывать правила игры и проникаться атмосферой корта еще до того, как они возьмут в руки ракетку. \nЛогика гостеприимства — интерьер спроектирован так, чтобы убрать любое стеснение у новичков. Маршрут от ресепшена, открытой зоны примерки мерча и лаунжа интуитивно понятен. Мы ушли от концепции закрытых спортивных залов в сторону дружелюбного и комфортного пространства для жизни и общения.",
    area: "1800 м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/place-padel-astr/1.jpg", 
      "/projects/place-padel-astr/2.jpg", 
      "/projects/place-padel-astr/3.jpg",
      "/projects/place-padel-astr/4.jpg",
      "/projects/place-padel-astr/5.jpg",
    ]
  },
  { 
    slug: "pash-padel-msc", 
    cover: "/projects/preview/preview-pash-padel-msc.jpg", 
    title: "Падел-комплекс «Pash padel»", 
    type: "Падел-комплекс", 
    location: "Россия, Москва", 
    year: 2026,
    designCode: "Кодовые слова: комфорт, общение, тепло, расслабление, непринужденность.",
    designPrinciple: "Статус — это то, что считывается с первой секунды. Мы создали пространство, которое мгновенно заявляет о высоком уровне клуба. Сочетание глубоких терракотовых оттенков, геометрии света и текстуры бетона формирует премиальный образ объекта и отстраивает бизнес от обычных игровых залов. \nСценарий гостя — мы продумали каждую точку контакта. Движение посетителей, акустика в зоне ожидания, правильный свет, который не слепит и создает уют — все это складывается в единый бесшовный опыт, превращающий случайного игрока в постоянного резидента клуба.",
    area: "3500 м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/pash-padel-msc/1.jpg", 
      "/projects/pash-padel-msc/2.jpg", 
      "/projects/pash-padel-msc/3.jpg",
      "/projects/pash-padel-msc/4.jpg",
      "/projects/pash-padel-msc/5.jpg",
    ]
  },
  { 
    slug: "national-cuisine-hot", 
    cover: "/projects/preview/preview-national-cuisine-hot.jpg", 
    title: "Заведение национальной кухни «Горяч»", 
    type: "Падел-комплекс", 
    location: "Россия, Казань", 
    year: 2026,
    designCode: "Кодовые слова: культура, традиции и вкус.",
    designPrinciple: "Актуальная айдентика — мы переосмыслили заведение татарской национальной кухни, уйдя от привычных этно-шаблонов к современному городскому формату. Национальная идентичность здесь считывается тонко: через теплые оттенки дерева, орнаментальные намеки в геометрии мебели и мягкую форму светильников, напоминающих традиционные элементы. Этот интерьер делает национальную кухню модной и понятной для молодой аудитории. \nКоммерческий фокус и логистика — формат современного бистро требует высокой скорости обслуживания. Мы спроектировали открытую линейную стойку выдачи, где каждый этап пути заказа интуитивно понятен гостю. Зона витрины с выпечкой, открытая тепловая станция и холодильник с напитками выстроены в единый бесшовный маршрут, который стимулирует спонтанные продажи и исключает очереди в пиковые часы. \nСценарий гостеприимства — интерьер транслирует тепло и домашний уют, заложенные в ДНК татарской кулинарной культуры. Мягкие световые акценты над зоной выдачи и ритмичная текстура деревянных панелей создают дружелюбную, «прогретую» атмосферу, которая привлекает прохожих через панорамные окна и вызывает желание зайти внутрь.",
    area: "80 м²",
    timeline: "2 месяца",
    gallery: [
      "/projects/national-cuisine-hot/1.jpg", 
      "/projects/national-cuisine-hot/2.jpg", 
      "/projects/national-cuisine-hot/3.jpg",
      "/projects/national-cuisine-hot/4.jpg",
      "/projects/national-cuisine-hot/5.jpg",
    ]
  },
  { 
    slug: "studio-flex-msc", 
    cover: "/projects/preview/preview-studio-flex-msc.jpg", 
    title: "Студия женского фитнеса «THE FLEX»", 
    type: "Фитнес", 
    location: "Россия, Москва", 
    year: 2026,
    designCode: "Пространство, где спорт становится частью образа жизни: тренировки, основанные на женской физиологии, сообщество, в котором нет давления, пространство, где хочется оставаться.",
    designPrinciple: "Пространство было разработано многоуровневым, часть функций перенесены на второй этаж: тренерские, технические узлы и комната отдыха для персонала.",
    area: "450 м²",
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
    slug: "rocket-padel-kemerovo", 
    cover: "/projects/preview/preview-rocket-padel-kem.jpg", 
    title: "Падел-комплекс «Rocket padel»", 
    type: "Падел-комплекс", 
    location: "Россия, Кемерово", 
    year: 2025,
    designCode: "Кодовые слова: многоуровневость, цвет, вечное лето, образ жизни.",
    designPrinciple: "Бизнес - это про окупаемость и эффективность использования каждого уголка помещения. Каждый сантиметр пространства должен работать и приносить пользу. \nЭргономика - это про комфорт человека внутри пространства. Мы мысленно проживаем каждый возможный маршрут гостя, чтобы ему везде было удобно, понятно и приятно находиться. \nКонцепция – это создании истории. Дизайн для нас не просто оформление, а целый мир со своим характером, атмосферой и сюжетностью.",
    area: "2600 м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/rocket-padel-kem/1.jpg", 
      "/projects/rocket-padel-kem/2.jpg", 
      "/projects/rocket-padel-kem/3.jpg",
      "/projects/rocket-padel-kem/4.jpg",
      "/projects/rocket-padel-kem/5.jpg",
      "/projects/rocket-padel-kem/6.png", 
    ]
  },
  { 
    slug: "rocket-padel", 
    cover: "/projects/preview/preview-rocket-padel-vlg.png", 
    title: "Падел-комплекс «Rocket padel»", 
    type: "Падел-комплекс", 
    location: "Россия, Волгоград", 
    year: 2025,
    designCode: "Кодовые слова: многоуровневость, цвет, вечное лето, образ жизни.",
    designPrinciple: "Бизнес - это про окупаемость и эффективность использования каждого уголка помещения. Каждый сантиметр пространства должен работать и приносить пользу. \nЭргономика - это про комфорт человека внутри пространства. Мы мысленно проживаем каждый возможный маршрут гостя, чтобы ему везде было удобно, понятно и приятно находиться. \nКонцепция – это создании истории. Дизайн для нас не просто оформление, а целый мир со своим характером, атмосферой и сюжетностью.",
    area: "3000 м²",
    timeline: "3 месяца",
    gallery: [
      "/projects/rocket-padel-vlg/1.png", 
      "/projects/rocket-padel-vlg/2.png", 
      "/projects/rocket-padel-vlg/3.png",
      "/projects/rocket-padel-vlg/4.png",
      "/projects/rocket-padel-vlg/5.png",
    ]
  },
];

export function getAllProjects(): Project[] { 
  return PROJECTS; 
}

export function getProjectBySlug(slug: string): Project | undefined { 
  return PROJECTS.find((p) => p.slug === slug && !p.isSoon); 
}
