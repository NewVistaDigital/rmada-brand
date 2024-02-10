# Digital Files
Below are links to download all of our digital materials and resources.

## Video Conference Backgrounds
Here are instructions on [how to change your background on Zoom](https://support.zoom.us/hc/en-us/articles/210707503-Changing-your-Virtual-Background-image#:~:text=after%20the%20meeting.-,User,account%20level%2C%20and%20you%20will%20need%20to%20contact%20your%20Zoom%20administrator.,-How%20to%20manage)

<FileDownload :downloads="zoom" />

## Podcast Cover Art

<FileDownload :downloads="podcast" />

## Digital Ads
We have ran ads for the Chamber of Commerce as well as the local Rocky Mountain PBS station. Below are the digital ads.

<FileDownload :downloads="ads" />

## Stock Photos
These images have either been purchased or have a creative commons license. These are all free for personal or commercial use.

Most of the images in this folder have been used in our print materials or on the website.

Additionally, a great place to find stock photography is at:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)

<FileDownload :downloads="stock" />

<script setup>
import FileDownload from '../../.vitepress/components/FileDownload.vue'

const ads = [
  {
    title: 'ALL PBS Print & Digital Ads',
    subtitle: 'Print and Digital PBS ads',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/f1qnza86gq2uanv37ryiw/h?rlkey=pqgtd3zsuwd4wpaq20f1iilt3&dl=0'
  },
  {
    title: 'All Chamber of Commerce digital ads',
    subtitle: 'Download all chamber of commerce ads and variants',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/cjk6ds280czq1zgksvv43/h?rlkey=pr4e7gjvk2sghl5egkdlzz8ll&dl=0'
  }
]

const zoom = [
  {
    title: 'All Zoom Backgrounds',
    subtitle: 'Branded backgrounds for Zoom, Teams, or other video meeting tools',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/61kzs5q1oojuyyxdcgl6k/h?rlkey=dl0fzqspge02lnw7itukcpbsv&dl=0'
  }
]

const podcast = [
  {
    title: 'All Podcast Covers',
    subtitle: 'Branded backgrounds for Zoom, Teams, or other video meeting tools',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/op4d6tpac38sx1khtqpz8/h?rlkey=pm3pes00ypxe9frmlzgpp9442&dl=0'
  }
]

const stock = [
  {
    title: 'All Stock Photos',
    subtitle: 'Photos that have been used for print or website',
    fileType: 'Dropbox',
    url: 'https://www.dropbox.com/scl/fo/7ul6a3n4zxxm6w30vglvb/h?rlkey=b0ef03920nl2j7pftip6jyp24&dl=0'
  }
]
</script>