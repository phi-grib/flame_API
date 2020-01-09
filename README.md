# Flame_API
The Flame API is a web application for accessing Flame. It consists on a backend offering REST web services, conforming to the OpenAPI 3 specifications defined by the project and a frontend accessing to these services. Together, they provide a complete Graphic User Interface which allows to access most of the Flame capabilities, including model management, building and prediction.

## Installation

### Requirements

Flame should have been already installed in this computer. Refer to the [flame](https://github.com/phi-grib/flame) manual for full instructions of how create a flame conda environment and install the software. 

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

Move to the directory containing the source :

```sh
cd flame_API/flame_api
```
```
python manage.py runserver
```

Then, open a browser and type the address http://localhost:8000

Alternatively, Windows users can use the script `flame API.bat` included in main directory. Right click this file and select 'Send to...'  which will give you an option to send a shortcut to the desktop. A double click on this icon will start the server and open automaticaly the GUI in a new window/tab of the Firefox browser, without entering any address. In some computers the server takes a few second to start while performing system checks. In this case, simply reload the GUI page.

If you prefer using another web browser (e.f. Edge or Chrome), edit the last line of the script accordingly. You can also customize the icon assigning a more descriptive name (e.g. Flame API) and the eTRANSAFE logo, which is also included in this directory as `etransafe-256px.ico`, by right clicking this shortcut and editing its properties. 


## Flame GUI description
The flame GUI consist in 2 main areas: control area and visualization area.

Control area has all functions needed. Those functions are distributed in three tabs (Manage, Build and Predict). The Manage tab is responsible for managing the models: create, delete, import and export. Build and Predict tabs are teh responsible to create and predict models. In both tabs, the sequence is always the same:

- First we have to select a model
- Next step is select a training or prediction set
- Select the parameters desired in case of construction.
- And finally, throw the prediction or build the model.



## Screenshots

Areas:
![Areas](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/areas.png)
![Predict](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/Predict.png)
![Manage](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/Manage.png)
![Build](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/Buid.png)
![Data training uploader](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/uploader.png)
![Validation Results](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/Validation.png)
![Prediction Results](https://raw.githubusercontent.com/phi-grib/flame_API/master/img/Prediction.png)



## flame API design explanation
Here I'll use the base URL to be `api.flame.edu/v1/` as a placeholder for the future (no yet created) base URL that respects the consortium specs.

For sake of simplicity and guiven the architecture of flame this API uses 3 roots:

```
/manage
/build
/predict
```

Each model is a *resource* that the client can create, modify, delete or exploit so the url structure will be:

```
api.flame.edu/v1/{root}/models/{modelname}
```

Over this resource the client can create, delete or get info with the HTTP verbs (POST, DELETE, GET...).

----
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
