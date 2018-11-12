var contentful = require('../server-controllers/contentful');

var express = require('express');
var router = express.Router();

// START
router.get('/', (res) => {
  loadStartContent(res, 'helloWorld', process.env.helloWorldId);
});

/*router.get('/helloWorld', (req, res) => {
  loadStartContent(res, 'helloWorld', process.env.helloWorldId);
});*/

function loadStartContent(res, page, id) {
  contentful.getContent(process.env.space, process.env.accessToken, id).then((data) => {
    return res.render(page, {
      content: data,
    });
  }).catch((e) => {
    res.status(500, {
      error: e,
    });
  });
}
module.exports = router;
