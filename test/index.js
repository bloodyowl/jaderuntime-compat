Object.keys = null
Array.prototype.map = null
Array.prototype.filter = null
Array.isArray = null

var tape = require("tape")
require("../")

tape("getKeys", function(test){

  var object, array

  function Obj(){
    this.foo = "bar"
    this.bar = "baz"
    this.constructor = function(){}
  }

  Obj.prototype.baz = "foo"

  object = new Obj()
  array = [1,1]

  array[3] = 1

  test.deepEqual(Object.keys(object), ["foo", "bar", "constructor"], "with object")
  test.deepEqual(Object.keys(array), ["0", "1", "3"], "with array")
  test.deepEqual(Object.keys(null), [], "with null")
  test.deepEqual(Object.keys(), [], "with void 0")
  test.end()

})


tape("map", function(test){

  var object, array, aggregator, lastIndex

  function Obj(){
    this.foo = 1
    this.bar = 2
    this.constructor = 3
  }

  Obj.prototype.baz = 4

  object = new Obj
  array = [1,2]
  aggregator = []
  lastIndex
  array[3] = 3


  test.deepEqual(array.map(function(a){return (a * a) || null}), [1, 4, null, 9], "with arrays")

  ;[1].map(function(){
    test.equal(this, Obj, "thisValue is passed with Array")
  }, Obj)

  test.end()
})

var tape = require("tape")

tape("filter", function (test) {

  var object, array, aggregator, lastIndex

  function Obj() {
    this.foo = 1
    this.bar = 2
    this.constructor = 3
  }

  Obj.prototype.baz = 4

  object = new Obj
  array = [1, 2]
  aggregator = []
  lastIndex

  array[3] = 3

  test.deepEqual(
    array.filter(function (a) {
      return !(a % 2)
    }).join(), "2,", "Filter on Arrays")

  ;[1].filter(function () {
    test.equal(this, Obj, "thisValue is passed with Array")
  }, Obj)

  test.end()

})


tape("Array.isArray", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!Array.isArray(""))
  test.ok(!Array.isArray(new String("")))
    test.ok(Array.isArray([]))
  test.ok(!Array.isArray(object))
  test.ok(!Array.isArray(object2))
  test.ok(!Array.isArray(fn))
  test.ok(!Array.isArray(1))
  test.ok(!Array.isArray(NaN))
  test.ok(!Array.isArray(new Number(NaN)))
  test.ok(!Array.isArray(new Number(1)))
  test.ok(!Array.isArray(new Date()))
  test.ok(!Array.isArray(new RegExp()))
  test.ok(!Array.isArray(/foo/))
  test.ok(!Array.isArray(arguments))
  test.ok(!Array.isArray(new Boolean(false)))
  test.ok(!Array.isArray(false))
  test.ok(!Array.isArray(null))
  test.ok(!Array.isArray(void 0))
  test.ok(!Array.isArray(document.createElement("div")))
  test.ok(!Array.isArray(document.createTextNode("foo")))
  test.end()

})


