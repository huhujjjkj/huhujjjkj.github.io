---
layout: default
title: All Works
permalink: /all-works
---

<div class="gallery">
    {% for video in site.videos %}
        {% include block.html links=video.video title=video.title image=video.image text=video.text %}
    {% endfor %}
</div>