# EventHub - Backend API

Backend untuk aplikasi Event Management System  
Dibuat menggunakan Express.js + TypeScript + Prisma ORM + Supabase

---

## Biodata Mahasiswa

| Field | Keterangan |
|---|---|
| Nama | Denta Adi Ramadhani |
| NIM | 24090111 |
| Program Studi | D-4 Teknik Informatika |
| Fakultas | Sekolah Vokasi |


---

## Teknologi

- Express.js + TypeScript
- Prisma ORM
- PostgreSQL (Supabase)
- JWT Authentication
- Vercel (Deployment)

---
## API Endpoints

### Auth
| Method | Endpoint | Keterangan |
|---|---|---|
| POST | `/api/auth/register` | Registrasi user baru |
| POST | `/api/auth/login` | Login dengan NIM & Password |

### Kategori (butuh token)
| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/api/categories` | Ambil semua kategori |
| GET | `/api/categories/:id` | Ambil kategori by ID |
| POST | `/api/categories` | Tambah kategori |
| PUT | `/api/categories/:id` | Update kategori |
| DELETE | `/api/categories/:id` | Hapus kategori |

### Pembicara (butuh token)
| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/api/pembicara` | Ambil semua pembicara |
| GET | `/api/pembicara/:id` | Ambil pembicara by ID |
| POST | `/api/pembicara` | Tambah pembicara |
| PUT | `/api/pembicara/:id` | Update pembicara |
| DELETE | `/api/pembicara/:id` | Hapus pembicara |

### Event (butuh token)
| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/api/events` | Ambil semua event |
| GET | `/api/events/:id` | Ambil event by ID |
| POST | `/api/events` | Tambah event |
| PUT | `/api/events/:id` | Update event |
| DELETE | `/api/events/:id` | Hapus event |

---

## Cara Pakai Token di Postman / Thunder Client

1. Login dulu via `POST /api/auth/login`
2. Copy nilai `token` dari response
3. Di setiap request berikutnya, tambahkan header:
   - Tab **Auth** → **Bearer Token** → paste token

---
## link vercel backend

https://backend-five-blond-20.vercel.app/

---