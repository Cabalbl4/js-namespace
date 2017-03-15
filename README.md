# js-namespace
Small function to define JavaScript namespaces

## Install using package managers

### NPM
```bash
npm install --save simple-js-namespace
```
##### More info
https://www.npmjs.com/package/simple-js-namespace

### Bower
```bash
bower install simple-js-namespace --save
```
## Add to node/browser
#### Require from node
```javascript
require("simple-js-namespace");
```
#### Add to browser
```html
Production version:
<script type="text/javascript" src="path_to_js-namespace/namespace.min.js"></script>
OR dev version:
<script type="text/javascript" src="path_to_js-namespace/namespace.js"></script>
```

## Usage

Define and use a namespace (namespaces are dot-delimited by default)

```javascript
_namespace = "SOME.NEW.NAMESPACE"

SOME.NEW.NAMESPACE.MyClass = function {
};
//ES 2015
SOME.NEW.NAMESPACE.MyClass2 = class {
};
//Shorthand
_namespace.MyClass3 = ... //function / class / anything

//Assign current namespace to window (reset)
_namespace = window;

//Assign current namespace to already existing one
_namespace = SOME.NEW.NAMESPACE;
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

### \_namespace_root_context variable
A global property to hold default context to create namespaces in. Use with caution.

```javascript
let nsContainer = {};
_namespace_root_context = nsContainer;

_namespace = "SOME.NEW.NAMESPACE"

///now equals to:
if(! nsContainer.SOME) nsContainer.SOME = {};
if(! nsContainer.SOME.NEW) nsContainer.SOME.NEW = {};
if(! nsContainer.SOME.NEW.NAMESPACE) nsContainer.SOME.NEW.NAMESPACE = {};
//ETC

//Export it in NodeJS for example
module.exports = nsContainer;

///Do not forget to reset namespace root at the end of module or js file if you changed it, as it is a global property and its unexpected change may break other modules!
//For browser
_namespace_root_context = window;
//OR for NodeJS
_namespace_root_context = global;


```


