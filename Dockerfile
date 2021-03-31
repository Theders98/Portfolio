# etapa de compilación
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# etapa de producción
FROM nginx:1.17

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist .

EXPOSE 8080:8080

CMD [“nginx”, “-g”, “daemon off;”]