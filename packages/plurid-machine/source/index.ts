// #region imports
    // #region libraries
    import path from 'path';

    import {
        app,
        screen,
        BrowserWindow,
        Tray,
        Menu,
    } from 'electron';
    // #endregion libraries
// #endregion imports



// #region module
let window: BrowserWindow | null = null;
let tray: Tray | null = null;


const createWindow = () => {
    const mainScreen = screen.getPrimaryDisplay();

    window = new BrowserWindow({
        width: mainScreen.size.width,
        height: mainScreen.size.height,
        icon: './assets/meta/plurid.png',
        minHeight: 500,
        minWidth: 300,
        title: 'plurid machine',
        // titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            nativeWindowOpen: true,
        },
        show: false,
        backgroundColor: '#000000',
    });

    window.loadFile('index.html');

    window.once('ready-to-show', () => {
        if (!window) {
            return;
        }

        window.show();
    })

    window.on('closed', () => {
        window = null;
    });
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.dock.hide();
});

app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
});


app.whenReady().then(() => {
    tray = new Tray(
        path.join(
            __dirname,
            './assets/meta/tray.png',
        ),
    );

    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Plurid Machine',
            click: () => {
                if (window === null) {
                    createWindow();
                    app.dock.show();
                }
            },
        },
        {
            type: 'separator',
        },
        {
            label: 'Quit',
            click: () => {
                app.quit();
            },
        },
    ]);
    tray.setContextMenu(contextMenu);
});
// #endregion module
