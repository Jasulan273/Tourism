import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  ru: {
    translation: {
      "Main-page": "Главная страница",
      "Tours": "Туры",
      "Question": "Вопрос",
      "header_slogan": "Задайте вопрос и найдите свой тур!",
      "why": "Почему мы?",
      "advantage-1": "Вы можете получить ответы на любые вопросы, консультацию и информацию о турах от чатбота GPT (24/7)",
      "advantage-2": "Предлагаем качественный и быстрый сервис с онлайн-оплатой и оплатой частями через системные технологии",
      "advantage-3": "Планируйте свои поездки заранее с виртуальными турами и экономьте свое время",
      "tour-1-title": "Спортивный тур",
      "tour-1-desc": "Туры на велосипедах, горных лыжах, йоге и других спортивных мероприятиях, связанных с природой",
      "tour-2-title": "Исторические места",
      "tour-2-desc": "Посещение исторических и культурных достопримечательностей каждого города",
      "tour-3-title": "Круиз/яхта",
      "tour-3-desc": "Тур на яхте или круиз на открытом море или океане, чтобы насладиться путешествием на воде",
      "tour-4-title": "Индивидуальный тур",
      "tour-4-desc": "Индивидуальный тур с персональным менеджером в каждом городе",
      "tour-5-title": "Виртуальный тур",
      "tour-5-desc": "Получите уникальный опыт путешествия с виртуальными турами",
      "form": "Вопрос",
      "form-input-name": "Ваше имя",
      "form-input-number": "Номер телефона",
      "send":"Отправить",
      "gpt-hello":"Здравствуйте, я буду искусственным интеллектом этой платформы!"
      }
  },
  kz: {
    translation: {
      "Main-page": "Басты бет",
      "Tours":"Турлар",
      "Question":"Өтініш",
      "header_slogan":"Сұрақ қойып, өз турыңды тап!",
      "why":"Неге біз?",
      "advantage-1":"Кез-келген сұрағыңызға жауап, кеңес, және тур туралы ақпаратты GPT чатботтан (24/7) біле аласыз",
      "advantage-2":"Жүйелі технологиямен сапалы әрі тез төлем жаса да, бізбен бірге саяхатта (онлайн төлем,бөліп-төлеу)",
      "advantage-3":"Виртуалды турмен саяхатыңды алдын-ала жоспарлау арқылы уақытыңызды үнемдеңіз",
      "tour-1-title":"Спорт тур",
      "tour-1-desc":"Велосипед, шаңғы, йога секілді табиғатпен байланысты спорт турлеріне тур",
      "tour-2-title":"Көрнекті жерлер",
      "tour-2-desc":"Әр қаланың тарихи және мәдени мұра ретінде қалдырылған жерлер",
      "tour-3-title":"Круиз/яхта",
      "tour-3-desc":"Ашық теңіз, мұхитта кемені көлік құралы ретінде пайдаланатын топтық экскурсия",
      "tour-4-title":"Жеке тур",
      "tour-4-desc":"Әр қаланы жеке, менеджермен байланыса отырып өз бақылауыңызда болады",
      "tour-5-title":"Виртуалды тур",
      "tour-5-desc":"Шынайы турмен танысып, шынайы эмоцияға бөленіңіз",
      "form":"Өтініш",
      "form-input-name":"Аты-жөніңіз",
      "form-input-number":"Телефон номер",
      "send":"Жіберу",
      "gpt-hello":"Сәлем,мен осы платформаның жасанды интелектісі боламын!"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n