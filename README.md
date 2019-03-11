# flame_API
OpenAPI 3 definition for flame and django rest framework implementation.

## flame API design explanation
Here I'll use the base URL to be `api.flame.edu/v1/` as a placeholder for the future (no yet created) base URL that respects the consortium specs.

Each model is a *resource* that the client can create, modify, delete or exploit so the url structure will be:

```
api.flame.edu/v1/modelname/<modelname>
```

Over this resource the client can create, delete and get info with the HTTP verbs (POST, DELETE, GET). 

Since the nature of the resource (machine learning models) the HTTP verbs are not enough so we added more endpoints to the URL like:

```
api.flame.edu/v1/modelname/<modelname>/parameters

api.flame.edu/v1/modelname/<modelname>/build

api.flame.edu/v1/modelname/<modelname>/predict
```
