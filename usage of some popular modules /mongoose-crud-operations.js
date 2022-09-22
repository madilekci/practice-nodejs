const res = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(
    "mongodb://localhost/local-db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const PhotoSchema = new Schema({
    title: String,
    description: String
});
const Photo = mongoose.model('Photo', PhotoSchema);

// create new photo
// let newPhoto = { title: "Title 1 from func", description: "Description 1 from func" };
createNewPhoto(newPhoto);

// find photos
findPhoto({title: { "$regex": "1 from func", "$options": "i" } });

// remove photos
removePhoto( { title: { "$regex": "3", "$options": "i" } } )    // i means includes/contains

function findPhoto(filter) {
    Photo.find(filter,(err,data)=>{
        console.log(data);
    });
}

function removePhoto(filter) {
    
    Photo.remove(filter ,(err,data)=>{
        console.log(data);
    });
}

function createNewPhoto(params) {

    let x = Photo.create({
        title: params.title,
        description: params.description
    }, (err,res)=>{
         console.log(res);
    });

}