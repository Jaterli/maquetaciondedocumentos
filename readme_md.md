# Sitio Web Portafolio — Jaime Terciado
> **Maquetador profesional y gestor de proyectos de traducción DTP (Desktop Publishing)**

Este proyecto contiene el código fuente del sitio web profesional y portafolio de **Jaime Terciado**, especializado en maquetación editorial, tratamiento de archivos traducidos en múltiples formatos (Word, InDesign, PowerPoint, etc.), maquetación a partir de archivos no editables mediante OCR avanzado y gestión integral de proyectos de traducción.

---

## 🛠️ Tecnologías y Herramientas

- **HTML5**: Estructura semántica accesible (`index.html`, `aviso-legal.html`).
- **SASS / SCSS**: Preprocesador CSS para una arquitectura modular, organizada y fácilmente mantenible (`styles.scss`).
- **CSS3**: Hoja de estilos compilada (`styles.css`) optimizada con variables CSS, *CSS Grid*, *Flexbox* y diseño adaptativo (*Responsive Design*).
- **Tipografía Google Fonts**: *Cormorant Garamond* (para titulares elegantes) e *Inter* (para cuerpo de texto y UI).

---

## 📂 Estructura del Proyecto

```text
.
├── index.html          # Página principal del portafolio (Hero, Servicios, Ventajas, Contacto)
├── aviso-legal.html    # Página de Aviso Legal, Política de Privacidad y RGPD
├── styles.scss         # Archivo fuente SASS con la arquitectura de estilos
├── styles.css          # Archivo CSS compilado utilizado por la web
├── styles.css.map      # Mapa de fuentes para depuración CSS
└── img/                # Recursos gráficos (Logotipo, imágenes de proyectos, hero)
    ├── logo-jtl.png
    └── hero-img.jpg
```

---

## 🚀 Secciones de la Web

1. **Header / Navegación Sticky**: Logotipo personalizado con indicador de especialidad y menú de navegación accesible con respuesta *responsive*.
2. **Hero Section**: Introducción clara al servicio de maquetación DTP con llamadas a la acción (*Call to Action*).
3. **Disponibilidad**: Banner destacado indicando disponibilidad para contratación *freelance* o incorporación a plantilla.
4. **Maquetación Editorial**: Detalle de más de 20 años de experiencia técnica en maquetación de traducción con soporte para paquetes de software (*InDesign, Trados, PowerPoint, Photoshop, Word*, etc.).
5. **Conversión de Archivos no Editables**: Sección informativa sobre el flujo de trabajo mediante OCR avanzado (ABBYY FineReader, Solid Converter) para tratar documentos en PDF, JPG o TIF.
6. **Ventajas Competitivas**: Grid interactivo destacando los puntos fuertes (flujo integrado, fidelidad visual, compatibilidad total, cuidado tipográfico).
7. **Servicios Profesionales**: Tarjetas explicativas de gestión de proyectos, maquetación/preprensa y desarrollo web.
8. **Contacto**: Accesos directos a correo electrónico, número de WhatsApp para presupuestos y enlace a perfil profesional de LinkedIn.
9. **Aviso Legal y RGPD**: Página independiente adaptada a la normativa europea de protección de datos (LSSI-CE y RGPD).

---

## 💻 Desarrollo y Compilación de Estilos

Si deseas realizar modificaciones visuales en la hoja de estilos, edita el archivo `styles.scss` y compílalo hacia `styles.css`.

### Compilación rápida con Sass:

```bash
# Compilación puntual
sass styles.scss styles.css --style compressed

# Modos de observación (Watch mode para desarrollo)
sass --watch styles.scss:styles.css
```

---

## 👤 Información del Titular

- **Nombre:** Jaime Terciado
- **Especialización:** Maquetación DTP y Gestión de Proyectos de Traducción
- **Ubicación:** Madrid (España)
- **LinkedIn:** [linkedin.com/in/jaterli/](https://linkedin.com/in/jaterli/)
- **Contacto:** jaime.terciado@gmail.com