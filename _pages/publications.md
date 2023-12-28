---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

| Year | Month |Link | Associated CTF |
|:----:|:-----:|:---:|:--------------:|
| 2023 | December | [Advent of Cyber ’23 Side Quest — 1 : The Return of the Yeti](https://mario-ca.github.io/writeups/AOC_2023_SQ_1/) | [TryHackMe](https://tryhackme.com/room/adventofcyber23sidequest) |

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
