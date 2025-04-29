# Suroccidente App

Aplicación web desarrollada con React, TypeScript y Ant Design para la gestión de datos.

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript**: Superset de JavaScript que añade tipado estático
- **Vite**: Herramienta de construcción y desarrollo rápido
- **Ant Design**: Biblioteca de componentes UI
- **ESLint**: Linter para mantener la calidad del código

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone [url-del-repositorio]
cd suroccidente_app
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo (puerto 5173)
- `npm run build`: Genera la versión de producción
- `npm run lint`: Ejecuta el linter para verificar la calidad del código
- `npm run preview`: Previsualiza la versión de producción localmente

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables
│   └── Layout/          # Componentes de layout
├── hooks/              # Custom hooks
├── services/           # Servicios y llamadas a API
└── assets/             # Recursos estáticos
```

## 🎨 Características Principales

- Interfaz moderna y responsive
- Tabla interactiva con filtros y búsqueda
- Diseño modular y reutilizable
- Tipado fuerte con TypeScript

## 📚 Dependencias Principales

```json
{
  "dependencies": {
    "@ant-design/icons": "^6.0.0",
    "antd": "^5.24.8",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

## 📝 Convenciones de Código

- Usar TypeScript para todo el código
- Seguir las reglas de ESLint configuradas
- Usar componentes funcionales con hooks
- Mantener los componentes pequeños y enfocados
- Separar la lógica de negocio en hooks personalizados

## 👥 Autor

- Javier Rojas

## 🙏 Agradecimientos

- [Ant Design](https://ant.design/) por los componentes UI
- [Vite](https://vitejs.dev/) por la herramienta de construcción
- [React](https://reactjs.org/) por la biblioteca de UI
