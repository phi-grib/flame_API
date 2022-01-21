@echo off
@CALL "%userprofile%\miniconda3\condabin\activate" flame
START /B python flame_api/manage.py runserver 0.0.0.0:8000
timeout /t 5 /nobreak > NUL
"C:\Program Files\Mozilla Firefox\firefox.exe" http://localhost:8000