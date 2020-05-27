# install conda
# copiar flame 
@CALL "%userprofile%\Anaconda3\Library\bin\conda.bat" env create -f environment.yml
@CALL "%userprofile%\Anaconda3\Library\bin\conda.bat" activate flame
START /B python setup.py install
START /B python flame -c config
