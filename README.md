[![HitCount](http://hits.dwyl.com/ashky23/Project-management-cli.svg)](http://hits.dwyl.com/ashky23/Project-management-cli)

# Project-management-cli
This is command-line tool to manage the projects in your local system , which can provide the functionality where you can mention your project details and it will keep the track of all your projects which you've buit so far or are currently working on.:computer: :envelope: :mag:



```
1. Fork the repository
2. npm install
3. npm link
4. type project-manager as a new command which will provide you its details and the options which you can use.
```
**Demo**(different commands with their results):
  - project-manager
 ``` Usage: project-manager [options] [command]

CLI tool to manage your projects locally for yourself

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  add|a           Add the Project
  find|f <name>   Find a project by its name
  update|u <_id>  Update the project by its _id
  delete|d <_id>  Delete the project by its _id
  list|ls         list all the projects
  help [command]  display help for command
```
  - project-manager add
  ```
  ? Enter the name of your Project (*) test
  ? Description for your Project (*) description for your test-project
  ? Tell me the status of your Project (*) currently working
  ? Technologies (*) Nodejs, React, javascript, mongodb
  ? Github Repository of your Project () 
  ? Local Directory of your Project (*) cd test-proj
  ? Author (ashky23) ashky23
  ? Anything else you wish to mention regarding this project () 
  ? Any future plans or goals that you wish to mention () 
```
  - project-manager find <project-name>
  ```
  [
  {
    githubRepo: '',
    author: 'ashky23',
    others: '',
    futurePlans: '',
    _id: 5f0ad64e1f05337128785340,
    project: 'test',
    description: 'description for your test-project',
    status: 'currently working',
    technologies: 'Nodejs, React, javascript, mongodb',
    localDirName: 'cd test-proj',
    __v: 0
  }
  ]
1 match(es) to the entered query
```
- project-manager update <_id>
 ```
  ? Enter the name of your Project (*) test
  ? Description for your Project (*) description will be changed for the test-project
  ? Tell me the status of your Project (*) currently working
  ? Technologies (*) Nodejs, React, javascript mongodb
  ? Github Repository of your Project () cd test-proj
  ? Local Directory of your Project (*) cd test-proj
  ? Author (ashky23) ashky23
  ? Anything else you wish to mention regarding this project () 
  ? Any future plans or goals that you wish to mention () 
```
  - project-manager delete <_id>
  ```
  { n: 1, ok: 1, deletedCount: 1 }
1 Project(s) deleted
```
  
 **NOTE**:
 ``` 
 This project uses mongodb as your database which will save your project details, so ensure your mongod service is running otherwise project-manager won't be running properly
 ```
  
 **Tip**:
 ```
 You can create a password manager which will keep track of your passwords for different websites and you can save those passwords in your local system.
 ```
  
