document.getElementById("mainNav").innerHTML = '<li><a href="https://gavindb.dev">Home</a></li><li><a href="https://gavindb.dev/pages/projects.html">Projects</a></li><li><a href="https://gavindb.dev/pages/mods.html">Mods</a></li><li class="right"><a href="https://gavindb.dev/pages/about.html">About</a></li>';
let contents = document.getElementById("body").innerHTML;
document.getElementById("body").innerHTML = '<div class="light x1"></div><div class="light x2"></div><div class="light x3"></div><div class="light x4"></div><div class="light x5"></div><div class="light x6"></div><div class="light x7"></div><div class="light x8"></div><div class="light x9"></div>' + contents;