# 🎄 Christmas Card - 圣诞专属电子贺卡

这是一个为圣诞节精心设计的极简北欧风交互式电子贺卡。采用了现代 Web 技术，旨在提供极致的视觉享受和情感传递。

## ✨ 核心特性

- **极致设计**：采用极简北欧风格，奶油白与深绿的经典配色，搭配毛玻璃（Glassmorphism）质感。
- **三重渲染**：
  - **远景**：梦幻的城市剪影与自动绽放的柔色烟花。
  - **中景**：具有呼吸感的交互式卡片，适配所有移动端屏幕。
  - **特效**：丝滑的 Canvas 雪花飘落系统。
- **深度交互**：点击“开启专属心意”后，触发华丽的爱心与金粉粒子迸发特效，随后展现手写体感人的圣诞寄语。
- **高格调字体**：引入 Google Fonts，英文采用优雅的 `Dancing Script` 手写体，中文采用富有张力的 `Zhi Mang Xing` 书法体。
- **性能卓越**：纯原生组件开发，秒开加载，无冗余库，动画流畅。

## 🛠️ 技术栈

- **HTML5**: 结构化语义标签
- **CSS3**: 毛玻璃效果、响应式布局、高级关键帧动画
- **JavaScript**: Canvas 2D 粒子系统 (烟花、雪花、心形特效)
- **Google Fonts**: 自定义手写字体渲染

## 🚀 快速启动

由于这是一个纯前端项目，您可以直接使用任何静态文件服务器运行。

1. **克隆项目**
   ```bash
   git clone https://github.com/MrZhouZh/christmas.git
   ```

2. **本地运行**
   您可以使用 live-server 快速启动：
   ```bash
   npx live-server --port=8000
   ```
   随后在浏览器访问 `http://localhost:8000` 即可。

## 📂 项目结构

```text
.
├── index.html        # 页面主结构
├── style.css         # 核心样式系统 (Nordic Design System)
├── script.js        # Canvas 交互粒子引擎
├── card_main.png     # 圣诞插画素材
├── bg_skyline.png    # 远景背景
└── fg_pine.png       # 装饰元素
```

---
*祝您在落雪的冬日，收到最温暖的惊喜。Merry Christmas!* ❄️❤️
