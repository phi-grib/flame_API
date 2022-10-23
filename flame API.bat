@echo off
@CALL "%userprofile%\miniconda3\condabin\activate" flame
START "CTRL-C TO CLOSE!" python flame_api/manage.py runserver 0.0.0.0:8000
START /REALTIME "" "http://localhost:8000"