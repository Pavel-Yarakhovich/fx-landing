export const robotDescription = [
  {
    title: 'Grid 3.5',
    image: 'Grid.png',
    features: [
      'Терминал|MT4',
      'Тип советника|внутридневной - среднесрочный',
      'ТаймФрейм|M5, H4',
      'Рекомендуемые торгуемые пары|USDJPY',
      'Ориентировочная доходность|Консервативно – 10-15% в месяц, Агрессивно – 40-50% в месяц',
    ],
    desc: 'Советник с помощью совокупного стратегического анализа определяет важные уровни консолидации. Сделки открываются только в зоне этих уровней. Оценивая вероятное движение цены в пределах этих уровней, открываются сделки с наибольшей потенциальной возможностью. Гибкие настройки регулируют стоплосс и тэйкпрофит. Исходя из результатов торговли, был сделан вывод, что наличие сеточного сопровождения ордеров делает алгоритм советника более эффективным. Уровни усреднения (уровни сетки ордеров) специально совпадают с соседними уровнями консолидации, поэтому каждая последующая сделка в сетке подтверждает направление первой.',
    deals: ['grid-3-5-1.png', 'grid-3-5-2.png'],
    results: ['grid-1.jpg', 'grid-2.jpg', 'grid-3.jpg', 'grid-4.jpg', 'grid-5.jpg'],
  },
  {
    title: 'Hacker',
    image: 'Hacker.png',
    features: [
      'Терминал|MT4',
      'Тип советника|внутридневной скальпер',
      'ТаймФрейм|M5',
      'Рекомендуемые торгуемые пары|EURUSD, GBPUSD, AUDUSD, NZDJPY, AUDJPY, USDCHF',
      'Ориентировочная доходность|Консервативно 20-30% в месяц, Агрессивно до 100% в месяц, Разгон до 300% в месяц',
    ],
    desc: 'Робот работает в 2х вариантах – двусторонняя торговля, сделки открываются как на покупку, так и на продажу, все сделки закрываются либо тейкпрофиту в моменте торговли, либо по общему тейку в деньгах. Также есть вариант торговли в одну сторону от границ канала, который строится индикатором, который идет в комплекте с роботом, точка входа определяется внутри робота с помощью Сигнальных индикаторов вшитых в советник. Закрытие сделок также осуществляется по общему тейкпрофиту. К роботу прилагается методическое пособие, в котором собраны все рекомендации по работе с ним. Робот может приносить большую прибыль, но вместе с этим и торговать достаточно рискованно, поэтому перед началом работы с ним рекомендуется решить для себя на какой риск Вы готовы пойти, стратегия робота позволяет работать как консервативно, так и использовать его для разгона депозитов.',
    deals: ['hacker-1.png', 'hacker-2.png', 'hacker-3.png'],
    results: ['hacker-1.jpg', 'hacker-2.jpg', 'hacker-3.jpg', 'hacker-4.jpg'],
  },
  {
    title: 'Индикаторы Тренд 1.2 и 1.3',
    image: 'Indikator-Trend.png',
    features: [
      'Терминал|MT4',
      'Тип советника|Доп.индикаторы к роботу Scalper_AvtomatFX, возможно использовать отдельно в своих торговых системах как индикаторы для точек разворота.',
      'ТаймФрейм|M5-H1',
      'Рекомендуемые торгуемые пары|-',
      'Ориентировочная доходность|-',
    ],
    desc: 'Индикаторы показывают точки вероятного разворота цены. Версия 2.0 использует меньший порог для индикации, поэтому считается более агрессивной, в то время как версия 3.0 использует высокие пороги данных для индикации, что делает ее более консервативным и более точным вариантом, который подойдет консервативным трейдерам. Помимо валютных пар показывает также хорошие точки входа для криптовалют.',
    signals: ['trend-1.png', 'trend-2.png', 'trend-3.png'],
  },
  {
    title: 'SniperFX',
    image: 'SniperFX.png',
    features: [
      'Терминал|MT4',
      'Тип советника|среднесрочный',
      'ТаймФрейм|M5',
      'Рекомендуемые торгуемые пары|GBPUSD, GBPJPY, EURAUD',
      'Ориентировочная доходность|30-40% в месяц',
    ],
    desc: 'Робот-снайпер. В течении недели выявляет точку входа и в установленный день выставляет отложенные ордера согласно условиям выявленных за дни сбора информации по движению цены. Закрытие сделки осуществляется частями для фиксации части профита на случай отката цены. Методика работы советника позволяет установить несколько советников на одну пару с разными днями для поиска точки входа в рынок, что может увеличить прибыльность работы, но вместе с тем и увеличивает риски. Иногда в установленный день советник может не входить в сделку, поскольку не было соблюдено минимальных условий для выставления ордеров, это нормально, это одна из сильных сторон советника – не входить в неподтвержденные сделки, а ждать четкого входа.',
    deals: ['sniper-1.png', 'sniper-2.png'],
    results: ['sniperFX-1.jpg', 'sniperFX-2.jpg'],
  },
  {
    title: 'Upgrade',
    image: 'Upgrade.png',
    features: [
      'Терминал|MT4',
      'Тип советника|внутридневной',
      'ТаймФрейм|M5-H1',
      'Рекомендуемые торгуемые пары|EURCHF',
      'Ориентировочная доходность|15-20%/мес',
    ],
    desc: 'Работа советника основана на авторских индикаторах. На открытии каждой свечи, путем анализа предыдущих свечей определяет уровень, от которого прогнозируем отбой цены. В верхнем уровне мы закрываем ордер BUY и открываем ордер SELL, уровень Тейкпрофита у которого устанавливаем на нижний уровень. Аналогично поступаем с нижним уровнем: закрываем ордер SELL и открываем ордер BUY, тейкпрофит у которого устанавливаем на верхний уровень. На открытии каждой свечи анализируем рынок и корректируем и уровни, и соответствующие тейкпрофиты. Вся торговля ведется отложенными ордерами и установленными тейкпрофитами, тем самым уменьшаем негативный эффект проскальзывания. Таким образом, одна настройка имеет только один торгующий ордер и только один отложенный ордер.',
    deals: ['upgrade-1.png', 'upgrade-2.png', 'upgrade-3.png'],
    results: ['upgrade-1.jpg', 'upgrade-2.jpg'],
  },
  {
    title: 'Platon',
    image: 'Platon.png',
    features: [
      'Терминал|MT4',
      'Тип советника|долгосрочный',
      'ТаймФрейм|M5',
      'Рекомендуемые торгуемые пары|AUDUSD, CADCHF, CADJPY, EURUSD, GBPAUD, NZDUSD, USDCAD, USDJPY',
      'Ориентировочная доходность|15-20%/мес',
    ],
    desc: 'Данный робот является индикаторным советником. Принцип работы основан на многофакторном анализе текущей ситуации, куда входит поиск места разворота тренда, ожидание подтверждающих сигналов и дальнейший вход в сделку. Тейкпрофит устанавливается в зону окончания прогнозируемого движения с корректировкой на наиболее вероятное достижение цели. В процессе торговли открывается несколько ордеров в одном направлении, но это нельзя назвать Мартингейлом, поскольку ордера открываются не с определенным шагом, а только в зонах зарождения тренда, подтвержденных индикаторами советника. Поэтому расстояние между открытыми ордерами определяются не сухими цифрами в настройках, а фактическими предпосылками к развороту в сторону текущих сделок. Поэтому, когда цена идет не в сторону открытой ранее сделки, можно не бояться открытия множества ордеров. Советник откроет следующие ордера только после подтверждения разворота цены индикаторами.',
    deals: ['platon-1.png', 'platon-2.png'],
    results: ['platon-1.jpg'],
  },
  {
    title: 'Hoff Method',
    image: 'Hoff-Method.png',
    features: [
      'Терминал|MT4',
      'Тип советника|внутридневной-среднерочный',
      'ТаймФрейм|M5-M15',
      'Рекомендуемые торгуемые пары|NZDJPY AUDNZD AUDCHF AUDUSD',
      'Ориентировочная доходность|25-30% в месяц',
    ],
    desc: 'Hoff Method – это мощный советник-сеточник с функцией SmartGrid благодаря которому вы можете зарабатывать абсолютно при любой фазе рынка. Лучше всего советник чувствует себя при боковом движении пары, но благодаря инновационному алгоритму ведения торговли и определения направления движения пары, который встроен в советник, вы также можете использовать советник и при трендовом движении. На случай попадания сетки в значительную просадку советником предусмотрен инновационный метод сохранения просадки на низком уровне – до момента пока цена не вернется к приемлемому уровню каждая последующая сделка будет застрахована противоположной сделкой, каждая из которых может также принести прибыль при значительных колебаниях рынка.',
    deals: ['hoff-1.png', 'hoff-2.png'],
    results: ['hoff-method-1.jpg'],
  },
];
