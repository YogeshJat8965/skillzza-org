import re

with open('frontend/src/components/Navbar.jsx', 'r') as f:
    content = f.read()

def replace_icon(emoji, component):
    global content
    content = re.sub(f"icon:\\s*'{emoji}'", f"icon: <{component} />", content)

replacements = {
    '🎯': 'Target size={24} color="#BD1723" strokeWidth={1.5}',
    '🌐': 'Globe size={24} color="#8947B3" strokeWidth={1.5}',
    '🤝': 'Handshake size={24} color="#BD1723" strokeWidth={1.5}',
    '🎭': 'UserCheck size={24} color="#8947B3" strokeWidth={1.5}',
    '🤖': 'Bot size={24} color="#8947B3" strokeWidth={1.5}',
    
    '🧠': 'BrainCircuit size={24} color="#BD1723" strokeWidth={1.5}',
    '🌍': 'Leaf size={24} color="#8947B3" strokeWidth={1.5}',
    '🎨': 'PaintBucket size={24} color="#BD1723" strokeWidth={1.5}',
    '⚡': 'Zap size={24} color="#8947B3" strokeWidth={1.5}',
    '🚁': 'Rocket size={24} color="#BD1723" strokeWidth={1.5}',
    '🎓': 'GraduationCap size={24} color="#8947B3" strokeWidth={1.5}',
    '🔐': 'ShieldAlert size={24} color="#BD1723" strokeWidth={1.5}',
    
    '📘': 'BookOpen size={24} color="#BD1723" strokeWidth={1.5}',
    '✍️': 'PenTool size={24} color="#8947B3" strokeWidth={1.5}',
    '🔬': 'Microscope size={24} color="#BD1723" strokeWidth={1.5}',
    '🎙️': 'Mic size={24} color="#8947B3" strokeWidth={1.5}',
    '📊': 'BarChart3 size={24} color="#8947B3" strokeWidth={1.5}',
    
    '✦': 'Compass size={24} color="#BD1723" strokeWidth={1.5}',
    '⚙': 'Settings size={24} color="#8947B3" strokeWidth={1.5}',
    '◆': 'Layers size={24} color="#BD1723" strokeWidth={1.5}',
    '➜': 'Route size={24} color="#8947B3" strokeWidth={1.5}',
    '💼': 'Briefcase size={24} color="#8947B3" strokeWidth={1.5}',
    '📰': 'FileText size={24} color="#BD1723" strokeWidth={1.5}',
    
    '🏛️': 'School size={24} color="#BD1723" strokeWidth={1.5}',
    '🏢': 'Building size={24} color="#8947B3" strokeWidth={1.5}',
    '📡': 'Hexagon size={24} color="#8947B3" strokeWidth={1.5}',
    '🏫': 'School size={24} color="#BD1723" strokeWidth={1.5}',
    '👩‍🏫': 'UserCheck size={24} color="#BD1723" strokeWidth={1.5}',
    '🌱': 'Leaf size={24} color="#BD1723" strokeWidth={1.5}',
    '📋': 'FileText size={24} color="#8947B3" strokeWidth={1.5}',
    '⚙️': 'Settings size={24} color="#BD1723" strokeWidth={1.5}',
}

for emoji, comp in replacements.items():
    replace_icon(emoji, comp)

with open('frontend/src/components/Navbar.jsx', 'w') as f:
    f.write(content)
