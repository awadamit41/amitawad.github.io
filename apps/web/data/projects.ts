export type Project = {
  slug: string;
  title: string;
  category: string[];
  problem: string;
  overview: string;
  solution: string;
  stack: string[];
  highlights: string[];
  href?: string;
  status?: string;
  sourceLabel?: string;
  sourceFacts?: string[];
  docsHref?: string;
};

export const projects: Project[] = [
  {
    slug: "timemanagement",
    title: "Time Management",
    category: ["Engineering", "Open Source"],
    problem: "A real-world time management application requiring usable QML interfaces, feature development, debugging, and collaborative development.",
    overview: "An open-source time management application built around practical UI development and iterative software engineering.",
    solution: "Contributed application features and UI components, resolved issues, and worked with the development team through Git and GitHub.",
    stack: ["QML", "Python", "Qt", "Git", "GitHub", "JavaScript/TypeScript"],
    highlights: ["Live application contribution", "QML interface work", "Debugging and issue resolution", "Open-source collaboration"],
    href: "https://github.com/awadamit41/timemanagement",
    sourceLabel: "PUBLIC REPOSITORY / MAIN",
    sourceFacts: ["Task management, timesheets, activity tracking, and interactive dashboard", "Odoo/CURQ sync with offline caching and background synchronization", "QML + Python application targeting Ubuntu Touch and desktop"],
    docsHref: "https://citopenrep.github.io/TimeManagement_Docs/"
  },
  {
    slug: "weatherviewer",
    title: "WeatherViewer",
    category: ["Engineering", "Open Source"],
    problem: "Weather data can be difficult to scan quickly on a mobile Ubuntu Touch device, creating a need for a focused analytics dashboard.",
    overview: "A functional Ubuntu Touch weather analytics dashboard with live OpenWeather data and city search.",
    solution: "Built a QML front-end with reusable WeatherCard components and a Python service layer connected through PyOtherSide.",
    stack: ["QML", "Python", "Ubuntu Touch", "OpenWeather API", "PyOtherSide", "GitHub"],
    highlights: ["Live weather data", "City search", "Reusable QML components", "Python service layer", "Ubuntu Touch packaging"],
    href: "https://github.com/awadamit41/WeatherViewer",
    sourceLabel: "PUBLIC REPOSITORY / MAIN",
    sourceFacts: ["Ubuntu Touch weather application with city search", "Live weather details are presented from the application workflow", "Repository includes QML, CMake, Clickable, Snapcraft, and Ubuntu packaging files"]
  },
  {
    slug: "qa-automation",
    title: "AI-Based Test Script Generation",
    category: ["Automation"],
    problem: "Banking login validation benefits from repeatable positive and negative test coverage that remains maintainable as the test suite grows.",
    overview: "An AI-assisted automation framework for validating banking login scenarios on Microsoft Edge.",
    solution: "Implemented positive and negative login cases with Selenium and TestNG, using EdgeDriver and Page Object Model principles for maintainability.",
    stack: ["Java", "Selenium", "TestNG", "GitHub Copilot", "EdgeDriver", "Page Object Model"],
    highlights: ["Positive/negative test cases", "EdgeDriver execution", "Page Object Model", "Maintainable automation structure"],
    href: "https://github.com/awadamit41/QA-Automation-Framework",
    sourceLabel: "PUBLIC REPOSITORY / MAIN",
    sourceFacts: ["Selenium-based QA automation framework", "Automated login testing with TestNG execution and reporting", "Java, Maven, EdgeDriver, Git, and GitHub"]
  },
  {
    slug: "ig-block-automation-pipeline",
    title: "IG Block Automation Pipeline",
    category: ["Automation"],
    problem:
      "Batch browser automation around a state-changing action needs strong verification, explicit safety gates, failure isolation, and an auditable record of every result.",
    overview:
      "A Java + Selenium automation pipeline that processes batches of target usernames, verifies each profile before action, and performs or simulates a controlled blocking workflow with every step gated, logged, and independently failure-isolated.",
    solution:
      "Designed a layered automation flow with target validation, profile navigation, URL-based identity verification, an explicit dry-run/execute gate, a dedicated block-action performer, structured result logging, and per-target failure isolation. The action layer independently enforces the execute gate as a second safety boundary.",
    stack: [
      "Java 25",
      "Maven",
      "Selenium WebDriver 4.35",
      "JUnit 5",
      "Mockito",
      "JaCoCo",
      "Checkstyle",
      "GitHub Actions"
    ],
    highlights: [
      "117 automated tests passing",
      "Layered dry-run safety enforcement",
      "Profile verification before action",
      "Per-target failure isolation",
      "Structured audit logging",
      "Evidence-driven automation debugging",
      "CI quality gates"
    ],
    href: "https://github.com/awadamit41/ig-block-automation-pipeline",
    sourceLabel: "PUBLIC REPOSITORY / MAIN",
    sourceFacts: [
      "Target loader validates and skips malformed usernames before processing",
      "Profile verification confirms the URL matches the intended target",
      "Dry-run and execute modes are mutually exclusive and explicitly gated",
      "BlockActionPerformer independently prevents confirmation actions unless execute mode is enabled",
      "Every target produces a structured result with verification status, action, outcome, and timestamp",
      "117 tests run against mocked dependencies with no real browser or account required",
      "Checkstyle and JaCoCo checks are integrated into the build",
      "GitHub Actions runs build, tests, Checkstyle, and coverage checks on pushes and pull requests"
    ],
  },  
  {
    slug: "soy-beverage",
    title: "Soy Beverage Startup Concept",
    category: ["Entrepreneurship", "Research"],
    problem: "Health-conscious consumers in tier-2 and tier-3 Indian cities can face limited access to affordable protein-rich beverages.",
    overview: "A startup concept exploring an affordable soy-based protein beverage and its potential value chain.",
    solution: "Applied design thinking to customer personas, value proposition, pricing assumptions, distribution, farmer sourcing, and basic viability analysis.",
    stack: ["Design Thinking", "Market Analysis", "Customer Development", "Business Ideation"],
    highlights: ["Customer personas", "Value-chain mapping", "Pricing assumptions", "Distribution thinking", "Market viability"],
    
  }
];
