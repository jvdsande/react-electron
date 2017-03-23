'use strict'
let copy = require('copy')
copy("res/**/*.css", "app/css", function(err, files) {})
copy("res/**/!(*.css)", "app/resources", function(err, files) {})
