# Task Manager

[![CI](https://github.com/RuniorElio/Task-Manager-main1/actions/workflows/ci.yml/badge.svg)](https://github.com/RuniorElio/Task-Manager-main1/actions/workflows/ci.yml)

Aplicación web Full Stack para la gestión de tareas, que permite a los usuarios registrarse, iniciar sesión y administrar sus tareas mediante operaciones de creación, edición, eliminación y seguimiento.

<!-- BADGE_CI -->

<p align="center">
  <img width="1235" height="671" alt="Captura" src="https://github.com/user-attachments/assets/c5b27ddb-8fa0-4791-bb16-30b445dc32bb" />
</p>

## Tecnologías utilizadas

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express + TypeScript
- Base de datos: PostgreSQL + Prisma ORM
- Despliegue: Vercel (Frontend) y Render (Backend)

---

# Instalación local 🚀

```bash
git clone https://github.com/RuniorElio/Task-Manager-main1.git
cd Task-Manager-main1
```

## Backend

```bash
cd backend
npm install
```

## Frontend

```bash
cd ../frontend
npm install
```

---

## Variables de entorno

### Backend

Crear un archivo `.env` dentro de `backend/` con las siguientes variables:

```env
DATABASE_URL=
JWT_SECRET=
PORT=
```

### Frontend

Crear un archivo `.env` dentro de `frontend/` con:

```env
VITE_API_URL=
```

---

# Comandos disponibles 📜

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta el proyecto en modo desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm test` | Pendiente — se implementará en la Sesión 3 |

---

# Base de datos 🗄️

El proyecto utiliza PostgreSQL junto con Prisma ORM para administrar el esquema de la base de datos y las migraciones.

---

# Estructura del proyecto

```
Task-Manager-main1
│
├── backend
│
├── frontend
│
└── README.md
```

---

# Tecnologías

- React
- TypeScript
- Vite
- Node.js
- Express
- PostgreSQL
- Prisma
- JWT