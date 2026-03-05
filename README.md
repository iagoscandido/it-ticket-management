# Personal It Tickets Management

## Requirements

- Node.js 24.14.0 LTS
- Docker Desktop

## How to run

```sh
     # clone this repository
     git clone https://github.com/iagoscandido/it-ticket-management.git
```

### Backend

- Node
- Typescript
- Express
- Drizzle ORM
- Postgres

```sh
     # starts postgres
     docker compose up
     # installs dependencies
     npm i
     # starts a local server on http://localhost:8080
     # docs on http://localhost:8080/docs
     npm run dev
     # stats drizzle studio on https://local.drizzle.studio
     npm run db:studio
```

### Frontend

- Vite
- React
- Typescript
- TailwindCSS
- Shadcn/ui

```sh
     # installs dependencies
     npm i
     # starts a local server on http://localhost:5173
     npm run dev
```
