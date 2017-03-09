---
layout:     post
title:      Cambiar etiqueta “New node” en jstree jQuery plugin
date:       2013-08-27 18:39:11
summary:    Cómo cambiar la etiqueta o cadena “New node” cuando es creado un nodo nuevo en el plugin de jQuery jstree.
categories: jstree javascript jquery
---

En esta oportunidad quiero compartir cómo cambiar la etiqueta “New node”  en el plugin jstree ([www.jstree.com](http://www.jstree.com)), cuando es creado un nuevo nodo. Es realmente muy sencillo.

En el core funcionality podemos cambiar la variable "strings" que viene por defecto en el archivo jquery.jstree.js en las líneas 341 a 345 del plugin:

<script src="https://gist.github.com/juanmarinm/3694e29cc4182dfffc86.js"></script>

Para esto cuando creamos una instancia de jstree, en la parte donde se configura el core se modifica la variable "strings" de la siguiente forma:

<script src="https://gist.github.com/juanmarinm/2dc1fff4dee81cb323de.js"></script>

En el siguiente link encontrará un demo y el código también:

[http://jsfiddle.net/juanmarinm/aMyVy/](http://jsfiddle.net/juanmarinm/aMyVy/)

Eso es todo!
