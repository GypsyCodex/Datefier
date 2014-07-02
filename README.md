datefier
===============
Transform your input fields in a datepicker in a few simple steps.

##Basic Usage

Import jQuery and jQueryUI
```html
 <link rel="stylesheet" href="http//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
 <script src="http//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
 <script src="http//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
```

Create an input field and give it the ``` datepicker ``` class

```html
<input type="text" class="datepicker" />
```

###Set a date range:
```html
<input type="text" class="datepicker from" />
<input type="text" class="datepicker to" />
```

###Start from today:
```html
<input type="text" class="datepicker gte-today" />
```

###Start from tomorrow:
```html
<input type="text" class="datepicker gt-today" />
```

###Stop today:
```html
<input type="text" class="datepicker lte-today" />
```

###Stop yesterday:
```html
<input type="text" class="datepicker lt-today" />
```
