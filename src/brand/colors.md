# Color Scheme
All colors are compliant with WCAG 2.1 and ADA standards.

## Primary Colors
Color is the cornerstone of Rocky Mountain ADA design. It distinguishes our brand and helps us to create consistent experiences across marketing and products. We use color in meaningful ways in all expressions of our brand. We use color to pinpoint exactly what people need to see.

We are committed to complying with [AA standard contrast ratios](http://www.w3.org/TR/WCAG/). To do this, we choose primary, secondary and extended colors that support usability. This ensures sufficient color contrast between elements so that users with low vision can see and use our products.

TODO: CREATE VUE COMPONENT FOR COLOR CARD

<Color :swatches="primaryColors"/>

## Secondary Colors

Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean on these colors more frequently when brand awareness is high, or on our own properties where we control the surrounding environment. Try to use the primary palette when applicable. 

When these colors are used in conjunction with our primary palette, these colors makes every moment feel on-brand.

<Color :swatches="secondaryColors" />

## Adobe Color Scheme file
If you use any Adobe products, you will be able to import the .ase file to import the entire color palette into Photoshop, Illustrator, etc.

<FileDownload :downloads="colorScheme" />

## Notes for Color Blindness
For people with color-blindness, Avoid using the *Purples* if you need to distinguish information by color, for example a color coded bus-route map.

To distinguish information by color, it is best to use texture or patterns as well. For example:

- Solid red line
- Short dashed blue line
- Triangle dashed purple line

Purples tend to blend in with the blues in this color scheme. See images below:

> Hover over the images to see the full-vision color scheme

<span class="img-vision-overlay">![Protanopia Color Blindness](/assets/vision-protanopia.png)</span>

<span class="img-vision-overlay">![Deuteranopia Color Blindness](/assets/vision-deuteranopia.png)</span>

<span class="img-vision-overlay">![Full Color Blindness](/assets/vision-full.png)</span>




<script setup>
  import Color from '../../.vitepress/components/ColorSwatches.vue'
  import FileDownload from '../../.vitepress/components/FileDownload.vue'
  
const primaryColors = [
  { colorName: "Rockies",
    cssVar: "b100",
    clr: "#1B43AD",
    pantone: "2728c",
    textColor: 'light'
    },
  { colorName: "Snow",
    cssVar: "n0",
    clr: "#FFFFFF",
    pantone: "Trans.Wt.",
    textColor: 'dark'
    },
  { colorName: "Slate",
    cssVar: "n400",
    clr: "#1D2C47",
    pantone: "533c",
    textColor: 'light'
    },
  { colorName: "Sugar",
    cssVar: "n20",
    clr: "#EBEDF0",
    pantone: "427c",
    textColor: 'dark'
  }
]

const secondaryColors = [
  { colorName: "Bob Ross",
    cssVar: "t100",
    clr: "#05AAC7",
    textColor: "dark"
  },
  { colorName: "Butterscotch",
    cssVar: "y100",
    clr: "#FFAB00",
    textColor: "dark"
  },
  { colorName: "Cinnabar",
    cssVar: "r100",
    clr: "#E84F2D",
    textColor: "dark"
  },
  { colorName: "Mojito",
    cssVar: "g100",
    clr: "#31A579",
    textColor: "dark"
  },
  { colorName: "Prince",
    cssVar: "p100",
    clr: "#5D50AD",
    textColor: "light"
  }
]

const colorScheme = [
  {
    title: 'Adobe Color Scheme',
    subtitle: 'File to import entire color palette into any Adobe editor',
    fileType: 'ase',
    url: '/docs/assets/Rocky Moutain ADA Color Scheme.ase'
  }
]
</script>