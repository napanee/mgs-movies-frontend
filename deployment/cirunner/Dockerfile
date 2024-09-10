FROM node:20-slim

ENV PATH=/ci/node_modules/.bin:$PATH \
	NODE_PATH=/ci/node_modules

RUN set -ex \
	&& apt-get update \
	&& apt-get install -y --no-install-recommends \
		make \
		locales \
		gosu \
	&& rm -rf /var/lib/apt/lists/* \
	&& echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
	&& locale-gen \
	&& update-locale LANG=en_US.UTF-8

WORKDIR /ci

COPY deployment/cirunner/entrypoint.sh package.json package-lock.json /ci/

RUN set -ex \
	&& npm ci --quiet --loglevel=error \
	&& rm -fr /root/.npm/ \
	&& rm -fr /root/.node-gyp/

WORKDIR /app

ENTRYPOINT ["/ci/entrypoint.sh"]
CMD ["bash"]
