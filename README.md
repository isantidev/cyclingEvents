# 🚴‍♂️ Cycling Events Web Platform

_Plataforma web para descubrir y explorar eventos de ciclismo con un diseño limpio, visual y enérgico._
_Construida con enfoque en claridad, ritmo visual y experiencia moderna._

## 📋 Descripción del Proyecto

VeloVentures es una plataforma web dedicada a la comunidad ciclista, especialmente enfocada en Colombia. Permite a los usuarios descubrir, explorar y participar en eventos de ciclismo de diferentes categorías como MTB, Gravel y Carretera. La plataforma ofrece una experiencia intuitiva para encontrar carreras por fecha, ubicación y dificultad, con información detallada sobre distancias, desniveles y participantes máximos.

El objetivo es conectar ciclistas con organizadores de eventos, facilitando el registro y la participación en competiciones deportivas, mientras se mantiene un diseño moderno y responsivo.

## 🧩 Páginas principales

1. Página inicial

-   Hero con imagen cinematográfica y CTA principal.

-   Barra de filtros (fecha, ubicación, dificultad).

-   Grid de 3 columnas con tarjetas de eventos.

-   Animaciones suaves y composición aireada.

2. Página con detalles del evento

-   Header sticky con botón “Register”.

-   Banner de imagen completa con detalles del evento.

-   Tarjeta flotante con datos clave (distancia, dificultad, etc.).

-   Sección con pestañas: Fotos, Ruta y Ediciones anteriores.

3. User Profile Page

-   Perfil del usuario con foto y opción de editar.

-   Pestañas: My Events y Settings.

## ✨ Características Principales

-   **Descubrimiento de Eventos**: Interfaz intuitiva para explorar carreras por fecha, ubicación y dificultad.
-   **Filtros Avanzados**: Búsqueda por categoría (MTB, Gravel, Carretera), dificultad (fácil, medio, avanzado) y ubicación geográfica.
-   **Información Detallada**: Datos completos sobre distancia, ganancia de elevación, participantes máximos y fechas de registro.
-   **Perfil de Usuario**: Gestión de eventos personales, configuración y registro en carreras.
-   **Diseño Responsivo**: Experiencia optimizada para dispositivos móviles y de escritorio.
-   **Integración Geográfica**: Soporte específico para ubicaciones en Colombia con datos de ciudades y departamentos.

### 🎨 Diseño

Creado a partir de mockups, haciendo uso de la herramiento [Stitch - Design with AI](https://stitch.withgoogle.com/)

Puedes ver la preview del proyecto ingresando al siguiente link:
[Mockups](https://stitch.withgoogle.com/u/1/projects/566685928025800631?pli=1)

## 🏗️ Arquitectura

El proyecto sigue una arquitectura modular organizada en las siguientes capas:

### Módulos Principales

-   **`modules/web`**: Componentes y páginas del frontend, incluyendo navegación, búsqueda y visualización de carreras.
-   **`modules/races`**: Lógica de negocio para el manejo de datos de carreras, incluyendo tipos, servicios y hooks personalizados.
-   **`modules/geo`**: Gestión de datos geográficos, específicamente para Colombia con información de ciudades y departamentos.

### Capas Compartidas

-   **`core`**: Configuraciones centrales como cliente de API y tipos de error.
-   **`shared`**: Componentes reutilizables, configuraciones compartidas, tipos comunes y utilidades.

### Patrón de Arquitectura

-   **Separación de Responsabilidades**: Cada módulo maneja su propia lógica de negocio.
-   **Componentes Reutilizables**: Elementos compartidos en la capa `shared`.
-   **Hooks Personalizados**: Abstracción de lógica de estado y efectos.
-   **Servicios y Repositorios**: Capa de acceso a datos separada de la lógica de presentación.

## 📁 Estructura del Directorio

```
src/
├── modules/                    # Módulos de negocio
│   ├── web/                    # Frontend y UI
│   │   ├── components/         # Componentes específicos del web
│   │   ├── pages/              # Páginas principales
│   │   └── hooks/              # Hooks para lógica del frontend
│   ├── races/                  # Lógica de carreras
│   │   ├── api/                # Repositorios de datos
│   │   ├── hooks/              # Hooks para carreras
│   │   ├── services/           # Servicios de negocio
│   │   └── race.types.ts       # Tipos de datos de carreras
│   └── geo/                    # Datos geográficos
│       ├── api/                # Repositorios de geo
│       ├── hooks/              # Hooks para geo
│       ├── service/            # Servicios geo
│       └── colombiaData.types.ts # Tipos de geo
├── core/                       # Configuraciones centrales
│   ├── api/                    # Cliente de API
│   └── types/                  # Tipos core
├── shared/                     # Elementos compartidos
│   ├── components/             # Componentes reutilizables
│   ├── types/                  # Tipos compartidos
│   ├── config/                 # Configuraciones
│   └── api/                    # APIs compartidas
├── App.tsx                     # Componente raíz
├── main.tsx                    # Punto de entrada
└── index.css                   # Estilos globales
```

### 🚧 Estado actual

**Frontend**: ✅ Completado

-   Estructura modular implementada con separación clara de responsabilidades
-   Páginas principales (Home, Races, User Profile) desarrolladas
-   Componentes reutilizables y hooks personalizados implementados
-   Diseño responsivo y animaciones suaves aplicadas
-   Integración con datos mock y estructura preparada para API real

**Backend**: 🚧 En desarrollo

-   Base de datos Supabase configurada con esquemas de carreras y usuarios
-   APIs de consulta implementadas para carreras y datos geográficos
-   Autenticación de usuarios pendiente de implementación completa

**Despliegue**: ❌ Pendiente

-   Configuración de CI/CD no implementada
-   Variables de entorno y configuración de producción pendientes

## 🚀 Cómo Empezar

### Prerrequisitos

-   Node.js (versión 18 o superior)
-   npm o pnpm instalado

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd cyclingEvents

# Instalar dependencias
pnpm install
```

### Configuración del Entorno

1. Copiar el archivo de variables de entorno:

    ```bash
    cp .env.example .env
    ```

2. Configurar las variables necesarias en `.env`:
    - `VITE_PUBLIC_SUPABASE_URL`: URL del proyecto Supabase
    - `VITE_PUBLIC_SUPABASE_ANON_KEY`: Clave anónima de Supabase

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
pnpm run dev

# Construir para producción
pnpm run build

# Ejecutar linter
pnpm run lint

# Vista previa de la build
pnpm run preview
```

### Desarrollo

1. Ejecutar `pnpm run dev` para iniciar el servidor de desarrollo
2. Abrir [http://localhost:5173](http://localhost:5173) en el navegador
3. Los cambios se reflejarán automáticamente con hot reload

### 👤 Autor

Diseño y desarrollo por isantidev.
