@echo off
@CALL "%userprofile%\miniconda3\condabin\activate" flame
REM "esto solo funcionaría en PowerShell" Get-Process "Python" | Stop-process
START "CTRL-C TO CLOSE!" python flame_api/manage.py runserver 0.0.0.0:8000
START /REALTIME "" "http://localhost:8000"