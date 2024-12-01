docker cp ./metabase_backup.dump postgres:/tmp/metabase_backup.dump
docker exec -t postgres pg_restore -U metabase -d metabaseappdb --clean --if-exists /tmp/metabase_backup.dump
