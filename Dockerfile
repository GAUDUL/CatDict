FROM node:16-alpine

RUN apk update && apk add --no-cache git bash

CMD ["sh"]
