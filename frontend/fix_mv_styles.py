import os

def fix_mv_styles():
    path = "/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/AboutPage.jsx"
    with open(path, "r") as f:
        c = f.read()

    # Change background colour
    c = c.replace(
        """        .about-mv {
          background: #efefef;""",
        """        .about-mv {
          background: #ffffff;"""
    )
    
    # Update container gaps
    c = c.replace(
        "gap: clamp(24px, 3.5vw, 36px);",
        "gap: 24px;"
    )

    # Card border-radius, min-height & padding
    c = c.replace(
        """        .about-mv__card {
          color: #ffffff;
          border-radius: 0;
          border-top-left-radius: 34px;
          border-bottom-right-radius: 34px;
          padding: clamp(24px, 3.2vw, 36px);""",
        """        .about-mv__card {
          color: #ffffff;
          border-radius: 56px 0 56px 0;
          padding: 64px 44px;"""
    )
    
    c = c.replace(
        """        .about-mv__card--mission {
          background: #a27ab7;
          margin-top: 8px;
          min-height: 430px;
        }""",
        """        .about-mv__card--mission {
          background: #A37DB3;
          margin-top: 0;
        }"""
    )

    c = c.replace(
        """        .about-mv__card--vision {
          background: #cf2c2e;
          min-height: 430px;
        }""",
        """        .about-mv__card--vision {
          background: #C4312F;
        }"""
    )
    
    # Adjust right column placing (Vision card push down)
    c = c.replace(
        """        .about-mv__right {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding-top: 24px;
        }""",
        """        .about-mv__right {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 60px;
          position: relative;
        }"""
    )
    
    # Fix the Chips styling (curves & position)
    c = c.replace(
        """        .about-mv__chip {
          width: 92px;
          height: 56px;
          background: #1c97d4;
          border-top-left-radius: 26px;
          border-bottom-right-radius: 26px;
        }""",
        """        .about-mv__chip {
          width: 96px;
          height: 80px;
          background: #1994D2;
          border-radius: 32px 0 32px 0;
          margin-bottom: 0px;
        }"""
    )

    c = c.replace(
        """        .about-mv__chip--yellow {
          width: 92px;
          height: 56px;
          background: #fecd2a;
          border-top-left-radius: 26px;
          border-bottom-right-radius: 26px;
          align-self: flex-start;
          margin-top: -94px;
          margin-left: -138px;
        }""",
        """        .about-mv__chip--yellow {
          width: 80px;
          height: 60px;
          background: #F1C40F;
          border-radius: 24px 0 24px 0;
          position: absolute;
          bottom: -40px;
          left: -48px;
        }"""
    )

    with open(path, "w") as f:
        f.write(c)

if __name__ == '__main__':
    fix_mv_styles()
