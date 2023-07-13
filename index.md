---
layout: default
title: "Happy coding"
---



<div class="grid grid-cols-2 py-24 max-w-7xl mx-auto text-center">
  <h1 class="text-xl mb-12">
    <span class="text-4xl block text-red-500">
      syncopated semantics
    </span>

    <span class="uppercase font-light">
      A Collection of Words
    </span>
  </h1>


    <div class="p-4 max-w-5xl mx-auto">
      <ul>
          {% for post in site.posts %}
            <li class="-m-4 p-4">
              <a href="{{ post.url | relative_url }}">
                {{ post.title }}
              </a>
            </li>
          {% endfor %}
      </ul>
    </div>


</div>
