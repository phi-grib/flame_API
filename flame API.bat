@echo off
@CALL "%userprofile%\Anaconda3\Library\bin\conda.bat" activate flame
START /B python flame_api/manage.py runserver
timeout /t 5 /nobreak > NUL
"C:\Program Files\Mozilla Firefox\firefox.exe" http://localhost:8000