# ng-mount
ngMount is an AngularJS module to easily integrate any javascript plugin that requires initialization on a DOM node 
in your AngularJS application. It allows you to forget about how to sync the typical initialization function 
 (e.g. jQuery's $(document).ready() ) to Angular's digest cycle and take full advantage of MVC power, such as dynamic contents from controllers.

## Installation

Simply include the source ng-mount.js file in your project:

```html
 <script src="src/ng-mount.js"></script>
```

And import it in your AngularJS app:

```javascript
 var app = angular.module("myApp", ['ngMount']); //load module
```
## Usage

Just invoke the ng-mount directive on the element you need to init the plugin on. 
Provide the directive an object as a value, with the following two params:
* plugin [string] the plugin's init function name
* params [object] the params or options to pass along the init function

Example:

Let's say you want to use a plugin which requires to call the `initPluginFunc()` function on an element to be initialized. 
With jQuery you would typically do something like this:

```html
    <div class="plugin-class" id="myElement">
         <div> foo </div>
         <div> foo </div>
         <div> foo </div>
         <div> foo </div>
     </div>
```
and then..
```javascript
    $(document).ready(function() {
        $("#myElement").initPluginFunc({
            width: 400
        });
    });
```

As you might have experienced, this code breaks if you want to populate your `div` dynamically with AngularJS e.g. by an `ng-repeat`.
With ng-mount you can easily do it like this:

```html
<div class="plugin-class" ng-mount="{plugin: 'initPluginFunc', params:{width:400}}">
    <div ng-repeat="c in contents"> {{c}} </div>
</div>
```
...done!

## Demo

You can find a demo [here!](http://marco-gagliardi.github.io/ng-mount/)