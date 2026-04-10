import re

def fix():
    path = "/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/OurPathwayPage.jsx"
    with open(path, "r") as f:
        c = f.read()

    # Mobile CSS overrides
    c = c.replace("font-size: 32px !important;", "font-size: 28px !important;")
    c = c.replace("font-size: 20px !important;", "font-size: 16px !important;")
    c = c.replace("font-size: 28px !important;", "font-size: 20px !important;")
    c = c.replace("font-size: 24px !important;", "font-size: 18px !important;")
    c = c.replace("font-size: 42px !important;", "font-size: 32px !important;")
    c = c.replace("font-size: 26px !important;", "font-size: 20px !important;")
    c = c.replace("font-size: 22px !important;", "font-size: 16px !important;")
    
    # Inline React styles fixes
    # 1. Subheading under hero (was 28px, making 20px)
    c = c.replace(
        "className=\"pathway-hero-subheading\"\n              style={{\n                fontFamily: \"'Inter', 'Segoe UI', sans-serif\",\n                fontWeight: 400,\n                fontSize: '28px',",
        "className=\"pathway-hero-subheading\"\n              style={{\n                fontFamily: \"'Inter', 'Segoe UI', sans-serif\",\n                fontWeight: 400,\n                fontSize: '20px',"
    )
    # 2. Hero description text (was 28px, making 16px)
    c = c.replace(
        "className=\"pathway-hero-description\"\n              style={{\n                fontFamily: \"'Inter', 'Segoe UI', sans-serif\",\n                fontWeight: 400,\n                fontSize: '28px',",
        "className=\"pathway-hero-description\"\n              style={{\n                fontFamily: \"'Inter', 'Segoe UI', sans-serif\",\n                fontWeight: 400,\n                fontSize: '16px',"
    )
    # 3. Hero buttons (was 20px, making 16px)
    c = c.replace(
        "fontSize: '20px',\n                    fontWeight: 600,\n                    color: '#FFFFFF',",
        "fontSize: '16px',\n                    fontWeight: 600,\n                    color: '#FFFFFF',"
    )
    
    # 4. Our Commitment (Eyebrow: 38px -> 20px)
    c = c.replace(
        "fontSize: '38px',\n                lineHeight: '1',\n                letterSpacing: '0%',\n                textAlign: 'center',\n                color: '#0F0F0F',\n                marginBottom: '12px',\n              }}\n            >\n              Our Commitment",
        "fontSize: '20px',\n                lineHeight: '1',\n                letterSpacing: '2px',\n                textTransform: 'uppercase',\n                textAlign: 'center',\n                color: '#0F0F0F',\n                marginBottom: '12px',\n              }}\n            >\n              Our Commitment"
    )

    # 5. Our Commitment paragraph text (was 28px -> 16px)
    c = c.replace(
        "fontSize: '28px',\n                lineHeight: '1',\n                letterSpacing: '0%',\n                textAlign: 'center',\n                leadingTrim: 'none',\n                color: '#3F3F46',\n                width: '100%',\n                maxWidth: '1280px',",
        "fontSize: '16px',\n                lineHeight: '1.6',\n                letterSpacing: '0%',\n                textAlign: 'center',\n                leadingTrim: 'none',\n                color: '#3F3F46',\n                width: '100%',\n                maxWidth: '1000px',"
    )

    # 6. SDG numbers (was 38px -> 26px)
    # the 38px here was 48px previously, let's fix it properly using context
    c = re.sub(
        r"fontSize:\s*'38px',\s*lineHeight:\s*'1',\s*color:\s*card\.sdgColor,",
        r"fontSize: '26px',\n                        lineHeight: '1',\n                        color: card.sdgColor,",
        c
    )
    
    # 7. SDG Titles (was 28px -> 20px)
    c = re.sub(
        r"fontSize:\s*'28px',\s*lineHeight:\s*'1\.25',\s*color:\s*'#890404',",
        r"fontSize: '20px',\n                        lineHeight: '1.25',\n                        color: '#890404',",
        c
    )
    
    # 8. SDG paragraph (was 22px -> 15px)
    c = re.sub(
        r"fontSize:\s*'22px',\s*lineHeight:\s*'1\.4',\s*marginTop:\s*0,\s*textAlign:\s*'left',\s*color:\s*card\.textColor,",
        r"fontSize: '15px',\n                      lineHeight: '1.6',\n                      marginTop: 0,\n                      textAlign: 'left',\n                      color: card.textColor,",
        c
    )
    
    # 9. Eyebrows for other sections (was 38px -> 20px)
    eyebrows = ["The Skillzza Pathway Difference", "Who We Serve", "A Network that Extends Worldwide", "Get Started Today"]
    for e in eyebrows:
        c = c.replace(
            f"fontSize: '38px',\n                lineHeight: '1',\n                letterSpacing: '0%',\n                textAlign: 'center',\n                color: '#0F0F0F',\n                marginBottom: '14px',\n              }}\n            >\n              {e}",
            f"fontSize: '20px',\n                lineHeight: '1',\n                letterSpacing: '2px',\n                textTransform: 'uppercase',\n                textAlign: 'center',\n                color: '#0F0F0F',\n                marginBottom: '14px',\n              }}\n            >\n              {e}"
        )
        c = c.replace(
            f"fontSize: '38px',\n              lineHeight: '1',\n              letterSpacing: '0%',\n              textAlign: 'center',\n              color: '#0F0F0F',\n              marginBottom: '12px',\n            }}\n          >\n            {e}",
            f"fontSize: '20px',\n              lineHeight: '1',\n              letterSpacing: '2px',\n              textTransform: 'uppercase',\n              textAlign: 'center',\n              color: '#0F0F0F',\n              marginBottom: '12px',\n            }}\n          >\n            {e}"
        )

    # 10. Highlights row title (was 30px -> 20px)
    c = re.sub(
        r"fontSize:\s*'30px',\s*lineHeight:\s*'1\.1',",
        r"fontSize: '20px',\n                      lineHeight: '1.2',",
        c
    )
    # Highlights row text (was 18px -> 15px)
    c = re.sub(
        r"fontSize:\s*'18px',\s*color:\s*'#3F3F46',",
        r"fontSize: '15px',\n                      color: '#3F3F46',",
        c
    )
    
    # 11. Who We Serve Cards
    # card title (was 24px -> 20px)
    c = re.sub(r"fontSize:\s*'24px',(\s*)lineHeight:\s*'1\.2',(\s*)color:\s*card\.titleColor,", r"fontSize: '20px',\1lineHeight: '1.2',\2color: card.titleColor,", c)
    
    # 12. Partnership pill (was 20px -> 16px)
    c = re.sub(r"fontSize:\s*'20px',(\s*)color:\s*'#FFFFFF',", r"fontSize: '16px',\1color: '#FFFFFF',", c)
    
    # 13. Tab buttons (was 38px -> 18px)
    c = c.replace(
        "fontSize: '38px',\n                    fontWeight: isActive ? 600 : 400,",
        "fontSize: '18px',\n                    fontWeight: isActive ? 600 : 400,"
    )
    
    # 14. Tab Content Title (was 30px -> 24px)
    c = re.sub(r"fontSize:\s*'30px',(\s*)lineHeight:\s*'1\.2',(\s*)color:\s*'#CF0C0C',", r"fontSize: '24px',\1lineHeight: '1.2',\2color: '#CF0C0C',", c)
    
    # 15. Tab bullets (was 20px -> 16px)
    c = re.sub(r"fontSize:\s*'20px',(\s*)lineHeight:\s*'1\.4',(\s*)color:\s*'#0F1114',", r"fontSize: '16px',\1lineHeight: '1.4',\2color: '#0F1114',", c)

    # 16. CTA Title (was 42px -> 38px)
    c = re.sub(r"fontSize:\s*'42px',(\s*)lineHeight:\s*'1\.1',", r"fontSize: '38px',\1lineHeight: '1.1',", c)

    with open(path, "w") as f:
        f.write(c)

if __name__ == '__main__':
    fix()
