curl -g \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 8c7dbd270cb98e83f9d8d57fb8a2ab7bac9d7501905fb013c69995ebf1b2a719" \
-d '{"query":"query{showCollection {items { title firstEpisodeDate lastEpisodeDate henshinMp4 { url }}}}"}' \
https://graphql.contentful.com/content/v1/spaces/mt0pmhki5db7