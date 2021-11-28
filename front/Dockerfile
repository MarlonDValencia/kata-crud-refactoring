FROM nginx:1.16.0-alpine
COPY build /usr/share/nginx/html
ARG HOST_API
WORKDIR  /usr/share/nginx/html
RUN echo "window._env = {HOST_API:'$HOST_API'};" > ./env-config.js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]