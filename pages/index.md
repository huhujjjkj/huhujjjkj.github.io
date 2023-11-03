---
layout: default
title: Home
permalink: /
---
<div class="embed-container">
    <iframe 
        src="https://player.vimeo.com/video/699728566?h=a6862acbe1&&autoplay=1&color=000000&title=0&byline=0&portrait=0&progress_bar=0&muted=1" 
        width="1500" 
        height="800" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen 
        class="main-video">
    </iframe>
</div>

{% assign ordered_videos = site.videos | sort: "order" %}
<div class="gallery gallery-home">
    {% for video in ordered_videos %}
        {% if video.tags contains 'homepage' %}
            {% include block.html id=video.video_id hash=video.video_hash title=video.title image=video.image text=video.text %}
        {% endif %}
    {% endfor %}
</div>