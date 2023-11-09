# Metabase custom docker image
# Reference: https://www.metabase.com/docs/latest/operations-guide/running-metabase-on-docker
# We're using a fixed version so we can control the upgrades and migration process
# Reference: https://hub.docker.com/r/metabase/metabase
FROM metabase/metabase:v0.46.6.4
# Static environment variables that don't vary across deploys
# Reference: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables
ENV MB_SITE_NAME="nBold Analytics"
ENV MB_ENABLE_EMBEDDING=true
ENV MB_ENABLE_PUBLIC_SHARING=false
ENV MB_ANON_TRACKING_ENABLED=false
ENV MB_CHECK_FOR_UPDATES=false
ENV MB_COLORIZE_LOGS=false
ENV MB_EMOJI_IN_LOGS=false
ENV MB_ENABLE_NESTED_QUERIES=true
ENV MB_ENABLE_QUERY_CACHING=true
ENV MB_ENABLE_TEST_ENDPOINTS=false
ENV MB_ENABLE_XRAYS=true
ENV MB_METABOT_ENABLED=true
ENV MB_SHOW_METABOT=true
ENV MB_PASSWORD_COMPLEXITY=strong
ENV MB_DB_AUTOMIGRATE=true
ENV MB_SITE_LOCALE=en
