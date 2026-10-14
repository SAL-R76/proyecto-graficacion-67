# GráficaLab — Despliegue de gráficos

Sitio web educativo desarrollado con **HTML5, CSS3 y JavaScript nativo**. Incluye cinco gráficos de los ejercicios de Khan Academy, controles interactivos, explicaciones de Canvas 2D y p5.js y un inspector visual del árbol DOM de todas las páginas.

## Ejecutar

1. Extrae el ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Instala la extensión **Live Server** y usa **Open with Live Server** sobre `index.html`.
4. Navega entre las páginas y visita `dom-inspector.html`.

No requiere npm, compilación ni claves de API. Las fuentes de Google Fonts son opcionales: si no hay internet se usan fuentes locales.

## Publicar con GitHub Pages

1. Crea un repositorio **público** en GitHub.
2. Sube **el contenido** de esta carpeta a la raíz del repositorio (index.html, css/, js/, etc.).
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main`, carpeta `/(root)` y guarda.
5. Espera a que GitHub indique la URL publicada, normalmente `https://USUARIO.github.io/REPOSITORIO/`.
6. Comprueba todos los enlaces y el inspector DOM en la URL pública. Entrega únicamente esa URL, como solicita la actividad.

## Estructura

- `index.html`: página de inicio y galería.
- `rana.html`, `conejo.html`, `cena.html`, `nevado.html`, `muneco.html`: cinco gráficos.
- `teoria.html`: fundamentos de Canvas 2D y p5.js.
- `dom-inspector.html`: árbol DOM real de las ocho páginas.
- `css/style.css`: estilos adaptables.
- `js/drawings.js`: dibujos, controles y descarga de PNG.
- `js/inspector.js`: inspección visual dinámica.

## Implementación

Los cinco dibujos se ejecutan con HTML Canvas 2D y JavaScript nativo. Cada página incluye controles para experimentar con parámetros visuales, un apartado para consultar el código del ejercicio y la opción de guardar el dibujo como PNG. El archivo `js/drawings.js` contiene la lógica de renderizado y las interacciones.

## Créditos

Ejercicios realizados originalmente en el entorno educativo de Khan Academy. Adaptación web creada para la actividad escolar «Despliegue de gráficos».
