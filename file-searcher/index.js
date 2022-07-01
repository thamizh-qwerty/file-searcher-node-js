const fs = require('fs');
cnst os = require('os');

console.log('os', os);

var _parent_directory = './uploads';

var _files = fs.readdir(_parent_directory, 'utf8', (error, data) => {

    var _all_files = {};

    if(error){
        console.log('🚀 - parentFolder - error', error);
    }
    console.log('🚀 - parentFolder - data:', data);

    if(data) {
        data.forEach( (element, index) => {
            var _each_file = fs.readdir(_parent_directory+'/'+element, (error, data) => {
                if(error){
                    console.log('🚀 - children - error', error);
                }
                console.log('🚀 - children - data:', element, index, data);

                if(data){

                    _all_files = {
                        _parent_directory: _parent_directory,
                        files_inside_the_parent_directory: element 
                    }

                }

            })
        });
    }
});


// works fine to get list of all files in a folder *********
// var _files = fs.readdir('./uploads', 'utf8', (error, data) => {
//     if(error){
//         console.log('🚀 index.js - error', error);
//     }
//     console.log('🚀 index.js - data', data);
// });



// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j

// const testFolder = './tests/';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });



// Fs.writeFile() according to the documentation here takes ( file, data[, options]and callback ) params so your code will be like this :

//  var fs = require('fs');
//  fs.readFile('readMe.txt', 'utf8', function (err, data) {
//   fs.writeFile('writeMe.txt', data, function(err, result) {
//      if(err) console.log('error', err);
//    });
//  });




