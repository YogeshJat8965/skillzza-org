import re
import sys

with open('src/components/Navbar.jsx', 'r') as f:
    content = f.read()

# 1. Add lucide imports
lucide_imports = """import {
  Target, Globe, Handshake, UserCheck, Bot, BrainCircuit, Leaf, PaintBucket, 
  Zap, Rocket, GraduationCap, ShieldAlert, BookOpen, PenTool, Microscope, 
  Mic, Activity, BarChart3, Compass, Settings, Layers, Route, Briefcase, 
  FileText, School, Building, Hexagon
} from 'lucide-react';
"""
if 'lucide-react' not in content:
    content = content.replace("import { getAssetPath", lucide_imports + "import { getAssetPath")

# Map of specific icon fields to components
mappings = [
  (r"icon: '🎯', desc: 'AI skill assessment engine", r"icon: <Target size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'AI skill assessment engine"),
  (r"icon: '🌐', desc: 'Immersive job simulations", r"icon: <Globe size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Immersive job simulations"),
  (r"icon: '🤝', desc: 'College-to-campus hiring", r"icon: <Handshake size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'College-to-campus hiring"),
  (r"icon: '🎭', desc: 'AI roleplay simulation", r"icon: <UserCheck size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'AI roleplay simulation"),
  (r"icon: '🤖', desc: 'Autonomous skill orchestration", r"icon: <Bot size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Autonomous skill orchestration"),
  
  (r"icon: '🧠', desc: 'ML, neural", r"icon: <BrainCircuit size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'ML, neural"),
  (r"icon: '🌍', desc: 'Green tech", r"icon: <Leaf size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Green tech"),
  (r"icon: '🎨', desc: 'UX/UI", r"icon: <PaintBucket size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'UX/UI"),
  (r"icon: '⚡', desc: 'Electric vehicles", r"icon: <Zap size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Electric vehicles"),
  (r"icon: '🚁', desc: 'Drone systems", r"icon: <Rocket size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Drone systems"),
  (r"icon: '🎓', desc: 'Future-ready learning tracks", r"icon: <GraduationCap size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Future-ready learning tracks"),
  (r"icon: '🔐', desc: 'Threat intelligence", r"icon: <ShieldAlert size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Threat intelligence"),
  
  (r"icon: '📘', desc: 'Real-world success stories", r"icon: <BookOpen size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Real-world success stories"),
  (r"icon: '✍️', desc: 'Insights, trends", r"icon: <PenTool size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Insights, trends"),
  (r"icon: '🔬', desc: 'Reports & whitepapers", r"icon: <Microscope size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Reports & whitepapers"),
  (r"icon: '🎙️', desc: 'Raw, Real", r"icon: <Mic size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Raw, Real"),
  (r"icon: '🎯', desc: 'Interactive sessions", r"icon: <Activity size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Interactive sessions"),
  (r"icon: '📊', desc: 'Annual report", r"icon: <BarChart3 size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Annual report"),
  
  (r"icon: '✦', desc: 'Our story", r"icon: <Compass size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Our story"),
  (r"icon: '⚙', desc: 'How we build", r"icon: <Settings size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'How we build"),
  (r"icon: '◆', desc: 'Products, programmes", r"icon: <Layers size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Products, programmes"),
  (r"icon: '➜', desc: 'Roadmap for learners", r"icon: <Route size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Roadmap for learners"),
  (r"icon: '🤝', desc: 'Universities, enterprises", r"icon: <Handshake size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Universities, enterprises"),
  (r"icon: '💼', desc: 'Join the team", r"icon: <Briefcase size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Join the team"),
  (r"icon: '📰', desc: 'News, features", r"icon: <FileText size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'News, features"),
  
  (r"icon: '🏛️', desc: 'Curriculum redesign", r"icon: <School size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'Curriculum redesign"),
  (r"icon: '🏢', desc: 'Workforce gap analysis", r"icon: <Building size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Workforce gap analysis"),
  (r"icon: '🏛️', desc: 'National skill missions", r"icon: <School size={24} color=\"#BD1723\" strokeWidth={1.5} />, desc: 'National skill missions"),
  (r"icon: '📡', desc: 'Workforce analytics", r"icon: <Hexagon size={24} color=\"#8947B3\" strokeWidth={1.5} />, desc: 'Workforce analytics"),
]

for old, new in mappings:
    content = content.replace(old, new)


with open('src/components/Navbar.jsx', 'w') as f:
    f.write(content)
print("Updated successfully")
