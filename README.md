# Aplicación de Gestión de Datos

## Descripción

Aplicación web desarrollada con React y TypeScript para la gestión y visualización de datos tabulares.

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Características Principales

- Tabla interactiva con campos editables y bloqueados
- Soporte para datos numéricos y de selección
- Cambio dinámico entre diferentes conjuntos de datos
- Diseño responsivo y moderno
- Validación de campos
- Persistencia de datos

## Estructura del Proyecto

```
src/
├── assets/
│   └── data/           # Archivos JSON con datos
├── components/
│   ├── common/         # Componentes reutilizables
│   └── layout/         # Componentes de estructura
├── hooks/              # Hooks personalizados
├── models/             # Interfaces y tipos
└── services/           # Servicios y lógica de negocio
```

## Desarrollo

### Arquitectura

La aplicación sigue una arquitectura modular y escalable:

1. **Componentes**:

   - `InteractiveTable`: Componente principal que maneja la visualización y edición de datos
   - `TableControls`: Controles para la tabla (búsqueda, filtros, etc.)
   - Componentes reutilizables para inputs y selects

2. **Hooks Personalizados**:

   - `useTableState`: Manejo del estado local de la tabla
   - `useFieldHandlers`: Lógica de manejo de eventos de campos
   - `useTableData`: Gestión de datos y operaciones CRUD

3. **Gestión de Estado**:
   - Estado local para valores seleccionados y numéricos
   - Manejo de cambios en tiempo real
   - Limpieza de campos al cambiar entre conjuntos de datos

### Funcionalidades Implementadas

1. **Tabla Interactiva**:

   - Campos editables y bloqueados
   - Validación de tipos de datos
   - Placeholders descriptivos
   - Tamaño consistente de campos

2. **Gestión de Datos**:

   - Cambio entre diferentes conjuntos de datos
   - Persistencia de selecciones
   - Limpieza de campos al cambiar fuente de datos

3. **Interfaz de Usuario**:
   - Diseño minimalista y moderno
   - Feedback visual en interacciones
   - Mensajes de error descriptivos
   - Campos deshabilitados con estilo distintivo

### Mejoras Técnicas

- Separación de responsabilidades
- Código modular y reutilizable
- Tipado fuerte con TypeScript
- Optimización de rendimiento
- Manejo eficiente de estados

## Tecnologías Utilizadas

- React
- TypeScript
- Ant Design
- CSS Modules
- React Hooks
