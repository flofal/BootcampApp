# 👩‍💻Bootcamp App

Bootcamp App es una aplicación web desarrollada con el fin de organizar todos los recursos vistos en el [bootcamp de Hack Academy](https://ha.dev/cursos/coding-bootcamp) edición Abril 2022. Para poder acceder a los materiales es necesario estar logueado al email institucional de Hack Academy.

La aplicación está disponible [aquí](https://bootcampapp.netlify.app/).


## ✨Tecnologías usadas

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app). 

Los estilos fueron con CSS puro. 

Librerías utilizadas: 
    [axios](https://www.npmjs.com/package/axios),
    [react-countdown](https://www.npmjs.com/package/react-countdown), 
    [react-router](https://reactrouter.com/) y 
    [react-spinners](https://www.npmjs.com/package/react-spinners).

Y [esta API](https://type.fit/api/quotes) para las frases motivacionales. [Ver github](https://github.com/ssokurenko/quotes-react-app).

La información con las clases y materiales fue almacenada en [este gist](https://gist.github.com/flofal/e625dcdf0ff1568e859ebaf99b211607) y consumida a través de Axios.


## 📝 Sobre el proyecto

Bootcamp app surgió de la necesidad de tener todos los recursos del [bootcamp que estoy cursando](https://ha.dev/cursos/coding-bootcamp) en un solo lugar. Cuando comenzó, utilizaba Notion como herramienta de organización, ya que podía ir agregando todo el material a mi gusto. El problema es que en un momento no pude subir más material dado que tengo una cuenta gratuita. Esto, y lo aprendido en el bootcamp, me llevó a desarrollar un sitio que cumpliera con mis necesidades como usuaria.


### 📚 Recursos
El primer paso fue escribir todos los requerimientos que debía tener el sitio. 

Luego, buscar inspiración de diseños en plataformas como Dribbble y Behance. [Este fue el elegido.](https://dribbble.com/shots/15268795-Learning-platform-Web-app)

Las imágenes del home y del fondo de la cuenta regresiva fueron extraídas de [Pexels](https://www.pexels.com/es-es/@thisisengineering/).

La imagen de las tarjetas de cada clase, los puntos de decoración de la imagen de inicio y el favicon fueron diseños propios realizados en [Canva](https://canva.com/).

La paleta de colores fue siguiendo la de [Hack Academy](https://ha.dev/).

### Mapa del sitio
La web se divide en 4 secciones: Home, Mis clases, Cuenta regresiva y Frase motivacional. 

En **Mis clases** se puede encontrar toda la información relacionada con el bootcamp edición Abril 2022. Esto implica: los videos de las grabaciones, una pequeña descripción de lo visto, los slides de las clases, las hojas de ejercicios y herramientas compartidas en el chat. Además, se incluye una funcionalidad de búsqueda por nombre de la clase, y una de filtrado por sprint al que corresponde. **Es importante resaltar que para poder acceder a los materiales es necesario estar logueado al email institucional. Esta fue una decisión de diseño ya que los materiales de Hack Academy son exclusivos para su comunidad.**

En **Cuenta regresiva** se muestran los días restantes para terminar el bootcamp.

En **Frase motivacional** se muestra una frase de aliento de forma aleatoria. Cada vez que se presiona el botón de los dados, se muestra una nueva frase. 
