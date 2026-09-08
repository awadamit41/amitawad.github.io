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
    problem: "A real-world time management application requiring usable QML interfaces, application features, debugging, and collaborative development.",
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
    slug: "soy-beverage",
    title: "Soy Beverage Startup Concept",
    category: ["Entrepreneurship", "Research"],
    problem: "Health-conscious consumers in tier-2 and tier-3 Indian cities can face limited access to affordable protein-rich beverages.",
    overview: "A startup concept exploring an affordable soy-based protein beverage and its potential value chain.",
    solution: "Applied design thinking to customer personas, value proposition, pricing assumptions, distribution, farmer sourcing, and basic viability analysis.",
    stack: ["Design Thinking", "Market Analysis", "Customer Development", "Business Ideation"],
    highlights: ["Customer personas", "Value-chain mapping", "Pricing assumptions", "Distribution thinking", "Market viability"],
    status: "CONCEPT"
  }
];
