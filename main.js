const {app,BrowserWindow,Menu} = require('electron');
const express = require('express');
const application = express();
let devToolsOn = false;
application.listen(3000,() => {
    console.log('listing at 3000');
});
application.use(express.json());
application.post('/dog',(req,res) => {
    res.send({img : req.body.url, status:"🍔"})
    const dog = req.body.url;
    menuTemplate[2].submenu.push({
        label : `Dog #${req.body.number}`,
        click(){
            showDogWindow(dog);
        }
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)
});
function showDogWindow(dog) {
    const Dogwin = new BrowserWindow({
        height: 400,
        width: 400,
        title: dog
    });
    Dogwin.loadURL(dog);
}
let win;
app.on('ready',() => {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)
});
const menuTemplate = [
    {
        label : 'PHP'
    },
    {
        label: "File",
        submenu: [
            {
                label: "Quit DogApplication",
                accelerator : process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            },
            {
                label : 'Show/Hide Dev Tools',
                click(){
                    devToolsOn = !devToolsOn;
                    if(devToolsOn){
                        menuTemplate.push({
                            label: 'Developer Tools',
                            submenu:[
                                {
                                    accelerator : process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                                    label: 'Toggle DevTools',
                                    click(item,focusedWindow){
                                        focusedWindow.toggleDevTools();
                                    }
                                },
                                {
                                    role: 'reload'
                                }
                            ]
                        })
                    } else {
                        menuTemplate.pop();
                    }
                    const mainMenu = Menu.buildFromTemplate(menuTemplate)
                    Menu.setApplicationMenu(mainMenu)
                }
            }   
        ]
    },
    {
        label : "Dogs",
        submenu: []
    }
]