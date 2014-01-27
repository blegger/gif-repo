var app = app || {};

app.GifView = Backbone.View.extend({
    tagName: 'div',
    className: 'gif-outerwrapper clearfix',
    template: _.template( $( '#gifTemplate' ).html() ),

    render: function() {
        //this.$el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});