# 📌 Sistema de Gestión de PCs y Mantenimientos

Este proyecto es un sistema **Fullstack** que permite registrar computadoras (equipos) y llevar un control de sus mantenimientos.  

Incluye:  
- **Backend**: Node.js + Express + Base de datos (API REST).  
- **Frontend**: Angular + Angular Material (UI).

---

## 🚀 Requisitos previos
Antes de comenzar, asegúrate de tener instalado en tu ordenador:

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)  
- [Angular CLI](https://angular.io/cli)  
- Git  

---

## 📂 Estructura del proyecto
/proyecto-fullstack
├── backend/ # Servidor Node.js + Express
├── frontend/ # Cliente Angular
└── README.md


---

## ⚙️ Instalación

Clona este repositorio en tu máquina:

```bash
git clone https://github.com/KhalifaSex/inventario2.git
cd proyecto-fullstack
1️⃣ Levantar el Backend (API)
cd backend
npm install       # Instala dependencias
npm start         # Inicia el servidor en http://localhost:3000
El backend expone los endpoints:

http://localhost:3000/api/equipment

http://localhost:3000/api/maintenance

2️⃣ Levantar el Frontend (Angular)
En otra terminal, ejecuta:


cd frontend
npm install       # Instala dependencias
ng serve -o       # Levanta la app en http://localhost:4200
