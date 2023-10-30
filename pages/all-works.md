---
layout: default
title: All Works
permalink: /all-works
---

{% assign ordered_videos = site.videos | sort:"order" %}
<div class="gallery">
    {% for video in ordered_videos %}
        {% include block.html id=video.video_id hash=video.video_hash title=video.title image=video.image text=video.text %}
    {% endfor %}
</div>