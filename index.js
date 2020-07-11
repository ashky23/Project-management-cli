const mongoose=require('mongoose');
const Projects=require('./models/projectSchema.js');
const { info } = require('console');

const db=mongoose.connect('mongodb://localhost:27017/projectmanager', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// Function: add project to db
const addProject = (project) => {
Projects.create(project).then(project => {
console.info('New Project Added');
mongoose.connection.close();
});
}

//Function: find project from db filtering by name
const findProject = (name) => {
const search = new RegExp(name, 'i');
Projects.find({project:search})
    .then(project => {
    console.info(project);
    console.info(`${project.length} match(es) to the entered query`);
    mongoose.connection.close();
    });
}

//Function: update project by its _id
const updateProject =(_id,project)=>{
    Projects.updateOne({_id:_id},project).then(()=>{
        console.info('Project updated');
        mongoose.connection.close();
    })
}

//Function: delete project by its _id
const deleteProject=(_id)=>{
    Projects.deleteOne({_id}).then((project)=>{
        console.info(project)
        console.info(`${project.deletedCount} Project(s) deleted`);
        mongoose.connection.close();
    })
}

//Function: list all the projects in db
const listProjects=()=>{
    Projects.find().then((projects)=>{
        console.info(projects);
        console.info(`${projects.length} Projects Listed`);
        mongoose.connection.close();
    })
}

module.exports={
    addProject,
    findProject,
    updateProject,
    deleteProject,
    listProjects,
}