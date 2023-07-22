---
layout: "post"
title: "Ansible LLMOps"
author: "b08x"
date: "2023-07-19 04:54"
categories: [Ansible]
tags: ['llm', 'python', 'ruby', 'openai', 'langchain']
abstract: "Configuration Management"
---


# Objective

Configuration Management for pre-processing pipeline

sources:

* repositories
* obsidian
* archivebox
* pdf/md/txt document library

LLMops tools:

* flowise
* opensearch
* langchain


## reproducible environments

Much like you enjoy walking back into a room where all of your objects are in the same place you left them, you might enjoy the idea of using Ansible for managing LLM Stack.

Extending functionality with custom modules for [OpenAI](https://google.com) and LangChain, along with roles for deployments, nlp processing and prompt testing, Ansible can useful tool in the LLM Application Development chain.

## ansible-gpt

[playbook linter using openai](https://github.com/sshnaidm/ansible-gpt/blob/master/article-lint.md)


## deployments

#### applications

* diffy
* monadic-chat
* streamlit

## document processing and embedding

* nlp processing
* vector embedding

## modules

The idea is to write a langchain module, load a few-show prompt from the promts folder

Or configure it to load a .yml from another location

##### An example task:

```yaml
- name: test prompt 42
  langchain_prompt_template:
    apikey: "{{ keys.openai }}"
    model: "{{ env.model }}"
    temp: 0.3
    top_p: 0.2
    etc..
    promptchain: "prompts/042.yml"
    type: fewshot
    input_variables:
      - """
        can be a multiline
        statement
        """
    store: True

```

##### An example prompt template:

```ruby
---
:_type: few_shot
:input_variables:
- phrase
:prefix: Identify and Map the Cognitive Grammar in the following phrase
:example_prompt:
  :_type: prompt
  :input_variables:
  - input
  - output
  :template: |-
    Input: {input}
    Output: {output}
:examples:
- :input: What did the fish say when it hit the wall
  :output: |

    | Element               | Function                                     |
    |-----------------------|----------------------------------------------|
    | Interrogative pronoun | Introduces a question and seeks information  |
    | Past tense question   | Forms questions in the past tense            |
    | Definite article      | Indicates a specific object                  |
    | Noun                  | Represents an aquatic creature               |
    | Verb                  | Expresses the action of speaking             |
    | Subordinate clause    | Provides additional contextual information   |
    | Pronoun               | Refers to the fish                           |
    | Verb phrase           | Indicates the action performed by the fish   |
    | Preposition           | Introduces a subordinate clause              |
    | Definite article      | Specifies the wall that the fish hit         |
    | Noun                  | Represents a physical barrier or structure   |

- :input: one could hypothesize a potential link
  :output: |

    | Element            | Function                                    |
    |--------------------|---------------------------------------------|
    | Indefinite pronoun | Represents a general or unspecified person  |
    | Modal verb         | Indicates possibility or ability            |
    | Verb               | Expresses the action of hypothesizing       |
    | Determiner         | Indicates an indefinite or non-specific noun|
    | Adjective          | Describes the nature of the link            |
    | Noun               | Represents a connection or relationship     |

:suffix: |-
  Input: {phrase}
  Output:

```





---


manage api keys with vault

manage prompts in yaml and jinja templates

tasks for
  doc processing
  database setup | query
  stack setup
  containerization
