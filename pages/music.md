---
layout: default
title: Music
permalink: /music
---

<div class="gallery">
    {% for video in site.videos %}
        {% if video.tags contains 'music' %}
            {% include block.html id=video.video_id hash=video.video_hash title=video.title image=video.image text=video.text %}
        {% endif %}
    {% endfor %}
</div>