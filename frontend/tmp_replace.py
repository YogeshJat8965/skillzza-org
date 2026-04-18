import re
import random

with open('src/components/Navbar.jsx', 'r') as f:
    text = f.read()

# Replace all section dotColors and accentGradients
text = re.sub(r"dotColor: '#[A-Za-z0-9]+'", "dotColor: '#BD1723'", text)
text = re.sub(r"accentGradient: 'linear-gradient\(135deg, #[A-Za-z0-9]+, #[A-Za-z0-9]+\)'", "accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)'", text)

# Function to alternate pill colors
pill_colors = ['red', 'purple']
pill_idx = 0
def replace_pill(match):
    global pill_idx
    color = pill_colors[pill_idx % 2]
    pill_idx += 1
    return f"pillColor: '{color}'"

text = re.sub(r"pillColor: '(teal|blue|orange|pink|green|purple|red)'", replace_pill, text)

# Replace all iconGradients to alternate between red and purple soft gradients
red_grad = "'linear-gradient(135deg, #fce8eb, #f7d1d6)'"
purple_grad = "'linear-gradient(135deg, #f4eaf9, #e0c8f0)'"

grad_idx = 0
def replace_grad(match):
    global grad_idx
    grad = red_grad if grad_idx % 2 == 0 else purple_grad
    grad_idx += 1
    return f"iconGradient: {grad}"

text = re.sub(r"iconGradient: 'linear-gradient\(135deg, #[A-Za-z0-9]+, #[A-Za-z0-9]+\)'", replace_grad, text)

text = re.sub(r"iconShadow: '[^']+'", "iconShadow: '0 4px 12px rgba(189,23,35,0.12)'", text)

# And fix Agent Flow hardcoded nodes colors (there are inline styles like background: '#00e5b0' inside Agentic AI flow)
text = text.replace("background: '#00e5b0'", "background: '#8947B3'")
text = text.replace("color: '#059669'", "color: '#BD1723'")
text = text.replace("background: 'rgba(5,150,105,0.08)'", "background: 'rgba(189,23,35,0.08)'")
text = text.replace("border: '1px solid rgba(5,150,105,0.15)'", "border: '1px solid rgba(189,23,35,0.15)'")
text = text.replace("color: '#6ee7b7'", "color: '#e4909a'")

with open('src/components/Navbar.jsx', 'w') as f:
    f.write(text)

print("Done")
