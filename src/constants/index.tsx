import {
  redFlat,
  tgIcon,
  vkIcon,
  waIcon,
  bisnesCar,
  busCar,
  comfortCar,
  minivenCar,
  vClassCar,
  watherFallsImg1,
  watherFallsImg2,
  watherFallsImg3,
  blueLaceImg,
  divingImg,
  gaagrImg,
  vorontsovskayaCave,
  sochiOverview,
  jeepTour,
  solokhAulJeep,
  mammothGorgeJeep,
  quadrobike,
  rafting,
  jeepTourAbkhazia,
  jeepTourRitsa,
  thermalSpring,
  dolphinarium,
  seaSafary,
  seaFish,
  seaYachtArenda,
  gelendjik,
  krym,
  redFlat2,
  sochiHotel,
  abhaziyaHotel,
  anapaHotel,
  agurWaterfall,
  vorontsovskayaCave2,
  westAbhazia,
  abkhazia,
  thermalSpring2,
  sawSochi,
  chernigovka,
  newAfon,
  rica,
	horses,
	abhaziya2
} from '../assets';

export const socialLinks = [
  {
    name: 'vk',
    link: 'https://vk.com/familytour_sochi',
    description: 'Ссылка на нашу группу в ВК',
    src: vkIcon,
  },
  {
    name: 'tg',
    link: 'https://t.me/+9PR0IhZB_R44OTUy',
    description: 'Ссылка на наш телеграмм канал',
    src: tgIcon,
  },
  {
    name: 'wa',
    link: '#',
    description: 'Ссылка для связи WhatsApp',
    src: waIcon,
  },
];

export const menuLinks = [
  {
    name: 'Экскурсии',
    link: '#excurs',
  },
  {
    name: 'VIP-Туры',
    link: '#vipTours',
  },
  {
    name: 'Море',
    link: '#sea',
  },
  {
    name: 'Отели',
    link: '#hotelSection',
  },
  {
    name: 'Трансфер',
    link: '#transfers',
  },
  {
    name: 'Отзывы',
    link: '#reviews',
  },
  {
    name: 'Контакты',
    link: '#contacts',
  },
];

export const excursCardsInfo = [
  {
    id: 0,
    name: 'Красная поляна',
    order: '',
    description: {
      info: `Одно из самых популярных направлений по Сочи - это конечно же Красная Поляна и если вы
      приехали к нам на курорт и не были ещё ни разу там, то это необходимо обязательно сделать!
      Совсем другой уровень цивилизации в горах. А сколько красивых видовых и пейзажей вы увидите.
      Три курорта - Газпром, Красная Поляна и Роза Хутор, которые были построены к ХХII зимним
      олимпийским играм 2014года. Канатная дорога - это одно из самых красивых впечатлений- до
      самого Пика - высота 2320м - при подъёме- множество развлечений, таких как Родельбан, качели
      над облаками, подвесной мост, парк Ийети, парк Альпак, Хаски и многое другое. Путешествие в
      горы принесет вам незабываемые воспоминания. Экскурсия на комфортабельных автобусах, в
      сопровождении профессионалов экскурсоводов.`,
      marshrut: [
        `Ахштырский каньон (смотровая SKYBRIDGE)`,
        `Ущелье Ах-Цу (статуя Геракл)`,
        `Обед (в стоимость экскурсии не включен)`,
        `Дегустация краснополянского меда и вина`,
        `Курорт Красная Поляна`,
        `Курорт Роза Хутор, площадь Ратуши`,
        `Курорт Газпром Лаура, ОКЦ Галактика`,
        `Шоу поющих фонтанов в олимпийском парке`,
      ],
      dopUslugi: [
        `Подьем на канатной дороге на выбор: Роза Хутор, Красная Поляна, Аквапарк
      Галактика (3 часа)`,
      ],
      time: `Ежедневно 10:00 - 11:00`,
    },
    img: [redFlat],
    isHit: true,
    isNew: false,
    startPrice: '800р',
  },
  {
    id: 1,
    name: 'Воронцовская пещера',
    order: '',
    description: {
      info: `Воронцовская пещера известна как наиболее протяженная карстовая полость в районе Сочи
      и в Краснодарском крае в целом. Длина Воронцовских пещер — 11720 метров. В пещерах были
      обнаружены артефакты позднего палеолита и других эпох, стоянки древних людей, кости
      пещерного медведя. Спуск по лестницам, по всему маршруту есть подсветка, в том числе
      цветная — на сводах пещеры. Каждую экскурсионную группу сопровождает специально
      обученный гид. Он с юмором и эрудированностью. Так же в экскурсии вы посетите Чайные
      плантации.`,
      marshrut: [
        `Чайные плантации - дегустация чая`,
        `Поселок Воронцовка`,
        `Сказочный лес`,
        `Воронцовская пещера`,
      ],
      dopUslugi: [
        `Тропа (+200 р) (дети до 10 лет бесплатно)`,
        `Чайные плантации (+100 р) (дети до 10 лет бесплатно)`,
        `Пещера (450 р - взрослый / 300 р - детский)`,
      ],
      time: `вторник, четверг, суббота 13:00`,
    },
    img: [vorontsovskayaCave],
    isHit: false,
    isNew: false,
    startPrice: '1100р',
  },
  {
    id: 2,
    name: 'Обзорная по Сочи',
    order: '',
    description: {
      info: `Уникальное путешествие по солнечному Сочи и его достопримечательностям.
      Квалифицированные экскурсоводы и комфортабельный трансфер. Это один из лучших способов
      познакомиться с городом. По желанию выйти в море и прокатиться на теплоходе.`,
      marshrut: [
        `Гора Большой Ахун`,
        `Дегустация меда и вина`,
        `Дача Сталина`,
        `Курортный проспект`,
        `Морской порт Сочи`,
        `Центральная набережная Сочи`,
      ],
      dopUslugi: [
        `По желанию: Колесо обозрения, морская прогулка на теплоходе, Дача Сталина.`,
      ],
      time: `Ежедневно 12:30`,
    },
    img: [sochiOverview],
    isHit: true,
    isNew: false,
    startPrice: '1000р',
  },
  {
    id: 3,
    name: 'Джип-тур',
    semiName: 'Мокрый каньон Псахо',
    order: '',
    description: {
      info: `Мокрый каньон Псахо – это не просто интересная локация, это настоящий квест, полный экстрима
      и волшебства, где каждый момент запоминается навсегда. Для тех, кто ищет настоящий драйв и
      эмоции, лучше выбрать путешествие на джипе. Так же вы сможете в знойную жару искупаться в
      каньоне и по - настоящему окунуться в атмосферу созданной природой.`,
      marshrut: [
        `Ахштырский каньон (гнездо Совы)`,
        `Ущелье Ах-Цу (статуя Геракл)`,
        `Самшитовая роща`,
        `Источник голубой глины`,
        `Каньон Псахо`,
        `По желанию: Ахштырская пещера`,
      ],
      dopUslugi: [],
      time: `ежедневно 13:00`,
    },
    img: [jeepTour],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 1900р <br /> детский до 9 лет: 1600р
      </>
    ),
  },
  {
    id: 4,
    name: 'Джип-тур',
    semiName: 'по окрестностям СОЛОХ-АУЛА',
    order: '',
    description: {
      info: `Одно из удивительных мест Большого Сочи под названием Солохаул уже многие годы
      притягивает к себе внимание большого числа туристов. Веселой компанией, под громкую музыку
      с опытными водителями на внедорожниках отправляемся в путешествие по самым красивейшим
      местам.`,
      marshrut: [
        `Чайные плантации`,
        `Мужской монастырь`,
        `Усадьба Кошмана`,
        `Гора ведьмы`,
        `Водопад Девичья коса`,
        `Часовня иконы Божьей Матери Троеручица`,
        `Смотровая площадка на краю света`,
        `Святой источник Великомученика и целителя Пантелеймона`,
        `Дагомыские корыта (купание)`,
      ],
      dopUslugi: [
        `Невероятная возможность прокатиться на Зиплайне протяженностью 1км, который расположен на
        высоте 200метров над рекой Шахе.`,
      ],
      time: `ежедневно 13:00`,
    },
    img: [solokhAulJeep],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2400р <br /> детский до 9 лет: 2100р
      </>
    ),
  },
  {
    id: 5,
    name: 'Джип-тур',
    semiName: 'Ущелье Мамонта',
    order: '',
    description: {
      info: `Мамонтово Ущелье -природный аквапарк в парке Юрского периода. Вас окутает сказочное
      окружение природы, легкий холодок навеваемый рекой Безымянка и дурманящий запах
      настоящего кавказского шашлыка. Экскурсовод ознакомит Вас с растительным миром Кавказа и
      расскажет легенду о древних амазонках.`,
      marshrut: [
        `Каньон Мамонта`,
        `Самщитовая роща`,
        `Водопад Девичьи слезы`,
        `Каньон Затерянный мир`,
        `Смотровая с панорамой кавказских гор`,
        `Сплав с каньонщиками на горках по желанию`,
      ],
      dopUslugi: [],
      time: `ежедневно 13:00`,
    },
    img: [mammothGorgeJeep],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2300р <br /> детский до 9 лет: 2000р
      </>
    ),
  },
  {
    id: 6,
    name: '33 водопада',
    order: '',
    description: {
      info: `В поселке Большой Кичмай вам предложат продегустировать вино, мед, сыр. Отправимся на
      вездеходах - военные ГАЗ-66 по руслу реки Шахе к водопадам, которые оборудованы
      деревянными мостиками. В завершении зажигательное шоу - Адыгейская свадьба.`,
      marshrut: [
        `Знакомство с легендами и обычаями адыгов`,
        `Красивейшие места долины реки Шахе (переправа по реке на военных Газ-66)`,
        `33 водопада`,
        `Кавказское шоу с застольем`,
      ],
      dopUslugi: [],
      time: `с шоу: среда, суббота, воскресенье; обычные водопады: вторник, четверг`,
    },
    img: [watherFallsImg2],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 1800р <br /> детский до 18 лет: 1400р
      </>
    ),
  },
  {
    id: 7,
    name: 'Квадроциклы',
    order: '',
    description: {
      info: `Захватывающие поездки на квадроциклах. Включено: к самостоятельному управлению
      квадроциклом и багги допускаются только мужчины и женщины старше 18 лет. Один квадроцикл – 2 человека.
      Страховка, шлем, перчатки. Инструктаж. Трансфер до места и обратно.`,
      marshrut: [
        `Сказочный лес - лесные тропы, движение по руслу горной реки, овраги, крутые подъемы и спуски.`,
        `Лесной водопад - движение по руслу реки, форсирование грязевых участков и крутых подъемов.`,
        `Царский мост - одно из самых красивых мест в Краснодарском крае, густые лианы, речные пороги.`,
      ],
      dopUslugi: [],
      time: `ежедневно: 9:30, 12:50, 14:40`,
    },
    img: [quadrobike],
    isHit: false,
    isNew: false,
    startPrice: '4000р',
  },
  {
    id: 8,
    name: 'Рафтинг',
    semiName: 'сплав по реке Мзымта',
    order: '',
    description: {
      info: `Сплав по речным порогам продолжительностью 2 часа. Протяженность маршрута 14 км.
      Посетите одно из самых живописных ущелий на реке Мзымта - Ущелье Ах-Цу, на финише
      расположена зона отдыха, а также после сплава можно посетить баню на территории и окунуться
      в холодный бассейн.`,
      marshrut: [],
      dopUslugi: [`По желанию можно заказать вино, чачу, шашлык и рыбу.`],
      time: `ежедневно с 13:00`,
    },
    img: [rafting],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2700р <br /> детский до 10 лет: 2000р
      </>
    ),
  },
  {
    id: 9,
    name: 'Джип-тур',
    semiName: 'Парк водопадов',
    order: '',
    description: {
      info: `Акармара, Ткуарчал - место, которое трудно забыть, оказавшись в котором вы перенесётесь на
      десятилетия назад. Места тут красивые даже по меркам Кавказа: узкие ущелья, прорезанные реками и
      лесистые склоны гор в которых прячутся лечебные источники.`,
      marshrut: [
        `Гагра – Белые скалы`,
        `Г. Сухум`,
        `Заброшенные города: Ткуарчал, Акармара`,
        `Дегустации вина, чачи, сыра`,
        `Парк водопадов: Губский, Ирина, Великан`,
        `Термальные источники`,
      ],
      dopUslugi: [
        `Экосбор на водопады - 400₽`,
        `Обед`,
        `Термальные источники – 300₽`,
      ],
      time: `ежедневно в 6:30`,
    },
    img: [jeepTourAbkhazia],
    isHit: false,
    isNew: false,
    startPrice: '4000р',
  },
  {
    id: 10,
    name: 'Абхазия',
    semiName: 'Золотое кольцо',
    order: '',
    description: {
      info: `Не были ещё в Абхазии? Тогда Вам несомненно необходимо забронировать самый популярный маршрут
      на сегодняшний день!`,
      marshrut: [
        `Гагра - смотровая`,
        `Колоннада`,
        `Гагрипш ресторан`,
        `Парк принца Ольденбургского`,
        `Юпшарский каньон`,
        `Голубое озеро`,
        `Дегустация вина, сыра, меда`,
        `Водопад мужские и девичьи слезы`,
        `Озеро Рица`,
        `Молочный водопад и Дача Сталина (по желанию)`,
        `Новый Афон`,
        `Новоафонский монастырь`,
        `Новоафонский водопад`,
        `Станция Псцырха`,
        `Новоафонская пещера (доп. плата 700₽)`,
        `Парк с лебедями`,
      ],
      dopUslugi: [
        `Обед`,
        `Молочный водопад`,
        `Дача Сталина`,
        `Катамараны на озере Рица`,
      ],
      time: `ежедневно 6:00`,
    },
    img: [newAfon],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2200р <br /> детский до 12 лет: 1900р
      </>
    ),
  },
  {
    id: 11,
    name: 'Джип-тур',
    semiName: 'Рица - Гегский водопад',
    order: '',
    description: {
      info: `Джип пройдет по бездорожью и поможет добраться до самых впечатляющих и красивых мест. Высота Гегского водопада составляет 50 метров, а гора из которой он бьёт бурным потоком воды составляет 70 метров, именно поэтому создаётся полное впечатление, что как будто из огромной каменной раны, находящейся в центре отвесной скалы, извергается бурный поток кристально-чистой и очень холодной воды.`,
      marshrut: [
        `Белые скалы`,
        `Гагра: Колоннада`,
        `Подвесной мост над рекой Бзыбь`,
        `Дегустация вина, меда, сыра`,
        `Голубое озеро`,
        `Гегский водопад`,
        `Юпшарский каньон`,
        `Чабгарзский карниз`,
        `Смотровая Прощай Родина`,
        `Озеро Рица`,
      ],
      dopUslugi: [],
      time: `ежедневно`,
    },
    img: [jeepTourRitsa],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2500р <br /> детский до 10 лет: 2200р
      </>
    ),
  },
  {
    id: 12,
    name: 'Кындыг',
    semiName: 'Термальный источник',
    order: '',
    description: {
      info: ``,
      marshrut: [
        `Парк принца Ольденбурского`,
        'Колоннада',
        'г.Сухум - набережная махаджиров',
        'Новоафонский мужской монастырь Симона Канонита',
        'Фонтан с грифонами',
        'ущелье Черниговка',
        'Термальный источник Кындыг',
      ],
      dopUslugi: [],
      time: `По четным числам в 6:00`,
    },
    img: [thermalSpring],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2300р <br /> детский до 12 лет: 2000р
      </>
    ),
  },
  {
    id: 13,
    name: 'Рица + Пицунда',
    order: '',
    description: {
      info: ``,
      marshrut: [
        `Смотровая г. Гагра`,
        `Гагрипш ресторан`,
        `Колоннада`,
        `Бзыбское ущелье`,
        ` Подвесной мост над рекой Бзыбь`,
        ` Чабгарзский карниз`,
        ` Водопад мужские слезы`,
        `Озеро Рица`,
        ` Пицунда (купание в море – 2 часа)`,
      ],
      dopUslugi: [],
      time: `ежедневно 6:30`,
    },
    img: [rica],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2300р <br /> детский до 12 лет: 2000р
      </>
    ),
  },
  {
    id: 14,
    name: 'Дельфинарий',
    order: '',
    description: {
      info: `Вас ждет увлекательная программа 3 в 1: сорокоминутное шоу, Сочинский Дельфинарий, Океанариум, Пингвинарий. Это отличная возможность провести время для всей семьи в любую погоду в любое время года.`,
      marshrut: ['Сочинский дельфинарий', 'Океанариум', 'Пингвинарий'],
      dopUslugi: [],
      time: `среда, суббота в 13:00`,
    },
    img: [dolphinarium],
    isHit: false,
    isNew: false,
    startPrice: '2400р',
  },
  ,
  {
    id: 15,
    name: 'Конные прогулки',
    order: '',
    description: {
      info: 'Первозданная природа Сочи и обаятельные лошади — сочетание, которое сделает нашу конную прогулку по равнинам и лесам Кудепсты душевной и незабываемой. Вы проедете верхом вдоль живописных равнин, с обзорной площадки увидите Сочинский национальный парк, полюбуетесь зеленым бархатом тисо-самшитовой рощи и охладитесь в горной реке.',
      marshrut: [
        'из Адлера/Сириус',
        '1,5часа в седле',
        'Есть возможность искупаться в горной реки во время экскурсии',
        'Самым маленьким - опытные  инструктора',
        'Остановка на смотровой площадке ',
        'Прогулка по лесу',
      ],
      dopUslugi: ['Индивидуально тоже можно!'],
      time: `Ежедневно: 10:00, 14:00, 16:00`,
    },
    img: [horses],
    isHit: false,
    isNew: false,
    startPrice: '2500р',
  },
  {
    id: 17,
    name: 'Тур на озеро Рица',
    semiName: 'в мини группе',
    order: '',
    description: {
      info: 'Хотите на экскурсию в Абхазию в небольшой группе, на комфортабельном минивене? Тогда Вам точно к нам! Вы сможете отправиться на озеро Рица в мини группе. Экологический сбор включён в стоимость экскурсии.',
      marshrut: [
        'Гагра',
        'Смотровая Я 🧡 Гагру',
        'Гагрипш ресторан',
        'Парк принца Ольденбурского',
        'Голубое озеро',
        'Обед (не входит в стоимость тура)',
        'Юпшарский каньон',
        'Мостик через реку Бзыбь',
        'Чабгарзский карниз',
        'озёро Рица ',
      ],
      dopUslugi: [''],
      time: `Ежедневно в группе 8-9 человек`,
    },
    img: [jeepTourRitsa],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 3000р <br /> детский до 10 лет: 2600р
      </>
    ),
  },
];

export const vipToursCardsInfo = [
  {
    id: 0,
    name: 'Красная поляна',
    order: '',
    description: {
      info: `Одно из самых популярных направлений по Сочи - Красная Поляна. Если вы ещё не были там, это необходимо сделать! Потрясающие виды, три курорта - Газпром, Красная Поляна и Роза Хутор, множество развлечений и канатные дороги.`,
      marshrut: [
        'Ахштырский каньон (смотровая SKYBRIDGE)',
        'Белые скалы - Skybridge',
        'Ущелье Ах-Цу',
        'Смотровая статуя Геракл',
        'пгт Красная Поляна - обзор',
        'Дегустация вина, меда',
        'Обед в кавказском дворе',
        'село Эсто-Садок',
        'Три курорта: Красная Поляна, Газпром, Роза-Хутор',
        'Подъем на канатной дороге на одном из курортов',
        'Культурно-этнографический центр "Моя Россия"',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 6 часов`,
    },
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        Из Адлера\Сириуса - 9 000р <br /> Из центрального Сочи - 13 000р
      </>
    ),
  },
  {
    id: 1,
    name: 'Обзорная по Сочи',
    semiName: 'из Адлера',
    order: '',
    description: {
      info: 'Обзорная экскурсия по Сочи, включающая ключевые достопримечательности, такие как гора Ахун, дача Сталина и морской порт.',
      marshrut: [
        'Гора Ахун - смотровая башня',
        'Ахун: колесо обозрения',
        'Южная резиденция Деда Мороза',
        'Дегустация вина и меда',
        'Обед в Кавказском дворе',
        'Дача Сталина',
        'Курортный проспект',
        'Променад Навагинская',
        'Морской порт Сочи (прогулка по желанию)',
        'Площадь Зимнего театра',
        'Нарзановый источник',
      ],
      dopUslugi: [],
      time: 'ежедневно, продолжительность - 6 часов',
    },
    img: [sawSochi],
    isHit: false,
    isNew: false,
    startPrice: '13 000р',
  },
  {
    id: 2,
    name: 'Обзорная по Сочи',
    order: '',
    semiName: 'из центрального Сочи',
    description: {
      info: 'Экскурсия с посещением основных объектов Сочи, включая Олимпийский парк и дачу Сталина.',
      marshrut: [
        'Площадь Зимнего театра',
        'Нарзановый источник',
        'Дача Сталина',
        'Гора Ахун - смотровая башня',
        'Колесо обозрения',
        'Летняя резиденция Деда Мороза',
        'Дегустация вина и меда',
        'Обед - Кавказский двор',
        'Олимпийский парк - обзор олимпийских объектов',
        'Медальная площадь - променад',
        'Прогулка по морю (по желанию)',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 8 часов`,
    },
    img: [sochiOverview],
    isHit: false,
    isNew: false,
    startPrice: '15 000р',
  },
  {
    id: 3,
    name: 'Водопады Сочи',
    order: '',
    description: {
      info: 'Экскурсия с посещением живописных водопадов Сочи и Мацестинской долины.',
      marshrut: [
        'Агурское ущелье (тропа здоровья)',
        'Агурские водопады - 3 каскада',
        'Дегустация вина и меда',
        'Обед',
        'Мацестинская долина',
        'Змейковские водопады',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 6 часов`,
    },
    img: [agurWaterfall],
    isHit: false,
    isNew: false,
    startPrice: '13 000р',
  },
  {
    id: 4,
    name: 'Природный СПА и Воронцовская пещера',
    order: '',
    description: {
      info: 'Уникальная экскурсия по природным красотам с посещением Воронцовской пещеры и СПА.',
      marshrut: [
        'Чайные плантации (дегустация чая)',
        'Воронцовская пещера (царство Аида)',
        'Дерево желаний',
        'Тисо-самшитовый лес',
        'Обед',
        'Дегустация вина и меда',
        'Навалищенское ущелье - парение в русской бане и купание в горной реке (по желанию)',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 8 часов`,
    },
    img: [vorontsovskayaCave2],
    isHit: false,
    isNew: false,
    startPrice: '14 000р',
  },
  {
    id: 6,
    name: 'По окрестностям',
    semiName: 'Солох-Аула',
    order: '',
    description: {
      info: 'Экскурсия по живописным местам Солох-Аула с посещением чайных плантаций и смотровой площадки "На краю света".',
      marshrut: [
        'Дагомысские корыта',
        'Чайные плантации',
        'Смотровая площадка "На краю света"',
        'Зип лайн (по желанию)',
        'Обед в Кавказском дворе',
        'Усадьба Кошмана',
        'Мужской монастырь',
        'Часовня иконы Божьей Матери Троеручица',
        'Святой источник Великомученика и целителя Пантелеймона',
      ],
      dopUslugi: ['Зип лайн (по желанию)'],
      time: `ежедневно, продолжительность - 10 часов`,
    },
    img: [solokhAulJeep],
    isHit: false,
    isNew: false,
    startPrice: '20 000р',
  },
  {
    id: 7,
    name: 'Абхазия',
    semiName: 'Озеро Рица',
    order: '',
    description: {
      info: 'Незабываемая экскурсия в Абхазию с посещением знаменитого озера Рица и других природных достопримечательностей.',
      marshrut: [
        'Белые скалы',
        'Смотровая "Я люблю Гагра"',
        'Парк принца Ольденбурского',
        'Гагрипш ресторан',
        'Колоннада',
        'Мостик через реку Бзыбь',
        'Дегустация вина, меда, чая',
        'Водопад "Мужские и девичьи слезы"',
        'Абхазский двор (стеклянный мост, качели на берегу реки)',
        'Обед',
        'Голубое озеро (тарзанка - по желанию)',
        'Юпшарский каньон',
        'Чабгарзский карниз',
        'Озеро Рица',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 8-10 часов`,
    },
    img: [rica],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        Из Адлера\Сириуса - 15 000р <br /> Из центрального Сочи - 18 000р
      </>
    ),
  },
  {
    id: 8,
    name: 'Абхазия',
    semiName: 'Золотое кольцо',
    order: '',
    description: {
      info: 'Экскурсия по основным достопримечательностям Абхазии с посещением озера Рица и Нового Афона.',
      marshrut: [
        'Гагра',
        'Парк принца Ольденбурского',
        'Колоннада',
        'Новый Афон',
        'Новоафонский мужской монастырь',
        'Новоафонская пещера (по желанию)',
        'Рукотворный водопад',
        'Станция Псцырха',
        'Винодельня, сыроварня - дегустации',
        'Медовый двор',
        'Обед - Абхазский двор (стеклянный мост через реку Бзыбь)',
        'Голубое озеро',
        'Юпшарский каньон',
        'Чабгарзский карниз',
        'Озеро Рица',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 10 часов`,
    },
    img: [abkhazia],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        Из Адлера\Сириуса - 17 000р <br /> Из центрального Сочи - 20 000р
      </>
    ),
  },
  {
    id: 9,
    name: 'Абхазия',
    semiName: 'Таинственное ущелье - Черниговка',
    order: '',
    description: {
      info: 'Экскурсия в Абхазию с посещением живописного ущелья Черниговка и столицы Абхазии - Сухум.',
      marshrut: [
        'Гагра',
        'Колоннада',
        'Новый Афон',
        'Новоафонский мужской монастырь',
        'Рукотворный водопад',
        'Сухум - столица Абхазии',
        'Набережная Махаджиров',
        'Дегустация вина, меда, сыра',
        'Обед - Апасцха',
        'Черниговка - живописное ущелье, водопады',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 10 часов`,
    },
    img: [chernigovka],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        Из Адлера\Сириуса - 17 000р <br /> Из центрального Сочи - 20 000р
      </>
    ),
  },
  {
    id: 10,
    name: 'Абхазия',
    semiName: 'Термальные источники',
    order: '',
    description: {
      info: 'Тур по Абхазии с посещением термального источника "Кындыг" и городов Гагра и Новый Афон.',
      marshrut: [
        'Гагра',
        'Парк принца Ольденбурского',
        'Колоннада',
        'Новый Афон',
        'Новоафонский мужской монастырь',
        'Винодельня, сыроварня - дегустации',
        'Сухум - набережная Махаджиров',
        'Обед - Апасцха',
        'Термальный источник "Кындыг" - сероводородный источник, купание',
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 10-12 часов`,
    },
    img: [thermalSpring2],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        Из Адлера\Сириуса - 18 000р <br /> Из центрального Сочи - 22 000р
      </>
    ),
  },
  {
    id: 11,
    name: 'Восточная Абхазия',
    order: '',
    description: {
      info: 'Тур по Абхазии с посещением термального источника "Кындыг" и городов Гагра и Новый Афон.',
      marshrut: [
        'Гагра',
        'Колоннада',
        'Новый Афон',
        'Новоафонский мужской монастырь',
        'Винодельня, сыроварня - дегустации',
        'Сухум - набережная Махаджиров',
        'Дранда - кофе тайм',
        'Заброшенные города: Ткуарчал, Акармара - фотосессия',
				'Водопады:Святой, Ирина, Великан - пересадка на внедорожник'
      ],
      dopUslugi: [],
      time: `ежедневно, продолжительность - 12 часов`,
    },
    img: [westAbhazia],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        Из Адлера\Сириуса - 28 000р
      </>
    ),
  },
	{
		id: 12,
		name: 'Семейный тур в Абхазию',
		order: '',
		description: {
			info: 'Экскурсия для всей семьи с посещением природных и культурных достопримечательностей Абхазии, включая парк Львов и питомник обезьян.',
			marshrut: [
				'Парк принца Ольденбурского',
				'Колоннада',
				'Парк Львов',
				'Новый Афон',
				'Приморский парк - лебединое озеро, страусиная ферма',
				'Сухум - набережная Махаджиров',
				'Обед - национальная кухня - Апацха',
				'Питомник обезьян - кормление животных'
			],
			dopUslugi: [],
			time: 'ежедневно, продолжительность - 12 часов',
		},
		img: [abhaziya2],  // Заменить на нужное изображение
		isHit: false,
		isNew: false,
		startPrice: (
			<>
				Из Адлера\Сириуса: 20 000р <br />
			</>
		),
	},
	{
		id: 13,
		name: 'Абхазия',
    semiName: 'Гагра + Новый Афон',
		order: '',
		description: {
			info: 'Тур по достопримечательностям Гагры и Нового Афона. Комфортабельный минивен, дегустация местных вин и экскурсия по культурным объектам.',
			marshrut: [
				'Смотровая площадка "Я люблю Гагру"',
				'Парк принца Ольденбурского',
				'Колоннада',
				'Гагрипш ресторан',
				'Дегустация - винный двор, сыроварня',
				'Новый Афон',
				'Новоафонский мужской монастырь',
				'Новоафонская пещера',
				'Рукотворный водопад',
				'Станция Псцырха',
				'Грот Симона Канонита',
				'Храм Симона Канонита',
				'Приморский парк',
				'Анакопийская крепость VIII века'
			],
			dopUslugi: [],
			time: 'ежедневно, продолжительность - 10 часов',
		},
		img: [newAfon],  // Заменить на нужное изображение
		isHit: false,
		isNew: false,
		startPrice: (
      <>
        Из Адлера\Сириуса - 15 000р <br /> Из центрального Сочи - 18 000р
      </>
    ),
	},

];

export const seaCardsInfo = [
  {
    id: 0,
    name: 'Морские прогулки',
    order: '',
    description: {
      info: `Морская прогулка в открытом море на роскошных яхтах, катерах. Панорама олимпийских объектов. Возможна встреча с дельфинами. Купание в открытом море. Порт Сочи, порт Имеретинский`,
      marshrut: [],
      dopUslugi: [],
      time: `ежедневно 1,5 часа в море`,
    },
    img: [seaYachtArenda],
    isHit: false,
    isNew: false,
    startPrice: '1700р',
  },
  {
    id: 1,
    name: 'Рыбалка',
    order: '',
    description: {
      info: `Приглашаем Вас на незабываемую морскую рыбалку в открытом море. Наш опытный капитан отвезет вас в самые рыбные места вблизи побережья Сочи.
			Встреча с дельфинами.
			Купание в открытом море.
			Приготовление улова на борту,
			удочки и снасти выдаются.
			`,
      marshrut: [],
      dopUslugi: [],
      time: (
        <>
          {' '}
          ежедневно <br /> - Имеретинский порт <br /> - порт Кудепста <br />{' '}
          - порт Сочи <br />
          Продолжительность - 3 часа{' '}
        </>
      ),
    },
    img: [seaFish],
    isHit: false,
    isNew: false,
    startPrice: 'ОТ 2400р',
  },
  {
    id: 2,
    name: 'Дайвинг',
    order: '',
    description: {
      info: `Удивительный подводный мир Черного моря восхищает и вдохновляет. Позволяет познакомиться с морскими обитателями. Захватывающе провести время. Погружение под водой 40мин`,
      marshrut: [],
      dopUslugi: [],
      time: `ежедневно`,
    },
    img: [divingImg],
    isHit: false,
    isNew: false,
    startPrice: (
      <>
        взрослый: 2700р <br /> детский с 9 до 14 лет: 2800р
      </>
    ),
  },
  {
    id: 3,
    name: 'Аренда яхт и катеров',
    order: '',
    description: {
      info: `У нас большой выбор яхт и катеров на любой вкус и кошелек.
			Ощутите свободу и безмятежность, рассекая волны на фоне живописных пейзажей. Насладитесь купанием в открытом море. Запечатлите самые яркие моменты на фото и видео, которыми захочется делиться со всем миром. Наши катера оснащены всем необходимым для первоклассного отдыха на воде:
			Палуба с зоной отдыха и загара
			Организация романтического свидания,выход на закат,день рождение.
			Опытный капитан,который обеспечит вашу безопасность и сделает путешествие максимально приятным.
			`,
      marshrut: [],
      dopUslugi: [],
      time: `ежедневно`,
    },
    img: [seaSafary],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
];

export const hotelsCardsInfo = [
  {
    id: 1,
    name: 'Сочи',
    order: '',
    description: {
      info: `У нас Вы можете забронировать любой отель на Черноморском побережье, наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все  пожелания и предложим варианты размещения для всей вашей семьи. Наша компания знает все нюансы по каждому отелю, так как наш офис находится в городе Сочи и наши менеджеры были в каждом отеле лично и смогут проконсультировать вас зная все изнутри. Заполните форму для брони, и мы свяжемся с вами!`,
      marshrut: [],
      dopUslugi: [],
      time: ``,
    },
    img: [sochiHotel],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 2,
    name: 'Красная поляна',
    order: '',
    description: {
      info: `У нас Вы можете забронировать любой отель на Черноморском побережье, наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все  пожелания и предложим варианты размещения для всей вашей семьи. Наша компания знает все нюансы по каждому отелю, так как наш офис находится в городе Сочи и наши менеджеры были в каждом отеле лично и смогут проконсультировать вас зная все изнутри. Заполните форму для брони, и мы свяжемся с вами!`,
      marshrut: [],
      dopUslugi: [],
      time: ``,
    },
    img: [redFlat2],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 3,
    name: 'Абхазия',
    order: '',
    description: {
      info: `У нас Вы можете забронировать любой отель на Черноморском побережье, наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все  пожелания и предложим варианты размещения для всей вашей семьи. Наша компания знает все нюансы по каждому отелю, так как наш офис находится в городе Сочи и наши менеджеры были в каждом отеле лично и смогут проконсультировать вас зная все изнутри. Заполните форму для брони, и мы свяжемся с вами!`,
      marshrut: [],
      dopUslugi: [],
      time: ``,
    },
    img: [abhaziyaHotel],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 4,
    name: 'Геленджик',
    order: '',
    description: {
      info: `У нас Вы можете забронировать любой отель на Черноморском побережье, наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все  пожелания и предложим варианты размещения для всей вашей семьи. Наша компания знает все нюансы по каждому отелю, так как наш офис находится в городе Сочи и наши менеджеры были в каждом отеле лично и смогут проконсультировать вас зная все изнутри. Заполните форму для брони, и мы свяжемся с вами!`,
      marshrut: [],
      dopUslugi: [],
      time: ``,
    },
    img: [gelendjik],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 5,
    name: 'Анапа',
    order: '',
    description: {
      info: `У нас Вы можете забронировать любой отель на Черноморском побережье, наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все  пожелания и предложим варианты размещения для всей вашей семьи. Наша компания знает все нюансы по каждому отелю, так как наш офис находится в городе Сочи и наши менеджеры были в каждом отеле лично и смогут проконсультировать вас зная все изнутри. Заполните форму для брони, и мы свяжемся с вами!`,
      marshrut: [],
      dopUslugi: [],
      time: ``,
    },
    img: [anapaHotel],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 6,
    name: 'Крым',
    order: '',
    description: {
      info: `У нас Вы можете забронировать любой отель на Черноморском побережье, наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все  пожелания и предложим варианты размещения для всей вашей семьи. Наша компания знает все нюансы по каждому отелю, так как наш офис находится в городе Сочи и наши менеджеры были в каждом отеле лично и смогут проконсультировать вас зная все изнутри. Заполните форму для брони, и мы свяжемся с вами!`,
      marshrut: [],
      dopUslugi: [],
      time: ``,
    },
    img: [krym],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
];

export const transferTarifOptions = [
  {
    id: 1,
    name: 'Комфорт класс',
    description: '',
    carImg: comfortCar,
    startPrice: 'От 1000р',
    order: 1,
    invisible: false,
  },
  {
    id: 2,
    name: 'Бизнес класс',
    description: '',
    carImg: bisnesCar,
    startPrice: 'От 2000р',
    order: 2,
    invisible: false,
  },
  {
    id: 3,
    name: 'Минивен',
    description: 'до 7 пассажиров',
    carImg: minivenCar,
    startPrice: 'От 1500р',
    order: 3,
    invisible: false,
  },
  {
    id: 4,
    name: 'Микроавтобус',
    description: 'до 20 пассажиров',
    carImg: busCar,
    startPrice: '',
    order: 4,
    invisible: false,
  },
  {
    id: 5,
    name: 'V - Класс',
    description: '',
    carImg: vClassCar,
    startPrice: 'От 3000р',
    order: 5,
    invisible: false,
  },
];

export const reviewsCardsInfo = [
  {
    id: 0,
    name: 'Имя скрыто',
    title: 'Great Last Minute Organization',
    description:
      'We just got back to the hotel from a great day out! Many thanks for the last minute organisation! We had a lovely time and Ivan was amazing 😊',
    timeTag: '4 июня 2024',
    stars: 5,
  },
  {
    id: 1,
    name: 'Имя скрыто',
    title: 'Thank You!',
    description:
      'Добрый день! Спасибо вам огромное за организацию, встречу и опытного водителя ❤️🚍 я всё переживала, что приедет на автобусе ехать Работаете ответственно, добросовестно, качественно, а не на количество клиентов! 🥰',
    timeTag: '20 мая 2024',
    stars: 5,
  },
  {
    id: 2,
    name: 'marina1.2018',
    title: 'Спасибо!',
    description:
      'СПАСИБО ОТ ВСЕЙ НАШЕЙ СЕМЬИ ЗА ВАШЕ ВНИМАНИЕ, СЕРВИС ИНТЕРЕСНЫЕ ЭКСКУРСИИ. МОЛОДЦЫ РЕБЯТА! ВСЕМ РЕКОМЕНДУЕМ!!!',
    timeTag: '17 июля 2024',
    stars: 5,
  },
  {
    id: 3,
    name: 'Имя скрыто',
    title: 'Enjoyable Walk',
    description:
      'Наталья, спасибо за организацию нашего отдыха! Все было великолепно, начиная со встречи в аэропорту. Все экскурсии очень интересные, были организованы с учетом наших интересов. Мы, взрослые и дети, в восторге. Спасибо за индивидуальный подход! До новых встреч! ❤️',
    timeTag: '3 июля 2024',
    stars: 5,
  },
  {
    id: 4,
    name: 'Имя скрыто',
    title: 'Great Jeep Tour',
    description:
      'Супер тур-лучший водитель! Мы под впечатлением до сих пор. Спасибо',
    timeTag: '29 мая 2024',
    stars: 5,
  },
  {
    id: 5,
    name: 'Имя скрыто',
    title: 'Comfortable Trip',
    description:
      'Очень довольны встречей! Чистый и комфортный автомобиль, с кондиционером! Очень приятный и вежливый водитель 😊',
    timeTag: '11 июня 2024',
    stars: 5,
  },
  {
    id: 6,
    name: 'Имя скрыто',
    title: 'Morning Jeep Excursion',
    description:
      'Доброе утро 💋 Мы очень устали, поэтому не писали 🙈 Нам очень всё понравилось, насыщенно, познавательно😊 Даже не обращали внимание на то, что укачивало🔥🔥🔥 Индивидуальных экскурсиях это вообще супер🔥🔥🔥🔥 Вы молодцы, что организовали нам это, остались довольны 👏💯',
    timeTag: '30 июня 2024',
    stars: 5,
  },
  {
    id: 7,
    name: 'Имя скрыто',
    title: 'Красную Поляну Excursion',
    description:
      'Добрый вечер, да все супер понравилось! Мы и на качелях покатались)) Экскурсовод у вас тоже супер! Спасибо за впечатления! 🙌🌄',
    timeTag: '18 июля 2024',
    stars: 5,
  },
];

export const tgImages = [
  watherFallsImg1,
  watherFallsImg2,
  watherFallsImg3,
  blueLaceImg,
  divingImg,
  gaagrImg,
];
