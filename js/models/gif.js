var app = app || {};

app.Gif = Backbone.Model.extend({
    defaults: {
        src: '',
        title: 'No title',
        category: 'None',
		uploadDate: new Date()
    }
});