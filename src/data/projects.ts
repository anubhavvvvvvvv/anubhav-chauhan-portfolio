import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "tableau-sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    tagline: "₹986M in revenue, one screen, zero spreadsheets.",
    category: "bi-dashboard",
    categoryLabel: "BI Dashboard",
    matchScore: 98,
    description:
      "An end-to-end Business Intelligence pipeline — raw transactional data cleaned in MySQL, modeled into a Star Schema, and delivered through an interactive Tableau dashboard that answers the exact questions a CEO or Regional Manager would ask.",
    businessProblem:
      "Revenue, customer, and product performance data were scattered and hard to interpret at a glance, delaying decisions on budget allocation, account retention, and market expansion.",
    dataset:
      "Real-world multi-market retail transactional dataset (customers, markets, products, dates) sourced via an industry-style guided project, covering 14 markets and 20+ customer accounts.",
    techStack: ["MySQL", "SQL", "Star Schema Modeling", "Tableau Desktop", "Git"],
    sqlConcepts: ["Fact/Dimension Modeling", "Joins", "Filtering & Aggregation", "Data Cleaning & Validation"],
    keyInsights: [
      "Delhi NCR alone contributes ₹520.79M — over half of total company revenue.",
      "A single account, Electricalsara Stores, drives ~42% of total revenue — a major concentration risk.",
      "Revenue follows a long-tail distribution: top 3 markets outperform the bottom 8 combined.",
      "The most recent monthly data point is the lowest revenue on record — a signal worth investigating.",
      "The South zone is significantly underdeveloped, pointing to a clear expansion opportunity.",
    ],
    challenges: [
      "Designing a Star Schema from raw transactional data so Tableau could cross-filter fast without redundant joins.",
      "Deciding which of many possible charts actually answered a business question, rather than just looking impressive.",
    ],
    learnings: [
      "Why dimensional modeling (fact/dimension tables) matters for BI performance, not just database theory.",
      "How to structure a dashboard as a narrative — one worksheet, one business question — instead of a wall of charts.",
      "How to spot risk signals in data (like 42% revenue concentration) and connect them to a business decision.",
    ],
    highlights: [
      { label: "Total Revenue Analyzed", value: "₹986.6M" },
      { label: "Markets Covered", value: "14" },
      { label: "Dashboard Worksheets", value: "8+" },
    ],
    images: [
      { src: "/images/projects/tableau-dashboard/preview.png", alt: "Sales performance dashboard overview in Tableau" },
      { src: "/images/projects/tableau-dashboard/revenue-by-market.png", alt: "Revenue by market bar chart" },
      { src: "/images/projects/tableau-dashboard/sales-flow.png", alt: "Customer sales flow Sankey diagram" },
    ],
    githubUrl: "https://github.com/anubhavvvvvvvv/tableau-sales-performance-dashboard",
    featured: true,
    year: "2025",
  },
  {
    slug: "vendor-sales-performance-analysis",
    title: "Vendor Sales Performance Analysis",
    tagline: "$4.35M in loss-making sales, found and explained.",
    category: "data-analytics",
    categoryLabel: "SQL + Python Analytics",
    matchScore: 96,
    description:
      "Consolidated four disconnected procurement and sales tables into a single analytical model using 30+ SQL queries and Python, then applied statistical testing to evaluate vendor and brand performance across a 520-brand portfolio.",
    businessProblem:
      "Procurement and sales data lived in four disconnected tables, making it impossible to see which vendors and brands were actually profitable versus quietly losing money.",
    dataset:
      "Enterprise-style procurement dataset with vendor-level purchases, brand-level sales, and inventory movement records, sourced via an industry-style guided project.",
    techStack: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "SciPy"],
    sqlConcepts: ["CTEs", "Window Functions", "Ranking Functions", "Multi-table Joins", "Subqueries", "CASE Expressions"],
    pythonLibraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "SciPy"],
    keyInsights: [
      "Uncovered $4.35M in loss-making sales hidden across the vendor portfolio.",
      "Identified $282K in dead stock tying up working capital.",
      "Found growth opportunities across 520 brands using correlation and confidence interval analysis.",
      "Correlation heatmaps revealed which business variables actually moved together — and which didn't.",
    ],
    challenges: [
      "Reconciling four disconnected tables with inconsistent keys and formats before any analysis was possible.",
      "Choosing statistically sound tests (hypothesis testing, confidence intervals) instead of eyeballing differences between vendors.",
    ],
    learnings: [
      "How to build a repeatable pipeline from raw ingestion to business insight, not just a one-off analysis.",
      "That most of the real work in data analysis is cleaning and validation, not just writing queries.",
      "How to translate statistical findings into recommendations a procurement team could actually act on.",
    ],
    highlights: [
      { label: "Loss-Making Sales Found", value: "$4.35M" },
      { label: "Dead Stock Identified", value: "$282K" },
      { label: "Brands Analyzed", value: "520" },
    ],
    images: [
      { src: "/images/projects/vendor-sales/top-revenue.png", alt: "Top revenue contributing vendors and brands chart" },
      { src: "/images/projects/vendor-sales/correlation.png", alt: "Correlation heatmap of business variables" },
      { src: "/images/projects/vendor-sales/categories.png", alt: "Top categories distribution chart" },
    ],
    githubUrl: "https://github.com/anubhavvvvvvvv/vendor-sales-performance-analysis",
    featured: true,
    year: "2025",
  },
  {
    slug: "blinkit-trust-plus",
    title: "Blinkit Trust+",
    tagline: "Users don't mind paying fees. They mind not knowing why.",
    category: "product",
    categoryLabel: "Product Case Study",
    matchScore: 91,
    description:
      "A Product Management case study exploring how Blinkit can increase user trust and revenue through transparent pricing — backed by user research, competitive analysis, and an interactive checkout prototype.",
    businessProblem:
      "Users frequently discover additional charges only at checkout, leading to confusion, abandoned carts, and reduced trust — while the business still needs those fees to sustain operations.",
    dataset:
      "Primary research (surveys, user interviews) and secondary research (Reddit discussions, app audits, competitor analysis of Blinkit, Zepto, Instamart, and BigBasket) covering 30+ identified user pain points.",
    techStack: ["Product Strategy", "User Research", "Competitive Analysis", "Journey Mapping", "Interactive Prototyping"],
    keyInsights: [
      "The core insight: users don't mind paying extra — they mind not knowing why they're paying.",
      "Trust matters more than discounts when charges are explained and expectations are set early.",
      "Three research-backed personas surfaced distinct trust triggers across convenience, budget, and value-driven shoppers.",
      "Designed a transparency-first checkout: Trust Score, Price Lock, and Smart Fee Explanations.",
    ],
    challenges: [
      "Balancing user research findings against business revenue goals — the brief wasn't 'remove fees,' it was 'keep them but make them trusted.'",
      "Synthesizing survey, interview, and competitive data into one coherent product direction instead of a laundry list of complaints.",
    ],
    learnings: [
      "That transparency, not price, was the dominant driver of checkout trust.",
      "How to define a North Star metric (Trusted Orders Completed) and supporting metrics for a feature that doesn't exist yet.",
      "How product thinking — personas, journey mapping, roadmapping — complements data analysis when solving a business problem.",
    ],
    highlights: [
      { label: "User Pain Points Analyzed", value: "30+" },
      { label: "Competitors Benchmarked", value: "4" },
      { label: "Prototype Phases", value: "3" },
    ],
    images: [
      { src: "/images/projects/blinkit/placeholder.svg", alt: "Blinkit Trust+ interactive prototype preview" },
    ],
    githubUrl: "https://github.com/anubhavvvvvvvv/blinkit-trust-plus-case-study",
    liveUrl: "https://blinkit-trust-plus.vercel.app/",
    featured: true,
    year: "2025",
  },
  {
    slug: "sql-data-warehouse-analytics",
    title: "SQL Data Warehouse & Analytics",
    tagline: "Seven analysis patterns, one SQL Server warehouse.",
    category: "data-analytics",
    categoryLabel: "SQL Analytics",
    matchScore: 84,
    description:
      "An end-to-end SQL analytics project covering time-based analysis, cumulative analysis, performance analysis, part-to-whole analysis, data segmentation, and dedicated customer and product reporting views, built on SQL Server.",
    businessProblem:
      "Raw transactional sales data needed to be transformed into reusable, queryable business reports covering customer behavior and product performance across six business use cases.",
    dataset: "Retail transactional dataset structured for SQL Server-based data warehousing.",
    techStack: ["SQL Server", "SSMS", "Git"],
    sqlConcepts: ["CTEs", "Window Functions", "Aggregate Functions", "CASE Expressions", "Joins", "Views", "Date & Time Functions", "KPI Calculation"],
    keyInsights: [
      "Built reusable customer and product reporting views instead of one-off queries.",
      "Authored 10+ optimized queries spanning six distinct business use cases.",
      "Applied ranking and window functions to surface top-performing products and sales trends.",
    ],
    challenges: [
      "Structuring views that stay accurate and reusable as new data segments are added.",
      "Balancing query performance with the complexity needed for cumulative and part-to-whole analysis.",
    ],
    learnings: [
      "How to design SQL views as a reporting layer, not just ad-hoc analysis.",
      "The practical difference between segmentation, cumulative, and part-to-whole analysis patterns.",
    ],
    highlights: [
      { label: "SQL Queries Authored", value: "10+" },
      { label: "Business Use Cases", value: "6" },
      { label: "Reporting Views", value: "2" },
    ],
    images: [],
    githubUrl: "https://github.com/anubhavvvvvvvv/SQL-DATA-ANALYSIS-PROJECT",
    featured: false,
    year: "2025",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);
