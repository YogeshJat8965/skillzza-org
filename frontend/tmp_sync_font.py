import os
import re

files_to_update = [
    'src/pages/AboutPage.jsx',
    'src/pages/OurPathwayPage.jsx',
    'src/pages/PartnerCollaborationPage.jsx'
]

def process_file(filepath):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, not found.")
        return
        
    with open(filepath, 'r') as f:
        content = f.read()
        
    # Replace Font Families
    content = content.replace("font-family: 'Poppins', sans-serif;", "font-family: 'Inter', 'Segoe UI', sans-serif;")
    content = content.replace("fontFamily: 'League Spartan, sans-serif'", "fontFamily: \"'Inter', 'Segoe UI', sans-serif\"")
    content = content.replace("fontFamily: 'DM Sans, sans-serif'", "fontFamily: \"'Inter', 'Segoe UI', sans-serif\"")
    
    if 'AboutPage' in filepath:
        # H1
        content = content.replace("clamp(16px, 2vw, 30px)", "clamp(32px, 5vw, 56px)")
        content = content.replace("clamp(16px, 4.4vw, 24px)", "clamp(28px, 6vw, 40px)")
        # H2
        content = content.replace("clamp(24px, 2.6vw, 32px)", "clamp(28px, 4vw, 38px)")
        # H3
        content = content.replace("clamp(22px, 1.9vw, 32px)", "clamp(24px, 3vw, 28px)")
        
    elif 'OurPathwayPage' in filepath:
        # H2 fixes
        content = content.replace("fontSize: '48px'", "fontSize: '38px'")
        # H3 fixes
        content = content.replace("fontSize: '36px'", "fontSize: '28px'")
        # Body fixes
        content = content.replace("fontSize: '22px'", "fontSize: '16px'")
        
    elif 'PartnerCollaborationPage' in filepath:
        # H1
        content = content.replace("clamp(38px, 4.5vw, 56px)", "clamp(36px, 5vw, 56px)")
        # H2
        content = content.replace("clamp(26px, 2.4vw, 38px)", "clamp(28px, 4vw, 38px)")
        content = content.replace("clamp(32px, 3.4vw, 50px)", "clamp(28px, 4vw, 38px)")
        # H3
        content = content.replace("clamp(24px, 2.3vw, 34px)", "clamp(24px, 3vw, 28px)")
        content = content.replace("clamp(22px, 1.8vw, 32px)", "clamp(20px, 2.5vw, 28px)")
        # Body max 16px instead of 20/18
        content = content.replace("clamp(15px, 1.5vw, 20px)", "clamp(14px, 1.5vw, 16px)")
        content = content.replace("clamp(15px, 1.4vw, 18px)", "clamp(14px, 1.5vw, 16px)")
    
    with open(filepath, 'w') as f:
        f.write(content)
        
    print(f"Updated {filepath}")

for path in files_to_update:
    process_file(path)

print("Done")
