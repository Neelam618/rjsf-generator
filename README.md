# React JSON Schema Form Generator

Used for generating your own JSON schema.

Find JSON schema generator App here: 


JSON Schema is used to describe the structure and validation constraints of JSON documents.

JSON Schema is limited for describing how a given data type should be rendered as a form input component.

A UI schema is basically an object literal providing information on how the form should be rendered, while the JSON schema tells what. 

RJSF generator will give schema and uiSchema JSON objects containing all the properties required to render form using JSON schema library. Additionally it may also have required array.

Further details for properties can be found here: https://react-jsonschema-form.readthedocs.io/en/latest/usage/objects/#object-properties

## How to use?
- Select any input field you want from the right hand toolbox. 
- Selected field will appeare in the form viewer section. 
- You can edit the field properties by hovering the field and selecting the edit icon. 
- This will display the edit panel with the field properties which can be changed. 
- You can add as many fields you want to add.
- Click on Generate schema button to generate schema and uiSchema.

## Run Locally

In the project directory, you can run:

`npm install`

Installs all the project dependencies

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
