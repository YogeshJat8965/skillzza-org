with open('frontend/src/components/Navbar.jsx', 'r') as f:
    content = f.read()
row = content.split("const ListRowItem =")[1].split("const CompactGridDropdown =")[0]
print(row[1300:2500])
