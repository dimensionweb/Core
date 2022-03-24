while :
do
read -p "Website name: " app_name
read -p "$app_name port: " app_port
read -p "$app_user user: " app_user
read -p "$app_pass pass: " app_pass

AppName=$app_name
AppPort=$app_port
AppUser=$app_user
AppPass=$app_pass



cd SERVER
mkdir $AppName
cd $AppName
cat <<EOF >docker-compose.yml
$ cat docker-compose.yaml
version: '3.0'

 $AppName:
    image: wordpress
    links:
     - mariadb_$AppName:mysql
    environment:
     - WORDPRESS_DB_PASSWORD=$AppPass
    ports:
     - "$AppPort:80"
    volumes:
     - ./html_$AppName:/var/www/html
    restart: always

 mariadb_$AppName:
    image: mariadb
    environment:
     - MYSQL_ROOT_PASSWORD=$AppPass
     - MYSQL_DATABASE_0=wordpress_$AppName
    volumes:
     - ./database_$AppName:/var/lib/mysql
    restart: always 
EOF
echo DimensionCloud run "$AppName" --public --cloud --port $AppPort
wait
docker-compose -p $AppName up -d
cd ..
cd ..
done
