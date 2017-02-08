FROM ubuntu:14.04.3

MAINTAINER Kyle Campbell <kc@kc.io>

ENV TERM xterm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION "stable"

RUN apt-get update
RUN apt-get -y install sudo

RUN apt-get install -y build-essential \
  software-properties-common \
  chrpath \
  libfontconfig1-dev \
  git \
  git-core \
  g++ \
  curl \
  libssl-dev \
  openssl \
  apache2-utils \
  pkg-config \
  make \
  openssh-server \
  nano \
  libkrb5-dev


RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

RUN echo "nvm Version: $(nvm --version)"
RUN nvm install stable
RUN echo "node Version: $node -v)"
RUN which node
RUN echo "npm Version: $(npm -v)"
RUN which node

RUN mkdir -p /src
WORKDIR /src
VOLUME /src

ADD .eslintignore /src
ADD .eslintrc /src
ADD .nvmrc /src
ADD config /src
ADD index.js /src
ADD server /src
ADD static /src
ADD test /src
ADD package.json /src

EXPOSE 3030

CMD ["npm", "start"]
