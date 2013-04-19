(function() {

  define(function() {
    var result;
    return result = {
      cut: function() {
        var slide;
        slide = this.model.get("activeSlide");
        if (slide != null) {
          this._clipboard.set("item", slide);
          this.model.removeSlide(slide);
          slide.set("selected", false);
          return false;
        }
      },
      copy: function() {
        var slide;
        slide = this.model.get("activeSlide");
        if (slide != null) {
          this._clipboard.set("item", slide.clone());
          return false;
        }
      },
      paste: function() {
        var item, newItem;
        item = this._clipboard.get("item");
        if (item != null) {
          newItem = item.clone();
          newItem.set("x", null);
          newItem.set("y", null);
          return this.model.addSlide(newItem);
        }
      }
    };
  });

}).call(this);