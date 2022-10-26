@echo off
@CALL "%userprofile%\miniconda3\condabin\activate" flame
REM powershell.exe -c "Get-Process "Python" | Stop-process"
START /REALTIME /MIN "flame server" python flame_api/manage.py runserver 0.0.0.0:8000
START /REALTIME "" "http://localhost:8000"