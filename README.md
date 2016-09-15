# js-namespace
Small function to define JavaScript namespaces

##Usage

Define full namespace (namespaces are dot-delimited by default)

```javascript
_namespace = "SOME.NEW.NAMESPACE"

SOME.NEW.NAMESPACE.MyClass = function {
};
//ES 2016
SOME.NEW.NAMESPACE.MyClass2 = class {
};
```

Under the hood, namespace is a nested object, i.e. 

```javascript
_namespace = "SOME.NEW.NAMESPACE"

///equals to:
if(! window.SOME) window.SOME = {};
if(! window.SOME.NEW) window.SOME.NEW = {}
if(! window.SOME.NEW.NAMESPACE) window.SOME.NEW.NAMESPACE = {}
```

### Dot notation
There is another way to nest namespaces, which, hovever, must be used with caution, as javascript preserves namespace between files.

```javascript
_namespace = "SOME.NEW"

SOME.NEW.TestClass = function() {
 ...
}

_namespace = ".NAMESPACE" //Starts with dot - will add namespace to the last defined
SOME.NEW.NAMESPACE.TestClass = function() {

};
```


### __namespace__ shorthand
Variable __namespace__ points to the last defined namespace. It can be used to shorten definitions

```javascript
_namespace = "SOME.NEW"

__namespace__.TestClass = function() {
 ...
} // same as SOME.NEW.TestClass = function ...



_namespace = ".NAMESPACE" //Starts with dot - will add namespace to the last defined
__namespace__.TestClass = function() {

}; // same as   SOME.NEW.NAMESPACE.TestClass = function
```
