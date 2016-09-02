# pmsarm7 [![Build Status](https://travis-ci.org/tproenca/pmsarm7.svg?branch=master)](https://travis-ci.org/tproenca/pmsarm7)
Plex Media Server ARM package for Debian/Ubuntu Linux

### Motivation
Since dev2day pms repository is outdated has been a while, I decided to create an automatic solution to have fresh .deb files in an APT repository as soon as Plex release their binaries. You might want to use this solution if you have an ARM based linux, such as a NAS or Raspberry Pie.

### Setup
```bash
echo "deb http://dl.bintray.com/tproenca/pmsarm7 jessie main" | sudo tee /etc/apt/sources.list.d/pms.list
```

### Instalation
```bash
sudo apt-get update
sudo apt-get install plexmediaserver
```

### Thanks
* Special thanks to HTPC Guides team for the great tutorials
* To Jan Friedrich (uglymagoo) <<jft@dev2day.de>> for providing the base skeleton.tgz

