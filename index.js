var express = require('express')
var app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var normalizedPath = require("path").join(__dirname, "resources");

require("fs").readdirSync(normalizedPath).forEach(file => {

  let resources = require(`./resources/${file}/${file}.json`);

  let endpoint = file;

  app.get(`/${endpoint}`, (req, res) => {
    res.status(200).json(resources);
  });

  app.get(`/${file}/:id`, (req, res) => {
    if (req.params.id) {
      const resource = resources.find(itm => itm.id == req.params.id);
      if (!resource) {
        res.status(404).json({
          error: "The resource you're trying to get does not exist."
        });
      }
      res.status(200).json(resource);
    } else {
      res.status(500).json({
        "error": "Should especifie the resource identifier"
      });
    }
  });

  app.post(`/${endpoint}`, (req, res) => {
    res.status(200).json({
      id: 3,
      name: "juan",
      lastname: "suarez"
    });
  });

  app.put(`/${endpoint}/:id`, (req, res) => {
    if (req.params.id) {
      const resource = resources.find(itm => itm.id == req.params.id);
      if (!resource) {
        res.status(404).json({
          error: "The resource you're trying to update does not exist."
        });
      }
      res.status(200).json(resource);
    } else {
      res.status(500).json({
        "error": "Should especifie the resource identifier"
      });
    }
  });

  app.patch(`/${endpoint}/:id`, (req, res) => {
    if (req.params.id) {
      const resource = resources.find(itm => itm.id == req.params.id);
      if (!resource) {
        res.status(404).json({
          error: "The resource you're trying to update does not exist."
        });
      }
      res.status(200).json(resource);
    } else {
      res.status(500).json({
        "error": "Should especifie the resource identifier"
      });
    }
  });

  app.delete(`/${endpoint}/:id`, (req, res) => {
    if (req.params.id) {
      const resource = resources.find(itm => itm.id == req.params.id);
      if (!resource) {
        res.status(404).json({
          error: "The resource you're trying to delete does not exist."
        });
      }
      res.status(200).json({
        message: 'Resource deleted'
      });
    } else {
      res.status(500).json({
        "error": "Should especifie the resource identifier"
      });
    }
  });

  app.options(`/${endpoint}`, (req, res) => {
    res.status(200).json({
      methods: ['get', 'post', 'put', 'patch', 'delete', 'options']
    });
  });

});

/**

**/
const port = 8002;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})