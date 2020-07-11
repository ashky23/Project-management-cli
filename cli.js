#! /usr/bin/env node
const commander=require('commander');
const {prompt}=require('inquirer');
const {addProject,findProject,updateProject,deleteProject,listProjects}=require('./index');


const questions=[
    {
        type:'input',
        name:'project',
        message:'Enter the name of your Project (*)'
    },
    {
        type:'input',
        name:'description',
        message:'Description for your Project (*)'
    },
    {
        type:'input',
        name:'status',
        message:'Tell me the status of your Project (*)'
    },
    {
        type:'input',
        name:'technologies',
        message:'Technologies (*)',
    },
    {
        type:'input',
        name:'githubRepo',
        message:'Github Repository of your Project ()',
        
    },
    {
        type:'input',
        name:'localDirName',
        message:'Local Directory of your Project (*)'
    },
    {
        type:'input',
        name:'author',
        message:'Author (ashky23)',
        default:'ashky23'
    },
    {
        type:'input',
        name:'others',
        message:'Anything else you wish to mention regarding this project ()'
    },
    {
        type:'input',
        name:'futurePlans',
        message:'Any future plans or goals that you wish to mention ()'
    },
]

commander
    .version('1.0.0')
    .description('CLI tool to manage your projects locally for yourself')

//Function: to add the project entery to the database
commander
  .command('add')
  .alias('a')
  .description('Add the Project')
  .action(() => {
    prompt(questions).then(answers=>addProject(answers));
  });

//Function: to find the project entry by its name
commander
  .command('find <name>')
  .alias('f')
  .description('Find a project by its name')
  .action(name => findProject(name));

//Function: to update the existing project entry by its _id
commander
  .command('update <_id>')
  .alias('u')
  .description('Update the project by its _id')
  .action((_id)=>{
      prompt(questions).then(answers=>updateProject(_id,answers));
  })

//Function: to delete the existing project entry by its _id
commander
  .command('delete <_id>')
  .alias('d')
  .description('Delete the project by its _id')
  .action((_id)=>deleteProject(_id));

//Function: to list all the projects existing in the database
commander
  .command('list')
  .alias('ls')
  .description('list all the projects')
  .action(()=>listProjects());


  commander.parse(process.argv);