pnpm run build
# docker build -t vivianlin61/bookcue:latest .
docker buildx create --use
# docker buildx build --platform linux/amd64 -t vivianlin61/bookcue:3 .
# docker push vivianlin61/bookcue:3 .

docker buildx build --platform linux/amd64 --push -t vivianlin61/bookcue:3 .

ssh root@138.197.77.102 "docker pull vivianlin61/bookcue:3 && docker tag vivianlin61/bookcue:3 dokku/bookcue-api:latest && dokku deploy bookcue-api latest"
