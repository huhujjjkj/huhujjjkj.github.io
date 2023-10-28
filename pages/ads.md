---
layout: default
title: Ads
permalink: /ads
---

<div class="gallery">
    {% for video in site.videos %}
        {% if video.tags contains 'ads' %}
            {% include block.html links=video.video title=video.title image=video.image text=video.text %}
        {% endif %}
    {% endfor %}
</div>