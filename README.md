# ng-mount
ngMount is an AngularJS module to easily integrate any javascript plugin that requires initialization on a DOM node 
in your AngularJS application (i.e. syncing the init function to AngularJS digest cycle)

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
```html
 <div ng-controller="myCtrl" class="plugin-class" ng-mount="{plugin: 'initPluginFunc', params:{width:400}}">
         <div ng-repeat="c in contents"> {{c}} </div>
     </div>
```
...done!