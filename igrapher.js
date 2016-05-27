define(["jupyter-js-widgets"], function(widget){

    var IGrapherView = widget.DOMWidgetView.extend({

      render: function(){
          this.$el.append('Hello')
          return this;
      },

      value_changed: function() {
          this.render();
      },

      events: {},

    });

    return {
        IGrapherView: IGrapherView
    };
});
