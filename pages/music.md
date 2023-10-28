---
layout: default
title: Music
permalink: /music
---

<div class="gallery">
    {% for video in site.videos %}
        {% if video.tags contains 'music' %}
            {% include block.html links=video.video title=video.title image=video.image text=video.text %}
        {% endif %}
    {% endfor %}
</div>