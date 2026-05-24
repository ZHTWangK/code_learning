const authConfig = {
  username: "admin",
  passwordHash: "1ff0e88239bb681df173b2b945619760c40c10660c526e024150c52557efabd0",
  sessionKey: "learningAssistantAuthed",
};

const weeks = [
  {
    id: "w1",
    phase: "Git 地图",
    title: "从产品视角理解 Git/GitHub",
    load: "4.5-5h",
    outcome: "建立学习仓库和 GitHub 个人入口，知道仓库、提交、分支、PR 分别解决什么问题。",
    next: "创建一个 learning-os 仓库，把这 12 周计划和每天笔记放进去。",
    videos: ["1 先导课", "2 什么是 Git/GitHub", "3 GitHub 网站基础", "4 发现工具寻找灵感", "5 历史起源", "6 个人主页", "7 第一个仓库"],
    tasks: [
      {
        id: "w1-t1",
        title: "看完 1-7 集，写一页 Git/GitHub 概念地图",
        detail: "用产品语言解释 repo、commit、branch、PR、issue、fork、clone。",
        time: "90m",
      },
      {
        id: "w1-t2",
        title: "创建学习仓库并写 README",
        detail: "README 包含学习目标、每周节奏、当前能力短板和最终项目方向。",
        time: "60m",
      },
      {
        id: "w1-t3",
        title: "装修 GitHub 个人主页",
        detail: "把你的产品、AI、研发管理学习目标放进去，形成长期展示入口。",
        time: "60m",
      },
      {
        id: "w1-t4",
        title: "用 AI 解释 5 个陌生概念",
        detail: "要求 AI 用“产品经理 + 研发管理”的场景解释，并把解释沉淀到笔记。",
        time: "45m",
      },
    ],
  },
  {
    id: "w2",
    phase: "协作基础",
    title: "分支、暂存区、合并与冲突",
    load: "5h",
    outcome: "知道 Git 四个分区，能用 Desktop 或 VS Code 完成分支开发和一次冲突解决。",
    next: "故意制造一次合并冲突，然后完整记录解决过程。",
    videos: ["8 Git 分支", "9 GitHub 如何工作", "10 仓库功能", "11 Desktop 安装", "12 Git 四个分区", "13 Desktop 进阶", "14 分支合并", "14.5 VS Code 基础", "15 解决合并冲突"],
    tasks: [
      {
        id: "w2-t1",
        title: "画出工作区、暂存区、本地仓库、远程仓库的关系",
        detail: "把 add、commit、push、pull、merge 放到正确位置。",
        time: "60m",
      },
      {
        id: "w2-t2",
        title: "用两个分支改同一个文件并合并",
        detail: "记录正常合并和冲突合并的区别。",
        time: "90m",
      },
      {
        id: "w2-t3",
        title: "在 VS Code 里完成一次提交",
        detail: "观察 Source Control 面板、diff 视图和提交历史。",
        time: "45m",
      },
      {
        id: "w2-t4",
        title: "整理“冲突时我该怎么问研发”的检查表",
        detail: "把技术动作翻译成协作问题：影响范围、谁改了什么、如何验证。",
        time: "45m",
      },
    ],
  },
  {
    id: "w3",
    phase: "开源流程",
    title: "Pull Request 与研发协作闭环",
    load: "5h",
    outcome: "能模拟 fork、branch、commit、PR、review、merge 的完整流程。",
    next: "用自己的两个仓库或两个分支模拟一次开源贡献。",
    videos: ["16 开源贡献基本流程", "17 IDEA 里面使用 Git", "18 IDEA 里面使用 Git 进阶"],
    tasks: [
      {
        id: "w3-t1",
        title: "用 Issue 描述一个小需求",
        detail: "按背景、目标、验收标准、风险、优先级写清楚。",
        time: "45m",
      },
      {
        id: "w3-t2",
        title: "从 Issue 创建分支并提交 PR",
        detail: "PR 描述要包含做了什么、怎么测、影响范围。",
        time: "90m",
      },
      {
        id: "w3-t3",
        title: "用 AI 辅助做一次 PR review",
        detail: "让 AI 从可读性、边界、测试、产品逻辑四个角度提出问题。",
        time: "60m",
      },
      {
        id: "w3-t4",
        title: "写一份产品经理看 PR 的清单",
        detail: "聚焦行为变化、用户路径、数据埋点、灰度和回滚。",
        time: "45m",
      },
    ],
  },
  {
    id: "w4",
    phase: "命令行",
    title: "Git 命令行补强",
    load: "5h",
    outcome: "不依赖图形界面也能完成日常 Git 操作，并知道遇到问题先看 status 和 diff。",
    next: "把 Desktop 做过的操作用命令行重做一遍。",
    videos: ["19 Git 命令行 1", "20 Git 命令行 2", "21 Git 命令行 3", "22 Git LFS 大文件系统"],
    tasks: [
      {
        id: "w4-t1",
        title: "练熟 12 个高频命令",
        detail: "status、add、commit、log、diff、branch、switch、merge、pull、push、remote、restore。",
        time: "90m",
      },
      {
        id: "w4-t2",
        title: "用命令行完成一次功能分支开发",
        detail: "从建分支、改文件、提交、推送到创建 PR。",
        time: "90m",
      },
      {
        id: "w4-t3",
        title: "整理自己的 Git 小抄",
        detail: "按“我现在想做什么”分类，而不是按命令字母顺序分类。",
        time: "45m",
      },
      {
        id: "w4-t4",
        title: "了解 Git LFS 适用边界",
        detail: "知道大文件、设计稿、模型文件为什么不适合直接塞进普通 Git 历史。",
        time: "45m",
      },
    ],
  },
  {
    id: "w5",
    phase: "AI 编程",
    title: "用 AI 降低写代码入门门槛",
    load: "5h",
    outcome: "能读懂一个简单 Web 页面结构，并会让 AI 解释、修改、补测试和排错。",
    next: "做一个只有一个页面的小工具，不追求复杂，追求完整。",
    videos: ["复习 12-15 集", "配合官方 HTML/CSS/JS 入门材料"],
    tasks: [
      {
        id: "w5-t1",
        title: "用 AI 讲解 HTML、CSS、JavaScript 的分工",
        detail: "要求它用“页面结构、样式、行为”三个层次解释。",
        time: "45m",
      },
      {
        id: "w5-t2",
        title: "修改一个静态页面",
        detail: "至少改文字、颜色、布局和一个交互按钮。",
        time: "90m",
      },
      {
        id: "w5-t3",
        title: "把报错贴给 AI，要求它先定位再给方案",
        detail: "训练自己不要只说“帮我修”，而是给环境、复现步骤和期望行为。",
        time: "45m",
      },
      {
        id: "w5-t4",
        title: "写一份 AI 编程沟通规范",
        detail: "包含上下文、约束、验收标准、不要做什么、输出格式。",
        time: "45m",
      },
    ],
  },
  {
    id: "w6",
    phase: "产品到代码",
    title: "从 PRD 到可运行原型",
    load: "5h",
    outcome: "能把一个小需求拆成页面、数据、状态、异常和验收标准，并用 AI 辅助实现。",
    next: "选一个工作中真实但低风险的小场景，做成可点击原型。",
    videos: ["回看 16-18 集协作流程", "补充：GitHub Issues 与 Projects"],
    tasks: [
      {
        id: "w6-t1",
        title: "写一个 1 页轻量 PRD",
        detail: "用户、问题、目标、核心流程、非目标、验收标准必须有。",
        time: "60m",
      },
      {
        id: "w6-t2",
        title: "让 AI 把 PRD 拆成开发任务",
        detail: "要求输出 Issue 列表、依赖关系、风险和优先级。",
        time: "45m",
      },
      {
        id: "w6-t3",
        title: "完成一个静态或半动态原型",
        detail: "例如需求澄清表、版本检查清单、会议纪要整理器。",
        time: "120m",
      },
      {
        id: "w6-t4",
        title: "用产品验收视角 review 代码变化",
        detail: "检查是否满足用户路径、边界文案、错误状态和数据保存。",
        time: "45m",
      },
    ],
  },
  {
    id: "w7",
    phase: "自动化",
    title: "GitHub Actions 与 CI/CD 基础",
    load: "5h",
    outcome: "知道 CI/CD 解决什么问题，能读懂一个 workflow，并跑一次自动检查。",
    next: "给自己的仓库加一个最小 GitHub Actions workflow。",
    videos: ["23 Actions 基础概念", "24 Action CI/CD 完整实践", "25 Action 更多例子", "26 多环境部署"],
    tasks: [
      {
        id: "w7-t1",
        title: "画出一次 push 触发 CI 的流程",
        detail: "包含事件、runner、依赖安装、检查、构建、结果反馈。",
        time: "45m",
      },
      {
        id: "w7-t2",
        title: "创建一个最小 workflow",
        detail: "可以只做拼写检查、Markdown 检查或简单脚本运行。",
        time: "90m",
      },
      {
        id: "w7-t3",
        title: "读懂一次失败日志",
        detail: "把失败原因、定位路径、修复动作写进复盘。",
        time: "60m",
      },
      {
        id: "w7-t4",
        title: "整理 CI 对产品管理的价值",
        detail: "从质量门禁、交付节奏、回滚风险和跨角色协作写 5 条。",
        time: "45m",
      },
    ],
  },
  {
    id: "w8",
    phase: "发布",
    title: "Pages、Packages、Docker 与发布认知",
    load: "5h",
    outcome: "能把一个小页面发布出来，并知道包、镜像、环境这些概念在交付链路中的位置。",
    next: "用 GitHub Pages 发布第 5-6 周做的小工具。",
    videos: ["27 Action 辅助使用 Docker", "28 GitHub Package", "29 GitHub Page", "30 GitHub 部署一个开源抖音", "31 GitHub 当技术博客", "32 个人博客框架"],
    tasks: [
      {
        id: "w8-t1",
        title: "发布一个 GitHub Pages 页面",
        detail: "让手机和电脑都能访问，记录发布地址。",
        time: "90m",
      },
      {
        id: "w8-t2",
        title: "理解环境变量和密钥",
        detail: "知道配置、Secret、Token 不该写进代码仓库。",
        time: "45m",
      },
      {
        id: "w8-t3",
        title: "用 AI 解释 Docker 和 Package",
        detail: "要求它用“交付物”和“运行环境”的角度讲。",
        time: "45m",
      },
      {
        id: "w8-t4",
        title: "写一份发布检查表",
        detail: "包含测试、权限、配置、回滚、通知、监控、数据影响。",
        time: "60m",
      },
    ],
  },
  {
    id: "w9",
    phase: "仓库治理",
    title: "研发管理者的仓库与安全意识",
    load: "4.5-5h",
    outcome: "能看懂仓库设置、权限、分支保护、安全提醒，并知道哪些问题要及时升级。",
    next: "给学习仓库配置 Issue 模板、PR 模板和分支保护规则。",
    videos: ["33 GitHub 仓库管理", "36 仓库高级安全功能"],
    tasks: [
      {
        id: "w9-t1",
        title: "整理仓库权限与角色",
        detail: "写清楚 owner、maintainer、contributor、reviewer 的差异。",
        time: "45m",
      },
      {
        id: "w9-t2",
        title: "配置 Issue 与 PR 模板",
        detail: "把需求输入和代码变更描述标准化。",
        time: "75m",
      },
      {
        id: "w9-t3",
        title: "了解分支保护和必需检查",
        detail: "知道为什么不能直接往主分支随意提交。",
        time: "45m",
      },
      {
        id: "w9-t4",
        title: "建立研发风险词典",
        detail: "记录密钥泄漏、依赖漏洞、权限过大、无回滚、无日志等风险。",
        time: "60m",
      },
    ],
  },
  {
    id: "w10",
    phase: "API 与自动化",
    title: "Webhook、REST API 与数据化协作",
    load: "5h",
    outcome: "知道 GitHub 也可以被程序调用，能理解 API、Token、Webhook、自动化通知的基本关系。",
    next: "用 API 或现成工具获取一次仓库 Issue/PR 信息。",
    videos: ["34 GitHub 的 Webhook 与 RestAPI", "35 GitHub 非主流客户端"],
    tasks: [
      {
        id: "w10-t1",
        title: "解释 API、Webhook、Token 的区别",
        detail: "要求自己能用非技术同事听得懂的话讲清楚。",
        time: "45m",
      },
      {
        id: "w10-t2",
        title: "设计一个研发协作自动化场景",
        detail: "例如 PR 合并后通知、Issue 超时提醒、版本发布日报。",
        time: "60m",
      },
      {
        id: "w10-t3",
        title: "用 AI 辅助写一个 API 调用示例",
        detail: "先让 AI 解释每行代码，再运行或伪运行。",
        time: "90m",
      },
      {
        id: "w10-t4",
        title: "补一份安全说明",
        detail: "说明 Token 权限最小化、过期、不要提交到仓库。",
        time: "45m",
      },
    ],
  },
  {
    id: "w11",
    phase: "闭环项目",
    title: "AI 辅助交付一个小产品",
    load: "5-6h",
    outcome: "完成一个真实小工具的需求、仓库、页面、核心功能、PR、发布准备。",
    next: "选择最小但真实的工作痛点，控制范围，做出可用版本。",
    videos: ["按需回看 23-32 集", "按需查 GitHub Actions/Pages 文档"],
    tasks: [
      {
        id: "w11-t1",
        title: "确定项目题目和目标用户",
        detail: "优先选你自己每周会用的 PM/研发管理场景。",
        time: "45m",
      },
      {
        id: "w11-t2",
        title: "创建项目仓库、Issue 和里程碑",
        detail: "把需求拆成 3-5 个可完成任务。",
        time: "60m",
      },
      {
        id: "w11-t3",
        title: "用 AI 辅助实现核心功能",
        detail: "每次让 AI 只改一个明确目标，并要求说明影响范围。",
        time: "150m",
      },
      {
        id: "w11-t4",
        title: "完成一次 PR 与自我 review",
        detail: "PR 描述包含截图、测试方式、已知限制。",
        time: "60m",
      },
    ],
  },
  {
    id: "w12",
    phase: "展示复盘",
    title: "发布、复盘与下一轮能力地图",
    load: "4.5-5h",
    outcome: "发布小产品，形成案例复盘，并确定下一阶段技术学习路线。",
    next: "把最终项目写成一篇可展示的项目复盘。",
    videos: ["回看薄弱部分", "查缺补漏"],
    tasks: [
      {
        id: "w12-t1",
        title: "发布可访问版本",
        detail: "可以是 GitHub Pages、内部文档入口或演示地址。",
        time: "90m",
      },
      {
        id: "w12-t2",
        title: "做一次真实验收",
        detail: "找 1 位同事或朋友试用，记录卡点和反馈。",
        time: "60m",
      },
      {
        id: "w12-t3",
        title: "写项目复盘",
        detail: "包含目标、方案、取舍、AI 怎么参与、学到什么、下一步。",
        time: "90m",
      },
      {
        id: "w12-t4",
        title: "制定下一阶段路线",
        detail: "从前端、后端、数据、AI 应用、工程管理中选一个主线继续深入。",
        time: "45m",
      },
    ],
  },
];

const weeklyRhythm = [
  {
    title: "周一 15 分钟",
    text: "只做计划：选本周 2 个知识点和 1 个实战任务，避免被视频数量拖走。",
  },
  {
    title: "周二/周四 各 45 分钟",
    text: "短学习：看视频、查文档、写笔记。每次只解决一个概念。",
  },
  {
    title: "周六 2 小时",
    text: "深实战：分支、PR、页面、CI、发布这些动作集中在周末做。",
  },
  {
    title: "周日 45 分钟",
    text: "复盘：更新仓库、导出周报、列出下周最该补的一个短板。",
  },
];

const gitCards = [
  {
    title: "我现在不知道 Git 状态是否安全",
    keywords: "status diff 安全 检查",
    why: "任何操作前先看状态，避免把不该提交的东西混进去。",
    command: "git status\ngit diff\ngit diff --staged",
  },
  {
    title: "我改了文件，想提交到本地",
    keywords: "add commit 提交",
    why: "先看 diff，再选择性 add，提交信息说明“为什么改”。",
    command: "git status\ngit diff\ngit add <file>\ngit commit -m \"说明这次变更\"",
  },
  {
    title: "我想开一个新分支做需求",
    keywords: "branch switch 分支 需求",
    why: "每个需求用独立分支，便于 PR、review 和回滚。",
    command: "git switch main\ngit pull\ngit switch -c feature/short-name",
  },
  {
    title: "我想同步远程最新代码",
    keywords: "pull fetch sync 同步",
    why: "开始开发前同步，减少后面冲突概率。",
    command: "git status\ngit switch main\ngit pull",
  },
  {
    title: "我想看最近谁改了什么",
    keywords: "log history 历史",
    why: "看历史能帮助你理解需求演进和问题来源。",
    command: "git log --oneline --decorate --graph --all\ngit show <commit-id>",
  },
  {
    title: "我遇到了合并冲突",
    keywords: "conflict merge 冲突 合并",
    why: "冲突不是事故，它只是 Git 需要人判断同一段内容该保留哪种结果。",
    command: "git status\n# 打开冲突文件，处理 <<<<<<< ======= >>>>>>> 标记\ngit add <resolved-file>\ngit commit",
  },
  {
    title: "我想撤回还没提交的单个文件修改",
    keywords: "restore undo 撤销",
    why: "只针对确认不要的单个文件操作，先用 diff 看清楚。",
    command: "git diff <file>\ngit restore <file>",
  },
  {
    title: "我要写一个清楚的 PR 描述",
    keywords: "pull request pr review",
    why: "PR 不是代码上传口，而是协作契约。",
    command: "背景：\n做了什么：\n怎么验证：\n影响范围：\n截图或录屏：\n已知限制：",
  },
];

const promptCards = [
  {
    title: "解释陌生代码",
    scenario: "你看到研发代码或 AI 生成代码，但只能看懂一部分。",
    template:
      "请用产品经理也能理解的方式解释下面这段代码。先说明它解决的业务问题，再说明输入、输出、关键流程、边界情况和可能风险。最后列出我需要向研发确认的 5 个问题。\n\n代码：\n```代码粘贴在这里```",
  },
  {
    title: "把 PRD 拆成开发任务",
    scenario: "你要把需求交给研发，但希望颗粒度更工程化。",
    template:
      "你是资深技术负责人。请把下面的 PRD 拆成可进入 GitHub Issues 的开发任务。每个任务包含：标题、背景、验收标准、依赖、风险、建议优先级、是否需要测试。请指出 PRD 中不清楚或会影响排期的地方。\n\nPRD：\n```粘贴 PRD```",
  },
  {
    title: "Git 问题排障",
    scenario: "你在分支、冲突、pull/push 上卡住。",
    template:
      "我遇到了 Git 问题。请先判断当前状态，再给出低风险处理步骤。不要直接给危险命令。以下是上下文：\n\n目标：\n当前分支：\n我刚做过的操作：\n`git status` 输出：\n```粘贴输出```\n报错信息：\n```粘贴报错```",
  },
  {
    title: "PR Review 辅助",
    scenario: "你需要更专业地看研发提交，而不只是看页面有没有做出来。",
    template:
      "请从产品行为、边界情况、数据影响、错误状态、测试覆盖、发布风险六个角度 review 这个 PR。输出：必须修改、建议修改、需要确认、可以后续优化。不要纠结无关代码风格。\n\nPR 描述：\n```粘贴 PR 描述```\n关键 diff：\n```粘贴 diff 或文件片段```",
  },
  {
    title: "AI 编程任务约束",
    scenario: "你要让 AI 帮你写代码，同时避免它扩大范围。",
    template:
      "请只完成下面这个小改动，保持现有结构和风格，不要重构无关代码。完成后说明改了哪些文件、为什么这么改、如何验证、有什么残留风险。\n\n目标：\n约束：\n验收标准：\n相关文件：",
  },
  {
    title: "研发排期澄清",
    scenario: "你需要判断一个需求为什么贵、风险在哪里。",
    template:
      "请以研发负责人的视角评估下面需求。输出：主要技术模块、未知点、依赖项、可能返工点、最小可行方案、理想方案、排期拆分、需要产品确认的问题。\n\n需求：\n```粘贴需求```",
  },
  {
    title: "发布前检查",
    scenario: "上线前你想减少遗漏。",
    template:
      "请基于下面变更生成发布检查表。覆盖：功能验收、兼容性、数据影响、配置与密钥、日志监控、回滚方案、用户通知、灰度策略、上线后观察指标。\n\n变更说明：\n```粘贴变更```",
  },
  {
    title: "学习复盘",
    scenario: "每周结束时把学习变成可复用资产。",
    template:
      "请帮我把本周学习记录整理成复盘。格式：本周完成、最有价值的概念、真实工作中可以怎么用、卡住的地方、下周一个最小行动、需要继续问研发的问题。\n\n记录：\n```粘贴笔记```",
  },
];

const milestones = [
  {
    id: "m1",
    title: "问题定义",
    detail: "明确目标用户、使用场景、当前低效点和成功指标。",
  },
  {
    id: "m2",
    title: "需求拆解",
    detail: "写 1 页 PRD，并拆成 3-5 个 GitHub Issues。",
  },
  {
    id: "m3",
    title: "AI 协作实现",
    detail: "用 AI 辅助生成或修改代码，但每次都要求解释和验证方式。",
  },
  {
    id: "m4",
    title: "Git 流程完整走通",
    detail: "有分支、提交、PR、自我 review、合并记录。",
  },
  {
    id: "m5",
    title: "发布入口",
    detail: "通过 GitHub Pages 或其他方式让别人能打开试用。",
  },
  {
    id: "m6",
    title: "复盘展示",
    detail: "沉淀成一篇项目复盘，体现你的产品判断、技术理解和 AI 使用方法。",
  },
];

const viewTitles = {
  dashboard: "今日面板",
  plan: "12 周计划",
  git: "Git 急救",
  ai: "AI 提示词",
  lab: "闭环项目",
  sync: "多端入口",
};

const storageKey = "pm-ai-git-learning-assistant-v1";
const defaultState = {
  done: {},
  notes: {},
  milestones: {},
  expanded: {},
};

let state = loadState();
let activeView = "dashboard";
let allExpanded = false;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : structuredClone(defaultState);
  } catch (error) {
    console.warn("Failed to load state", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.warn("Failed to save state", error);
    showToast("浏览器阻止了本地保存，请先导出备份。");
  }
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function setAuthed(isAuthed) {
  document.body.classList.toggle("is-authed", isAuthed);
  if (isAuthed) {
    sessionStorage.setItem(authConfig.sessionKey, "true");
    qs("#authError").textContent = "";
    return;
  }
  sessionStorage.removeItem(authConfig.sessionKey);
  qs("#authUsername").value = "";
  qs("#authPassword").value = "";
  qs("#authUsername").focus();
}

async function handleLogin(event) {
  event.preventDefault();
  const username = qs("#authUsername").value.trim();
  const password = qs("#authPassword").value;
  const passwordHash = await sha256(password);
  const isValid = username === authConfig.username && passwordHash === authConfig.passwordHash;
  if (!isValid) {
    qs("#authError").textContent = "账号或密码不正确。";
    qs("#authPassword").value = "";
    qs("#authPassword").focus();
    return;
  }
  setAuthed(true);
  showToast("登录成功。");
}

function initAuth() {
  qs("#authForm").addEventListener("submit", handleLogin);
  qs("#logoutButton").addEventListener("click", () => {
    setAuthed(false);
    showToast("已退出登录。");
  });
  setAuthed(sessionStorage.getItem(authConfig.sessionKey) === "true");
}

function flattenTasks() {
  return weeks.flatMap((week) => week.tasks.map((task) => ({ ...task, weekId: week.id })));
}

function weekProgress(week) {
  const done = week.tasks.filter((task) => state.done[task.id]).length;
  return {
    done,
    total: week.tasks.length,
    percent: Math.round((done / week.tasks.length) * 100),
  };
}

function getCurrentWeek() {
  return weeks.find((week) => weekProgress(week).done < week.tasks.length) || weeks[weeks.length - 1];
}

function setView(viewId) {
  activeView = viewId;
  qsa(".view").forEach((view) => view.classList.toggle("is-visible", view.id === viewId));
  qsa(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === viewId));
  qs("#viewTitle").textContent = viewTitles[viewId] || "学习助手";
}

function makeTag(text) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = text;
  return tag;
}

function renderTaskList(container, tasks) {
  container.replaceChildren();
  tasks.forEach((task) => {
    const label = document.createElement("label");
    label.className = "task-item";
    label.classList.toggle("is-complete", Boolean(state.done[task.id]));

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.done[task.id]);
    checkbox.addEventListener("change", () => {
      state.done[task.id] = checkbox.checked;
      saveState();
      renderAll();
      showToast(checkbox.checked ? "已记录完成。" : "已取消完成。");
    });

    const content = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = task.title;
    const detail = document.createElement("span");
    detail.className = "task-meta";
    detail.textContent = `${task.detail} · ${task.time}`;

    content.append(title, detail);
    label.append(checkbox, content);
    container.append(label);
  });
}

function renderDashboard() {
  const tasks = flattenTasks();
  const doneCount = tasks.filter((task) => state.done[task.id]).length;
  const percent = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
  const current = getCurrentWeek();
  const progress = weekProgress(current);
  const nextTask = current.tasks.find((task) => !state.done[task.id]) || current.tasks[current.tasks.length - 1];

  qs("#overallProgress").textContent = `${percent}%`;
  qs("#overallDetail").textContent = `${doneCount} / ${tasks.length} 项`;
  qs("#currentTheme").textContent = current.phase;
  qs("#currentOutcome").textContent = current.outcome;
  qs("#currentWeekPill").textContent = `第 ${weeks.indexOf(current) + 1} 周 · ${progress.percent}%`;
  qs("#nextActionTitle").textContent = nextTask.title;
  qs("#nextActionText").textContent = current.next;
  qs("#weekTasksTitle").textContent = `第 ${weeks.indexOf(current) + 1} 周任务：${current.title}`;
  qs("#weekLoad").textContent = `建议 ${current.load}`;
  renderTaskList(qs("#dashboardTasks"), current.tasks);
}

function renderRhythm() {
  const grid = qs("#rhythmGrid");
  grid.replaceChildren();
  weeklyRhythm.forEach((item) => {
    const card = document.createElement("article");
    card.className = "rhythm-item";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    card.append(title, text);
    grid.append(card);
  });
}

function renderWeeks() {
  const current = getCurrentWeek();
  const list = qs("#weekList");
  list.replaceChildren();

  weeks.forEach((week, index) => {
    const progress = weekProgress(week);
    const isOpen = allExpanded || state.expanded[week.id] || week.id === current.id;
    const article = document.createElement("article");
    article.className = "week-card";
    article.classList.toggle("is-open", isOpen);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "week-toggle";
    toggle.setAttribute("aria-expanded", String(isOpen));

    const titleWrap = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = `第 ${index + 1} 周 · ${week.title}`;
    const outcome = document.createElement("p");
    outcome.className = "task-meta";
    outcome.textContent = week.outcome;
    const tags = document.createElement("div");
    tags.className = "week-summary";
    tags.append(makeTag(week.phase), makeTag(week.load), makeTag(`${progress.done}/${progress.total} 完成`));
    titleWrap.append(title, outcome, tags);

    const arrow = document.createElement("span");
    arrow.className = "tag";
    arrow.textContent = isOpen ? "收起" : "展开";

    toggle.append(titleWrap, arrow);
    toggle.addEventListener("click", () => {
      state.expanded[week.id] = !article.classList.contains("is-open");
      saveState();
      renderWeeks();
    });

    const body = document.createElement("div");
    body.className = "week-body";

    const layout = document.createElement("div");
    layout.className = "week-body-layout";

    const taskWrap = document.createElement("div");
    taskWrap.className = "task-list";
    renderTaskList(taskWrap, week.tasks);

    const aside = document.createElement("aside");
    aside.className = "info-card";
    const videoTitle = document.createElement("h4");
    videoTitle.textContent = "视频与资料";
    const resourceList = document.createElement("ul");
    resourceList.className = "resource-list";
    week.videos.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      resourceList.append(li);
    });

    const noteTitle = document.createElement("h4");
    noteTitle.textContent = "本周复盘";
    const note = document.createElement("textarea");
    note.className = "note-box";
    note.placeholder = "记录：本周学会了什么、工作中能怎么用、还卡在哪里。";
    note.value = state.notes[week.id] || "";
    note.addEventListener("input", () => {
      state.notes[week.id] = note.value;
      saveState();
    });

    aside.append(videoTitle, resourceList, noteTitle, note);
    layout.append(taskWrap, aside);
    body.append(layout);
    article.append(toggle, body);
    list.append(article);
  });
}

function renderGitCards() {
  const query = qs("#gitSearch").value.trim().toLowerCase();
  const container = qs("#gitCards");
  container.replaceChildren();
  gitCards
    .filter((card) => `${card.title} ${card.keywords} ${card.why}`.toLowerCase().includes(query))
    .forEach((card) => {
      const article = document.createElement("article");
      article.className = "info-card";
      const title = document.createElement("h4");
      title.textContent = card.title;
      const why = document.createElement("p");
      why.textContent = card.why;
      const command = document.createElement("pre");
      command.className = "command-block";
      command.textContent = card.command;
      const actions = document.createElement("div");
      actions.className = "card-actions";
      const copy = makeCopyButton(card.command, "复制命令");
      actions.append(copy);
      article.append(title, why, command, actions);
      container.append(article);
    });
}

function renderPromptCards() {
  const query = qs("#promptSearch").value.trim().toLowerCase();
  const container = qs("#promptCards");
  container.replaceChildren();
  promptCards
    .filter((card) => `${card.title} ${card.scenario} ${card.template}`.toLowerCase().includes(query))
    .forEach((card) => {
      const article = document.createElement("article");
      article.className = "info-card";
      const title = document.createElement("h4");
      title.textContent = card.title;
      const scenario = document.createElement("p");
      scenario.textContent = card.scenario;
      const prompt = document.createElement("pre");
      prompt.className = "prompt-block";
      prompt.textContent = card.template;
      const actions = document.createElement("div");
      actions.className = "card-actions";
      actions.append(makeCopyButton(card.template, "复制提示词"));
      article.append(title, scenario, prompt, actions);
      container.append(article);
    });
}

function makeCopyButton(text, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-button";
  button.textContent = label;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("已复制。");
    } catch (error) {
      console.warn("Clipboard failed", error);
      showToast("浏览器没有开放剪贴板权限，请手动复制。");
    }
  });
  return button;
}

function renderMilestones() {
  const list = qs("#milestoneList");
  list.replaceChildren();
  milestones.forEach((item) => {
    const label = document.createElement("label");
    label.className = "milestone";
    label.classList.toggle("is-complete", Boolean(state.milestones[item.id]));
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.milestones[item.id]);
    checkbox.addEventListener("change", () => {
      state.milestones[item.id] = checkbox.checked;
      saveState();
      renderMilestones();
    });
    const content = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = item.title;
    const detail = document.createElement("span");
    detail.className = "task-meta";
    detail.textContent = item.detail;
    content.append(title, detail);
    label.append(checkbox, content);
    list.append(label);
  });
}

function renderAll() {
  renderDashboard();
  renderRhythm();
  renderWeeks();
  renderGitCards();
  renderPromptCards();
  renderMilestones();
}

function exportJson() {
  const payload = {
    app: "pm-ai-git-learning-assistant",
    version: 1,
    exportedAt: new Date().toISOString(),
    state,
  };
  downloadFile("learning-progress.json", JSON.stringify(payload, null, 2), "application/json");
  showToast("已导出进度 JSON。");
}

function exportMarkdown() {
  const current = getCurrentWeek();
  const lines = [
    "# 学习周报",
    "",
    `生成时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    `当前周：第 ${weeks.indexOf(current) + 1} 周 · ${current.title}`,
    "",
    "## 总体进度",
    "",
    ...weeks.map((week, index) => {
      const progress = weekProgress(week);
      return `- 第 ${index + 1} 周 ${week.title}: ${progress.done}/${progress.total}`;
    }),
    "",
    "## 本周复盘",
    "",
    state.notes[current.id] || "还没有填写本周复盘。",
    "",
    "## 下一步",
    "",
    current.next,
    "",
  ];
  downloadFile("learning-weekly-report.md", lines.join("\n"), "text/markdown");
  showToast("已导出周报 Markdown。");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result));
      if (!payload.state || typeof payload.state !== "object") {
        throw new Error("Invalid payload");
      }
      state = {
        ...defaultState,
        ...payload.state,
      };
      saveState();
      renderAll();
      showToast("已导入进度。");
    } catch (error) {
      console.warn("Import failed", error);
      showToast("导入失败，请确认是本工具导出的 JSON。");
    }
  };
  reader.readAsText(file);
}

function resetProgress() {
  const confirmed = window.confirm("这会清空当前浏览器里的学习进度和笔记，不会删除任何本地文件。确定继续吗？");
  if (!confirmed) return;
  state = structuredClone(defaultState);
  saveState();
  renderAll();
  showToast("本地进度已重置。");
}

function bindEvents() {
  qsa("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  qsa("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewTarget));
  });
  qs("#gitSearch").addEventListener("input", renderGitCards);
  qs("#promptSearch").addEventListener("input", renderPromptCards);
  qs("#exportJson").addEventListener("click", exportJson);
  qs("#exportMarkdown").addEventListener("click", exportMarkdown);
  qs("#importJsonTrigger").addEventListener("click", () => qs("#importJson").click());
  qs("#importJson").addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (file) importJson(file);
    event.target.value = "";
  });
  qs("#resetProgress").addEventListener("click", resetProgress);
  qs("#expandAll").addEventListener("click", () => {
    allExpanded = !allExpanded;
    qs("#expandAll").textContent = allExpanded ? "收起全部" : "展开全部";
    renderWeeks();
  });
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (error) {
    console.warn("Service worker registration failed", error);
  }
}

initAuth();
bindEvents();
renderAll();
setView(activeView);
registerServiceWorker();
