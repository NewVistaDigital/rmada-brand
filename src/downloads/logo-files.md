# Logo Files
Download a .zip folder of all the logos.

If you're need a transparent background, use `.png`, otherwise `.jpg` should work well.

If the vendor asks for a **vector** file, use the `.svg` version. This is best for web or very large print formats.

<FileDownload :downloads="logos" />

## Adobe Color Scheme
<FileDownload :downloads="colorScheme" />


<script setup>
import FileDownload from '../../.vitepress/components/FileDownload.vue'

const logos = [
  {
    title: 'RMADAC Logo Files',
    subtitle: 'Download all logo files .png & svg',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/0gqbzsk26fg96i2qi451y/h?rlkey=tfl8uvwnj91rqhr99n55yzxdx&dl=0'
  },
  {
    title: 'UNC Logo Files',
    subtitle: 'Download all UNC logo files',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/d2pr34qn4b3rwxic79lyq/h?rlkey=1p2fhydl34vz4au5dsaevy1fu&dl=0'
  },
  {
    title: 'Branded Maps',
    subtitle: 'US Maps showing the Mountain Region',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/4rfkyyj9nxa8xh2s92wpv/h?rlkey=wsqfumf901lnjshzl48av18la&dl=0'
  }
]
const colorScheme = [
  {
    title: 'Adobe Color Scheme',
    subtitle: 'File to import entire color palette into any Adobe editor',
    fileType: 'ase',
    url: 'https://www.dropbox.com/scl/fi/lbf57xh19be3n79rrb8vd/Rocky-Moutain-ADA-Color-Scheme.ase?rlkey=bfelerzx32sul4zkpi6frodc6&dl=0'
  }
]
</script>