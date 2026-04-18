import re

file = 'frontend/src/components/Navbar.jsx'
with open(file, 'r') as f:
    content = f.read()

content = re.sub(
    r": 'linear-gradient\(135deg, #fefefe, #fafafa\)',",
    r": '#f8f9fa',",
    content
)
content = re.sub(
    r": 'linear-gradient\(135deg, rgba\(255,255,255,0\.85\) 0%, rgba\(255,255,255,0\.4\) 100%\)',",
    r": '#f8f9fa',",
    content
)
content = re.sub(
    r"\? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)'\n\s*: '#ffffff',",
    r"? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f8f9fa',",
    content
)
content = re.sub(
    r"\? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)'\n\s*: '#f6f8fb',",
    r"? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f8f9fa',",
    content
)
content = re.sub(
    r"background: h \? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)' : '#fafbfd',",
    r"background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f8f9fa',",
    content
)
content = re.sub(
    r"background: h\n\s*\? `linear-gradient\(145deg,#ffffff,\$\{glowRaw\.replace.*?\\)`\n\s*: '#fafbfd',",
    r"background: h\n          ? `linear-gradient(145deg,#ffffff,${glowRaw.replace(/,[\\s]*[\\d.]+\\)/, ',0.06)')})`\n          : '#f8f9fa',",
    content,
    flags=re.DOTALL
)

with open(file, 'w') as f:
    f.write(content)

