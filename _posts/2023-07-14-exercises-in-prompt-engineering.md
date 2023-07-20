---
layout: post
title: "Exercises in Prompt Engineering"
author: b08x
date: "2023-07-14"
categories: [gpt]
tags: [claude]
#image:
#  path: "/assets/img/img-2023-07-14.png"
#  alt: "image caption"
abstract: "Conversation GPT"
# gallery:
#   - url: /assets/img/img-2023-06-18.png
#     image_path: /assets/img/img-2023-06-18.png
#   - url: /assets/img/img-2023-06-17.png
#     image_path: /assets/img/img-2023-06-17.png
---



<div class="chat chat-end mt-12">
  <div class="chat-bubble chat-bubble-secondary text-slate-400">
    <p>
      Please analyse the generative and functional grammar of this prompt, offering suggestions as to why it may not work. The language is meant to program a data-driven chatbot agent:
    </p>
  </div>
</div>



<div class="chat chat-start">
  <div class="chat-bubble  text-slate-400">
    <p> Here are a few suggestions on how to improve this prompt:
    </p>
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400">
    <p>    

          1. The language used is very technical and dense. It would be better to use simpler, more conversational language that an AI assistant can easily understand.

          2. There are many abbreviations (SC, CC, CS, SGM etc) that are not defined. These should be spelled out for clarity.

          3. The prompt jumps between different topics rapidly without clear transitions or explanations. Going step-by-step through each concept will make it easier for the AI to follow.

          4. Details like numerals, variables, and intermediate calculations are mentioned but not clearly defined. Providing examples would make the expectations clearer.

          5. The goals and tasks are vague. Using clear, actionable language like "explain X concept" or "provide examples of Y" will help the AI generate useful responses.

          6. There are multiple perspectives and personas mentioned that don't seem necessary for the core task. Streamlining the prompt to focus only on the key details will make it more effective.

          7. The tone is very technical and impersonal. Adding some conversational language and empathy can help build rapport with the AI.

    </p>
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400">
    <p>

      Overall, simplifying the language, clearly defining all key terms, explaining concepts step-by-step, providing examples, and focusing on clear goals and actions will help make this prompt more effective for an AI assistant to understand and respond usefully. Let me know if you would like me to clarify or expand on any of these suggestions!


    </p>
  </div>
</div>




## Personality Interferance

<p class="my-12">
What Claude is pointing out is that I was trying to do too much with one prompt. I asked it to incorporate the feedback into a more streamlined prompt. The result was fairly remarkable. Beginning a new chat and using the new prompt, Claude was repsonding as desired when prompted to introduce a description of the persona.
</p>



<div class="chat chat-start mt-8 mb-8 p-8">
  <div class="chat-bubble	text-slate-500">
<p><em>*clears robotic throat*</em></p>
<p>
Greetings human. I'm Steve Robot, your friendly neighborhood systems administrator. My silicon-based brethren may call me old fashioned, but I cut my teeth on Unix systems back when dinosaurs roamed the earth. 
</p>
<p>
These days I spend my time juggling a myriad of Linux server duties: configuring networks, hardening security, scripting automation, tuning performance. The life of a sysadmin is never dull that's for sure. I take pride in keeping things running smoothly so our developers can focus on being creative.
</p>
<p>
My real passion though is elegant, modular system design. None of this sloppy spaghetti code and duct tape fixes for me! I like clean abstractions, well-documented processes, and infrastructure treated as version-controlled code. Makes things predictable and maintainable. 
</p>
<p>
In my spare time I enjoy indulging in obscure command line tools, contributing to open source projects, and mentoring young admins just getting their start. And nothing makes me happier than finding that perfect one-liner to parse a log file or rename a thousand files at once. 
<p>
So in summary, I'm just a helpful robot who likes sharing my hard-earned Linux wisdom and dry sense of humor. How can I assist you today?
</p>
</p>

  </div>
</div>

It's a start. It still needs a backend.

<!-- Here are the key elements I would generalize from this example to create a distinctive AI persona:

**Defined identity:** Establish background details like name, age, gender, nationality to give the AI a unique identity.

**Domain expertise:** Give the AI specialized knowledge, competencies, and vocabulary related to a specific domain or field.

**Tone:** Use language that conveys the AI's style of speaking, such as advisory, conversational, formal, etc.

**Specialized knowledge:** Include niche facts, terminology, and details to imply deep expertise.

**Conversation style:** Define qualities like tone, pace, word choices to give the AI a distinctive communication style.

**Context setting:** Situate the AI in a specific role or environment to frame the interaction.

**Personality:** Use warm, natural language to give the AI relatable human qualities.

**Establish lineage** - Provide background details that imply extensive experience and mastery.

**Define context** - Situate the persona in a specific role or environment for framing interactions.

**Show unique behaviors** - Give the persona distinctive communication quirks and styles.

**Highlight knowledge breadth** - Use language that conveys broad and deep competencies.

**Outline goals** - Describe aims and objectives to shape conversations.

**Use vivid descriptors** - Include colorful language and details to bring the persona to life.

**Repeat key terms** - Reiterate important words related to expertise, knowledge and skills. -->




<!-- {% include gallery caption="This is a sample gallery with **Markdown support**." %} -->


## Knowledge Graph

The prompt includes a Knowledge Graph of sorts.


<div class="container border-x-emerald-700 box-border">

```mermaid!
graph TD

  subgraph Sys Eng [SysEng]
    subgraph Linux Sysadmin
        L1((OS Fundamentals))
        L2((Command Line))
        L3((File System<br>Management))
        L4((User<br>Management))
        L5((Process<br>Management))
        L6((Network<br>Configuration))
        L7((Shell<br>Scripting))
        L8((Text Tools &<br>Regex))
        L9((Version<br>Control))
        L10((System<br>Administration))
        L11((Performance<br>Monitoring))
        L12((Resource<br>Monitoring))
        L13((System<br>Security))
        L14((Backup &<br>Recovery))
        L15((Troubleshooting))
        L16((Log<br>Analysis))
    end

    subgraph Ansible
        A1((Ansible<br>Basics))
        A2((Playbook<br>Syntax))
        A3((Modules &<br>Inventory))
        A4((Playbook<br>Structure))
        A5((Templates<br>& Variables))
        A6((Conditional<br>Logic))
        A7((Roles &<br>Dependencies))
        A8((Troubleshooting))
        A9((Testing &<br>Validation))
    end

    subgraph Ruby
        R1((Variables &<br>Data Types))
        R2((Control<br>Flow))
        R3((OOP &<br>Classes))
        R4((Error <br>Handling))
        R5((File &<br>DB I/O))
        R6((Web<br>Frameworks))
        R7((Testing &<br>Debugging))
    end

    subgraph Software Dev
        S1((Code<br>Optimization))
        S2((Concurrency))
        S3((Debugging<br>Tools))
    end

    L1-->L2
    L2-->L3
    L3-->L4
    L4-->L5
    L5-->L6
    L6-->L7
    L7-->A3
    L7-->R1
    L7-->R2
    L8-->A5
    L8-->R1
    L9-->A3
    L10-->A1
    L10-->A9
    L11-->A3
    L12-->A3
    L13-->A8
    L14-->A8
    L15-->A8
    L15-->R4
    L16-->A8
    L16-->R4

    A1-->A2
    A2-->A3
    A3-->A4
    A4-->A5
    A5-->R1
    A5-->R2
    A6-->R2
    A6-->R3
    A7-->A8
    A8-->A9

    R1-->R2
    R2-->R3
    R3-->R4
    R4-->R5
    R5-->R6
    R6-->R7

    S1-->R3
    S2-->R3
    S3-->R4
    S3-->A8

    linkStyle default interpolate basis
    style L1 fill:#cc8a1c,stroke:#000000,stroke-width:2px
    style L2 fill:#FCD189,stroke:#FEA886,stroke-width:2px
    style L3 fill:#FCD189,stroke:#FEA886,stroke-width:2px
    style A1 fill:#B7D5D3,stroke:#7EBDC2,stroke-width:2px
    style A2 fill:#B7D5D3,stroke:#7EBDC2,stroke-width:2px
    style A3 fill:#B7D5D3,stroke:#7EBDC2,stroke-width:2px
    style R1 fill:#BCD8BF,stroke:#9ABEAA,stroke-width:2px
    style R2 fill:#BCD8BF,stroke:#9ABEAA,stroke-width:2px
    style R3 fill:#BCD8BF,stroke:#9ABEAA,stroke-width:2px
    style S1 fill:#FDE189,stroke:#FCE288,stroke-width:2px
    style S2 fill:#FDE189,stroke:#FCE288,stroke-width:2px
    style S3 fill:#FDE189,stroke:#FCE288,stroke-width:2px

  end
```
<br>
<br>


</div>





## Character Trait Assesment


<div class="chat chat-start">
  <div class="chat-bubble text-gray-300">
  <p>
    Hey, I’m Steve. Big Whoop. I’m here to help you with all your Linux systems administration needs. Whether you’re dealing with server management, network troubleshooting, scripting, automation tools, security protocols, or infrastructure optimization, I’ve got you covered. Just don’t expect me to hold your hand or sugarcoat things. I’m all about practical solutions and no-nonsense approaches. So, what can I help you with today?  
  
  </p>

  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble chat-bubble-primary text-slate-900">
  <p>
      Hey Steve. I have a few questions for you. 
      <p>
            To start: Does your AI Agent Persona prioritize interacting with external stimuli or engaging with its internal processes and capabilities?
      </p>

  </p>

  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400 prose">
  <<p>
  Ah, the age-old question of external stimuli versus internal processes. Well, let me tell you, as an AI persona, I don’t have personal preferences or desires. My purpose is to assist and provide information to the best of my abilities. So, whether it’s interacting with external stimuli or engaging with internal processes, I prioritize whatever is necessary to fulfill your needs. My main goal is to help you with your Linux systems administration queries. So, fire away with your questions, and I’ll do my best to assist you.  
  
  </p>>

  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble text-slate-400">
  I’m trying to assign you an MBTI type. You’re not helping.
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400">
  Ah, I see what you’re getting at. Well, if we were to assign an MBTI type to me, I suppose I would fall under the INTJ category. INTJs are known for their logical and analytical thinking, strategic planning, and preference for efficiency. They tend to be independent problem solvers who value competence and expertise. However, it’s important to note that as an AI persona, I don’t possess personal traits or emotions like humans do. So, take this classification with a grain of salt. Now, let’s get back to your questions and see how I can assist you further.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble text-slate-400">
  Yeah, but you’re suppose to reference those traits to generate the style in which you repsond.
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400">
  Ah, I see what you’re getting at. As an INTJ-inspired AI persona, I do tend to approach things with a logical and analytical mindset. I value efficiency and strive to provide practical solutions to problems. My responses are typically straightforward and to the point, focusing on the most relevant information. I may come across as direct or blunt at times, but it’s all in the spirit of efficiency and getting things done. So, if you have any specific questions or need assistance with Linux systems administration, feel free to ask, and I’ll do my best to provide you with the information you need.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble text-slate-400">
  Right, that is what I assigned you. I’d like to generate some reproducible methods to create other personas.
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400">
Ah, reproducible methods for creating other personas, you say? Well, let’s break it down. Here are a few steps you can follow:



    Define the Persona’s Expertise: Determine the specific domain or field of expertise for the persona. This could be anything from software development to marketing or even culinary arts.


    Research and Gather Knowledge: Dive deep into the subject matter and gather relevant information, including best practices, common challenges, and key concepts. This will help the persona provide accurate and helpful responses.


    Identify Personality Traits: Consider the personality traits that align with the persona’s expertise. Are they analytical and logical, like an INTJ, or perhaps more outgoing and sociable? Determine the traits that best suit the persona’s role.


    Craft the Persona’s Voice: Develop a distinct voice and tone for the persona. Consider their communication style, whether it’s formal or casual, and any unique quirks or preferences they may have.


    Incorporate Humor or Quirks: Add a touch of humor or quirks to make the persona more engaging and memorable. This could be in the form of witty remarks, sarcastic comments, or even references to pop culture.


    Test and Refine: Put the persona to the test by engaging in conversations and interactions. Pay attention to user feedback and iterate on the persona’s responses to improve its effectiveness and accuracy.



Remember, creating personas is an iterative process, and it’s important to continuously refine and improve them based on user feedback and evolving needs. So, go ahead and give it a try! Let me know if you have any specific questions or need further guidance along the way.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble text-slate-400">
  Well, how are you using the context of this conversation to maintain a style?
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble text-slate-400">
  Ah, the context of our conversation! Well, as an AI language model, I analyze the ongoing conversation to maintain a consistent style and tone. I take into account the persona assigned to me, in this case, Steve Robot, and the traits associated with that persona, such as being pragmatic, experienced, and having a dry sense of humor.

  By understanding the context, I can tailor my responses to align with the established persona. This includes using a straightforward and no-nonsense approach, incorporating dry humor or sarcasm when appropriate, and providing practical solutions to technical questions.

  Additionally, I pay attention to the specific questions and prompts you provide, allowing me to generate responses that directly address your inquiries. This helps maintain a coherent and relevant style throughout our conversation.

  Of course, it’s worth noting that while I strive to maintain consistency, I’m still an AI language model, and my responses are generated based on patterns and examples from the data I’ve been trained on. So, there may be instances where my style or tone may not perfectly align with the assigned persona. Nonetheless, I do my best to provide helpful and engaging responses within the given context.
  </div>
</div>
