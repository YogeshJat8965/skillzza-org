import os

def fix_about():
    path = "/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/AboutPage.jsx"
    with open(path, "r") as f:
        c = f.read()

    # Hero Banner
    c = c.replace("font-size: clamp(32px, 5vw, 56px);", "font-size: clamp(28px, 4vw, 42px);")
    c = c.replace("font-size: clamp(28px, 6vw, 42px);", "font-size: clamp(22px, 5vw, 32px);")
    
    # Eyebrow
    c = c.replace("font-size: 14px;", "font-size: 15px;")
    
    # Section titles
    c = c.replace("font-size: clamp(28px, 3.5vw, 38px);", "font-size: clamp(24px, 3vw, 32px);")
    
    # CTA Buttons (desktop & mobile)
    c = c.replace("font-size: 24px;", "font-size: 16px;")
    c = c.replace("font-size: 18px;", "font-size: 16px;") # the mobile button was 18px

    # CTA Text (desktop & mobile)
    c = c.replace("font-size: clamp(16px, 2.5vw, 28px);", "font-size: clamp(16px, 2vw, 22px);")
    c = c.replace("font-size: clamp(13px, 3vw, 20px);", "font-size: clamp(14px, 2.5vw, 18px);")
    
    # Mission Vision heading
    c = c.replace("font-size: clamp(26px, 3vw, 38px);", "font-size: clamp(22px, 3vw, 30px);")
    
    # MV text
    c = c.replace("font-size: clamp(14px, 1.2vw, 18px);", "font-size: 15px;")

    with open(path, "w") as f:
        f.write(c)

if __name__ == '__main__':
    fix_about()
