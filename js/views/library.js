var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#gifs',

    initialize: function( initialGifs ) {        
		this.collection = new app.Library( initialGifs );
        this.render();
		
		this.listenTo( this.collection, 'add', this.renderGif );
    },

	events:{
		'click #add':'addGif'
	},

	addGif: function( e ) {
		e.preventDefault();

		var formData = {};

		$( '#addGif div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != '' ) {
				formData[ el.id ] = $( el ).val();
			}
		});

		this.collection.add( new app.Gif( formData ) );
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