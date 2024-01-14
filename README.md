yarn init -y

yarn add typescript prisma ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt -D

yarn add express bcrypt jsonwebtoken @prisma/client

yarn tsc --init

yarn prisma init

yarn prisma migrate dev

yarn prisma format