FROM node:18-alpine

WORKDIR /usr/src/app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install

# Copiar código fonte
COPY . .

# Construir aplicação
RUN pnpm build

EXPOSE 3001

CMD ["pnpm", "start:dev"]
