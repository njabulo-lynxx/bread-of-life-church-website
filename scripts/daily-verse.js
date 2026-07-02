// A curated list of 31 scriptures to match every day of the month automatically
const monthlyVerses = [
    { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", ref: "Jeremiah 29:11" },
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "I can do all things through him who strengthens me.", ref: "Philippians 4:13" },
    { text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.", ref: "John 3:16" },
    { text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", ref: "Romans 8:28" },
    { text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", ref: "Isaiah 41:10" },
    { text: "God is our refuge and strength, a very present help in trouble.", ref: "Psalm 46:1" },
    { text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.", ref: "Galatians 5:22-23" },
    { text: "Now faith is the assurance of things hoped for, the conviction of things not seen.", ref: "Hebrews 11:1" },
    { text: "For God gave us a spirit not of fear but of power and love and self-control.", ref: "2 Timothy 1:7" },
    { text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability.", ref: "1 Corinthians 10:13" },
    { text: "Train up a child in the way he should go; even when he is old he will not depart from it.", ref: "Proverbs 22:6" },
    { text: "Trust in the Lord with all your heart, and do not lean on your own understanding.", ref: "Proverbs 3:5" },
    { text: "In all your ways acknowledge him, and he will make straight your paths.", ref: "Proverbs 3:6" },
    { text: "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you.", ref: "Deuteronomy 31:6" },
    { text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23" },
    { text: "Come to me, all who labor and are heavy laden, and I will give you rest.", ref: "Matthew 11:28" },
    { text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", ref: "Psalm 34:18" },
    { text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", ref: "Philippians 4:6" },
    { text: "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.", ref: "Philippians 4:7" },
    { text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.", ref: "Isaiah 40:31" },
    { text: "The name of the Lord is a strong tower; the righteous man runs into it and is safe.", ref: "Proverbs 18:10" },
    { text: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.", ref: "Ephesians 4:32" },
    { text: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105" },
    { text: "This is the day that the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
    { text: "Give thanks to the Lord, for he is good, for his steadfast love endures forever.", ref: "Psalm 136:1" },
    { text: "Set your minds on things that are above, not on things that are on earth.", ref: "Colossians 3:2" },
    { text: "Let all that you do be done in love.", ref: "1 Corinthians 16:14" },
    { text: "The Lord will fight for you, and you have only to be silent.", ref: "Exodus 14:14" },
    { text: "Above all else, guard your heart, for everything you do flows from it.", ref: "Proverbs 4:23" },
    { text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?", ref: "Micah 6:8" }
];

function displayDailyVerse() {
    // Get current day of the month (1 through 31)
    const today = new Date().getDate();
    
    // Arrays are 0-indexed, so subtract 1
    const dailyVerse = monthlyVerses[today - 1];
    
    // Fallback safety check
    if (dailyVerse) {
        document.getElementById('verse-content').innerText = `“${dailyVerse.text}”`;
        document.getElementById('verse-ref').innerText = `— ${dailyVerse.ref}`;
    }
}

// Run the function when the page loads
window.onload = displayDailyVerse;