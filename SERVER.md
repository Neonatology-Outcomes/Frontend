# Server

## We used Debian 11 as the operating system for the VPS (Virtual Private Server)

### Commands used to set up the Java Spring environment

`sudo apt-get install openjdk-17-jdk`

`sudo apt-get install nginx`

`sudo apt-get install maven`

`sudo nano /etc/nginx/sites-available/springbootapp`

```
server {
    server_name api.neonatologyoutcomes.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.neonatologyoutcomes.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.neonatologyoutcomes.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = api.neonatologyoutcomes.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name api.neonatologyoutcomes.com;
    return 404; # managed by Certbot


}
```

`sudo ln -s /etc/nginx/sites-available/springbootapp /etc/nginx/sites-enabled/`

`sudo systemctl restart nginx`

`git clone git@github.com:Neonatology-Outcomes/776_Backend.git`

`mvn clean install`

`cd target`

`java -jar backend-0.0.1-SNAPSHOT.jar`
