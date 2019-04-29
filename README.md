# flame_API
OpenAPI 3 definition for flame and django rest framework implementation.

## How to run the web service?

Clone this repository to a local directory. 

Activate the flame environment

`activate flame`

Change to the flame_API folder

`(flame) C:\Users\mpastor\Documents\soft\flame_API>cd flame_api`

Type

`(flame) C:\Users\mpastor\Documents\soft\flame_API\flame_api>python manage.py runserver`



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

## TODO

* Use data **[validators](https://www.django-rest-framework.org/api-guide/validators/)** for requests and responses
* Write **[serializers](https://www.django-rest-framework.org/api-guide/serializers/)** to send and receive standardized data
* Review response schemas in `flameAPI.yml`

-----
## Docs

https://www.django-rest-framework.org/

[Serializer tutorial](https://www.django-rest-framework.org/tutorial/1-serialization/)
