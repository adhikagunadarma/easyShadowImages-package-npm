# What is this?

Update your images to get some shadows.
Best tools used to work with non-designer.
A customized reference source code from DesignCourse Tutorial 

# Installation

`npm i easyshadowimages --save`

Then...

```
import {easyShadowImages} from easyshadowimages
easyShadowImages({
    shadow_weight : 'high',
    shadow_padding : 'min'
});

```

`<img src="" alt="" class="shadow-images"></img>`


## Options

Easy Shadow Images supports 2 options, both are which optional : 

* *shadow_weight* - _high | medium | low_ (Defaults to medium)
* *shadow_padding* - _max | none | min_ (Defaults to none)

