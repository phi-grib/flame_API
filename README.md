# Flame_API

Flame API is a web application designed to facilitate the use of essential features incorporated in the Flame software. It consists of a backend offering REST web services, which conform to the OpenAPI 3 specifications defined by the eTRANSAFE project, and a frontend (implemented in Angular, see flameWeb2) accessing to these services. Together, they provide a complete Graphic User Interface which allows for an interactive usage of the functions of Flame, including model building and management as well as the generation of predictions. 

## Installation

### Requirements

Before proceeding, make sure that Flame is installed in your computer. Refer to the [flame](https://github.com/phi-grib/flame) manual for full instructions of how to create a flame conda environment and install the software. 

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

If you prefer using another web browser (e.f. Edge or Chrome), edit the last line of the script accordingly. By right clicking this shortcut and editing its properties you can also customize the icon, for instance by selecting a more descriptive name (e.g. Flame API) or changing its logo (e.g. to the eTRANSAFE logo which is also included in this directory as etransafe-256px.ico).  

## Flame GUI description
(in progress...)


## Screenshots
(in progress...)

## flame API design explanation
Here I'll use the base URL to be api.flame.edu/v1/ as a placeholder for the future (not yet created) base URL that respects the consortium specs.

For the sake of simplicity and given the architecture of flame this API uses 3 roots:


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
