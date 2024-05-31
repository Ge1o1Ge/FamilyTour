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
  abkhazia,
  jeepTourAbkhazia,
  goldenRingAbkhazia,
  jeepTourRitsa,
  thermalSpring,
  ricaPitsunda,
  dolphinarium,
  seaSafary,
  seaFish,
  seaYachtArenda,
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
    link: '#hotels',
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
      time: `Ежедневно 11:30`,
    },
    img: [redFlat],
    isHit: true,
    isNew: true,
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
        `Тропа (+200 руб) (дети до 10 лет бесплатно)`,
        `Чайные плантации (+100 руб) (дети до 10 лет бесплатно)`,
        `Пещера (450 руб - взрослый / 300 руб - детский)`,
      ],
      time: `вторник, четверг, суббота 13:00`,
    },
    img: [vorontsovskayaCave],
    isHit: false,
    isNew: false,
    startPrice: '1200р',
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
      time: `ежедневно`,
    },
    img: [jeepTour],
    isHit: false,
    isNew: false,
    startPrice: '1900р',
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
      time: `ежедневно`,
    },
    img: [solokhAulJeep],
    isHit: false,
    isNew: false,
    startPrice: '2400р',
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
      time: `ежедневно`,
    },
    img: [mammothGorgeJeep],
    isHit: false,
    isNew: false,
    startPrice: '2200р',
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
    startPrice: '1500р',
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
    startPrice: '2500р',
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
        `Экосбор на водопады - 300₽`,
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
    name: 'Золотое кольцо Абхазии',
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
      dopUslugi: [`Экологический сбор на Рицу включен в стоимость экскурсии`],
      time: `ежедневно 6:00`,
    },
    img: [goldenRingAbkhazia],
    isHit: false,
    isNew: false,
    startPrice: '2200р',
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
    startPrice: '2700р',
  },
  {
    id: 12,
    name: 'Кындыг',
    semiName: 'Термальный источник',
    order: '',
    description: {
      info: ``,
      marshrut: [
        `Ресторан Гагрипш`,
        'Новый Афон',
        'Новоафонский водопад',
        'Новоафонский мужской монастырь Симона Канонита',
        'Г. Сухум - набережная Махаджиров',
        ' Фонтан с грифонами',
        'Термальный источник Кындыг',
      ],
      dopUslugi: [],
      time: `среда, суббота`,
    },
    img: [thermalSpring],
    isHit: false,
    isNew: false,
    startPrice: '2300р',
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
    img: [ricaPitsunda],
    isHit: false,
    isNew: false,
    startPrice: '2300р',
  },
  {
    id: 14,
    name: 'Дельфинарий',
    order: '',
    description: {
      info: `Вас ждет увлекательная программа 3 в 1: сорокоминутное шоу, Сочинский Дельфинарий, Океанариум, Пингвинариум. Это отличная возможность провести время для всей семьи в любую погоду в любое время года.`,
      marshrut: ['Сочинский дельфинарий', 'Океанариум', 'Пигнгвинариум'],
      dopUslugi: [],
      time: `среда, суббота в 13:00`,
    },
    img: [dolphinarium],
    isHit: false,
    isNew: false,
    startPrice: '2400р',
  },
];

export const vipToursCardsInfo = [
  {
    id: 0,
    name: 'Красная поляна',
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
      time: `ежедневно 11:30`,
    },
    img: [redFlat],
    isHit: true,
    isNew: true,
    startPrice: '800р',
  },
  {
    id: 2,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: true,
    startPrice: '500р',
  },
  {
    id: 3,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: true,
    isNew: false,
    startPrice: '500р',
  },
  {
    id: 4,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '500р',
  },
  {
    id: 5,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '500р',
  },
  {
    id: 6,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '500р',
  },
  {
    id: 7,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '500р',
  },
  {
    id: 8,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '500р',
  },
  {
    id: 9,
    name: 'В Абхазию на минивене',
    order: '',
    description: {
      info: `Экскурсия в мини группе на комфортабельном VIP туре в Абхазию на минивене. Экологический сбор на Рицу включен в стоимость.`,
      marshrut: [
        `Гагра`,
        `Белые скалы`,
        `Смотровая Я люблю Гагру`,
        `Колоннада`,
        `Ресторан Гагрипш`,
        `Сказочный лес`,
        `Голубое озеро`,
        `Подвесной мост`,
        `Юпшарский каньон`,
        `Чабгарский карниз`,
        `Озеро Рица`,
      ],
      dopUslugi: [],
      time: `выезд в 9:00 утра`,
    },
    img: [abkhazia],
    isHit: false,
    isNew: false,
    startPrice: '3100р',
  },
];

export const seaCardsInfo = [
  {
    id: 0,
    name: 'Морские прогулки',
    order: '',
    description: {
      info: `Морская прогулка в открытом море на роскошных яхтах, катерах. Панорама олимпийских объектов. Возможна встреча с дельфинами. Купание в открытом море`,
      marshrut: [],
      dopUslugi: [],
      time: `ежедневно 1,5 часа в море`,
    },
    img: [seaSafary],
    isHit: false,
    isNew: false,
    startPrice: '1700р',
  },
  {
    id: 1,
    name: 'Рыбалка',
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
    img: [seaFish],
    isHit: false,
    isNew: false,
    startPrice: '0',
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
    startPrice: '2500р',
  },
  {
    id: 3,
    name: 'Аренда яхт и катеров',
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
    img: [seaYachtArenda],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
];

export const hotelsCardsInfo = [
  {
    id: 0,
    name: 'Сочи',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 1,
    name: 'Красная поляна',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 2,
    name: 'Абхазия',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 3,
    name: 'Геленжик',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 4,
    name: 'Анапа',
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
    img: [redFlat],
    isHit: false,
    isNew: false,
    startPrice: '0',
  },
  {
    id: 5,
    name: 'Крым',
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
    img: [redFlat],
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
    startPrice: 'От 1000р',
    order: 2,
    invisible: false,
  },
  {
    id: 3,
    name: 'Минивен',
    description: 'до 7 пассажиров',
    carImg: minivenCar,
    startPrice: 'От 1000р',
    order: 3,
    invisible: false,
  },
  {
    id: 4,
    name: 'Микроавтобус',
    description: 'до 20 пассажиров',
    carImg: busCar,
    startPrice: 'От 1000р',
    order: 4,
    invisible: false,
  },
  {
    id: 5,
    name: 'V - Класс',
    description: '',
    carImg: vClassCar,
    startPrice: 'От 1000р',
    order: 5,
    invisible: false,
  },
];

export const reviewsCardsInfo = [
  {
    id: 0,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 4,
  },
  {
    id: 1,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 5,
  },
  {
    id: 2,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 5,
  },
  {
    id: 3,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 5,
  },
  {
    id: 4,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 5,
  },
  {
    id: 5,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 5,
  },
  {
    id: 6,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
    stars: 5,
  },
  {
    id: 7,
    name: 'Вася Пупкин',
    title: 'круто',
    description: 'Все очень понравилось',
    timeTag: '5 дней назад',
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
