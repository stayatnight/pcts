"use strict";
const electron = require("electron");
const path = require("path");
const createWindow = () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      // 允许渲染进程使用node
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  if (process.env.NODE_ENV === "development") {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
};
electron.app.whenReady().then(createWindow);
