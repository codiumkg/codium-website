import { ICourse } from "@/interfaces/course";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const API_REG_REQUEST = `${BASE_URL}/reg-requests/`;

export const PLATFORM_LOGIN = "https://office.codiumdev.com/login";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/codium.kg",
  whatsapp: "https://wa.me/996504044402",
  tiktok: "https://tiktok.com/@codium_kg",
};

export const COURSES: ICourse[] = [
  {
    title: "Python Backend для взрослых",
    modules: [
      {
        title: "Введение в IT и основы Python",
        description:
          "Знакомство с информационными технологиями и их ролью в современном мире. \n Основы программирования на языке Python: переменные, условия, циклы. \n Работа с функциями и структурами данных.",
      },
      {
        title: "Веб-разработка: HTML, CSS",
        description:
          "Основы веб-технологий: HTML для структуры страницы, CSS для стилей.\n Создание адаптивных и креативных пользовательских интерфейсов.",
      },
      {
        title: "Backend-разработка на Python и Django",
        description:
          "Основы backend-разработки и роли серверной части приложения.\n Изучение фреймворка Django: создание веб-приложений, обработка запросов и форм, работа с шаблонами.",
      },
      {
        title: "Работа с базами данных",
        description:
          "Введение в PostgreSQL и работа с базами данных.\n Интеграция баз данных в веб-приложения с использованием Django ORM.",
      },
    ],
  },
  {
    title: "Python для младшей группы",
    modules: [
      {
        title: "Основы программирования на Python",
        description:
          "Знакомство с языком программирования Python. Работа с переменными, условиями, циклами и функциями.",
      },
      {
        title: "Изучение веб-технологий: HTML, CSS",
        description:
          "Основы создания веб-страниц: HTML для структуры, CSS для стилей.",
      },
      {
        title: "Основы Backend разработки",
        description:
          "Понимание роли серверной части приложения. Простейшие примеры создания веб-приложений на Python.",
      },
      {
        title: "Знакомство с базами данных",
        description:
          "Основы работы с базами данных: введение в PostgreSQL. Простые запросы и операции с базой данных.\n Эти курсы позволят вам овладеть основами программирования, веб-разработки и backend-разработки на Python, открывая новые возможности для карьерного и личностного роста.",
      },
    ],
  },
];
