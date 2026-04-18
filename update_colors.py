import re

file = 'frontend/src/components/Navbar.jsx'
with open(file, 'r') as f:
    content = f.read()

# 1. Navbar white
content = re.sub(
    r"background: 'rgba\(255,255,255,0\.92\)',",
    r"background: '#ffffff',",
    content
)

# 2. Cards grey (#f4f5f7)
content = re.sub(
    r": 'linear-gradient\(135deg, #fefefe, #fafafa\)',",
    r": '#f4f5f7',",
    content
)
content = re.sub(
    r": 'linear-gradient\(135deg, rgba\(255,255,255,0\.85\) 0%, rgba\(255,255,255,0\.4\) 100%\)',",
    r": '#f4f5f7',",
    content
)
content = re.sub(
    r"\? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)'\n\s*: '#ffffff',",
    r"? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f4f5f7',",
    content
)
content = re.sub(
    r"\? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)'\n\s*: '#f6f8fb',",
    r"? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f4f5f7',",
    content
)
content = re.sub(
    r"background: h \? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)' : '#fafbfd',",
    r"background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f4f5f7',",
    content
)
content = re.sub(
    r"background: h\n\s*\? `linear-gradient\(145deg,#ffffff,\$\{glowRaw\.replace\(/,\[\\\\s\]\*\[\\\\d\.\]\+\\\\\)/, ',0\.06'\)'\)}\)`\n\s*: '#fafbfd',",
    r"background: h\n          ? `linear-gradient(145deg,#ffffff,${glowRaw.replace(/,[\\s]*[\\d.]+\\)/, ',0.06)')})`\n          : '#f4f5f7',",
    content
)

with open(file, 'w') as f:
    f.write(content)
