# Postgrest custom docker image
# Reference: https://postgrest.org/en/stable/explanations/install.html#docker
# We're using a fixed version so we can control the upgrades and migration process
# Reference:
# - https://hub.docker.com/r/postgrest/postgrest
# - https://postgrest.org/en/stable/references/configuration.html
# - https://postgrest.org/en/stable/references/configuration.html?highlight=environment#config-full-list
FROM postgrest/postgrest:v11.1.0
ENV PGRST_OPENAPI_MODE=ignore-privileges
ENV PGRST_OPENAPI_SECURITY_ACTIVE=true
