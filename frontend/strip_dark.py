import re

filepath = 'src/pages/AITalentResearchHubDetailPage.jsx'

with open(filepath, 'r') as f:
    text = f.read()

# Replace dynamic background logic
text = text.replace(
    "`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-[#FAFAFA]'}`",
    "'min-h-screen bg-[#FAFAFA]'"
)
text = text.replace(
    "`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-[#FAFAFA]'}`",
    "'min-h-screen flex flex-col bg-[#FAFAFA]'"
)

# Remove the isDarkMode extraction
text = text.replace(
    "const themeContext = useContext(ThemeContext);\n  const isDarkMode = themeContext ? themeContext.isDarkMode : false;",
    ""
)

# Remove all dark: classes using regex
text = re.sub(r'dark:[a-zA-Z0-9-]+', '', text)

# Clean up extra spaces
text = re.sub(r' {2,}', ' ', text)
text = text.replace(' "', '"').replace('" ', '"')

with open(filepath, 'w') as f:
    f.write(text)

print("Done removing dark mode")
