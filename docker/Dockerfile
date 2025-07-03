# Build stage
FROM node:18 AS build
WORKDIR /app
COPY "project 2" ./project
RUN cd project && npm ci && npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/project/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
