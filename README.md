rage-template
=============
Written by: Radoslav Sandov <br>
Simple JavaScript template engine <br>
Tag for stack Overflow issues: rage-template<br>

Basic usage:<br>
in the head you add references ti jquery and rage scripts:
```html
...
  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="./rage-template-engine.js"></script>
...
```

add another script tag with the desired template path and id as name of the tempalte
```html
   <script type="template" id="template-name" src="skin.jhtml"></script>
```

and wheneever you need it you can call it like:
```javascript
// basic standalone example
$(function(){
    // initializing the template system
		var tpl = new rageTemaplteEngine();
		// render particular template with vars
		var $a = tpl.render('template-name',{message : "5 + 2 is equal to "});
	});
```
Exaple of simple template from the render above:
```
   Here comes the flexibility in <strong>temaplte engines </strong> , you can perform operations like 
   {{ vars.message + ( 5 + 2)}}  
```

The Syntax
=============
The syntax of this engine is simple, whatever you add in 
```
{{ legit javascript code comes here }}
```
in the template file is being rendered as is, if you want to use a variable accessible from the global scope you simply type it, if you want to use variable passed to the view you type :<br>
Variable passed to the view:
```
...
  {{ vars.variableNameGoesHere }}
...
```
Global scope variable/object:
```
...
  {{ globalVar }}
  {{ globalObject.property  }}
...
```


Any participation in this project is welcome
