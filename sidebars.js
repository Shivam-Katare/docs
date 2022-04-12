/*
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // sidebar: [{ type: 'autogenerated', dirName: '.' }],
  // But you can create a sidebar manually
  docs: [
    {
      type: 'category',
      label: '👋\xa0\xa0\xa0WELCOME',
      collapsed: true,
      items: [
        'intro/getting-started/index',
        'intro/overview/index',
        'intro/what-is-datree/index',
      ],
    },
    {
      type: 'category',
      label: '🛠️ SETUP',
      collapsed: true,
      items: [
        'setup/centralized-policy/index',
        'setup/schema-validation/index',
        'setup/policy-as-code/index',
        'setup/cli-output/index',
        'setup/cli-arguments/index',
        'setup/history/index',
        'setup/account-token/index',
      ],
    },
    {
      type: 'category',
      label: '🚔  BUILT-IN RULES',
      link: {
        type: 'doc',
        id: 'built-in-rules/index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Container',
          link: {
            type: 'doc',
            id: 'built-in-rules/containers/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/containers/ensure-image-pinned-version/index',
            'built-in-rules/containers/ensure-memory-request/index',
            'built-in-rules/containers/ensure-cpu-request/index',
            'built-in-rules/containers/ensure-memory-limit/index',
            'built-in-rules/containers/ensure-cpu-limit/index',
            'built-in-rules/containers/ensure-liveness-probe/index',
            'built-in-rules/containers/ensure-readiness-probe/index',
            'built-in-rules/containers/prevent-privileged-containers/index',
            'built-in-rules/containers/ensure-digest-tag/index',
            'built-in-rules/containers/prevent-using-host-pid/index',
            'built-in-rules/containers/prevent-using-host-ipc/index',
            'built-in-rules/containers/prevent-uid-conflicts/index',
            'built-in-rules/containers/prevent-mounting-docker-socket/index',
          ],
        },
        {
          type: 'category',
          label: 'Workload',
          link: {
            type: 'doc',
            id: 'built-in-rules/Workload/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/Workload/ensure-labels-value-valid/index',
            'built-in-rules/Workload/ensure-valid-restart-policy/index',
            'built-in-rules/Workload/prevent-deafult-namespce/index',
            'built-in-rules/Workload/ensure-minimum-two-replicas/index',
            'built-in-rules/Workload/ensure-owner-label/index',
            'built-in-rules/Workload/ensure-env-label/index',
          ],
        },
        {
          type: 'category',
          label: 'CronJob',
          link: {
            type: 'doc',
            id: 'built-in-rules/cronjob/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/cronjob/ensure-cronjob-scheduler-valid/index',
            'built-in-rules/cronjob/ensure-cronjob-deadline/index',
            'built-in-rules/cronjob/prevent-cronjob-concurrency/index',
          ],
        },
        {
          type: 'category',
          label: 'Networking',
          link: {
            type: 'doc',
            id: 'built-in-rules/networking/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/networking/prevent-ingress-forwarding-traffic-to-single-container/index',
            'built-in-rules/networking/prevent-node-port/index',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          link: {
            type: 'doc',
            id: 'built-in-rules/security/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/security/prevent-endpointslice-validation-from-enabling-host-network-hijack-cve-2021-25737/index',
            'built-in-rules/security/prevent-container-security-vulnerability-cve-2021-25741/index',
            'built-in-rules/security/prevent-ingress-security-vulnerability-cve-2021-25742/index',
            'built-in-rules/security/prevent-configmap-security-vulnerability-cve-2021-25742/index',
          ],
        },
        {
          type: 'category',
          label: 'Deprecation',
          link: {
            type: 'doc',
            id: 'built-in-rules/Deprecation/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/Deprecation/prevent-deprecated-k8s-api-116/index',
            'built-in-rules/Deprecation/prevent-deprecated-k8s-api-117/index',
          ],
        },
        {
          type: 'category',
          label: 'Argo',
          link: {
            type: 'doc',
            id: 'built-in-rules/argo/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/argo/ensure-workflow-dag-fail-fast-on-node-failure/index',
            'built-in-rules/argo/prevent-workflow-pods-from-using-the-default-service-account/index',
            'built-in-rules/argo/ensure-configmap-is-recognized-by-argocd/index',
            'built-in-rules/argo/ensure-rollout-pause-step-has-a-configured-duration/index',
            'built-in-rules/argo/ensure-application-and-appproject-are-part-of-the-argocd-namespace/index',
            'built-in-rules/argo/prevent-workflow-from-having-an-empty-retry-strategy/index',
            'built-in-rules/argo/ensure-rollout-has-revision-history-set/index',
            'built-in-rules/argo/ensure-rollout-allows-broadcasting-ip-table-changes/index',
            'built-in-rules/argo/ensure-rollout-that-is-marked-as-degraded-scales-down-replicaset/index',
            'built-in-rules/argo/ensure-workflow-retry-policy-catches-relevant-errors-only/index',
          ],
        },
        {
          type: 'category',
          label: 'Other',
          link: {
            type: 'doc',
            id: 'built-in-rules/other/index',
          },
          collapsed: true,
          items: [
            'built-in-rules/other/ensure-hpa-minimum-replicas/index',
            'built-in-rules/other/ensure-hpa-maximum-replicas/index',
            'built-in-rules/other/prevent-naked-pods/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🤖  CUSTOM RULES',
      collapsed: true,
      items: [
        'custom-rules/custom-rules-overview/index',
        'custom-rules/basic-examples/index',
        'custom-rules/multiple-property-paths/index',
        'custom-rules/resource-quotas/index',
      ],
    },
    {
      type: 'category',
      label: '🔌  OFFICIAL INTEGRATIONS',
      link: {
        type: 'doc',
        id: 'official-integrations/index',
      },
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Kubectl plugin',
          href: 'https://github.com/datreeio/kubectl-datree',
        },
        {
          type: 'link',
          label: 'Github action',
          href: 'https://github.com/datreeio/action-datree',
        },
        {
          type: 'link',
          label: 'Helm plugin',
          href: 'https://github.com/datreeio/helm-datree',
        },
        'official-integrations/kustomize-support/index',
        'official-integrations/git-hooks/index',
        'official-integrations/pre-commit-hook/index',
      ],
    },
    {
      type: 'category',
      label: '🙌    COMMUNITY INTEGRATIONS',
      link: {
        type: 'doc',
        id: 'community-integrations/index',
      },
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'VSCode plugin',
          href: 'https://github.com/SuyashSonawane/vscode-datree',
        },
      ],
    },
    {
      type: 'category',
      label: '⏩   CI/CD EXAMPLES',
      link: {
        type: 'doc',
        id: 'cicd-examples/index',
      },
      collapsed: true,
      items: [
        'cicd-examples/circle-ci/index',
        'cicd-examples/travis-ci/index',
        'cicd-examples/gitlab-cicd/index',
        'cicd-examples/jenkins-pipeline/index',
      ],
    },
    {
      type: 'doc',
      label: '💬    FAQ',
      id: 'faqs/index',
    },
    {
      type: 'doc',
      label: '🗃️    TROUBLESHOOTING',
      id: 'troubleshooting/index',
    },
    {
      type: 'link',
      label: '📚    RESOURCES',
      href: 'https://github.com/datreeio/awesome-datree/blob/main/README.md',
    },
  ],
};

module.exports = sidebars;
