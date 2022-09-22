const fs = require('fs');   // this is a core node.js module

// write file creates a new file if file doesn't exists.
// clears the file, then puts the "data" in it if file exists.
function writeFile(filename){
    
    fs.writeFile(filename, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file is saved!");
    }); 

}

function readFile(filename){
    
    fs.readFile(filename, 'utf-8', (err,data) => {
        if(err) {
            return console.log(err);
        }
        
        return console.log(data);
    }); 

}

// append data into a file 
function appendFile(filename, data){
    
    fs.appendFile(filename, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Data is appended into the file!");
    }); 

}

// delete a file 
function deleteFile(filename){
    
    fs.unlink(filename, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File is removed (unlinked)");
    }); 

}

// create a new directory 
function createDirectory(directoryName){
    
    fs.mkdir(directoryName, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Directory is created");
    }); 

}

// create a new directory and it's parents recursively
function createDirectoryRecursive(directoryName){
    
    fs.mkdir(directoryName,{recursive:true}, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Directory is created");
    }); 

}

// delete a directory (this will give an error if directory is not empty)
function removeDirectory(directoryName){
    
    fs.rmdir(directoryName, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Directory is removed");
    }); 

}

// remove a directory and it's content recursively
function removeDirectoryRecursive(directoryName){
    
    fs.rmdir(directoryName,{recursive:true}, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Directory is removed");
    }); 

}

// Basic file operations
// writeFile("example.txt","Hey there !");
// readFile("example.txt");
// appendFile("example.txt","\nI'm Muhammed Ali");
// deleteFile("test.txt");


// Basic directory operations
// createDirectory("directory1");
// createDirectoryRecursive("parent1/directory2/");
// removeDirectory("parent1");
// removeDirectoryRecursive("parent1");