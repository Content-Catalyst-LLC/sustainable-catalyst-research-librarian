# Research Librarian Agent Logic

Version 0.1.0 is intentionally deterministic and scoped.

## Interaction model

Visitor input can come from:

1. A guided dropdown.
2. Quick route buttons.
3. A free-text question.

The agent maps the input to one of the Sustainable Catalyst route families.

## Route families

- problem → Catalyst Canvas
- data → Catalyst Data
- scenario → Catalyst Analytics R
- impact → Global Impact Catalyst
- claim → Narrative Risk
- finance → Catalyst Finance
- grit → Catalyst Grit
- methodology → Methodology
- library → Knowledge Library
- github → GitHub organization
- suggest → Feature Suggestions
- consulting → Consulting

## Design principles

- Navigation first
- No open-ended professional advice
- No external API dependency in v0.1.0
- No visitor data storage
- Clear boundaries
- Direct links to demos, module pages, and repositories

## Future upgrade path

- Add admin-editable route definitions.
- Add optional aggregate route analytics.
- Add a feedback prompt: “Was this useful?”
- Add retrieval over Sustainable Catalyst pages and repository docs.
- Add a fully scoped LLM assistant only after the knowledge base and refusal boundaries are stable.
