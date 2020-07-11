const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    project:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,required:true},
    githubRepo:{type:String,default:""},
    localDirName:{type:String,required:true},
    author:{type:String,default:""},
    others:{type:String,default:""},
    technologies:{type:String,required:true},
    futurePlans:{type:String,default:""}
})
//You can add more fields as per your convenience.


//Export mongo Schema
module.exports=mongoose.model('Projects',projectSchema);