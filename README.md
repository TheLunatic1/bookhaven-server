# The Book Haven – Server (API)

**API Base URL**: `https://bookhaven-server.vercel.app/api`

## Features
- RESTful API for books (CRUD)
- User-specific books (`userEmail`)
- CORS enabled for Firebase
- Deployed on **Vercel**

## Tech Stack (Server)
| Tool | Version | Purpose |
|------|--------|--------|
| **Node.js** | `18+` | Runtime |
| **Express.js** | `4.x` | Web Framework |
| **MongoDB** | Atlas | Database |
| **Mongoose** | `8.x` | ODM |
| **CORS** | `2.x` | Cross-Origin |
| **dotenv** | `16.x` | Environment |

## API Endpoints
| Method | Endpoint | Description |
|-------|----------|-----------|
| `GET` | `/api/books` | All books |
| `GET` | `/api/books/my?email=...` | User's books |
| `POST` | `/api/books` | Add book |
| `PUT` | `/api/books/:id` | Update book |
| `DELETE` | `/api/books/:id` | Delete book |

## Setup
```bash
npm install
npm run dev