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
      type: "category",
      label: "👋\xa0\xa0Welcome",
      collapsed: true,
      items: [
        "welcome/getting-started/index",
        "welcome/what-is-datree/index",
        "welcome/how-datree-works/index",
      ],
    },
    {
      type: "category",
      label: "🛠️\xa0\xa0Setup",
      collapsed: true,
      items: [
        "setup/centralized-policy/index",
        "setup/schema-validation/index",
        "setup/policy-as-code/index",
        "setup/cli-output/index",
        "setup/cli-arguments/index",
        "setup/history/index",
        "setup/account-token/index",
        "setup/policy-customization/index",
        "setup/offline-mode/index",
      ],
    },
    {
      type: "category",
      label: "🚔\xa0\xa0Built-in rules",
      collapsible: false,
      collapsed: false,
      className: "built-in-rules-navbar-items",
      link: {
        type: "doc",
        id: "built-in-rules/index",
      },
      items: [
        "built-in-rules/Deprecation/index",
        "built-in-rules/Deprecation/prevent-deprecated-k8s-api-116/index",
        "built-in-rules/Deprecation/prevent-deprecated-k8s-api-117/index",
        "built-in-rules/NSA/ensure-read-only-filesystem/index",
        "built-in-rules/NSA/prevent-accessing-host-files-by-using-high-gids/index",
        "built-in-rules/NSA/prevent-accessing-underlying-host/index",
        "built-in-rules/NSA/prevent-allowing-command-execution/index",
        "built-in-rules/NSA/prevent-escalating-privileges/index",
        "built-in-rules/NSA/prevent-insecure-capabilities/index",
        "built-in-rules/NSA/prevent-insecurely-exposing-workload/index",
        "built-in-rules/NSA/prevent-running-with-root-privileges/index",
        "built-in-rules/NSA/prevent-service-account-token-auto-mount/index",
        "built-in-rules/Workload/ensure-env-label/index",
        "built-in-rules/Workload/ensure-labels-value-valid/index",
        "built-in-rules/Workload/ensure-minimum-two-replicas/index",
        "built-in-rules/Workload/ensure-owner-label/index",
        "built-in-rules/Workload/ensure-valid-restart-policy/index",
        "built-in-rules/Workload/index",
        "built-in-rules/Workload/prevent-deafult-namespce/index",
        "built-in-rules/argo/ensure-application-and-appproject-are-part-of-the-argocd-namespace/index",
        "built-in-rules/argo/ensure-configmap-is-recognized-by-argocd/index",
        "built-in-rules/argo/ensure-rollout-allows-broadcasting-ip-table-changes/index",
        "built-in-rules/argo/ensure-rollout-has-revision-history-set/index",
        "built-in-rules/argo/ensure-rollout-pause-step-has-a-configured-duration/index",
        "built-in-rules/argo/ensure-rollout-that-is-marked-as-degraded-scales-down-replicaset/index",
        "built-in-rules/argo/ensure-workflow-dag-fail-fast-on-node-failure/index",
        "built-in-rules/argo/ensure-workflow-retry-policy-catches-relevant-errors-only/index",
        "built-in-rules/argo/index",
        "built-in-rules/argo/prevent-workflow-from-having-an-empty-retry-strategy/index",
        "built-in-rules/argo/prevent-workflow-pods-from-using-the-default-service-account/index",
        "built-in-rules/containers/ensure-cpu-limit/index",
        "built-in-rules/containers/ensure-cpu-request/index",
        "built-in-rules/containers/ensure-digest-tag/index",
        "built-in-rules/containers/ensure-image-pinned-version/index",
        "built-in-rules/containers/ensure-liveness-probe/index",
        "built-in-rules/containers/ensure-memory-limit/index",
        "built-in-rules/containers/ensure-memory-request/index",
        "built-in-rules/containers/ensure-readiness-probe/index",
        "built-in-rules/containers/index",
        "built-in-rules/containers/prevent-mounting-docker-socket/index",
        "built-in-rules/containers/prevent-privileged-containers/index",
        "built-in-rules/containers/prevent-uid-conflicts/index",
        "built-in-rules/containers/prevent-using-host-ipc/index",
        "built-in-rules/containers/prevent-using-host-network/index",
        "built-in-rules/containers/prevent-using-host-pid/index",
        "built-in-rules/cronjob/ensure-cronjob-deadline/index",
        "built-in-rules/cronjob/ensure-cronjob-scheduler-valid/index",
        "built-in-rules/cronjob/index",
        "built-in-rules/cronjob/prevent-cronjob-concurrency/index",
        "built-in-rules/index",
        "built-in-rules/networking/index",
        "built-in-rules/networking/prevent-ingress-forwarding-traffic-to-single-container/index",
        "built-in-rules/networking/prevent-node-port/index",
        "built-in-rules/other/ensure-resource-name/index",
        "built-in-rules/other/ensure-hpa-maximum-replicas/index",
        "built-in-rules/other/ensure-hpa-minimum-replicas/index",
        "built-in-rules/other/index",
        "built-in-rules/other/prevent-naked-pods/index",
        "built-in-rules/security/index",
        "built-in-rules/security/prevent-configmap-security-vulnerability-cve-2021-25742/index",
        "built-in-rules/security/prevent-container-security-vulnerability-cve-2021-25741/index",
        "built-in-rules/security/prevent-endpointslice-validation-from-enabling-host-network-hijack-cve-2021-25737/index",
        "built-in-rules/security/prevent-ingress-security-vulnerability-cve-2021-25742/index",
      ],
    },
    {
      type: "category",
      label: "🤖\xa0\xa0Custom rules",
      collapsed: true,
      items: [
        "custom-rules/custom-rules-overview/index",
        "custom-rules/basic-examples/index",
        "custom-rules/multiple-property-paths/index",
        "custom-rules/resource-quotas/index",
      ],
    },
    {
      type: "category",
      label: "🔌\xa0\xa0Integrations",
      link: {
        type: "doc",
        id: "official-integrations/index",
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '💼\xa0\xa0Official',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "link",
              label: "Admission webhook",
              href: "https://github.com/datreeio/admission-webhook-datree",
            },
            {
              type: "link",
              label: "Github action",
              href: "https://github.com/datreeio/action-datree",
            },
            {
              type: "link",
              label: "Kubectl plugin",
              href: "https://github.com/datreeio/kubectl-datree",
            },
            {
              type: "link",
              label: "Drone plugin",
              href: "https://github.com/datreeio/drone-datree",
            },
            {
              type: "link",
              label: "Codefresh plugin",
              href: "https://github.com/datreeio/codefresh-datree",
            },
            {
              type: "link",
              label: "Helm plugin",
              href: "https://github.com/datreeio/helm-datree",
            },
            "official-integrations/kustomize-support/index",
            "official-integrations/git-hooks/index",
            "official-integrations/pre-commit-hook/index",
          ],
        },
        {
          type: 'category',
          label: '🙌\xa0\xa0Community',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "link",
              label: "VSCode plugin",
              href: "https://github.com/SuyashSonawane/vscode-datree",
            },
            {
              type: "link",
              label: "Tekton task",
              href: "https://github.com/avinashupadhya99/catalog/tree/add-datree-task/task/datree/0.1",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "⏩\xa0\xa0CI/CD examples",
      link: {
        type: "doc",
        id: "cicd-examples/index",
      },
      collapsed: true,
      items: [
        "cicd-examples/github-workflow/index",
        "cicd-examples/circle-ci/index",
        "cicd-examples/travis-ci/index",
        "cicd-examples/gitlab-cicd/index",
        "cicd-examples/jenkins-pipeline/index",
        "cicd-examples/drone-pipeline/index",
        "cicd-examples/azure-pipelines/index",
        "cicd-examples/codefresh/index",
      ],
    },
    {
      type: "doc",
      label: "🔐\xa0\xa0Data privacy",
      id: "data-privacy/index",
    },
    {
      type: "doc",
      label: "🗃️\xa0\xa0Troubleshooting",
      id: "troubleshooting/index",
    },
    {
      type: "link",
      label: "📚\xa0\xa0Resources",
      href: "https://github.com/datreeio/awesome-datree/blob/main/README.md",
    },
  ],
};

module.exports = sidebars;
