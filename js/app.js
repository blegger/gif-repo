var app = app || {};

$(function() {
    var gifs = [
        { title: 'Balloon', src: 'img/balloon-cat.gif', category: 'Cats', uploadDate: '01/01/2014', keywords: 'balloon cat' }
    ];
    new app.LibraryView( gifs );
});