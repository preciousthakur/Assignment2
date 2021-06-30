// To create Http Server for local host

var http = require('http');
http.createServer(function(req, res)
{
    res.write('Hello Netsmartziannnnn');
    res.end();
})
.listen(1201);



// create Http Header
var http = require('http');
http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Node world !');
  res.end();
}).listen(1200);



// To create file

var fs = require('fs');
fs.appendFile('testing.txt','This file contains temp data just for testing purposes !!',function(temp){
    if (temp) throw temp;
    console.log('File Saved')
})


// To Read Existing file
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('testing.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(1700);



// To Append file or to add data in the last of file's content
var fs = require('fs');
fs.appendFile('testing.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});


// To Update file data

var fs = require('fs');
fs.writeFile('testing.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

// To Rename file

var fs = require('fs');
const { table } = require('console');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('testing.txt', 'testing1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});


// To delete exsiting file 

var fs = require('fs');
fs.unlink('testingfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});



// To create object

school={
    student:{
        name1:"Anmol",
        name2:"Akash",
        name3:"vikash",
    },
   studentType:{
       class:"12th",
       stream:"Non-Med",
   },
   UsersPhoto:{
       P1:"photo1",
       p2:"photo2",
       p3:"photo3",
   },
   func: function print()
   {
       console.log("Name of the Students ",this.student.name1);
       console.log("Student Type",this.studentType.class)
       console.log("Users Photos",this.UsersPhoto.P1)
   }
};
school.func()

