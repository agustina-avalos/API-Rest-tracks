const { matchedData } = require("express-validator");
const {tracksModel} = require("../models/index")
const {handlehttpError} = require ("../utils/handleError")


const getItems = async (req,res)=>{
    try{
        const data = await tracksModel.find({});
        res.send({data});
    }catch(err){
        handlehttpError(res, "error en get items")
    }
}

const getItem =async (req,res)=>{
    try{
        req=matchedData(req)
        const {id} = req
        const data = await tracksModel.findById(id);
        res.send({data});
    }catch(e){
        handlehttpError(res, "id incorrecto",400)
    }
}

const createItem = async(req,res)=>{
    try{
        const body = matchedData(req);
        const data =  await tracksModel.create(body);
        res.send({data});

    }catch(err){
        handlehttpError(res, "error en create items")
    }
}



const updateItem = async(req,res)=>{
    try{
        const {id, ...body}= matchedData(req);
        const data =  await tracksModel.findOneAndUpdate(id,body);
        res.send({data});

    }catch(err){
        handlehttpError(res, "error en actualizar")
    }
}

const deleteItem = async(req,res)=>{
    try{
        req=matchedData(req)
        const {id} = req
        const data = await tracksModel.deleteOne({_id:id});
        res.send({data});
    }catch(e){
        handlehttpError(res, "error delete",400)
    }
}



module.exports = {getItem, getItems, createItem, updateItem, deleteItem}

