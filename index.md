---
layout: default
title: "Happy coding"
---


<div class="mx-auto text-center">

  <h1 class="text-xl mb-12">
    <span class="text-4xl block text-gray-400">
      syncopated semantics
    </span>

    <span class="text-slate-500">
      examples and notes
    </span>
  </h1>


    <div class="flex flex-col items-center p-4 max-w-5xl mx-auto text-slate-400">
      <ul>
          {% for post in site.posts %}
            <p class="-m-4 p-4">
              <a href="{{ post.url | relative_url }}">
                {{ post.title }}: {{ post.abstract}}
              </a>
            </p>
          {% endfor %}
      </ul>
    </div>


</div>

