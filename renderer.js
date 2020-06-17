
NicoJS = require('nicoJS');
const { ipcRenderer } = require('electron');

var nico = new NicoJS({
    app: document.getElementById('app'),
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    font_size: 50,
    color: '#fff',
    // 縁取り
    textShadow: 'black 2px 0px,  black -2px 0px, black 0px -2px, black 0px 2px, black 2px 2px , black -2px 2px, black 2px -2px, black -2px -2px, black 1px 2px,  black -1px 2px, black 1px -2px, black -1px -2px, black 2px 1px,  black -2px 1px, black 2px -1px, black -2px -1px'
});

// コメント待機
nico.listen();

// コメント送信
// nico.loop(['Hello World.']);

ipcRenderer.on('slackContent', (event, arg) => {
    console.log(arg) // "pong"を表示

    nico.send(arg);
});

window.addEventListener( 'resize', function() {
    nico.resize(window.innerWidth, window.innerHeight);
}, false );
