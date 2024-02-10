> The fonts we chose are Montserrat and Lora, both free from Google. They are readable, modern, and give a freshness and simplicity to what we do.

## Typeface

<FileDownload :downloads="fontFiles" />

For most applications, we use the "regular" font size. Headings use "bold".

![Montserrat Font](/assets/fonts/montserrat.jpg)

<!-- ![Montserrat Font](/assets/fonts/lora.jpg) -->


## Font Weights

For all headings, we use **Montserrat Bold**, with a 14% kerning, or spacing between the letters.

![Montserrat Font](/assets/fonts/montserrat-weights.png)

<script setup>
import FileDownload from '../../.vitepress/components/FileDownload.vue'

const logos = [
  {
    title: 'RMADAC Logo Files',
    subtitle: 'Download all logo files .png & svg',
    fileType: 'zip',
    url: "/docs/assets/digital/Rocky Mountain ADA Center Logo & Color Scheme.zip"
  },
  {
    title: 'UNC Logo Files',
    subtitle: 'Download all UNC logo files',
    fileType: 'zip',
    url: "/docs/assets/digital/UNCLogoFiles_v1.0.zip"
  }
]
const fontFiles = [
  {
    title: 'Montserrat Font',
    subtitle: 'Download font family',
    fileType: 'zip',
    url: '/docs/assets/fonts/Montserrat.zip'
  }
]
</script>