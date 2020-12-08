<p align="center">
  <img alt="Element to Figma" src="https://github.com/octavioamu/element-to-figma/blob/main/src/popup/logo.png">  
</p>

# Element to Figma - Browser extension (beta)


Extension to select the page UI elements and download them to later import it to Figma, based on https://github.com/BuilderIO/html-figma this browser extension allow you to donwload the selected pieces on the layout instead of all the page.

## Quick start
* To be able to import the elements into figma you need to install first [HTML <-> Figma](https://www.figma.com/community/plugin/747985167520967365) plugin.
* Download the extension [Chrome store](www.google.com)

## Usage
* Go to the page you want to capture elements
* Click the extension icon and *Enable Selector* 
* Click on the elements you wish to copy to figma

## Manual install
* Download zip in `dist-zip` and manually load on your chrome extension tab. (developer mode need to be enabled) 

## Run locally 
`yarn install`

### Development 
`yarn run watch:dev`

### Generate zip 
`yarn build-zip`


## HTML <-> Figma
In Figma open HTML <-> Figma plugin and click **upload here** and select the json files you downloaded. 

![html to figma](docs/html-figma-example.png)


<style>
img
{
    display:block; 
    float:none; 
    margin-left:auto;
    margin-right:auto;
    width:60%;
}
</style> 