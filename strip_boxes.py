import os

files = [
    'frontend/src/pages/InsightCaseStudyPage.jsx',
    'frontend/src/pages/SkillDigestArticlePage.jsx',
    'frontend/src/pages/SkillUnpluggedEpisodePage.jsx',
    'frontend/src/pages/SkillzzaLiveSessionPage.jsx'
]

for filepath in files:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r') as f:
        text = f.read()

    # 1. Strip the main giant container box (if we added it)
    text = text.replace(
        '<div className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-[#E2E8F0] p-8 md:p-12 lg:p-16 shadow-sm">',
        '<div className="max-w-[1000px] mx-auto">'
    )
    
    text = text.replace(
        '<div className="bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-8 md:p-12 space-y-12">',
        '<div className="space-y-12">'
    )

    # 2. General strip of "article className=... bg-white ... shadow-[...]" across asides / bottom cards
    # We will use regex to find classNames with `bg-white` and `shadow` and strip them to look simpler.
    # For example: className="rounded-2xl border bg-white p-5 shadow-[...]" -> className="pb-6 border-b border-[#E2E8F0] last:border-0"
    
    import re
    # Strip from Insight Case Study bottom cards
    text = text.replace(
        '<article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm mt-12 mx-auto text-center" style={{ maxWidth: \'600px\' }}>',
        '<article className="mt-12 mx-auto text-center" style={{ maxWidth: \'600px\' }}>'
    )
    text = text.replace(
        '<article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm mt-8 mx-auto text-center" style={{ maxWidth: \'600px\' }}>',
        '<article className="mt-8 mx-auto text-center" style={{ maxWidth: \'600px\' }}>'
    )
    
    # Quick Snapshot & other cards
    text = text.replace('className="rounded-2xl border p-6 mt-16"', 'className="mt-16"')
    text = text.replace('className="rounded-2xl border p-6 mt-6"', 'className="mt-6"')
    text = text.replace('className="rounded-2xl border p-6 mt-10"', 'className="mt-10"')
    
    # Strip background of the whole page (F8F9FA) to pure white, so that text flows on a bright white screen
    # <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingBottom: '100px' }}> -> <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingBottom: '100px' }}>
    text = text.replace("backgroundColor: '#F8F9FA'", "backgroundColor: '#ffffff'")

    # Skill Unplugged / Live Session Sidebars
    # They have <article className="rounded-2xl border bg-white p-5 shadow-[...]" style={{ borderColor: `${accent}33` }}>
    # We replace them to a simpler layout
    text = re.sub(
        r'<article\s+className="rounded-2xl border bg-white p-5 shadow-\[[^\]]+\]"\s+style=\{\{\s*borderColor:\s*`\$\{accent\}33`\s*\}\}>',
        r'<article className="border-l-2 p-4" style={{ borderColor: accent }}>',
        text
    )
    
    text = re.sub(
        r'<div className="rounded-2xl border bg-white p-4 shadow-\[[^\]]+\]"\s+style=\{\{\s*borderColor:\s*`\$\{accent\}33`\s*\}\}>',
        r'<div className="border-l-2 p-4" style={{ borderColor: accent }}>',
        text
    )

    with open(filepath, 'w') as f:
        f.write(text)

