import re

with open('frontend/src/pages/InsightCaseStudyPage.jsx', 'r') as f:
    text = f.read()

# Replace the inner section container to be a white box
old_str = '''      <section className="w-full px-4 md:px-8 mt-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="space-y-6">'''

new_str = '''      <section className="w-full px-4 md:px-8 mt-8 mb-16">
        <div className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-[#E2E8F0] p-8 md:p-12 lg:p-16 shadow-sm">
          <div className="space-y-12">'''

if old_str in text:
    text = text.replace(old_str, new_str)
    with open('frontend/src/pages/InsightCaseStudyPage.jsx', 'w') as f:
        f.write(text)
    print("InsightCaseStudyPage updated main container!")
else:
    print("InsightCaseStudyPage container old_str not found!")

# Now make the bottom cards look cleaner too
old_bottom_1 = '''<article className="rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]" style={{ borderColor: `${accent}33` }}>
                  <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-3">Quick Snapshot</h3>'''
new_bottom_1 = '''<article className="rounded-2xl border p-6 mt-16" style={{ borderColor: `${accent}33`, backgroundColor: '#F8FAFCCC' }}>
                  <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-4">Quick Snapshot</h3>'''
text = text.replace(old_bottom_1, new_bottom_1)

old_bottom_2 = '''<article className="rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]" style={{ borderColor: `${accent}33` }}>
              <p className="font-['DM_Sans',sans-serif] text-[13px] uppercase tracking-[0.08em] font-bold" style={{ color: accent }}>AI Readiness Signal</p>'''
new_bottom_2 = '''<article className="rounded-2xl border p-6 mt-6" style={{ borderColor: `${accent}33`, backgroundColor: softAccent }}>
              <p className="font-['DM_Sans',sans-serif] text-[13px] uppercase tracking-[0.08em] font-bold" style={{ color: accent }}>AI Readiness Signal</p>'''
text = text.replace(old_bottom_2, new_bottom_2)

old_bottom_3 = '''<article className="rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]" style={{ borderColor: `${accent}33` }}>
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#475569] mb-4">
                Explore the other'''
new_bottom_3 = '''<article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm mt-8 mx-auto text-center" style={{ maxWidth: '600px' }}>
              <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#475569] mb-4">
                Explore the other'''
text = text.replace(old_bottom_3, new_bottom_3)

# Fix explore button flow
old_explore_btns = '''              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button'''
new_explore_btns = '''              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <button'''
text = text.replace(old_explore_btns, new_explore_btns)


with open('frontend/src/pages/InsightCaseStudyPage.jsx', 'w') as f:
    f.write(text)
print("Finished replacements")
