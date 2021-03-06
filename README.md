# 馃懇鈥嶐煉籅ootcamp App
Bootcamp App es una aplicaci贸n web desarrollada en React con el fin de organizar todos los recursos vistos en el [bootcamp de Hack Academy](https://ha.dev/cursos/coding-bootcamp) edici贸n Abril 2022. Para poder acceder a los materiales es necesario estar logueado al email institucional de Hack Academy.

**La aplicaci贸n est谩 disponible [aqu铆](https://bootcampapp.netlify.app/).**


## 鉁═ecnolog铆as usadas
Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app). 

Los estilos fueron con CSS puro. 

Librer铆as utilizadas: 
    [axios](https://www.npmjs.com/package/axios),
    [react-countdown](https://www.npmjs.com/package/react-countdown), 
    [react-router](https://reactrouter.com/) y 
    [react-spinners](https://www.npmjs.com/package/react-spinners).

Y [esta API](https://type.fit/api/quotes) para las frases motivacionales. [Ver github](https://github.com/ssokurenko/quotes-react-app).

La informaci贸n con las clases y materiales fue almacenada en [este gist](https://gist.github.com/flofal/e625dcdf0ff1568e859ebaf99b211607) y consumida a trav茅s de Axios.


## 馃摑 Sobre el proyecto
Bootcamp app surgi贸 de la necesidad de tener todos los recursos del [bootcamp que estoy cursando](https://ha.dev/cursos/coding-bootcamp) en un solo lugar. Cuando comenz贸 el bootcamp, utilizaba Notion como herramienta de organizaci贸n ya que pod铆a ir agregando todo el material a mi gusto. El problema fue cuando no pude subir m谩s material por tener una cuenta gratuita. Esto, y lo aprendido en el bootcamp, me llev贸 a desarrollar un sitio que cumpliera con mis necesidades como usuaria.


## 馃摎 Recursos
El primer paso fue escribir todos los requerimientos que deb铆a tener el sitio. 

Luego, buscar inspiraci贸n de dise帽os en plataformas como Dribbble y Behance. [Este fue el elegido.](https://dribbble.com/shots/15268795-Learning-platform-Web-app)

Las im谩genes del home y del fondo de la cuenta regresiva fueron extra铆das de [Pexels](https://www.pexels.com/es-es/@thisisengineering/).

La imagen de las tarjetas de cada clase, los puntos de decoraci贸n de la imagen de inicio y el favicon fueron dise帽os propios realizados en [Canva](https://canva.com/).

La paleta de colores fue siguiendo la de [Hack Academy](https://ha.dev/).


## 馃Л Mapa del sitio
La web se divide en 4 secciones: Home, Mis clases, Cuenta regresiva y Frase motivacional. 

### Mis clases
En **Mis clases** se puede encontrar toda la informaci贸n relacionada con el bootcamp edici贸n Abril 2022. Esto implica: los videos de las grabaciones, una peque帽a descripci贸n de lo visto, los slides de las clases, las hojas de ejercicios y herramientas compartidas en el chat. Adem谩s, se incluye una funcionalidad de b煤squeda por nombre de la clase, y una de filtrado por sprint al que corresponde. **Es importante resaltar que para poder acceder a los materiales es necesario estar logueado al email institucional. Esta fue una decisi贸n de dise帽o ya que los materiales de Hack Academy son exclusivos para su comunidad.**

### Cuenta regresiva
En **Cuenta regresiva** se muestran los d铆as restantes para terminar el bootcamp.

### Frase motivacional
En **Frase motivacional** se muestra una frase de aliento de forma aleatoria. Cada vez que se presiona el bot贸n de los dados, se muestra una nueva frase. 
