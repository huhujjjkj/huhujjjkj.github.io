---
layout: landing
title: Ads
permalink: /ads
---

{% assign ordered_videos = site.videos | sort: "order" %}
<div class="gallery">
    {% for video in ordered_videos %}
        {% if video.tags contains 'ads' %}
            {% include block.html id=video.video_id hash=video.video_hash title=video.title image=video.image text=video.content %}
        {% endif %}
    {% endfor %}
</div>