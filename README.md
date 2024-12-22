# Todo List App - Back-End  

This is the back-end of a **Full-Stack Todo List App**, built with **Express.js**, **TypeScript**, **Prisma**, and **MySQL**. The app implements a typesafe API for managing tasks, including functionality to create, edit, delete, and toggle task completion status.  

The front-end for this app is developed using **Next.js**, **TypeScript**, and **Tailwind CSS**. For setup instructions for the front-end, refer to the respective repository.  

---

## Features  

### Back-End Endpoints
    - GET /tasks
    - POST /tasks
    - GET /tasks/:id
    - PUT /tasks/:id
    - DELETE /tasks/:id

---

## Getting Started  

### Prerequisites  
- Node.js (LTS recommended)  
- npm, yarn, pnpm, or bun  

### Installation  

1. Clone the repository:  
```bash
git clone <repo-url>
cd <repo-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
Create a .env file in the root directory and add:
```bash
DATABASE_URL="mysql://user:pass@localhost:3306/tasks"
LOG_LEVEL=debug #can be 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'
NODE_ENV=development
```
Replace these values with your desired configuration.

4. Run the database migrations if required
```bash
npm prisma migrate dev
# or
yarn prisma migrate dev
# or
pnpm prisma migrate dev
# or
bun prisma migrate dev
```


5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Access API at http://localhost:8010.

---

## Learn More
### Back-End Stack
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
- [Typescript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Prisma Documentation](https://www.prisma.io/docs/getting-started)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## Deployment
To deploy this app, consider platforms like [Heroku](https://heroku.com) or [Digital Ocean](https://digitalocean.com) or [Vultr](https://vultr.com). Ensure the environment variables DATABASE_URL, LOG_LEVEL, and NODE_ENV are configured appropriately.

## Project Structure
```
root/
├── prisma/
│   ├── migrations/
│   │   ├── 20241220212056_init/
│   │   │   └── migration.sql
│   │   ├── 20241221211841_change_color_field_type/
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
├── src/
│   ├── lib/
│   │   └── types.ts
│   ├── middlewares/
│   │   ├── error.ts
│   │   ├── logger.ts
│   │   └── validate.ts
│   └── routes/
│   │   └── tasks/
│   │       ├── tasks.handlers.ts
│   │       ├── tasks.index.ts
│   │       └── tasks.routes.ts
│   ├── app.ts
│   └── env.ts
```
---

## Contributions

Contributions are welcome! Open an issue or submit a pull request if you have suggestions or improvements.