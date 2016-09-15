# js-namespace
Small function to define JavaScript namespaces

##Usage

Define full namespace (namespaces are dot-delimited by default)

```javascript
_namespace = "SOME.NEW.NAMESPACE"

SOME.NEW.NAMESPACE.MyClass = function {
};
//ES 2015
SOME.NEW.NAMESPACE.MyClass2 = class {
};
//Shorthand
_namespace.MyClass3 = ... //function / class / anything
```

Under the hood, namespace is a nested object, i.e. 

```javascript
_namespace = "SOME.NEW.NAMESPACE"

///equals to:
if(! window.SOME) window.SOME = {};
if(! window.SOME.NEW) window.SOME.NEW = {};
if(! window.SOME.NEW.NAMESPACE) window.SOME.NEW.NAMESPACE = {};
```

### Dot notation
There is another way to nest namespaces, which, hovever, must be used with caution, as javascript preserves namespace between files.

```javascript
_namespace = "SOME.NEW"

SOME.NEW.TestClass = function() {
 ...
};

_namespace = ".NAMESPACE" //Starts with dot - will add namespace to the last defined
SOME.NEW.NAMESPACE.TestClass = function() {

};
```


### \_namespace as shorthand
Property accessor \_namespace points to the last defined namespace. It can be used to shorten definitions.

```javascript
_namespace = "SOME.NEW"

_namespace.TestClass = function() {
 ...
}; // same as SOME.NEW.TestClass = function ...



_namespace = ".NAMESPACE" //Starts with dot - will add namespace to the last defined
_namespace.TestClass = function() {
...
}; // same as SOME.NEW.NAMESPACE.TestClass = function
```
Under the hood, currently defined namespace is kept in variable \_\_namespace\_\_. It can be set to "window" to reset the namespace (or point it to another namespace).
