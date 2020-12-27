# Bot - Discord bumper

## Dependancies

cf package.json > engines

## Install

`npm i`

## Config

### Secret variable

### For heroku

all in secret.js must be in variable

### Rights

## Lauch dev

in `config.js` be sure of `exports.ENV = 'dev';`

then `npm run serve`

## Production with heroku

* on discordapp.com/developers/applications/
* create an application (it will be the bot s name)
* bot > add a bot > Token > copy > paste it in your secret
* oauth2 > check bot > copy link > open in a new tab > add the bot to your server


* on https://dashboard.heroku.com/login
* new app > deploy > do ... as you want or as you can to add code (you can find it in https://github.com/FlorianCcj/bot-dreadnought)
* settings > Configs Vars > Reveal Configs Vars > set all your vars
* Deploy > Manual deploy > Deploy Branch
* Resources > activate `web` and `worker`
* if you want to see log: more > views logs

## Docker

### Dev

* `docker build -t fccj/igo-bot-dictionary -f docker/Dockerfile-dev .`
* `version=1.0.0; docker build --build-arg creation_date=$(date --iso-8601=seconds) --build-arg image_revision=$(git log -n1 --format=format:"%h") --build-arg image_version=${version} -t fccj/igo-bot-dictionary:${version} -f docker/Dockerfile-prod .`

* `docker run fccj/igo-bot-dictionary`: bof
* `docker run -d --rm -m "300M" --env-file ".env" --name my-bot-i-01 fccj/igo-bot-dictionary`: mieux
* `docker logs my-bot-i-01`

### Prod

* renomer le `.env.example` en `.env`
* remplir le token dans `.env`
* `docker-compose --compatibility up -d`

## Source

* Thanks to https://github.com/nomsi/docker-discordjs-tutorial
* https://www.jeudego.org/_php/affiche_dico_grand_tableau.php
* https://senseis.xmp.net/?search=A 
* https://francois-mizessyn.pagesperso-orange.fr/JeuDeGo/index/jargon.htm
