(function () {
  "use strict";

  const routes = {
    problem: {
      tag: "Problem Framing",
      title: "Start with Catalyst Canvas",
      description: "Use Catalyst Canvas when you need to define the problem, audience, assumptions, point of view, prototype, and test plan before moving into evidence or analysis.",
      primary: "/catalyst-canvas/#demo",
      primaryLabel: "Try Catalyst Canvas",
      module: "/catalyst-canvas/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/catalyst-canvas",
      why: "This is the best entry point when the work is still ambiguous. It turns a broad challenge into a structured brief that can later connect to data, claims, scenarios, or finance.",
      next: [
        "Write the problem in plain language.",
        "Identify the audience or stakeholder affected.",
        "Capture assumptions and unknowns before jumping to solutions.",
        "Move to Catalyst Data if the next step requires evidence records."
      ],
      related: ["data", "claim", "scenario"]
    },
    data: {
      tag: "Data Records",
      title: "Start with Catalyst Data",
      description: "Use Catalyst Data when you need a traceable measurement record with entity, indicator, source, reporting period, confidence, method notes, and review status.",
      primary: "/catalyst-data/#demo",
      primaryLabel: "Try Catalyst Data",
      module: "/catalyst-data/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/catalyst-data",
      why: "This is the best entry point when the central problem is evidence discipline: what is being measured, where it came from, how confident you are, and whether it can be reviewed.",
      next: [
        "Choose the entity and indicator.",
        "Record the source and reporting period.",
        "Add confidence and method notes.",
        "Use the JSON export as a lightweight audit trail."
      ],
      related: ["impact", "scenario", "claim"]
    },
    scenario: {
      tag: "Scenario Analysis",
      title: "Start with Catalyst Analytics R",
      description: "Use Catalyst Analytics R when you need to compare assumptions, savings, reinvestment, emissions intensity, adaptation, restoration, capital values, and budget status.",
      primary: "/catalyst-analytics-r/#demo",
      primaryLabel: "Try Analytics R",
      module: "/catalyst-analytics-r/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/catalystanalyticsr",
      why: "This is the best entry point when the user needs to reason through a modeled sustainability scenario rather than only describe a claim or store a record.",
      next: [
        "Set the time horizon and baseline assumptions.",
        "Adjust emissions, savings, adaptation, and restoration inputs.",
        "Review the trajectory and interpretation notes.",
        "Use the result as a scenario brief, not a forecast guarantee."
      ],
      related: ["finance", "impact", "data"]
    },
    impact: {
      tag: "Impact Measurement",
      title: "Start with Global Impact Catalyst",
      description: "Use Global Impact Catalyst when you need to structure an impact record with initiative, goal, SDG-style theme, indicator, baseline, current value, target, source, and progress notes.",
      primary: "/global-impact-catalyst/#demo",
      primaryLabel: "Try Global Impact",
      module: "/global-impact-catalyst/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/global-impact-catalyst",
      why: "This is the best entry point when the central work is impact reporting, progress-to-target reasoning, and keeping claims connected to evidence.",
      next: [
        "Define the initiative and goal.",
        "Choose an indicator and baseline.",
        "Add current value, target, source, and confidence.",
        "Review progress notes before using the result externally."
      ],
      related: ["data", "claim", "scenario"]
    },
    claim: {
      tag: "Claim Review",
      title: "Start with Narrative Risk",
      description: "Use Narrative Risk when you need to review a claim by evidence strength, uncertainty, source type, stakeholder pressure, narrative volatility, consequences, and review status.",
      primary: "/narrative-risk/#demo",
      primaryLabel: "Try Narrative Risk",
      module: "/narrative-risk/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/catalyst-narrative-risk",
      why: "This is the best entry point when language, claims, interpretations, or public narratives could outrun evidence or create accountability problems.",
      next: [
        "Write the claim exactly.",
        "Identify source type and evidence strength.",
        "Assess uncertainty, volatility, stakeholder pressure, and consequences.",
        "Use the review actions before publishing or escalating the claim."
      ],
      related: ["data", "impact", "problem"]
    },
    finance: {
      tag: "Tradeoff Analysis",
      title: "Start with Catalyst Finance",
      description: "Use Catalyst Finance when you need to estimate net annual benefit, NPV, ROI, payback, benefit-cost ratio, carbon cost per ton, review flags, and decision notes.",
      primary: "/catalyst-finance/#demo",
      primaryLabel: "Try Catalyst Finance",
      module: "/catalyst-finance/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/catalyst-finance",
      why: "This is the best entry point when the work depends on cost, benefit, investment, payback, risk-adjusted reasoning, or explicit tradeoffs under constraint.",
      next: [
        "Enter costs, annual benefits, discount rate, and time horizon.",
        "Review NPV, ROI, payback, and benefit-cost ratio together.",
        "Check risk flags before treating the result as decision-ready.",
        "Use professional review for real investment or financial decisions."
      ],
      related: ["scenario", "impact", "data"]
    },
    grit: {
      tag: "Recovery Tracking",
      title: "Start with Catalyst Grit",
      description: "Use Catalyst Grit when you need to describe a setback, assess pressure, impact, energy, support, clarity, recovery actions, and next steps.",
      primary: "/human-systems/catalyst-grit/#demo",
      primaryLabel: "Try Catalyst Grit",
      module: "/human-systems/catalyst-grit/",
      moduleLabel: "Module Page",
      repo: "https://github.com/Content-Catalyst-LLC/catalyst-grit",
      why: "This is the best entry point when the work is not only technical. It helps treat recovery, resilience, and momentum as a system.",
      next: [
        "Describe the setback without overexplaining.",
        "Assess impact, pressure, energy, support, and clarity.",
        "Identify one or two recovery actions.",
        "Treat the result as a reflective planning artifact, not therapy."
      ],
      related: ["problem", "methodology", "suggest"]
    },
    methodology: {
      tag: "Methodology",
      title: "Start with the Methodology page",
      description: "Use the Methodology page when you want to understand the operating standards behind the platform: supportable claims, visible assumptions, explainable methods, reproducible outputs, responsible AI, and human judgment.",
      primary: "/platform/methodology/",
      primaryLabel: "Read Methodology",
      module: "/platform/",
      moduleLabel: "Platform Page",
      repo: "https://github.com/Content-Catalyst-LLC",
      why: "This is the best entry point when the user needs to understand how Sustainable Catalyst thinks, not just which demo to try.",
      next: [
        "Read the methodology before using outputs externally.",
        "Review the platform boundaries and responsible AI principles.",
        "Then choose the demo that matches the work.",
        "Use feature suggestions for method or documentation improvements."
      ],
      related: ["problem", "data", "scenario"]
    },
    library: {
      tag: "Knowledge Library",
      title: "Start with the Open Knowledge Library",
      description: "Use the Open Knowledge Library when you want article maps, domain pathways, research structures, and long-form public explanations.",
      primary: "/knowledge-libraries/",
      primaryLabel: "Open Knowledge Library",
      module: "/publications/",
      moduleLabel: "Publications",
      repo: "https://github.com/Content-Catalyst-LLC",
      why: "This is the best entry point when the user is learning a domain or trying to find a research path rather than using a platform module.",
      next: [
        "Choose the domain closest to your question.",
        "Use article maps as structured learning routes.",
        "Move to demos when you need a workflow or artifact.",
        "Use the Research Librarian page when unsure where to begin."
      ],
      related: ["methodology", "github", "problem"]
    },
    github: {
      tag: "Repository Layer",
      title: "Start with the Content Catalyst GitHub organization",
      description: "Use GitHub when you want repository source, plugin code, schemas, examples, documentation, tests, and open-source project structure.",
      primary: "https://github.com/Content-Catalyst-LLC",
      primaryLabel: "View GitHub",
      module: "/platform/demos/",
      moduleLabel: "Demo Hub",
      repo: "https://github.com/Content-Catalyst-LLC",
      why: "This is the best entry point when the user wants to inspect or reuse the technical scaffolding behind a module.",
      next: [
        "Start with the repository matching the demo.",
        "Read the README and docs folders first.",
        "Review schemas and examples before adapting code.",
        "Use feature suggestions for improvement ideas."
      ],
      related: ["data", "scenario", "suggest"]
    },
    suggest: {
      tag: "Open Development",
      title: "Start with Feature Suggestions",
      description: "Use Feature Suggestions when you want to propose a module, demo improvement, Research Librarian capability, data/export feature, documentation upgrade, bug report, or accessibility issue.",
      primary: "/platform/feature-suggestions/",
      primaryLabel: "Suggest a Feature",
      module: "/platform/demos/",
      moduleLabel: "Try Demos First",
      repo: "https://github.com/Content-Catalyst-LLC/sustainable-catalyst-feature-suggestions",
      why: "This is the best entry point when the user has an improvement idea but does not need to open a GitHub issue.",
      next: [
        "Check the demo or page related to the suggestion.",
        "Describe the problem the feature would solve.",
        "Avoid confidential, proprietary, regulated, or sensitive personal information.",
        "Submit the feature suggestion for review."
      ],
      related: ["github", "methodology", "problem"]
    },
    consulting: {
      tag: "Applied Support",
      title: "Start with Consulting",
      description: "Use Consulting when you need help applying Sustainable Catalyst methods to knowledge architecture, evidence discipline, sustainability analysis, demo strategy, research workflows, or decision support.",
      primary: "/consulting/",
      primaryLabel: "Consulting",
      module: "/contact/",
      moduleLabel: "Contact",
      repo: "https://github.com/Content-Catalyst-LLC",
      why: "This is the best entry point when the work is specific to an organization, project, or decision context and requires direct support.",
      next: [
        "Review the consulting page for fit.",
        "Clarify the scope, deliverable, constraints, and timeline.",
        "Do not submit sensitive or regulated information through public forms.",
        "Use contact for a scoped conversation."
      ],
      related: ["methodology", "suggest", "problem"]
    }
  };

  const keywordRules = [
    { key: "problem", words: ["problem", "frame", "framing", "canvas", "audience", "prototype", "experiment", "persona", "hmw", "point of view", "challenge"] },
    { key: "data", words: ["data", "record", "measurement", "indicator", "source", "period", "entity", "confidence", "evidence record", "database"] },
    { key: "scenario", words: ["scenario", "analytics", "model", "emissions", "budget", "capital", "assumptions", "trajectory", "savings", "adaptation", "restoration"] },
    { key: "impact", words: ["impact", "sdg", "target", "baseline", "progress", "initiative", "outcome", "goal", "global impact"] },
    { key: "claim", words: ["claim", "narrative", "risk", "uncertainty", "evidence strength", "volatility", "stakeholder", "review", "misinformation"] },
    { key: "finance", words: ["finance", "financial", "npv", "roi", "payback", "cost", "benefit", "tradeoff", "investment", "discount", "carbon cost"] },
    { key: "grit", words: ["grit", "recovery", "setback", "resilience", "momentum", "pressure", "energy", "support", "clarity"] },
    { key: "methodology", words: ["method", "methodology", "assumption", "traceable", "reproducible", "responsible ai", "audit", "review standard", "provenance"] },
    { key: "library", words: ["library", "article", "article map", "publication", "research path", "learn", "learning", "knowledge"] },
    { key: "github", words: ["github", "repository", "repo", "code", "schema", "plugin", "tests", "source"] },
    { key: "suggest", words: ["suggest", "feature", "bug", "improvement", "request", "feedback", "accessibility", "documentation"] },
    { key: "consulting", words: ["consulting", "help", "hire", "project", "organization", "support", "client", "contact"] }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      })[char];
    });
  }

  /**
   * Pick a navigation route by fixed keyword weights; this is a heuristic,
   * not scholarly retrieval, citation matching or evidence evaluation.
   * @param {string} query Visitor text after UI collection.
   * @returns {string} Route key, or an empty string when no rule matches.
   */
  function scoreQuery(query) {
    const normalized = query.toLowerCase();
    const scores = {};

    keywordRules.forEach(function (rule) {
      scores[rule.key] = 0;
      rule.words.forEach(function (word) {
        if (normalized.includes(word)) {
          scores[rule.key] += word.length > 8 ? 2 : 1;
        }
      });
    });

    let best = "";
    let bestScore = 0;

    Object.keys(scores).forEach(function (key) {
      if (scores[key] > bestScore) {
        best = key;
        bestScore = scores[key];
      }
    });

    return bestScore > 0 ? best : "";
  }

  function routeLabel(key) {
    return routes[key] ? routes[key].title.replace("Start with ", "") : key;
  }

  function renderRecommendation(routeKey, rawQuery) {
    const route = routes[routeKey] || routes.problem;
    const related = (route.related || []).filter(function (key) { return routes[key]; }).slice(0, 3);

    return `
      <div class="scrl-agent__recommendation">
        <article class="scrl-agent__primary">
          <span class="scrl-agent__tag">${escapeHtml(route.tag)}</span>
          <h3>${escapeHtml(route.title)}</h3>
          <p>${escapeHtml(route.description)}</p>
          <div class="scrl-agent__links">
            <a href="${escapeHtml(route.primary)}">${escapeHtml(route.primaryLabel)} →</a>
            <a href="${escapeHtml(route.module)}">${escapeHtml(route.moduleLabel)} →</a>
            <a href="${escapeHtml(route.repo)}" target="_blank" rel="noopener">GitHub →</a>
          </div>
        </article>

        <article class="scrl-agent__why">
          <h4>Why this route?</h4>
          <p>${escapeHtml(route.why)}</p>
          ${rawQuery ? `<p class="scrl-agent__small"><strong>Your question:</strong> ${escapeHtml(rawQuery)}</p>` : ""}
        </article>

        <article class="scrl-agent__next">
          <h4>Suggested next steps</h4>
          <ol class="scrl-agent__next-list">
            ${route.next.map(function (item) { return `<li>${escapeHtml(item)}</li>`; }).join("")}
          </ol>
        </article>

        <article class="scrl-agent__secondary">
          <h4>Related routes</h4>
          <div class="scrl-agent__secondary-grid">
            ${related.map(function (key) {
              const relatedRoute = routes[key];
              return `
                <div class="scrl-agent__mini">
                  <strong>${escapeHtml(routeLabel(key))}</strong>
                  <a href="${escapeHtml(relatedRoute.primary)}">${escapeHtml(relatedRoute.primaryLabel)} →</a>
                </div>
              `;
            }).join("")}
          </div>
        </article>

        <article class="scrl-agent__safety">
          <strong>Use boundary</strong>
          <p>
            Treat this recommendation as routing support. Demos and outputs are educational and review-oriented.
            They do not replace professional advice, compliance review, financial review, therapy, assurance, certification, or expert judgment.
          </p>
        </article>
      </div>
    `;
  }

  function initAgent(agent) {
    const goal = agent.querySelector("[data-scrl-goal]");
    const query = agent.querySelector("[data-scrl-query]");
    const run = agent.querySelector("[data-scrl-run]");
    const reset = agent.querySelector("[data-scrl-reset]");
    const results = agent.querySelector("[data-scrl-results]");
    const quickButtons = agent.querySelectorAll("[data-scrl-quick]");

    function runAgent() {
      const selected = goal.value;
      const rawQuery = query.value.trim();
      const inferred = rawQuery ? scoreQuery(rawQuery) : "";
      const routeKey = selected || inferred || "problem";
      results.innerHTML = renderRecommendation(routeKey, rawQuery);
    }

    run.addEventListener("click", runAgent);

    query.addEventListener("keydown", function (event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        runAgent();
      }
    });

    reset.addEventListener("click", function () {
      goal.value = "";
      query.value = "";
      results.innerHTML = `
        <div class="scrl-agent__empty">
          <strong>Start by choosing a goal or asking a question.</strong>
          <p>The Research Librarian will recommend the best Sustainable Catalyst starting point and explain why.</p>
        </div>
      `;
    });

    quickButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const value = button.getAttribute("data-scrl-quick");
        goal.value = value;
        results.innerHTML = renderRecommendation(value, "");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-scrl-agent]").forEach(initAgent);
  });
})();
