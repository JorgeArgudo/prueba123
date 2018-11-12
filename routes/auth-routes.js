var contentful = require('../server-controllers/contentful');

var express = require('express');
var router = express.Router();



// START
router.get('/', (req, res) => {
  loadStartContent2(res, 'helloWorld', process.env.helloWorldId);
});

router.get('/page1', (req, res) => {
  loadStartContent2(res, 'page1', process.env.page1Id);
});

function loadStartContent2(res, page, id) {
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

/*function loadStartContent(res, page, id) {
  var header = process.env.headerId;
  var footer = process.env.footerId;

  contentful.getContent(process.env.space, process.env.accessToken, id).then((data) => {
    contentful.getContent(process.env.space, process.env.accessToken, footer).then((footer) => {
      contentful.getContent(process.env.space, process.env.accessToken, header).then((header) => {
        return res.render(page, {
          header: header,
          footer: footer,
          content: data,
        });
      }).catch((e) => {
        res.status(500, {
          error: e,
        });
      });
    }).catch((e) => {
      res.status(500, {
        error: e,
      });
    });
  }).catch((e) => {
    res.status(500, {
      error: e,
    });
  });
}*/
module.exports = router;
