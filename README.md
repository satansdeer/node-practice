# 10.01.20

## elasticsearch

```
    MySQL         => Databases => Tables => Columns/Rows
    Elasticsearch => Indices   => Types  => Documents with Properties
```

---

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.5.1
```

```
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.5.1
```

```
curl -H "Content-Type: application/json" -XPUT 'http://localhost:9200/blog/user/dilbert' -d '{ "name" : "Dilbert Brown" }'

curl -H "Content-Type: application/json" -XPUT 'http://localhost:9200/blog/post/1' -d '
{ 
    "user": "dilbert", 
    "postDate": "2011-12-15", 
    "body": "Search is hard. Search should be easy." ,
    "title": "On search"
}'

curl -XPUT 'http://localhost:9200/blog/post/2' -d '
{ 
    "user": "dilbert", 
    "postDate": "2011-12-12", 
    "body": "Distribution is hard. Distribution should be easy." ,
    "title": "On distributed search"
}'

curl -XPUT 'http://localhost:9200/blog/post/3' -d '
{ 
    "user": "dilbert", 
    "postDate": "2011-12-10", 
    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat" ,
    "title": "Lorem ipsum"
}'
```

---

```
curl -XGET 'http://localhost:9200/blog/user/dilbert?pretty=true'
curl -XGET 'http://localhost:9200/blog/post/1?pretty=true'
curl -XGET 'http://localhost:9200/blog/post/2?pretty=true'
curl -XGET 'http://localhost:9200/blog/post/3?pretty=true'
```

---

### Поиск

```
curl 'http://localhost:9200/blog/post/_search?q=user:dilbert&pretty=true'
curl 'http://localhost:9200/blog/post/_search?q=-title:search&pretty=true'
curl 'http://localhost:9200/blog/post/_search?q=+title:search%20-title:distributed&pretty=true&fields=title'

```

## graphql

https://app.graphqleditor.com/explore/pokemonschema

## docker

docker hub
docker compose

## pub/sub

 https://github.com/googleapis/nodejs-pubsub
 kafka

## network protocols

* telnet example
    * `telnet stackoverflow.com 80`
    * `HEAD / HTTP/1.1`
    * `Host: stackoverflow.com`
* https://hpd.gasmi.net/
* Example SQL request
    * 00 00 00 00 00 00 00 00 00 00 00 00 08 00 45 08 00 4A 65 C9 40 00 40 06 51 90 C0 A8 00 FE C0 A8 00 FE DB 62 0C EA CC D8 BB B5 CD 34 96 7B 80 18 02 01 83 89 00 00 01 01 08 0A 00 F0 F4 D1 00 F0 DE 8F 12 00 00 00 03 53 45 4C 45 43 54 20 44 41 54 41 42 41 53 45 28 29

## NestJS