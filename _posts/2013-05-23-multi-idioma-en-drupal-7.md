---
layout:     post
title:      Configurar multi-idioma en Drupal 7
date:       2013-05-23 16:20:02
summary:    Pasos para configurar un sitio web multi-idioma en Drupal 7
categories: drupal7
---

Bien, primero que todo consigamos los módulos necesarios para esto:

*   Variable ([http://drupal.org/project/variable](http://drupal.org/project/variable))
*   Internationalization ([http://drupal.org/project/i18n](http://drupal.org/project/i18n))
*   Languajes Icons ([http://drupal.org/project/languageicons](http://drupal.org/project/languageicons))
*   Locale y Content translation (Ya vienen en el Núcleo de Drupal)

A continuación vamos a **Home » Administration » Configuration** y bajo el apartado **Regional and language** seleccionamos **Languages**. Bajo la pestaña **List** podremos adicionar los lenguajes que queramos para nuestro sitio.

### ![multi-idioma-paso-1]({{ site.baseurl }}/images/1/step_1.jpg)

Después de agregar los idiomas, seguimos a la pestaña **Detection and selection** y habilitamos el método de detección **URL**, que es lo mas usual.

### ![multi-idioma-paso-2]({{ site.baseurl }}/images/1/step_2.jpg)

Ahora vamos y descargamos los paquetes de idiomas en el sitio web [http://localize.drupal.org/](http://localize.drupal.org/). Son de extensión **.po**

Ahora vamos a **Home » Administration » Configuration** y bajo el apartado **Regional and language** seleccionamos **Translate interface**. Vamos a la pestaña **Import**. Aquí seleccionamos por cada idioma que agregamos el archivo **.po** previamente descargado y lo importamos. Para mirar el que tanto se ha traducido volvemos a la pestaña **Overview**.

![multi-idioma-paso-3]({{ site.baseurl }}/images/1/step_3.jpg)

Ahora vamos a **Home » Administration » Configuration** y bajo el apartado **Regional and language** seleccionamos **Multilingual setting**. Vamos a la pestaña **Node options**. Aquí seleccionamos la opción **Hide content translation links**. Esto permite que solo se muestre la información del idioma seleccionado

![multi-idioma-paso-4]({{ site.baseurl }}/images/1/step_4.jpg)

Ahora vamos a **Home » Administration » Structure » Content types** y en cada tipo de contenido vamos a la opción de **edit** y en la pestaña **Publishing options** seleccionamos la opción **Enabled, with translation**.

![multi-idioma-paso-5]({{ site.baseurl }}/images/1/step_5.jpg)

Ahora vamos a **Home » Administration » Structure » Blocks** y buscamos el bloque **Language switcher** y lo ubicamos en una región de nuestro sitio web. Antes de hacer esto ya debemos tener activado el módulo **Language Icons**.

Bien ha llegado el momento de crear un contenido. Ahora podremos seleccionar en que idioma está el contenido que estamos creando!

![multi-idioma-paso-6]({{ site.baseurl }}/images/1/step_6.jpg)

Y si queremos realizar la traducción del contenido, podremos hacer click en la pestaña **Translate** o **Traducir** en cada contenido que tengamos en nuestro sitio web.

![multi-idioma-paso-7]({{ site.baseurl }}/images/1/step_7.jpg)

¡Esto ha sido todo!
