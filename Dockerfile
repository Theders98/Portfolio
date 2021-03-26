
FROM node:12.18.1-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0-alpine as prod-stage
COPY --from=build /app/dist /usr/share/nginx
EXPOSE 80
CMD ["nginx","-g","daemon off;"]