{ 'first_name', 'last_name', 'email', 'region', 'rating', 'fee', 'sales'  }



import mongoose from "mongoose";

const agent_schema = new mongoose.Schema({

    first_name:{
    type:String,
    required: true
    },
   

    last_name:{
        type:String,
        required:true,
       
    },


        email:{
        type:String,
        required:false,
       
    },
       

    region:{
        type:String, 
        required:false,
       
    },

    rating:{
        type:String,
        required:false,
       
    },


 fee:{
        type:String,
        required:false,
       
    },

    sales:{
        type:String,
        required:false,
       default:"0"
    },



})


const Agent = mongoose.model("Agent", agent_schema);

export default Agent;

