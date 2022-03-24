Title DIMENSION CORE
color 0a
echo off
cd core
cls


:boot
echo CREATE WEBSITE ?
pause
cd /workspace/Core/SERVER
docker run wordpress
pause
echo STOP WEBSITE ?
docker-compose down
goto boot