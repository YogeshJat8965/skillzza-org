import re

with open('frontend/src/pages/SkillDigestArticlePage.jsx', 'r') as f:
    text = f.read()

# Fix the CSS styles injected
old_css = '''      <style>
        {`
          .digest-section-card {
            transition: all 0.3s ease;
            position: relative;
            background: white;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
            overflow: hidden;
          }
          .digest-section-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
            border-color: #0070AC33;
          }
'''

new_css = '''      <style>
        {`
          .digest-section-card {
            transition: all 0.3s ease;
            position: relative;
            background: transparent;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 2rem;
            margin-bottom: 1rem;
          }
          .digest-section-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
'''

text = text.replace(old_css, new_css)

# Remove background classes on article
old_article = '''<article className="digest-section-card p-6 md:p-8">'''
new_article = '''<article className="digest-section-card">'''
text = text.replace(old_article, new_article)

# Now wrap space-y-6 inside max-w-[1280px] with white bg Box.
old_container = '''      <section className="w-full px-4 md:px-8 mt-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="space-y-6">'''

new_container = '''      <section className="w-full px-4 md:px-8 mt-8 mb-16">
        <div className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-[#E2E8F0] p-8 md:p-12 lg:p-16 shadow-sm">
          <div className="space-y-12">'''
text = text.replace(old_container, new_container)

old_bottom = '''            <article className="rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] text-center">
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#475569] mb-4">
                Enjoyed this quick digest? Explore more concise technical insights and updates.
              </p>
              <button
                onClick={() => navigate('/insights')}
                className="rounded-lg border py-2.5 px-6 font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center hover:bg-gray-50 transition-colors"
                style={{ borderColor: accent, color: accent }}
              >
                Back to Insights
              </button>
            </article>'''

new_bottom = '''            <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm mt-12 mx-auto text-center" style={{ maxWidth: '600px' }}>
              <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#475569] mb-6">
                Enjoyed this quick digest? Explore more concise technical insights and updates.
              </p>
              <button
                onClick={() => navigate('/insights')}
                className="rounded-lg border py-2.5 px-6 font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center hover:bg-gray-50 transition-colors"
                style={{ borderColor: accent, color: accent }}
              >
                Back to Insights
              </button>
            </article>'''
text = text.replace(old_bottom, new_bottom)

with open('frontend/src/pages/SkillDigestArticlePage.jsx', 'w') as f:
    f.write(text)
    
print("Updated SkillDigestArticlePage!")
