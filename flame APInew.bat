@echo off
@CALL "%userprofile%\miniconda3\condabin\activate" flame
START "CLOSE USING CTRL-C!" python flame_api/manage.py runserver 0.0.0.0:8000
"C:\Program Files\Mozilla Firefox\firefox.exe" http://localhost:8000