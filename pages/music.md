---
layout: default
title: Music
permalink: /music
---

{% assign ordered_videos = site.videos | sort:"order_number" %}
<div class="gallery">
    {% for video in ordered_videos %}
        {% if video.tags contains 'music' %}
            {% include block.html id=video.video_id hash=video.video_hash title=video.title image=video.image text=video.text %}
        {% endif %}
    {% endfor %}
</div>