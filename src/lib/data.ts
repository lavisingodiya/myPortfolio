export const personalInfo = {
  name: "Lavi Singodiya",
  role: "Senior Cloud Engineer",
  tagline: "Designing and operating enterprise-grade AWS and Azure infrastructure. Specializing in Kubernetes, GitOps, and cloud security.",
  email: "lavisaini322@gmail.com",
  phone: "+91 8769045359",
  github: "https://github.com/lavisingodiya",
  linkedin: "https://linkedin.com/in/lavisingodiya",
  twitter: "https://twitter.com/lavisingodiya",
  location: "India",
  available: true,
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Uptime SLA Maintained", value: "99.9%" },
  { label: "Deployment Time Reduced", value: "~60%" },
  { label: "Weekly Incidents Managed", value: "100+" },
];

export const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: "cloud",
    skills: [
      { name: "AWS", level: 95 },
      { name: "Microsoft Azure", level: 90 },
      { name: "Oracle Cloud", level: 80 },
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: "git-branch",
    skills: [
      { name: "Kubernetes (EKS)", level: 92 },
      { name: "Docker", level: 90 },
      { name: "Helm", level: 85 },
      { name: "Argo CD", level: 88 },
      { name: "ECS", level: 80 },
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: "code",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Terraform", level: 92 },
      { name: "Bash", level: 85 },
      { name: "PowerShell", level: 80 },
    ],
  },
];

export const otherSkills = [
  "Python", "C++", "MySQL", "RDS", "SQL Server", "Datadog", "New Relic", "ELK Stack", "AWS CloudWatch", "Opsgenie",
  "IAM", "RBAC", "WAF (ModSecurity)", "VPN (IPsec)", "TLS/SSL", "Azure AD", "CIS Hardening", "ISO 27001",
  "Power Apps", "Power Automate"
];

export const projects = [
  {
    title: "Banking Application DC-DR Architecture (AWS)",
    description: "Designed production-grade High availability and Disaster Recovery (HA/DR) architecture enabling near-zero downtime failover for banking workloads.",
    tech: ["AWS", "VPC", "ALB", "Auto Scaling", "Route53", "Systems Manager"],
    impact: ["Near-zero downtime failover", "99.9% availability SLA", "Cross-region VPC peering"],
    github: "https://github.com/lavisingodiya",
    live: "#",
    featured: true,
  },
  {
    title: "CloudOps Enterprise Instructure Monitoring",
    description: "Monitored and optimized large-scale AWS infrastructure. Managed 100+ weekly incidents via Opsgenie and implemented comprehensive observability stack.",
    tech: ["Datadog", "ELK", "CloudWatch", "New Relic", "Opsgenie"],
    impact: ["99.9% uptime SLA", "100+ weekly incidents managed", "Improved incident response"],
    github: "https://github.com/lavisingodiya",
    live: "#",
    featured: true,
  },
  {
    title: "DevOps Automation & Modernization",
    description: "Integrated GitOps workflows via Argo CD and automated infrastructure provisioning using Terraform. Applied CIS benchmark hardening across workloads.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Argo CD", "Terraform", "Trivy", "SonarQube"],
    impact: ["~60% deployment time reduction", "Infra setup: hours → <15 mins", "Cloud spend reduced ~20%"],
    github: "https://github.com/lavisingodiya",
    live: "#",
    featured: false,
  },
  {
    title: "Multi-Tenant SaaS Infrastructure (Azure)",
    description: "Architected secure multi-tenant cloud environments supporting multiple client versions. Strengthened network security via WAF, IPsec VPN, and RBAC.",
    tech: ["Azure VMs", "VNets", "Load Balancers", "Azure Bastion", "Azure AD"],
    impact: ["99.9% uptime", "Unauthorized access risk reduced ~90%", "GDPR & ISO 27001 aligned"],
    github: "https://github.com/lavisingodiya",
    live: "#",
    featured: false,
  },
];

export const experience = [
  {
    company: "Raptbot Technologies Pvt. Ltd.",
    role: "Senior Cloud Engineer",
    period: "Sep 2025 – Present",
    location: "India",
    highlights: [
      "Monitor and optimize large-scale AWS infrastructure sustaining 99.9% uptime SLA",
      "Manage 100+ weekly incidents via Opsgenie with defined acknowledgment and resolution SLAs",
      "Implement observability stack (Datadog, ELK, CloudWatch, New Relic) for anomaly detection",
      "Reduce deployment time by ~60% through Jenkins CI/CD pipeline automation",
      "Automate infrastructure provisioning using Terraform, cutting setup time from hours to under 15 minutes",
      "Apply CIS benchmark hardening across Linux and Kubernetes workloads; reduce cloud spend by ~20%"
    ],
  },
  {
    company: "BM Infotrade Pvt. Ltd.",
    role: "Cloud Engineer",
    period: "Sep 2024 – Sep 2025",
    location: "India",
    highlights: [
      "Designed HA/DR architecture enabling near-zero downtime failover for banking workloads on AWS",
      "Architected secure multi-tenant SaaS environments on Azure supporting multiple client versions with 99.9% uptime",
      "Implemented Azure Bastion Jump Server reducing unauthorized access risk by ~90%",
      "Developed 5+ enterprise Power Platform solutions serving 500+ users, saving 10+ hrs/week per workflow",
      "Led Azure tenant-to-tenant migrations of VMs, databases, storage with less than 2 hours total downtime"
    ],
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", year: "" },
  { name: "Cisco Networking Academy – Introduction to Cyber Security", issuer: "Cisco", year: "" },
  { name: "NPTEL – Cloud Computing – Silver Medal", issuer: "NPTEL", year: "" },
  { name: "Microsoft Learn – System Administration Essentials", issuer: "Microsoft", year: "" },
];

export const education = [
  {
    degree: "Bachelor of Computer Application – Artificial Intelligence & Data Science",
    institution: "Poornima University, Jaipur",
    gpa: "8.23"
  }
];
