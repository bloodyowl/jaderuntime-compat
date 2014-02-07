var keys = require("bloody-collections/lib/getKeys")
  , map = require("bloody-collections/lib/map")
  , filter = require("bloody-collections/lib/filter")
  , _toString = Object.prototype.toString
  , _concat = Array.prototype.concat
  , _slice = Array.prototype.slice
  , isArray = function(object){
      return _toString.call(object) == "[object Array]"
    }

if(typeof Object.keys != "function") {
  Object.keys = keys
}

if(typeof Array.prototype.map != "function") {
  Array.prototype.map = function(){
    return map.apply(null,  _concat.call([this], _slice.call(arguments)))
  }
}

if(typeof Array.prototype.filter != "function") {
  Array.prototype.filter = function(){
    return filter.apply(null,  _concat.call([this], _slice.call(arguments)))
  }
}

if(typeof Array.isArray != "function") {
  Array.isArray = isArray
}
