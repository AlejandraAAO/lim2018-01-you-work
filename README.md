# You Work

## Preámbulo

El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto?

## Introducción

En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad ha decidido contratarte a ti y a dos compañeras para reinventar su proceso de registro de visitantes. Con la entrada de [WeWork](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwilrK_T5KjcAhWCj7MKHexzAEgYABAAGgJxbg&ohost=www.google.cl&cid=CAASE-RoAxXTp1Cd0ErxEHpPSGuF4Hk&sig=AOD64_38ykNPf0QRtI9n4CFtpQpth-MrNQ&q=&ved=0ahUKEwjswKvT5KjcAhVkU98KHUcYCeMQ0QwIJA&adurl=) al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. Te dan la referencia de [Envoy](https://envoy.com/) en EEUU (un servicio que ofrece un sistema digital de registro de visitantes) y ustedes tienen que desarrollar una versión mínima viable (ver anexo I).


## Detalles sobre la implementación

- La lógica del proyecto debe esta implementada completamente en JavaScript (ES6), HTML y CSS.
- Uso el framework de CSS Materialize.
- En este proyecto, no contamos con un boilerplate, por lo que deberás definir la estructura de carpetas y archivos que consideres necesaria, puedes guiarte de los proyectos anteriores.
- Los tests y el setup necesario para ejecutarlos serán hechos enteramente por ti.
- Para armar las interfaces visuales utiliza como base alguna de estas guías de componentes:
  - [Guía Desktop 1](https://www.figma.com/file/F3aUqpHWOfZsEQifTPIleXo6/material-kit-free)
  - [Guía Desktop 2](https://www.figma.com/file/S39H0B1LOnaVICIUiApFTfoP/_Style-Guide---Desktop---Style-Guide)
  - [Guía Mobile 1](https://www.figma.com/file/00VTwmTNvLVaBLkxrMFbT8/Google-Material-Design)
  - [Guía Mobile 2](https://www.figma.com/file/O2Xraz3mraQHvevNsicMl91V/ejemplos-2)
- Guardar la data de los visitantes de forma remota usando [Firebase](https://firebase.google.com/).
- A nivel de arquitectura:
  - El uso de Firebase implica que debes trabajar bajo una arquitectura serverless.
  - Te sugerimos que desacoples el proyecto en componentes y manejo de estados para que trabajes de forma ordenada y facilite la implementación de tus tests. Revisa la [charla](https://www.youtube.com/watch?v=g_BxnUJTUSk) y el [blog post](https://medium.com/laboratoria-developers/arquitectura-de-interfaces-web-parte-1-a41053c2a1f2) de Lupo sobre este tema ;)

## Tiempo

Tendrán 1 semana (5 días hábiles) para trabajar en este proyecto.

## Entregables obligatorios

Los criterios mínimos de aceptación para considerar que has completado este proyecto son:

### Implementación

Tu producto final debe estar desplegado en la web y, como mínimo ,debe:

- Permitir al usuario visitante registrarse con sus datos personales, incluyendo su foto.
- Permitir al usuario visitante seleccionar a la persona a quien viene a visitar.
- Notificar a la persona a quien vienen a visitar. Para esto te recomendamos revisar:
- Los servicios de [Sendgrid](https://sendgrid.com/ )
- El API de [Mandrill](https://mandrillapp.com/docs/) para mandar correos de forma automática
- El [API de notificaciones de HTML 5](https://developer.mozilla.org/en-US/docs/Web/API/notification)
- Permitir al usuario administrador visualizar la data de los visitantes, incluyendo la fecha y hora de registro de cada uno
- Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches.

### Presentación

Deberás hacer dos presentaciones ante tus coaches que te darán feedback inmediatamente. La primera será a mitad de semana para compartir tu avance y la segunda será al final de la semana para compartir tu producto final.

#### Las reglas para las dos presentaciones son

- Tendrás 3 minutos de presentación, ni un segundo más.
- Habrán 2 minutos para preguntas del jurado.
- Te recomendamos que la mayoría del tiempo lo enfoque en demostrar cómo se utiliza tu producto, el cual debe estar desplegado en la web.
- NO se permite presentar cosas en tu local ni videos previamente grabados.
- NO inviertas tiempo presentándote, ni listando al equipo, ni dando una introducción que ya el jurado conoce. Como al hacer el producto, en la presentación también debes priorizar qué decir.
- NO utilices slides de powerpoint, enfócate en presentar tu DEMO.
- Durante el DEMO, enfócate en narrar y explicar el valor que tu producto le brinda al usuario.
- Cuida tu lenguaje no verbal; recuerda mirar al público y tener un tono de voz adecuado para que toda la audiencia te pueda escuchar.
- Asegúrate de preparar el flujo de la presentación para que logres el objetivo en el tiempo dado.

### Hacker edition

Features/características extra sugeridas:

- Como el WiFi a veces es nuestro peor enemigo, ¿es posible que tu aplicación pueda, sin Internet, registrar los datos del visitante, guardar los datos localmente y cuando tenga Internet mandarlos a la base de datos? Si te animas a hacer esto dale una revisada a los siguientes recursos:
  - [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
  - [Offline first manifesto](http://offlinefirst.org/)
- También sería ideal poder registrar la firma del visitante en el registro.
- Sería genial también permitir generar un “pase” para el visitante, así fácilmente a la vista se sabe quién está de visita.
- Al administrador le interesa tener un dashboard de “analíticas” de los visitantes: # de visitantes por día, horarios frecuentes de visita, a quién vienen a visitar, etc.

## Anexo I: Construyendo un MVP

Un modelo mental común para representar el desarrollo de productos es visualizarlo como una pirámide: el producto que construyes consiste en una serie de funcionalidades que le dan beneficios al usuario, los cuales le generan valor. El detalles está en que no todas las funcionalidades que creas le agregan la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan cero valor. Son cosas que creemos que generan valor, pero que no terminan haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos es más ;)
![image](https://user-images.githubusercontent.com/7809496/43321432-d253abe8-9179-11e8-8d08-44a44db6ed0a.png)

## Anexo II: Envío de emails

Para poder hacer envíos de email necesitas un servicio. Aquí te dejamos un acceso a una cuenta de Mandrill de Laboratoria para que la puedas utilizar en tu proyecto.
Host: smtp.mandrillapp.com Port: 587 SMTP Username: Laboratoria.La SMTP Password: Te lo pasamos por Slack
