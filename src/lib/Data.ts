import Angular from '@icons/Angular.astro'
import Cypress from '@icons/Cypress.astro'
import Dotnet from '@icons/Dotnet.astro'
import Firebase from '@icons/Firebase.astro'
import Nextjs from '@icons/Nextjs.astro'
import React from '@icons/React.astro'
import Typescript from '@icons/Typescript.astro'
import Csharp from '@icons/csharp.astro'
import Php from '@icons/Php.astro'
import Mysql from '@icons/Mysql.astro'
import Team from '@icons/Team.astro'
import Javascript from '@icons/Javascript.astro'
import Express from '@icons/Express.astro'
export const EXPERIENCE = [
  {
    title: 'Estadia Profesional',
    company: 'Fractanet',
    location: 'Remoto',
    link: 'https://fractanet.com.mx/',  
    date: 'Mayo 2023 - Agosto 2023',
    description: [
      'Durante mi estadía, desarrollé una aplicación web en React con Ant Design, y creé una Web API en ASP.NET Core para gestionar archivos y grupos mediante operaciones CRUD. También implementé una página web para la visualización y administración de archivos en estas se realizo pruebas con Cypress y xUnit para asegurar la calidad y funcionalidad. Utilicé herramientas como Json.NET, C#, JavaScript, TypeScript y GitHub en el proceso.',
      'Además, he aprendido a trabajar no solo para mí, sino también para que otros puedan incorporarse en distintos proyectos. También he valorado la importancia de la planificación y organización en el éxito de un proyecto, así como la necesidad de adaptarse y aprender de los errores.'
    ],
    tecnologies: [
      {
        name: 'Typescript',
        icon: Typescript
      },
      {
        name: 'React',
        icon: React
      },
      {
        name: 'c#',
        icon: Csharp
      },
      {
        name: '.net',
        icon: Dotnet
      },
      {
        name: 'Cypress',
        icon: Cypress
      }
    ]
  },
  {
    title: 'E-commerce',
    company: 'Reparalo',
    location: 'Remoto',
    date: 'Mayo 2023 - Agosto 2023',
    description: [
      'Realicé un proyecto de e-commerce con php y mysql, para la empresa Reparalo. El proyecto consistió en la creación de un sistema de ventas en línea para la empresa, con la finalidad de que los clientes puedan adquirir productos y servicios de manera rápida y sencilla.',
      'Este proyecto fue parte de nuestra Integradora donde se nos asignó un cliente real y tuvimos que desarrollar un sistema que cumpliera con sus necesidades. Desde los requerimientos hasta la implementación, pasando por la creación de una empresa y el WBS.'
    ],
    tecnologies: [
      {
        name: 'PHP',
        icon: Php
      },
      {
        name: 'Mysql',
        icon: Mysql
      },
      {
        name: 'Trabajo en equipo',
        icon: Team
      }
    ]
  }
]

export const PROJECTS = [
  {
    name: 'StaffConnect',
    subtitle: 'PROYECTO INTEGRADORA 2024',
    link: 'https://staff-mmd7.vercel.app/',
    image: '/staffConnect.webp',
    description: [
      'Una plataforma para gestionar eventos. El sistema permite crear eventos específicos agrupados por categorías donde los usuarios voluntarios pueden registrarse para participar. El encargado de cada evento tiene la capacidad de llevar un control del progreso.',
      'Además, STAFFCONNECT incluye un chat interno por evento, lo que facilita la comunicación entre los participantes y el creador del evento, asegurando una mejor coordinación y seguimiento de las actividades.'
    ],
    technologies: [
      {
        name: 'Typescript',
        icon: Typescript
      },
      {
        name: 'Next.js',
        icon: Nextjs
      }
    ]
  },
  {
    name: 'Qr-Transport',
    subtitle: 'PROYECTO INTEGRADORA 2023',
    link: 'https://qr-transport.vercel.app/',
    image: '/qr-transport-min.png',
    description: [
      'Una aplicación web que permite a los estudiantes de la rutas UTT pagar su pasaje atraves del codigo qr asignado a cada uno. La aplicación permite el pago mediante la api de MercadoPago.',
      'Además, QR-TRANSPORT incluye un sistema de cobro por medio de un dispositivo creado con arduino y un lector de qr, lo que facilita el cobro del pasaje y la gestión de los choferes.'
    ],
    technologies: [
      {
        name: 'Typescript',
        icon: Typescript
      },
      {
        name: 'Angular',
        icon: Angular
      },
      {
        name: 'Firebase',
        icon: Firebase
      },
      {
        name: 'Trabajo en equipo',
        icon: Team
      }
    ]
  },
  {
    name: 'Api Tienda',
    subtitle: 'API CON OPERACIONES CRUD',
    link: 'https://github.com/snipgamer1/api-tienda-express',
    image: '/api-tienda.webp',
    description: [
      'Desarrollé una API RESTful que implementa todas las operaciones CRUD (Create, Read, Update, Delete) siguiendo buenas prácticas de diseño, como el uso de endpoints claros, manejo de códigos de estado HTTP consistentes y validación de datos con middlewares',
      'Ademas, implementé mecanismos de seguridad con JSON Web Tokens (JWT) para proteger los endpoints, integrando un middleware en Express.js que valida los tokens en cada solicitud. '
    ],
    technologies: [
      {
        name: 'JavaScript',
        icon: Javascript
      },
      {
        name: 'Express',
        icon: Express
      }
    ]
  }
]
