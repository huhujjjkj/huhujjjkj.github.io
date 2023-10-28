---
layout: default
title: Home
---

<iframe 
    src="https://player.vimeo.com/video/699728566?h=a6862acbe1&&autoplay=1&color=000000&title=0&byline=0&portrait=0&progress_bar=0" 
    width="960" 
    height="540" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen 
    class="main-video">
</iframe>

<div class="gallery">
    {% for video in site.videos %}
        {% if video.tags contains 'homepage' %}
            {% include block.html links=video.video title=video.title image=video.image text=video.text %}
        {% endif %}
    {% endfor %}
</div>