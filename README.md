# Flame_API

Flame API is a web application designed to facilitate the use of essential features incorporated in the Flame software. It consists of a backend offering REST web services, which conform to the OpenAPI 3 specifications defined by the eTRANSAFE project, and a frontend (implemented in Angular, see flameWeb2) accessing to these services. Together, they provide a complete Graphic User Interface which allows for an interactive usage of the functions of Flame, including model building and management as well as the generation of predictions. 

## Installation

### Requirements
Before proceeding, make sure that Flame is installed in your computer. Refer to the [flame](https://github.com/phi-grib/flame) Readme for full instructions about how to create a flame conda environment and install the software. 

### Activate the flame environment 

```sh
source activate flame (in Linux)
activate flame (in Windows)
```

### Download the repository

```sh
git clone https://github.com/phi-grib/flame_API.git
```

## Running the graphic user interface

Change to the directory containing the source:

```sh
cd flame_API/flame_api
```
```
python manage.py runserver
```

Then, open a browser and type the following address: http://localhost:8000

Alternatively, Windows users can additionally use the script `flame API.bat` which is included in the main directory flame_API. In order to do so, right click this file and select 'Send to...'. This will give you an option to send a shortcut to the desktop. A double click on this icon will start the server which will be followed by an automatic opening of the GUI in a new window/tab of the Firefox browser. Due to several system checks, in some computers the server may take a few seconds to start... In this case, simply reload the GUI page.

If you prefer using another web browser (e.f. Edge or Chrome), edit the last line of the script accordingly. By right clicking this shortcut and editing its properties you can also customize the icon, for instance by selecting a more descriptive name (e.g. Flame API) or changing its logo (e.g. to the eTRANSAFE logo which is also included in this directory as Flame-icon.ico).  

## Screenshots

### Model list
![Alt text](img/flame-window.jpg?raw=true "Flame main window")
Main window, showing the model summary information


![Alt text](img/quality-qualit.png?raw=true "Quality of qualitative model")
Model quality information for a qualitative model


![Alt text](img/quality-quantit.png?raw=true "Quality of quantitative model")
Model quality information for a quantitative model


### Predictions
![Alt text](img/prediction-list.png?raw=true "Prediction results as a list")
Prediction results as a list


![Alt text](img/prediction-report.png?raw=true "Prediction report")
Prediction report for a single compound


![Alt text](img/prediction-series-2.jpg?raw=true "Prediction projected on the training series")
Predicted componds projected on a 2D scores plot obtained with the training series


## Licensing

Flame was produced at the PharmacoInformatics lab (http://phi.upf.edu), in the framework of the eTRANSAFE project (http://etransafe.eu). eTRANSAFE has received support from IMI2 Joint Undertaking under Grant Agreement No. 777365. This Joint Undertaking receives support from the European Union’s Horizon 2020 research and innovation programme and the European Federation of Pharmaceutical Industries and Associations (EFPIA). 

![Alt text](img/eTRANSAFE-logo-git.png?raw=true "eTRANSAFE-logo") ![Alt text](img/imi-logo.png?raw=true "IMI logo")

Copyright 2018-2020 Manuel Pastor (manuel.pastor@upf.edu)

Flame is free software: you can redistribute it and/or modify it under the terms of the **GNU General Public License as published by the Free Software Foundation version 3**.

Flame is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Flame. If not, see <http://www.gnu.org/licenses/>.


<!---
## TODO

* Control errors **[Status_codes](https://www.django-rest-framework.org/api-guide/status-codes/)** for responses
* Use data **[validators](https://www.django-rest-framework.org/api-guide/validators/)** for requests and responses
* Write **[serializers](https://www.django-rest-framework.org/api-guide/serializers/)** to send and receive standardized data
* Review response schemas in `flameAPI.yml`

-----
## Docs

https://www.django-rest-framework.org/

[Serializer tutorial](https://www.django-rest-framework.org/tutorial/1-serialization/)
-->
