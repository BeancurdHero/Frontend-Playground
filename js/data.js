// ============================================
// Effects Playground - Effects Data
// ============================================

const effectsData = {
  "design-style": {
    name: "Design Style",
    nameCN: "设计风格",
    icon: "palette",
    effects: [
      {
        id: "minimalism",
        name: "Minimalism",
        nameCN: "极简主义",
        description: "以最少的元素实现最大的功能表达",
        prompt: "Create a minimalist UI design with generous white space, clean sans-serif typography, and a monochromatic color scheme. Focus on essential elements with subtle shadows.",
        code: `const MinimalCard = () => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '48px',
      borderRadius: '2px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      maxWidth: '400px'
    }}>
      <h2 style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: '300',
        fontSize: '24px',
        color: '#111'
      }}>
        Minimal Design
      </h2>
      <p style={{ color: '#666', margin: '8px 0 0 0' }}>
        Less is more
      </p>
    </div>
  );
};`
      },
      {
        id: "neumorphism",
        name: "Neumorphism",
        nameCN: "新拟态",
        description: "柔和的阴影创造出凸起或凹陷的视觉效果",
        prompt: "Design a neumorphic UI element with soft, realistic shadows that create depth. Use light and shadow to make elements appear to extrude from the surface.",
        code: `const NeumorphicCard = () => {
  const style = {
    background: '#e0e5ec',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)'
  };

  return (
    <div style={style}>
      <h3 style={{ color: '#4a5568', margin: '0 0 16px 0' }}>
        Neumorphic Design
      </h3>
      <button style={{
        background: '#e0e5ec',
        border: 'none',
        padding: '16px 32px',
        borderRadius: '12px',
        color: '#4a5568',
        fontWeight: '600',
        boxShadow: '6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5)',
        cursor: 'pointer'
      }}>
        Press Me
      </button>
    </div>
  );
};`
      },
      {
        id: "glassmorphism",
        name: "Glassmorphism",
        nameCN: "玻璃拟态",
        description: "透明度、背景模糊和微妙边框创造出磨砂玻璃效果",
        prompt: "Create a glassmorphic design with semi-transparent backgrounds, backdrop blur effects, and subtle white borders.",
        code: `const GlassCard = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '350px'
      }}>
        <h2 style={{ color: 'white', margin: '0 0 16px 0' }}>
          Glass Effect
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
          Frosted glass UI
        </p>
      </div>
    </div>
  );
};`
      },
      {
        id: "cyberpunk",
        name: "Cyberpunk",
        nameCN: "赛博朋克",
        description: "霓虹色彩、故障效果营造未来反乌托邦氛围",
        prompt: "Design a cyberpunk themed UI with neon pink, cyan colors against dark backgrounds. Include glitch effects and scan lines.",
        code: `const CyberpunkCard = () => {
  return (
    <div style={{
      background: '#0a0a0a',
      padding: '40px',
      border: '2px solid #ff00ff',
      boxShadow: '0 0 20px #ff00ff',
      position: 'relative'
    }}>
      <h2 style={{
        fontFamily: 'monospace',
        color: '#00ffff',
        textShadow: '0 0 10px #00ffff',
        margin: 0,
        fontSize: '28px'
      }}>
        CYBERPUNK
      </h2>
    </div>
  );
};`
      }
    ]
  },

  "text-effect": {
    name: "Text Effects",
    nameCN: "文字效果",
    icon: "type",
    effects: [
      {
        id: "gradient-text",
        name: "Gradient Text",
        nameCN: "渐变文字",
        description: "文字填充渐变色彩",
        prompt: "Create text with a gradient fill effect where colors flow smoothly across each character.",
        code: `const GradientText = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      background: '#0a0a0f'
    }}>
      <h1 style={{
        fontSize: '64px',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        margin: 0
      }}>
        Gradient Text
      </h1>
    </div>
  );
};`
      },
      {
        id: "glowing-text",
        name: "Glowing Text",
        nameCN: "发光文字",
        description: "文字周围产生柔和的光晕效果",
        prompt: "Design text with a glowing neon effect using text-shadow with multiple layered shadows.",
        code: `const GlowingText = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      background: '#000'
    }}>
      <h1 style={{
        fontSize: '72px',
        fontWeight: '700',
        color: '#fff',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff',
        margin: 0
      }}>
        GLOW
      </h1>
    </div>
  );
};`
      },
      {
        id: "neon-text",
        name: "Neon Text",
        nameCN: "霓虹文字",
        description: "模拟霓虹灯管效果的文字",
        prompt: "Create a realistic neon sign text effect with bright colors and intense glow.",
        code: `const NeonText = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: '#1a1a2e'
    }}>
      <h1 style={{
        fontSize: '80px',
        fontWeight: '900',
        color: '#fff',
        textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00de, 0 0 40px #ff00de',
        margin: 0
      }}>
        NEON
      </h1>
    </div>
  );
};`
      },
      {
        id: "3d-text",
        name: "3D Text",
        nameCN: "3D文字",
        description: "通过多层阴影创造出立体深度",
        prompt: "Create 3D text using layered shadows to build depth and dimension.",
        code: `const Text3D = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <h1 style={{
        fontSize: '96px',
        fontWeight: '900',
        color: '#fff',
        textShadow: '1px 1px 0 #ccc, 2px 2px 0 #ccc, 3px 3px 0 #ccc, 4px 4px 0 #ccc, 5px 5px 0 #ccc',
        margin: 0
      }}>
        3D TEXT
      </h1>
    </div>
  );
};`
      },
      {
        id: "typewriter",
        name: "Typewriter",
        nameCN: "打字机效果",
        description: "文字逐个字符出现",
        prompt: "Create a typewriter effect where text appears one character at a time.",
        code: `const { useState, useEffect } = React;

const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = 'Hello, World!';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      background: '#1a1a2e',
      fontFamily: 'monospace'
    }}>
      <h1 style={{ fontSize: '48px', color: '#00ff9f', margin: 0 }}>
        {text}<span style={{ animation: 'blink 1s infinite' }}>|</span>
      </h1>
      <style>{\`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      \`}</style>
    </div>
  );
};`
      }
    ]
  },

  "transitions": {
    name: "Transitions",
    nameCN: "过渡效果",
    icon: "sparkles",
    effects: [
      {
        id: "fade-transition",
        name: "Fade",
        nameCN: "淡入淡出",
        description: "元素透明度平滑变化",
        prompt: "Create a smooth fade transition where elements gradually change opacity.",
        code: `const { useState } = React;

const FadeTransition = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: '#1a1a2e',
      gap: '40px'
    }}>
      <div style={{
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '24px'
      }}>
        Fade Me
      </div>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: '16px 32px',
          background: '#00ff9f',
          border: 'none',
          borderRadius: '12px',
          color: '#000',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Toggle Fade
      </button>
    </div>
  );
};`
      },
      {
        id: "slide-transition",
        name: "Slide",
        nameCN: "滑动过渡",
        description: "元素沿指定方向滑入滑出",
        prompt: "Create a slide transition where elements move in from outside the viewport.",
        code: `const { useState } = React;

const SlideTransition = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: '#1a1a2e',
      gap: '40px'
    }}>
      <div style={{
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        borderRadius: '20px',
        transform: visible ? 'translateX(0)' : 'translateX(-300px)',
        transition: 'transform 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '24px'
      }}>
        Slide Me
      </div>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: '16px 32px',
          background: '#00ff9f',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer'
        }}
      >
        Toggle Slide
      </button>
    </div>
  );
};`
      },
      {
        id: "scale-transition",
        name: "Scale",
        nameCN: "缩放过渡",
        description: "元素从小到大变化尺寸",
        prompt: "Create a scale transition where elements grow or shrink smoothly.",
        code: `const { useState } = React;

const ScaleTransition = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: '#1a1a2e',
      gap: '40px'
    }}>
      <div style={{
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        borderRadius: '20px',
        transform: visible ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '24px'
      }}>
        Scale Me
      </div>
      <button
        onClick={() => setVisible(!visible)}
        style={{ padding: '16px 32px', background: '#00ff9f', border: 'none', borderRadius: '12px', cursor: 'pointer' }}
      >
        Toggle Scale
      </button>
    </div>
  );
};`
      }
    ]
  },

  "mouse-effect": {
    name: "Mouse Effects",
    nameCN: "鼠标效果",
    icon: "mouse-pointer-2",
    effects: [
      {
        id: "custom-cursor",
        name: "Custom Cursor",
        nameCN: "自定义光标",
        description: "替换默认鼠标指针为自定义图形",
        prompt: "Create a custom cursor that replaces the default mouse pointer with a custom design.",
        code: `const { useState, useEffect } = React;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'none'
    }}>
      <div style={{
        position: 'fixed',
        left: position.x - 15,
        top: position.y - 15,
        width: '30px',
        height: '30px',
        border: '2px solid #00ff9f',
        borderRadius: '50%',
        pointerEvents: 'none',
        mixBlendMode: 'difference'
      }} />
      <h1 style={{ color: '#fff', fontSize: '32px' }}>
        Move your mouse
      </h1>
    </div>
  );
};`
      },
      {
        id: "cursor-follower",
        name: "Cursor Follower",
        nameCN: "光标跟随",
        description: "元素延迟跟随鼠标移动",
        prompt: "Create an element that follows the mouse cursor with a delay/trailing effect.",
        code: `const { useState, useEffect } = React;

const CursorFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setFollowerPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1
      }));
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [mousePos]);

  return (
    <div style={{ width: '100%', height: '400px', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        position: 'fixed',
        left: followerPos.x - 40,
        top: followerPos.y - 40,
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(10px)'
      }} />
      <h1 style={{ color: '#fff', fontSize: '32px' }}>Move cursor</h1>
    </div>
  );
};`
      },
      {
        id: "magnetic-button",
        name: "Magnetic Button",
        nameCN: "磁性按钮",
        description: "按钮被鼠标吸引",
        prompt: "Create a magnetic button that is attracted to the mouse cursor.",
        code: `const { useState } = React;

const MagneticButton = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.3, y: y * 0.3 });
  };

  return (
    <div style={{ width: '100%', height: '400px', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        style={{
          padding: '20px 40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '16px',
          color: '#fff',
          fontSize: '18px',
          cursor: 'pointer',
          transform: \`translate(\${offset.x}px, \${offset.y}px)\`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        Magnetic Button
      </button>
    </div>
  );
};`
      },
      {
        id: "click-ripple",
        name: "Click Ripple",
        nameCN: "点击波纹",
        description: "点击时产生水波纹扩散效果",
        prompt: "Create a ripple effect that spreads from the click position.",
        code: `const { useState } = React;

const ClickRipple = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 600);
  };

  return (
    <div style={{ width: '100%', height: '400px', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        onClick={handleClick}
        style={{
          position: 'relative',
          padding: '24px 48px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '16px',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        {ripples.map(r => (
          <span
            key={r.id}
            style={{
              position: 'absolute',
              left: r.x,
              top: r.y,
              width: '0',
              height: '0',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.6)',
              transform: 'translate(-50%, -50%)',
              animation: 'ripple 0.6s ease-out'
            }}
          />
        ))}
        Click Me
        <style>{\`@keyframes ripple { to { width: 300px; height: 300px; opacity: 0; } }\`}</style>
      </button>
    </div>
  );
};`
      }
    ]
  },

  "backgrounds": {
    name: "Backgrounds",
    nameCN: "背景",
    icon: "image",
    effects: [
      {
        id: "solid-gradient",
        name: "Gradient Background",
        nameCN: "渐变背景",
        description: "平滑的线性或径向颜色渐变",
        prompt: "Create a smooth gradient background using linear or radial gradients.",
        code: `const SolidGradient = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#fff', fontSize: '48px' }}>Linear Gradient</h1>
    </div>
  );
};`
      },
      {
        id: "mesh-gradient",
        name: "Mesh Gradient",
        nameCN: "网格渐变",
        description: "多种颜色有机融合",
        prompt: "Create a mesh gradient where multiple colors blend organically.",
        code: `const MeshGradient = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: 'radial-gradient(at 40% 20%, #667eea 0px, transparent 50%), radial-gradient(at 80% 0%, #764ba2 0px, transparent 50%), radial-gradient(at 0% 50%, #f093fb 0px, transparent 50%)',
      backgroundSize: '100% 100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#fff', fontSize: '48px' }}>Mesh Gradient</h1>
    </div>
  );
};`
      },
      {
        id: "grid-pattern",
        name: "Grid Pattern",
        nameCN: "网格图案",
        description: "规则的网格线作为背景",
        prompt: "Create a grid pattern background using CSS gradients.",
        code: `const GridPattern = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: 'linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 126, 234, 0.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px',
      backgroundColor: '#0a0a0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#fff', fontSize: '48px' }}>Grid Pattern</h1>
    </div>
  );
};`
      },
      {
        id: "dot-pattern",
        name: "Dot Pattern",
        nameCN: "点状图案",
        description: "规则排列的点阵作为背景",
        prompt: "Create a polka dot pattern background with evenly spaced dots.",
        code: `const DotPattern = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 2px, transparent 2px)',
      backgroundSize: '30px 30px',
      backgroundColor: '#0a0a0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#fff', fontSize: '48px' }}>Dot Pattern</h1>
    </div>
  );
};`
      }
    ]
  },

  "3d-effects": {
    name: "3D Effects",
    nameCN: "3D效果",
    icon: "box",
    effects: [
      {
        id: "3d-card-flip",
        name: "3D Card Flip",
        nameCN: "3D卡片翻转",
        description: "点击时卡片3D翻转显示背面",
        prompt: "Create a 3D card that flips when clicked or hovered.",
        code: `const { useState } = React;

const Card3DFlip = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: '1000px'
    }}>
      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          width: '300px',
          height: '200px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: 'pointer'
        }}
      >
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '28px'
        }}>
          FRONT
        </div>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '28px'
        }}>
          BACK
        </div>
      </div>
    </div>
  );
};`
      },
      {
        id: "perspective-tilt",
        name: "Perspective Tilt",
        nameCN: "透视倾斜",
        description: "根据鼠标位置产生透视倾斜",
        prompt: "Create a perspective tilt effect that responds to mouse position.",
        code: `const { useState } = React;

const PerspectiveTilt = () => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setTransform(\`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`);
  };

  return (
    <div style={{ width: '100%', height: '400px', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)')}
        style={{
          width: '300px',
          height: '200px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
          transform: transform,
          transition: 'transform 0.1s ease-out',
          cursor: 'pointer'
        }}
      >
        Hover to Tilt
      </div>
    </div>
  );
};`
      }
    ]
  },

  "loading-states": {
    name: "Loading States",
    nameCN: "加载状态",
    icon: "loader",
    effects: [
      {
        id: "spinner",
        name: "Spinner",
        nameCN: "旋转加载",
        description: "经典的旋转圆环加载动画",
        prompt: "Create a classic spinner loading animation with rotating ring.",
        code: `const Spinner = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '4px solid rgba(102, 126, 234, 0.3)',
        borderTopColor: '#667eea',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}>
        <style>{\`@keyframes spin { to { transform: rotate(360deg); } }\`}</style>
      </div>
    </div>
  );
};`
      },
      {
        id: "dots-loader",
        name: "Dots Loader",
        nameCN: "点状加载",
        description: "跳动的点状加载动画",
        prompt: "Create a bouncing dots loading animation.",
        code: `const DotsLoader = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#667eea',
            animation: 'bounce 0.6s ease-in-out infinite',
            animationDelay: \`\${i * 0.1}s\`
          }}
        >
          <style>{\`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }\`}</style>
        </div>
      ))}
    </div>
  );
};`
      },
      {
        id: "pulse-loader",
        name: "Pulse Loader",
        nameCN: "脉冲加载",
        description: "脉冲式缩放加载动画",
        prompt: "Create a pulse loading animation with scaling effect.",
        code: `const PulseLoader = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#667eea',
        animation: 'pulse 1.5s ease-in-out infinite'
      }}>
        <style>{\`@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: 0.5; } }\`}</style>
      </div>
    </div>
  );
};`
      }
    ]
  },

  "button-animations": {
    name: "Button Animations",
    nameCN: "按钮动画",
    icon: "mouse-pointer",
    effects: [
      {
        id: "fill-button",
        name: "Fill Effect",
        nameCN: "填充效果",
        description: "悬停时颜色填充按钮",
        prompt: "Create a button with fill effect on hover.",
        code: `const FillButton = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <button style={{
        padding: '16px 32px',
        background: 'transparent',
        border: '2px solid #667eea',
        borderRadius: '12px',
        color: '#667eea',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'color 0.3s'
      }}>
        <span style={{ position: 'relative', zIndex: 1 }}>Hover Me</span>
        <style>{\`button:hover { color: white; } button::before { content: ""; position: absolute; inset: 0; background: #667eea; transform: scaleX(0); transform-origin: right; transition: transform 0.3s; } button:hover::before { transform: scaleX(1); transform-origin: left; }\`}</style>
      </button>
    </div>
  );
};`
      },
      {
        id: "glow-button",
        name: "Glow Button",
        nameCN: "发光按钮",
        description: "悬停时发光效果",
        prompt: "Create a button with glow effect on hover.",
        code: `const GlowButton = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button style={{
        padding: '18px 36px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)'
      }}>
        Glow Button
      </button>
    </div>
  );
};`
      },
      {
        id: "ripple-button",
        name: "Ripple Button",
        nameCN: "波纹按钮",
        description: "Material Design风格的波纹点击效果",
        prompt: "Create a Material Design style button with ripple effect on click.",
        code: `const { useState } = React;

const RippleButton = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples([...ripples, { id: Date.now(), x, y }]);
    setTimeout(() => setRipples([]), 600);
  };

  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#1a1a2e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button
        onClick={handleClick}
        style={{
          position: 'relative',
          padding: '18px 36px',
          background: '#667eea',
          border: 'none',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        {ripples.map(r => (
          <span
            key={r.id}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.5)',
              transform: 'translate(-50%, -50%) scale(0)',
              animation: 'ripple 0.6s linear',
              left: r.x,
              top: r.y,
              width: '100px',
              height: '100px'
            }}
          />
        ))}
        Click Me
        <style>{\`@keyframes ripple { to { transform: translate(-50%, -50%) scale(4); opacity: 0; } }\`}</style>
      </button>
    </div>
  );
};`
      }
    ]
  }
};

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.effectsData = effectsData;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = effectsData;
}
