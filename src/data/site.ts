export interface Highlight {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Short category label, e.g. "Inference" */
  category: string;
  icon: string;
  /** Short English tagline */
  tagline: string;
  desc: string;
  tags: string[];
  links: ProjectLink[];
  highlights?: Highlight[];
}

export interface Board {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  items: Project[];
}

export const site = {
  name: 'CMCC-TAO',
  eyebrow: 'China Mobile · Embodied Intelligence',
  titleHighlight: ' Embodied AI Team',
  tagline: 'From embodied base models to real-world robot deployment.',
  heroDesc:
    'We are the Embodied Model Team (TAO Team) at the China Mobile Embodied Intelligence Industry Innovation Center. We build open-source infrastructure, base models, and benchmarks that connect VLA/WAM models with physical robots.',
  org: 'China Mobile Embodied Intelligence Industry Innovation Center',
  team: 'Embodied Model Team (TAO Team)',
  email: 'tao-team@cmhi.chinamobile.com',
  github: 'https://github.com/CMCC-TAO',
  site: 'https://cmcc-tao.github.io',
};

/**
 * "Main Work" is organized into three boards. Each board renders a grid of
 * project cards. To add a card, append to the `items` array of a board —
 * no other code change is needed.
 */
export const boards: Board[] = [
  {
    id: 'infrastructure',
    eyebrow: '01 · Infrastructure',
    title: 'Infrastructure',
    desc: 'Plug-and-play middlewares and toolchains that connect embodied models with physical robots — decoupling low-rate inference from high-frequency control.',
    items: [
      {
        slug: 'open-rail',
        name: 'Open-RAIL',
        category: 'Inference',
        icon: '⚡',
        tagline: 'Real-Time Asynchronous Inference Linker',
        desc: 'A plug-and-play open-source middleware that bridges VLA/WAM models and heterogeneous robots via two-stage trajectory smoothing and closed-loop evolution. It decouples low-rate inference from high-frequency control for jitter-free, faster-than-teleop execution.',
        tags: ['Asynchronous Pipeline', 'Trajectory Smoothing', '20+ Models', '4 Robots'],
        links: [
          { label: 'GitHub', href: 'https://github.com/CMCC-TAO/open-rail' },
          { label: 'Homepage', href: 'https://cmcc-tao.github.io/open-rail/' },
        ],
        highlights: [
          { value: '2.09×', label: 'Max execution speedup' },
          { value: '0.95', label: 'Peak task success rate' },
        ],
      },
      {
        slug: 'open-community',
        name: 'Open Community',
        category: 'Toolchain',
        icon: '🤝',
        tagline: 'Templates & Contribution Portal',
        desc: 'Model templates, robot templates, evaluation templates, and end-edge-cloud deployment examples — everything you need to plug your model or robot into the TAO ecosystem.',
        tags: ['Templates', 'Deployment', 'Contribute'],
        links: [{ label: 'GitHub', href: 'https://github.com/CMCC-TAO' }],
      },
    ],
  },
  {
    id: 'model',
    eyebrow: '02 · Model',
    title: 'Model',
    desc: 'A family of embodied models spanning bimanual manipulation, compliant force interaction, vision-tactile sensing, and the shared VLA base model.',
    items: [
      {
        slug: 'dualarm',
        name: 'DualArm Model',
        category: 'Dual-Arm',
        icon: '🤖',
        tagline: 'Bimanual Manipulation Policy',
        desc: 'A dual-arm coordination policy for complex humanoid manipulation, fusing both arms with whole-body balance for long-horizon, contact-rich tasks.',
        tags: ['Bimanual', 'Humanoid', 'Coordination'],
        links: [{ label: 'GitHub', href: 'https://github.com/CMCC-TAO' }],
      },
      {
        slug: 'force',
        name: 'Force-Control Model',
        category: 'Force Control',
        icon: '💪',
        tagline: 'Compliant Force Interaction',
        desc: 'A compliant force-interaction model that predicts and regulates contact forces for delicate, physically-safe manipulation under uncertainty.',
        tags: ['Compliance', 'Contact-Rich', 'Safety'],
        links: [{ label: 'GitHub', href: 'https://github.com/CMCC-TAO' }],
      },
      {
        slug: 'visiotactile',
        name: 'Vision-Tactile Model',
        category: 'Vision-Tactile',
        icon: '👆',
        tagline: 'Touch-Aware Perception & Action',
        desc: 'A vision-tactile model that fuses camera and tactile sensing for fine-grained material, slip, and grasp-state awareness beyond what vision alone can see.',
        tags: ['Tactile', 'Multimodal', 'Grasp'],
        links: [{ label: 'GitHub', href: 'https://github.com/CMCC-TAO' }],
      },
      {
        slug: 'tao',
        name: 'TAO',
        category: 'Base Model',
        icon: '🧠',
        tagline: 'Embodied VLA Foundation Model',
        desc: "China Mobile's open embodied Vision-Language-Action base model for humanoid manipulation. Trained on large-scale real-robot and teleop data, TAO provides a strong, adaptable policy backbone for diverse manipulation tasks.",
        tags: ['VLA', 'Humanoid', 'Open Weights', 'G1 / AgiBot G1'],
        links: [{ label: 'GitHub', href: 'https://github.com/CMCC-TAO/open-rail' }],
        highlights: [
          { value: '20+', label: 'Models powered via Open-RAIL' },
          { value: 'VLA', label: 'Native action output' },
        ],
      },
    ],
  },
  {
    id: 'benchmark',
    eyebrow: '03 · Benchmark',
    title: 'Benchmark',
    desc: 'Standardized benchmarks and scoring suites for reproducible, comparable embodied-manipulation evaluation across models and robots.',
    items: [
      {
        slug: 'tao-bench',
        name: 'TAO-Bench',
        category: 'Benchmark',
        icon: '📊',
        tagline: 'Embodied Manipulation Benchmark',
        desc: 'A standardized evaluation benchmark and scoring suite for embodied manipulation. It defines task protocols, metrics, and LeRobot-format logging so results are reproducible and comparable across models and robots.',
        tags: ['Scoring', 'Metrics', 'Reproducible', 'LeRobot'],
        links: [{ label: 'GitHub', href: 'https://github.com/CMCC-TAO' }],
        highlights: [
          { value: 'JSON/CSV', label: 'Exportable reports' },
          { value: 'E2E', label: 'Evaluate & record' },
        ],
      },
    ],
  },
];

export const team = {
  intro:
    'The TAO Team brings together researchers and engineers across model algorithm, robot control, and system deployment. We are committed to open-sourcing the proven model-to-robot engineering pipeline so the community can focus on innovation instead of rebuilding deployment plumbing.',
  groups: [
    { role: 'Project Leader', members: ['Yongsheng Zhao'] },
    {
      role: 'Core Developers',
      members: [
        'Lei Zhao',
        'Gongxin Yao',
        'Jiayin Deng',
        'Xuanzhang Wen',
        'Han Gao',
        'Zean Liu',
        'Wen Li',
        'Taotao Tian',
      ],
    },
    { role: 'Test Engineers', members: ['Yingying Yan'] },
    { role: 'Product Managers', members: ['Jiahui Zheng', 'Chaohua Lin', 'Yafei Peng'] },
  ],
  contactNote: 'Partnership inquiries, technical proposals, and community contributions are welcome.',
}
