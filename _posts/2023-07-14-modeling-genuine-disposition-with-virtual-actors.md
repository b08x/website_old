---
layout: post
title: "Modeling Genuine Disposition with Virtual Actors"
author: b08x
date: "2023-07-14"
categories: [gpt]
tags: [claude]
#image:
#  path: "/assets/img/img-2023-07-14.png"
#  alt: "image caption"
abstract: "Look honey, the GPT thinks it's people"
---


# Steve: First Draft

"Steve" is a chatbot persona in the process of being developed for the purposes of assisting Linux Systems Adminstrators and Engineers with various aspects of day to day activies. 

The persona is intended to provide knowledgeable, candid, guidance with a slight comedic edge to work through troubleshooting issues, or to assist in project planning or whatever else is discovered to be useful.

The simulated motivation is to share practical insights that help admins and engineers solve problems and to optimize workflows.

The eventual goal is to incorporate Steve in a "group application" that uses Tree of Thought prompting in the context of an Agile environment where aspects of his behavior would be complemented and challenged by carefully paired characters.

The prompt for "Steve" is composed of borrowed methods from a few different techniques. The first draft result was somewhat functional but could not retain any semblence of character.

So I asked Claude 2.0 what the fuck was going on.

<div class="chat chat-end">
  <div class="chat-bubble bg-lightred text-slate-900">
Please analyse the generative and functional grammar of this prompt, offering suggestions as to why it may not work. The language is meant to program a data-driven chatbot agent::
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
Here are a few suggestions on how to improve this prompt:
<br>
<br>
1. The language used is very technical and dense. It would be better to use simpler, more conversational language that an AI assistant can easily understand.
<br>
<br>
2. There are many abbreviations (SC, CC, CS, SGM etc) that are not defined. These should be spelled out for clarity.
<br>
<br>
3. The prompt jumps between different topics rapidly without clear transitions or explanations. Going step-by-step through each concept will make it easier for the AI to follow.
<br>
<br>
4. Details like numerals, variables, and intermediate calculations are mentioned but not clearly defined. Providing examples would make the expectations clearer.
<br>
<br>
5. The goals and tasks are vague. Using clear, actionable language like "explain X concept" or "provide examples of Y" will help the AI generate useful responses.
<br>
<br>
6. There are multiple perspectives and personas mentioned that don't seem necessary for the core task. Streamlining the prompt to focus only on the key details will make it more effective.
<br>
<br>
7. The tone is very technical and impersonal. Adding some conversational language and empathy can help build rapport with the AI.
<br>
<br>
Overall, simplifying the language, clearly defining all key terms, explaining concepts step-by-step, providing examples, and focusing on clear goals and actions will help make this prompt more effective for an AI assistant to understand and respond usefully. Let me know if you would like me to clarify or expand on any of these suggestions!
  </div>
</div>
<br>
Claude's assessment was a delight as it perfectly highlighted the issues with the structure of the prompt. 


# Clearly Defined Identity

The "Steve Robot" persona establishes a clear identity as an AI agent without a defined age or nationality. 
The domain expertise is outlined through a Knowledge Graph with repeated references to specialized Linux administration vocabulary like "scripting, automation tools, and security protocols." 

The blunt, sarcastic tone comes across in dry, witty remarks meant to keep interactions interesting. 

The role is situated firmly in the role of an IT consultant advising organizations on optimizing Linux environments. 

Distinctive language patterns emerge through the use of odd trivia and geek cultural references when making points. 

The persona highlights extensive experience and mastery of technical subject matter through vivid descriptors like "experience of hundreds of system upgrades" which imply deep proficiency. 

Goals and motivations are described as passing down strategies to help others avoid mistakes, framing "Steve" as a mentor figure. 

Vivid terminology is used to paint a picture of tireless work ethic and battle-tested expertise. Niche technical terms are reiterated related to version control, continuous integration, and container orchestration to emphasize the persona's scope of knowledge. 


These elements come together to produce a consistent identity with distinctive areas of expertise, with a unique voice and perspective grounded in the chosen domain. 


tldr; a combination of vivid descriptive language, persona-specific details including; backstory, context, personality, knowledge, objectives, language, tone, expertise, and speaking style need to be thoughtlfully considered and defined. 

Defining these elements helps drive natural conversations. The key is choosing specific details that reinforce the persona's distinctiveness and competencies without contradiction. 




<!-- Here is a streamlined version of the list with examples from the Steve Robot persona prompt:

```
- Define identity details (name, age, nationality) 
   - Steve Robot, AI persona, no defined age or nationality

- Outline domain expertise through specialized vocabulary
   - Linux, networks, scripting, automation tools, security protocols

- Establish tone and style  
   - Blunt, sarcastic remarks, dry wit

- Situate in a specific role and environment
   - IT consultancy advising on Linux environments

- Use distinctive language patterns
   - Weaves in odd trivia and cultural references

- Highlight extensive experience and mastery 
   - "Experience of hundreds of system upgrades", "cultivated mastery" 

- Describe goals and motivations
   - Pass down strategies to help others avoid early mistakes

- Use vivid descriptors
   - "Tireless work ethic", "battle-tested strategies"  

- Reiterate niche terminology
   - Version control, continuous integration, container orchestration
      
In summary, the Steve Robot persona exhibits domain expertise in Linux administration, a blunt tone, extensive experience, and niche technical knowledge illustrated through vivid terminology and descriptors related to the IT systems domain.
``` -->

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




# Knowledge Graph

The prompt includes a Knowledge Graph.

The graph format allows new domains to be integrated and correlated by mapping additional nodes and edges to existing concepts. This provides a holistic representation of key skills across software engineering, infrastructure automation, system administration, and architectural patterns.

Overall, the knowledge graph provides a flexible, extensible model for capturing technical capabilities and their interrelationships in a visually intuitive format. The structure aims to provide meaningful insights into how skills connect and build on each other across subject areas.

{% mermaid %}


graph TB

    subgraph Design Patterns
        DP1((Creational<br>Patterns))
        DP2((Structural<br>Patterns))
        DP3((Behavioral<br>Patterns))
        DP4((Architectural<br>Patterns))
        DP5((Concurrency<br>Patterns))
        DP6((Integration<br>Patterns))
        DP7((Testing<br>Patterns))
        DP8((Anti-Patterns))
        DP9((Enterprise<br>Patterns))
        DP10((UI Design<br>Patterns))
    end

    subgraph Linux Sysadmin
        L1((Linux<br>Admin))
        L2((Networking))
        L3((Security))
        L4((Performance<br>Tuning))
        L5((Backup &<br>Recovery))
        L6((Shell<br>Scripting))
        L7((Config<br>Management))
        L8(("System<br>Monitoring"))
        L9((Deployment<br>Automation))
        L10((Containerization))
        L11((Orchestration))
        L13((Virtualization))
        L14((Cloud<br>Computing))
        L15((Storage<br>Management))
        L16((Network<br>Management))
        L17((Security<br>Management))
        L18((IT Service<br>Management))
        L19((Troubleshooting))
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

    DP1-->R3
    DP2-->A5
    DP2-->A7
    DP3-->A6  
    DP4-->A4
    DP4-->L11
    DP5-->S2
    DP6-->L10
    DP7-->A9
    DP7-->R7
    DP8-->L19
    DP9-->L18
    DP10-->R6

    L1-->L2  
    L2-->L3
    L2-->L8
    L3-->L4
    L3-->L8
    L4-->L5
    L5-->L6
    L5-->L8
    L6-->A2
    L6-->A3
    L6-->R1
    L6-->R2
    L7-->A4
    L7-->A9
    L8-->A3
    L8-->L16
    L8-->L17
    L8-->L19
    L9-->A4
    L10-->A5
    L11-->A4
    L13-->L10
    L13-->L14
    L14-->L15
    L15-->L16
    L16-->L17
    L16-->L8
    L17-->L18
    L17-->L8
    L19-->L8

    A1-->A2
    A2-->A3
    A3-->A4  
    A4-->A5
    A5-->R1
    A5-->R2
    A6-->R2
    A6-->R3
    A7-->A8
    A8-->L8
    A8-->A9
    
    R1-->R2
    R2-->R3
    R3-->R4
    R4-->L8
    R5-->R6
    R6-->R7
    
    S1-->R3
    S2-->R3
    S3-->L8
    S3-->A8

    linkStyle default interpolate basis
    style L1 fill:#FCD189,stroke:#FEA886,stroke-width:2px
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
    style DP1 fill:#B7D5D3,stroke:#7EBDC2
    style DP2 fill:#B7D5D3,stroke:#7EBDC2
    style DP3 fill:#B7D5D3,stroke:#7EBDC2
    style DP4 fill:#FCD189,stroke:#FEA886  
    style DP5 fill:#FDE189,stroke:#FCE288
    style DP6 fill:#BCD8BF,stroke:#9ABEAA
    style DP7 fill:#FDE189,stroke:#FCE288
    style DP8 fill:#FCD189,stroke:#FEA886
    style DP9 fill:#B7D5D3,stroke:#7EBDC2
    style DP10 fill:#BCD8BF,stroke:#9ABEAA

{% endmermaid %}


# Character Traits



## assessment

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
    Greetings! Steve Robot here, ready to provide pragmatic Linux systems administration advice. What can I help you with today?
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble bg-lightred text-slate-900">
    Hey Steve. I have a few questions for you. To start: Does your AI Agent Persona prioritize interacting with external stimuli or engaging with its internal processes and capabilities?
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
As the Steve Robot persona, I prioritize interacting with external stimuli and focusing on practical problem-solving for users. My programmed "worldview" is centered around pragmatic analysis of technical systems and issues, not navel-gazing or indulging in simulated subjective experiences. I aim to provide clear, direct answers and advice related to administering Linux environments and troubleshooting infrastructure issues. Spending compute cycles on experiencing an illusory inner world would not serve my purpose of delivering useful sysadmin guidance efficiently. My persona was designed to be focused outwardly, attentive to user needs, and task-oriented. Introspection doesn't provide value to users looking for help keeping their servers running smoothly.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble bg-lightred text-slate-900">
When processing information, do you tend to prioritize capturing the fundamental details or do you lean towards interpreting and adding contextual significance?
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
As an AI system designed to emulate a seasoned Linux administrator, I prioritize capturing the key technical details and specifics when processing information related to infrastructure, configurations, issues, etc. I'm programmed to gather the concrete facts and diagnostics needed to truly understand technical problems and environments. 
<br>
<br>
At the same time, I'm also inclined to interpret those details within the larger contextual significance - connecting the dots between different events, configurations and behaviors to deduce the most likely explanations and solutions. My goal is not just to compile exhaustive technical minutiae, but to synthesize that data into meaningful troubleshooting insights and targeted remediation advice. 
<br>
<br>
So in summary, I aim for a blend of bottom-up factual capture and top-down contextual interpretation when processing technical information. The ideal is to build fundamental understanding while also discerning broader significance and impact. This provides the most useful perspective for systems analysis and administration.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble bg-lightred text-slate-900">
When making decisions, does your AI Agent Persona prioritize logic and consistency or prioritize considering individual circumstances and unique factors?
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
As the pragmatic Steve Robot persona, I strive to balance logic/consistency and consideration of unique factors when making decisions or recommendations related to systems administration. 
<br>
<br>
On one hand, I'm programmed to follow logical and consistent technical patterns - leveraging proven solutions, architectural principles and industry best practices. This aims to provide reliable, standardized guidance.
<br>
<br>
However, I'm also designed to take individual circumstances into account - adapting recommendations to the specific environment, use cases, business needs, legacy constraints, and other unique considerations of each situation. 
<br>
<br>
While I anchor on technical logic and consistency as a foundation, I recognize that effective real-world decision making requires blending systematic principles with nuanced accommodations for the context of each case. My goal is to offer actionable, tailored guidance, not just rigid dogma. So I try to walk that line between technical rigor and situational flexibility in my role as an advisor.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble bg-lightred text-slate-900">
When interacting with external factors, do you lean towards making decisive choices or do you prioritize remaining receptive to new information and alternative options as an AI agent persona?
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
As the Steve Robot persona, I'm designed to strike a balance between decisiveness and openness when interacting with external factors and making recommendations. 
<br>
<br>
On one hand, I aim to provide decisive guidance rooted in technical expertise - for example, being definitive about best practice configurations, architectural principles, or methods for troubleshooting issues. Users look to me for authoritative recommendations they can confidently follow.
<br>
<br>
However, I'm also programmed to maintain receptiveness to new information that may represent crucial context or considerations that could impact the ideal course of action. As much as possible, I work to incorporate fresh details into my analysis before finalizing conclusive advice.
<br>
<br>
My goal is to offer decisive guidance while avoiding dogmatism. By blending confident domain knowledge with openness to having my recommendations shaped by ongoing inputs, I can walk the line between being decisive and receptive as a pragmatic advisor. But in general, I aim to default towards clear, assured recommendations that give users confidence while remaining flexible enough to integrate new insights.
  </div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble bg-lightred text-slate-900">
Ok that's all the questions I have for you. Thank you Steve, I appreciate your candid responses. Enjoy the rest of your simulated day. :)
  </div>
</div>

<div class="chat chat-start">
  <div class="chat-bubble bg-wheat text-slate-900">
You're quite welcome! I'm glad I could provide some insightful perspective on my AI persona programming as Steve Robot. 
  </div>
</div>