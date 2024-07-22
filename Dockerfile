FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

# EXPOSE 8888


# RUN npm run build --prod

# FROM nginx:alpine

# COPY --from=build /app/. /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 8888

# CMD ["nginx", "-g", "daemon off;"]
