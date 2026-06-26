export const TAGS = {
    AWS: {
        name: "AWS",
        class: "bg-[#232F3E] text-[#FF9900]",
        icon: "simple-icons:amazonaws",
    },
    ISTIO: {
        name: "Istio",
        class: "bg-[#466BB0] text-white",
        icon: "simple-icons:istio",
    },
    KUBERNETES: {
        name: "Kubernetes",
        class: "bg-[#326CE5] text-white",
        icon: "simple-icons:kubernetes",
    },
    PYTHON: {
        name: "Python",
        class: "bg-[#3776AB] text-[#FFD43B]",
        icon: "simple-icons:python",
    },
    GRAFANA: {
        name: "Grafana",
        class: "bg-[#F46800] text-white",
        icon: "simple-icons:grafana",
    },
    UPTIME_KUMA: {
        name: "Uptime Kuma",
        class: "bg-[#5CDD8B] text-[#202B38]",
        icon: "simple-icons:uptimekuma",
    },
    GITOPS: {
        name: "GitOps",
        class: "bg-[#EF7B4D] text-white",
        icon: "simple-icons:argo",
    },
    OBSERVABILITY: {
        name: "Observability",
        class: "bg-[#F46800] text-white",
        icon: "simple-icons:grafana",
    },
    TERRAFORM: {
        name: "Terraform",
        class: "bg-[#7B42BC] text-white",
        icon: "simple-icons:terraform",
    },
    NETWORK: {
        name: "Network",
        class: "bg-[#0EA5E9] text-white",
        icon: "lucide:network",
    },
    
    KUBECOST: {
        name: "Kubecost",
        class: "bg-[#2E96FF] text-white",
        icon: "lucide:dollar-sign",
    },
};

export const PROJECTS = [
    {   
        company: "Gurufin",
        title: "블록체인 & 스테이블 코인 서비스에 대한 인프라 구축 및 운영",
        description:
            "하이브리드 환경에서 운영하며, EKS 기반 인프라를 구축·운영 - GitOps 고도화, Alloy 기반 Observablity 통합, 그리고 FinOps 비용 절감까지",
        date: "2025.05.06 ~ 현재",
        job: "DevOps Engineer",
        link: "https://malangnuo.com/posts/join-the-gurufin/",
        tags: [TAGS.AWS, TAGS.KUBERNETES, TAGS.OBSERVABILITY],
    },
    {   
        company: "Claion",
        title: "AWS 시스템 운영",
        description:
            "AWS 마이그레이션 후 운영하며, 모니터링·비용 최적화·자동화를 통해 안정적이고 효율적인 클라우드 운영 체계를 유지",
        date: "2025.10.20 ~ 2026.03.20",
        job: "Platform Engineer",
        link: "https://malangnuo.com/posts/aws-system-management/",
        tags: [TAGS.AWS, TAGS.PYTHON, TAGS.GRAFANA, TAGS.UPTIME_KUMA],
    },
    {
        company: "Claion",
        title: "SaaS 플랫폼 운영",
        description:
            "Kubernetes 기반 플랫폼을 운영하며, 모니터링·CI/CD·보안 자동화를 통해 장애 대응 속도와 운영 안정성을 지속적으로 개선",
        date: "2024.09.01 ~ 2026.03.20",
        job: "Platform Engineer",
        link: "https://malangnuo.com/posts/saas-platform-management/",
        tags: [TAGS.KUBERNETES, TAGS.ISTIO, TAGS.GITOPS, TAGS.OBSERVABILITY],
    },
    {
        company: "Claion",
        title: "AWS 클라우드 마이그레이션",
        description:
            "S 기업의 온프레미스 환경을 AWS로 마이그레이션하며, DMS·MGN 기반 전환으로 서비스 중단을 최소화하고 안정적인 Cutover를 완료",
        date: "2025.06.16 ~ 2025.10.19",
        job: "Solutions Architect",
        link: "https://malangnuo.com/posts/on-prem-to-aws-cloud-migration/",
        tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.NETWORK, TAGS.PYTHON],
    },
    {
        company: "Claion",
        title: "AWS 기반 신규 서비스 구축",
        description:
            "S사의 AWS 기반 신규 보안 서비스를 설계·구축하며, 대규모 UDP/TCP 트래픽 환경에서 데이터 유실 0을 달성하고 안정적인 자동 확장 아키텍처를 구현",
        date: "2024.11.12 ~ 2025.03.12",
        job: "Solutions Architect",
        link: "https://malangnuo.com/posts/aws-new-service-architecture-and-infrastructure/",
        tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.NETWORK],
    },
    {
        company: "CJ Cloud Wave",
        title: "중동 시장 진출을 위한 AWS 기반 인프라 구축",
        description:
            "CJ Cloud Wave 부트캠프에서 진행한 프로젝트, 실시간 데이터 수집 파이프라인과 운영에 최적화된 안정적인 인프라 구축을 중심으로 올리브영의 중동 시장 진출 확대를 위한 인프라 구축 프로젝트",
        date: "2024.02.07 ~ 2024.02.29",
        job: "Solutions Architect",
        link: "https://malangnuo.com/posts/cj-cloudwave-project/",
        tags: [TAGS.AWS, TAGS.KUBERNETES, TAGS.GITOPS, TAGS.KUBECOST],
    },
];


export const companyPeriods: Record<string, string> = {
    "Gurufin": "2026.05.06 - 현재",
    "Claion": "2024.05.07 - 2026.03.23",
    "CJ Cloud Wave": "2024.02.07 - 2024.02.29"
};