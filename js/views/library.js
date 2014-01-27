var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#gifs',

    initialize: function( initialGifs ) {
        this.collection = new app.Library( initialGifs );
        this.render();
    },

    // render library by rendering each GIF in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderGif( item );
        }, this );
    },

    // render a GIF by creating a GifView and appending the
    // element it renders to the library's element
    renderGif: function( item ) {
        var gifView = new app.GifView({
            model: item
        });
        this.$el.append( gifView.render().el );
    }
});