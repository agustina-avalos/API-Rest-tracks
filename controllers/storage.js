const fs = require("fs")
const express = require("express");
const { matchedData } = require("express-validator");
const { storageModel} = require("../models/index");
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`;
const {handlehttpError} = require ("../utils/handleError")


const getItems = async (req,res)=>{
    try{
        const data = await storageModel.find({});
        res.send({data});
    }catch(err){
        handleError(res, "error getItems");
    }
}


const getItem = async (req,res)=>{
    try{
        req = matchedData(req);
        const id = req.id;
        const data = await storageModel.findById(id);
        res.send({data});

    }catch(err){
        handleError(res, "error getItem");
    }
}


const createItem = async(req,res)=>{
    try{
       
        const file = req.file;
        const filedata= {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data =  await storageModel.create(filedata);
        res.send({data})
    }catch(err){
        handleError(res, "error createItem",404)
    }
}

const deleteItem = async(req,res)=>{
    try{
        const {id} = matchedData(req)
        const dataFile = await storageModel.findById(id);
        const {filename} = dataFile
        const filepath = `${MEDIA_PATH}/${filename}`

        //borramos de base de datos
        await storageModel.deleteOne(id);
        
        //borramos de carpeta
        fs.unlinkSync(filepath);
        const data ={
            filepath,
            delete:1
        }

        res.send({data});
    }catch(e){
        handlehttpError(res, "error delete",400)
    }
}



module.exports = {getItem, getItems, createItem, deleteItem}
