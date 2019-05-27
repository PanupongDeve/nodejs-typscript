FROM abiosoft/caddy:latest
COPY ./caddy/Caddyfile /etc/Caddyfile
EXPOSE 80 443 