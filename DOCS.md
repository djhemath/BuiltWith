# BuiltWith

A web component that helps developers to list the technologies they used to build a web project. It can be used any web frameworks/stack. Highly configurable. Zero dependency. Easy to setup.

## Usage
1. Download  [JavaScript](https://raw.githubusercontent.com/djhemath/BuiltWith/main/dist/built-with.component.min.js) file
2. Include in the project's root HTML file with `<script />` tag.    
    ```html
	<script src="path/to/build-with.component.min.js"></script>
	```
3. Use in HTML as a tag
	```html
	<built-with technologies="React, MongoDB"></built-with>
	```
<br />

>	NOTE: Always try to include the component in the index.html file if you are working with any client side frameworks

## API
| Attributes   | Description | Type | Default value | Example(s) |
|     --     | --  |  -- |       --      | -- |
| technologies | List of technologies <br /> to be displayed | **String** <br /> **JSON String** <br /> **CSV String**     | null | "React" <br/><br/> '[{"name": "React"}, {"name": "Angular"}]' <br /><br/> "React,Angular, MongoDB" <br /><br/> '["React", "Mongo DB"]' |
