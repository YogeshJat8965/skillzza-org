import re

with open('frontend/src/pages/SkillUnpluggedEpisodePage.jsx', 'r') as f:
    text = f.read()

# Make the wrapper container white structured box
old_container = '''          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
            <div className="space-y-5">
              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">'''
new_container = '''          <div className="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
            <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-8 md:p-12 space-y-12">
              <article className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full ring-4 ring-opacity-20" style={{ backgroundColor: accent, '--tw-ring-color': accent }} />
                  <h3 className="font-['League_Spartan',sans-serif] text-[26px] md:text-[30px] leading-tight font-bold text-[#0F172A]">Episode Snapshot</h3>
                </div>'''
text = text.replace(old_container, new_container)

old_article_2 = '''              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Key Takeaways</h3>'''
new_article_2 = '''              <article className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full ring-4 ring-opacity-20" style={{ backgroundColor: accent, '--tw-ring-color': accent }} />
                  <h3 className="font-['League_Spartan',sans-serif] text-[26px] md:text-[30px] leading-tight font-bold text-[#0F172A]">Key Takeaways</h3>
                </div>'''
text = text.replace(old_article_2, new_article_2)

old_article_3 = '''              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Discussion Prompts</h3>'''
new_article_3 = '''              <article className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full ring-4 ring-opacity-20" style={{ backgroundColor: accent, '--tw-ring-color': accent }} />
                  <h3 className="font-['League_Spartan',sans-serif] text-[26px] md:text-[30px] leading-tight font-bold text-[#0F172A]">Discussion Prompts</h3>
                </div>'''
text = text.replace(old_article_3, new_article_3)

# And remove text size formatting that breaks
text = text.replace('''<h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">''', '')

with open('frontend/src/pages/SkillUnpluggedEpisodePage.jsx', 'w') as f:
    f.write(text)

print("Updated SkillUnpluggedEpisodePage!")
