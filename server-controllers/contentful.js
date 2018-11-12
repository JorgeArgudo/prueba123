//'use strict';
const contentful = require('contentful');
/*
This file contains any server side modules needed.
*/

module.exports = {
    // Returns Hello World to the Autheicted Routes File when it is called
    getContent: function (conSpace, conToken, id) {

        var contenfulClient = contentful.createClient({
            space: conSpace,
            accessToken: conToken,
        })

        return new Promise(function (fulfill, reject) {


            contenfulClient.getEntries({
                'sys.id': id,
                include: 5
            }) // 
                .then(function (entries) {
                    //console.log("entry: ",entries)
                    fulfill(entries.items[0]); // content sent to page .items[0]
                    // console.log("data sent to navigator")
                })
                .catch(function (error) {
                    //console.log("error", error)
                    reject(error)
                })
        })
    }
};