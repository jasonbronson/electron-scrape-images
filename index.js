const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true

    }));
    //build menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    
})

function createNewProject(){
    alert('new project triggered');
}

let mainMenuTemplate = [

    {
        label: 'File',
        submenu: [{
            label: 'Create New Project',
            click(){
                createNewProject();
            }
        },
        {
            label: 'Quit',
            accelerator: process.platform == 'darwin',
            click(){
                app.quit();
            }
        }
    ]
    },
    {
        label: 'Edit',
        submenu: [
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'}
        ]
    },
    {
        label: 'View',
        submenu: [
            {role: 'reload'},
            {role: 'forcereload'},
            {role: 'toggledevtools'},
        ]
    },
    ,
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://github.com/jasonbronson/electron-scrape-images') }
        }
      ]
    }

];

//Do this before adding for darwin 
if(process.env.NODE_ENV == 'production'){
    mainMenuTemplate.splice(2, 1);
}

if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}
