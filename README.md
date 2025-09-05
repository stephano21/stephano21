# 🚀 Portafolio de Stephano21

Un portafolio moderno y responsivo construido con React, TypeScript y Ant Design.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con Ant Design
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Construido con Vite para máxima velocidad
- 🔧 **TypeScript**: Código type-safe y mantenible
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- 🌙 **Tema Personalizable**: Fácil de personalizar colores y estilos

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, TypeScript, Ant Design
- **Build Tool**: Vite
- **Styling**: CSS3, Ant Design Components
- **Icons**: Ant Design Icons
- **Deployment**: Vercel/Netlify Ready

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/stephano21/portfolio.git
   cd portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección de bienvenida
│   ├── About.tsx       # Información personal
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Projects.tsx    # Proyectos destacados
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── styles/             # Estilos globales
│   └── global.css      # CSS personalizado
├── types/              # Definiciones de TypeScript
├── utils/              # Utilidades
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Datos personales**: Edita los componentes en `src/components/`
2. **Proyectos**: Modifica el array `projects` en `Projects.tsx`
3. **Habilidades**: Actualiza `skillCategories` en `Skills.tsx`
4. **Información de contacto**: Cambia los datos en `Contact.tsx`

### Personalizar Colores

Los colores principales se pueden cambiar en `src/styles/global.css`:

```css
:root {
  --primary-color: #1890ff;
  --secondary-color: #52c41a;
  --accent-color: #fa8c16;
}
```

## 📱 Secciones del Portafolio

- **🏠 Inicio**: Presentación personal con call-to-action
- **👨‍💻 Sobre Mí**: Información personal y experiencia
- **🛠️ Habilidades**: Tecnologías y nivel de dominio
- **🚀 Proyectos**: Portfolio de trabajos destacados
- **📧 Contacto**: Formulario de contacto y redes sociales

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. ¡Despliega!

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`
4. ¡Despliega!

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: stephano21@email.com
- **GitHub**: [@stephano21](https://github.com/stephano21)
- **LinkedIn**: [Stephano21](https://linkedin.com/in/stephano21)

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!

<img src="https://raw.githubusercontent.com/stephano21/stephano21/output/snake.svg" alt="Snake animation" />
