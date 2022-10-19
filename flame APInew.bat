@echo off
@CALL "%userprofile%\miniconda3\condabin\activate" flame
python flame_api/manage.py runserver 0.0.0.0:8000