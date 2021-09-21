FROM node:14.17.5

WORKDIR /opt/docker_files/cnab400_bb_remessa

RUN /bin/sh -c "apt-get install bash"

COPY package*.json ./
RUN npm install -g npm && npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]