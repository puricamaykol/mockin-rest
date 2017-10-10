MockIn REST (A bare bones personal project)
===================
A simple mock server that automatically  publishes all routes for the resources provided as JSON files.

----------

Current features
----------------

Automatic publishing of RESTful routes based on the json files stored in `resources` folder


```
project
└───resources
│   └───example
│       │   sample.json (data)
│       │   sample.js (config file)
```

This will generate the following API:

`GET /sample`
`GET /sample/1`
`POST /sample`
`PUT /sample/1`
`PATCH /sample/1`
`DELETE /sample/1`

>  Note: It has CORS enabled by default.
>  Note: It will asume the unique attribute is called 'id'

Future features
----------------

 - Configure which routes (actions) will be published
 - Cofigure error messagges
 - Map attributes types
 - Map relations among resources to generate nested routes 
 - Command to generate new resources specifying attr types
 - Command to run the server
 - Method to run server programmatically

