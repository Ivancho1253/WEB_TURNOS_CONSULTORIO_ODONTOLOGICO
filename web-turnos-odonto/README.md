# Consultorio Odontológico A&D - Sistema de Turnos

Este es un sistema web para la gestión de turnos del Consultorio Odontológico A&D, desarrollado con Vue.js 3.

## Características

- **Página Principal**: Información del consultorio, servicios ofrecidos y profesionales
- **Sistema de Turnos**: Formularios separados para reservar turnos con cada doctora
- **Integración con WhatsApp**: Los turnos se envían directamente por WhatsApp
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Navegación SPA**: Single Page Application con Vue Router

## Estructura del Proyecto

```
src/
├── assets/
│   └── images/          # Imágenes del consultorio
├── components/          # Componentes reutilizables
├── router/
│   └── index.js        # Configuración de rutas
├── views/
│   ├── Home.vue        # Página principal
│   ├── TurnosAlejandra.vue  # Formulario turnos Dra. Alejandra
│   └── TurnosDaniela.vue    # Formulario turnos Dra. Daniela
├── App.vue             # Componente principal
└── main.js             # Punto de entrada de la aplicación
```

## Rutas Disponibles

- `/` - Página principal del consultorio
- `/turnos-alejandra` - Formulario para turnos con Dra. Alejandra Baigorri
- `/turnos-daniela` - Formulario para turnos con Dra. Daniela Cabrera

## Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar build de producción:**
   ```bash
   npm run preview
   ```

## Tecnologías Utilizadas

- **Vue.js 3** - Framework JavaScript
- **Vue Router 4** - Enrutamiento
- **Vite** - Herramienta de construcción
- **Font Awesome** - Iconos
- **CSS3** - Estilos personalizados

## Configuración de WhatsApp

Para configurar los números de WhatsApp, edita los archivos:
- `src/views/TurnosAlejandra.vue`
- `src/views/TurnosDaniela.vue`

Y reemplaza `549XXXXXXXXXX` con el número de WhatsApp correspondiente.

## Servicios Ofrecidos

- Consultas generales
- Ortodoncia
- Blanqueamiento
- Implantes
- Limpieza profesional
- Endodoncia
- Prótesis dentales
- Odontopediatría

## Información de Contacto

- **Dirección**: Sarmiento 1253, Clorinda, Formosa
- **Horario**: Lunes a Viernes de 9hs a 12hs y de 16hs a 20hs
- **Profesionales**: 
  - Dra. Maria Alejandra Baigorri
  - Dra. Daniela Andrea Cabrera

## Licencia

© 2025 Consultorio Odontológico A&D. Todos los derechos reservados.