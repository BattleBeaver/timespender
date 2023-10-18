import NewsCard from "@/components/NewsCard";
import React from "react";

const exampleOutput = {
  totalArticles: 24138,
  articles: [
    {
      title: "ЗСУ отримали нову військову техніку",
      description:
        "ЗСУ отримали нові зразки техніки - вертоліт ВО 105 Е-4 та мотоцикл KTM 450 ЕХС: що про них відомо - читайте на ТСН.ua (новини 1+1).",
      content:
        "Йдеться про вертоліт ВО 105 Е-4 та мотоцикл KTM 450 ЕХС.\nНа озброєння Міністерства оборони України прийняті нові зразки військової техніки - вертоліт та мотоцикл.\nПро це інформує пресслужба оборонного відомства.\nЗа даними Міноборони України, на поста... [541 chars]",
      url: "https://tsn.ua/ukrayina/zsu-otrimali-novi-zrazki-viyskovoyi-tehniki-2430166.html",
      image:
        "https://img.tsn.ua/cached/306/tsn-671b840e81dae5015bc4c6345e63d1d0/thumbs/1200x630/68/b2/0e2686472884332a1b1c6b3fd957b268.jpeg",
      publishedAt: "2023-10-15T10:50:22Z",
      source: {
        name: "ТСН",
        url: "https://tsn.ua",
      },
    },
    {
      title: "Помер народний артист України Олександр Востряков",
      description:
        "14 жовтня пішов із життя народний артист України, соліст Національної опери та професор консерваторії Олександр Востряков. Артистові було 79 років.. Олександр Востряков, Смерть",
      content:
        "14 жовтня пішов із життя народний артист України, соліст Національної опери та професор консерваторії Олександр Востряков. Артистові було 79 років.\nПро смерть Вострякова повідомили в Національній опері України.\n«Із глибоким сумом сповіщаємо, що 14 жо... [738 chars]",
      url: "https://bigkyiv.com.ua/pomer-narodnyj-artyst-ukrayiny-oleksandr-vostryakov/",
      image:
        "https://bigkyiv.com.ua/wp-content/uploads/2023/10/391612568_1508054083295388_2211160345530361308_n.jpg",
      publishedAt: "2023-10-15T09:35:18Z",
      source: {
        name: "Великий Київ",
        url: "https://bigkyiv.com.ua",
      },
    },
    {
      title: "Парламентські вибори у Польщі 15 жовтня",
      description:
        "У Польщі почалися парламентські вибори та референдум сьогодні 15 жовтня: що відомо - читайте на ТСН.ua (новини 1+1).",
      content:
        "У неділю, 15 жовтня, у Польщі почалося голосування на парламентських виборах та референдумі, результати яких визначать подальший рух країни в ЄС та підтримку Україні. Виборчі комісії відкрилися о сьомій годині ранку за місцевим часом.\nПро це повідомл... [1884 chars]",
      url: "https://tsn.ua/svit/u-polschi-pochalisya-parlamentski-vibori-vid-rezultati-yakih-zalezhit-pidtrimka-ukrayini-2430058.html",
      image:
        "https://img.tsn.ua/cached/660/tsn-dcf0ded845fb4249b37e656be0b1987a/thumbs/1200x630/87/75/f7573d0368c35f5d1c89a94d1e767587.jpeg",
      publishedAt: "2023-10-15T07:14:52Z",
      source: {
        name: "ТСН",
        url: "https://tsn.ua",
      },
    },
    {
      title:
        'Юрій Калитвинцев: "Збірна Північної Македонії здивувала футбольним нахабством"',
      description:
        "Відомий український тренер, наставник житомирського «Полісся» Юрій Калитвинцев проаналізував матч відбіркового циклу Євро-2024 між... (15 жовтня 2023 р.).",
      content:
        "Відомий український тренер, наставник житомирського «Полісся» Юрій Калитвинцев проаналізував матч відбіркового циклу Євро-2024 між збірними України та Північної Македонії (2:0), який відбувся вчора в Празі.\nЮрій Калитвинцев\n— Олександре Миколайовичу,... [3617 chars]",
      url: "https://dynamo.kiev.ua/uk/news/516372-yurii-kalytvyntsev-zbirna-pivnichnoi-makedonii-zdyvuvala-futbolnym-nakhabstvom",
      image: "https://dynamo.kiev.ua/media/postphoto2/2023/10/9_4.jpg",
      publishedAt: "2023-10-15T06:34:00Z",
      source: {
        name: "Динамо Киев от Шурика",
        url: "https://dynamo.kiev.ua",
      },
    },
    {
      title: "ЗСУ просунулися: аналітики назвали напрямки",
      description:
        "Аналітики назвали напрямки, на яких є просування ЗСУ. Новини 1+1 (ТСН.ua)",
      content:
        "Сили оборони України продовжують наступальну операцію і мають часткові успіхи на кількох напрямках.\nУкраїнські війська 14 жовтня продовжили контрнаступальні дії на сході та півдні України та просунулися на захід від Донецька.\nПро це йдеться у звіті а... [817 chars]",
      url: "https://tsn.ua/ato/zsu-prosunulisya-analitiki-nazvali-napryamki-2430034.html",
      image:
        "https://img.tsn.ua/cached/056/tsn-dcf0ded845fb4249b37e656be0b1987a/thumbs/1200x630/26/fa/7ef310abf878b87725075d8d2c2bfa26.jpeg",
      publishedAt: "2023-10-15T05:51:21Z",
      source: {
        name: "ТСН",
        url: "https://tsn.ua",
      },
    },
    {
      title:
        'Йожеф Сабо: "Те, що зробив Караваєв перед фінальним свистком, ніхто з молодих гравців не зробив би"',
      description:
        "Колишній головний тренер київського «Динамо» і збірної України Йожеф Сабо поділився своїми враженнями від матчу відбіркового циклу... (15 жовтня 2023 р.).",
      content:
        "Колишній головний тренер київського «Динамо» і збірної України Йожеф Сабо поділився своїми враженнями від матчу відбіркового циклу Євро-2024 Україна — Північна Македонія (2:0), який відбувся вчора в Празі.\nЙожеф Сабо\n— У перші тридцять хвилин поєдинк... [4557 chars]",
      url: "https://dynamo.kiev.ua/uk/news/516338-yozhef-sabo-te-shcho-zrobyv-karavaiev-pered-finalnym-svystkom-nikhto-z-molodykh-hravtsiv-ne-zrobyv-by",
      image: "https://dynamo.kiev.ua/media/posts/2022/03/22/8.jpg",
      publishedAt: "2023-10-15T04:24:00Z",
      source: {
        name: "Динамо Киев от Шурика",
        url: "https://dynamo.kiev.ua",
      },
    },
    {
      title: "Астрологічний прогноз на 15 жовтня",
      description:
        "Який сьогодні день, що принесе успіх саме сьогодні, який колір, образ, число, символ і камінь вважаються символами сьогоднішнього дня, гороскоп на 1+1 (ТСН)",
      content:
        "Плануючи свій день, ми все частіше звертаємося до підказок зірок, які, як відомо, поганого не порадять.\nЯкі справи планувати? Який одяг і прикраси одягнути, щоб пощастило у роботі та коханні? На роботу якої частини організму звернути особливу увагу? ... [1277 chars]",
      url: "https://tsn.ua/lady/astrologiya/astrologichniy-prognoz-na-15-zhovtnya-2427892.html",
      image:
        "https://img.tsn.ua/cached/505/tsn-467385bb6791cfb7cbfd1f8cbeac76e2/thumbs/1200x630/db/50/aca01d1d4da3f60e83d95e8422ad50db.jpeg",
      publishedAt: "2023-10-15T02:00:00Z",
      source: {
        name: "ТСН",
        url: "https://tsn.ua",
      },
    },
    {
      title:
        'Захисники збили ворожий СУ-25, знищили БМПТ "Термінатор" і систему "Сонцепьок"',
      description:
        'На Донеччині захисники збили ворожий літак СУ-25, а також знищили БМПТ "Термінатор" і важку вогнеметну систему залпового вогню "Сонцепьок".',
      content:
        "Про це заявив бригадний генерал, командувач оперативно-стратегічного угруповання військ «Таврія» Олександр Тарнавський у повідомленні у соціальних мережах.\nТакож воїнами ОСУВ «Таврія» збито на Донечинні літак СУ-25 ворога, знищено БМПТ «Термінатор» т... [963 chars]",
      url: "https://tsn.ua/ukrayina/znischili-su-25-bmpt-terminator-ta-soncepok-ukrayinski-viyskovi-rozpovili-pro-uspihi-na-donechchini-2429986.html",
      image:
        "https://img.tsn.ua/cached/259/tsn-90ef87392779da7417a975ee734335dc/thumbs/1200x630/fb/5f/2c7e44e1dcf2730d2f53429d83625ffb.jpeg",
      publishedAt: "2023-10-14T23:30:04Z",
      source: {
        name: "ТСН",
        url: "https://tsn.ua",
      },
    },
    {
      title: "2 найгірші моделі бренду Skoda за останні 10 років",
      description:
        "У цій статті ми розглянемо недоліки двох найгірших моделей Skoda за останні 10 років на основі відгуків покупців та загальних характеристик.",
      content:
        "Skoda, бренд, відомий своєю надійністю та співвідношенням ціни та якості, за останнє десятиліття також мав свою частку моделей, які не зовсім влучили в ціль.\nНезважаючи на репутацію виробника якісних автомобілів, за останні роки з’явилося кілька моде... [4119 chars]",
      url: "https://avtosota.com/35218-2-najgirshi-modeli-brendu-skoda-za-ostanni-10-rokiv.html",
      image: "https://avtosota.com/wp-content/uploads/2020/09/skoda-fabia.jpg",
      publishedAt: "2023-10-14T21:03:22Z",
      source: {
        name: "Avtosota",
        url: "https://avtosota.com",
      },
    },
    {
      title:
        "Лубінець: Ізраїль спершу надав дозвіл на евакуацію іноземців через Рафах, згодом його відкликав",
      description:
        "«Посол офіційно надіслав ноту протесту. За нашою інформацією, так само зробили або планують низка країн»",
      content:
        "За попередньою домовленістю, коридор зі Смуги Гази до пункту перетину Рафах на кордоні з Єгиптом мав бути відкритий з 12 до 17 години ранку 14 жовтня, проте о 10 влада Ізраїлю відкликала свій дозвіл – про це заявив уповноважений Верховної Ради Дмитро... [3138 chars]",
      url: "https://www.radiosvoboda.org/a/news-lubinets-izrail-evakuatsia-inozemtsiv/32637555.html",
      image:
        "https://gdb.rferl.org/058a0000-0aff-0242-365e-08dade7c89ac_w1200_r1.jpg",
      publishedAt: "2023-10-14T19:36:37Z",
      source: {
        name: "Радіо Свобода",
        url: "https://www.radiosvoboda.org",
      },
    },
  ],
};

const NewsPage = () => {
  return (
    <div className="w-screen overflow-y-hidden flex flex-col">
      {exampleOutput.articles.map((article, ardicleIdx) => {
        return <NewsCard key={ardicleIdx} {...article} />;
      })}
    </div>
  );
};

export default NewsPage;
