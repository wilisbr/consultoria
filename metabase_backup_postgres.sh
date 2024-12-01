docker exec -t postgres pg_dump -U metabase -d metabaseappdb -F c -f /tmp/metabase_backup.dump
docker cp postgres:/tmp/metabase_backup.dump ./metabase_backup.dump
