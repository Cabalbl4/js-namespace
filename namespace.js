var __namespace__ = this;
Object.defineProperty(this, "_namespace",{
  get: function() {
    return __namespace__;
  },
  set: function(_ns) {
    var current = null;
    if(typeof _ns == "string") {
          if(_ns.indexOf(".") == 0) {
            current = __namespace__;
            _ns = _ns.substr(1);
          } else {
            current = this;
          }
      
          var nsArr = _ns.split(".");
          for(var i=0; i<nsArr.length; i++) {
            if(!current[nsArr[i]])
              current[nsArr[i]] = {};
              current =  current[nsArr[i]];
          };

    } else {
      current = _ns;
    }
    __namespace__ = current;
  }
});
