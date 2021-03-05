FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]

#FROM nginx:1.15.2-alpine
#COPY ./build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# working deployment
#FROM nginx:1.15.2-alpine
#WORKDIR /usr/src/app
#COPY ./build /var/www
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#ENTRYPOINT ["nginx","-g","daemon off;"]

# set up production environment
# the base image for this is an alpine based nginx image
#FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
#COPY --from=build /app/build /usr/share/nginx/html
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
# start nginx 
#CMD ["nginx", "-g", "daemon off;"]