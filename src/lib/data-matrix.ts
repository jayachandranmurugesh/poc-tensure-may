export const TENSURE_MATRIX = {
    developer: {
      tag: "Internal Developer Platforms",
      headline: "Turn fragmented cloud environments into platforms.",
      highlightWord: "platforms",
      subheadline: "Remove ticket queues and provisioning bottlenecks. Empower your teams with secure self-service portals, API/CLIs, and automated GitOps golden paths.",
      primaryCta: "Design Platform Blueprint",
      terminalTab: "tensure_idp_spec.yaml",
      metrics: {
        speed: "8-Week MVP",
        security: "GitOps Driven",
        scale: "Zero Ticket Queues"
      }
    },
    enterprise: {
      tag: "FinServ-Ready Infrastructure",
      headline: "Shift from firefighting to proactive product delivery.",
      highlightWord: "delivery",
      subheadline: "Standardize cloud infrastructure workflows with embedded security policy-as-code guardrails built explicitly to pass rigorous regulatory audits.",
      primaryCta: "Review Governance Spec",
      terminalTab: "compliance_guardrails.json",
      metrics: {
        speed: "SOX / PCI Aligned",
        security: "Top 3% GC Premier",
        scale: "FinTech Fluency"
      }
    },
    scale: {
      tag: "Cloud Modernization & App Dev",
      headline: "Eliminate the systemic friction slowing engineers down.",
      highlightWord: "friction",
      subheadline: "We embed an expert squad to co-create alongside your team, modernizing application architectures and optimizing multi-cloud workloads under stress.",
      primaryCta: "Onboard Pilot Team",
      terminalTab: "workload_migration.sh",
      metrics: {
        speed: "Accelerate Velocity",
        security: "AWS Select Tier",
        scale: "Sustained Scaling"
      }
    }
  };
  
  export const SCRIPT_PAYLOADS: Record<string, string> = {
    typescript: `// Tensure Platform Engineering IDP Definition\nimport { CloudPlatform } from '@tensure/core';\n\nconst platform = new CloudPlatform({ environment: 'production' });\n\nawait platform.provisionGoldenPath({\n  team: 'pilot-finserv-squad',\n  template: 'secure-gke-microservice',\n  guardrails: ['PCI-DSS', 'SOX-Compliance'],\n  autoApprove: true\n});`,
    python: `# Tensure IaC Workload Optimization Automation\nfrom tensure_core import PlatformEngine\n\nengine = PlatformEngine(partner="google-cloud-premier")\n\nengine.deploy_secure_workload(\n    cluster_type="gke-autopilot",\n    policy_as_code="fedramp-moderate",\n    metrics_tracking=True\n)`,
    yaml: `# Tensure Declarative Golden Path Pipeline Spec\nversion: "tensure.io/v1alpha1"\nkind: "InternalDeveloperPlatform"\nmetadata:\n  name: "finserv-delivery-pipeline"\nspec:\n  provider: "google-cloud-premier"\n  orchestration:\n    tool: "kubernetes-gke"\n    policy: "deny-non-compliant-ingress"`
  };