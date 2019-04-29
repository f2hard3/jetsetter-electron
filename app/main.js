import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';

enableLiveReload({ strategy: 'react-hmr' });

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 600,
        minWidth: 300,
        show: false,
        webPreferences: {
          nodeIntegration: true
        }
    });
    mainWindow.loadFile(`${__dirname}/index.html`);
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
});
