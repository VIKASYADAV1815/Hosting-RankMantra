const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    for (const [oldStr, newStr] of replacements) {
        if (content.includes(oldStr)) {
            content = content.split(oldStr).join(newStr);
            modified = true;
        }
    }
    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
    }
}

// Map of file -> replacements array
const changes = {
    'src/components/PageHero.tsx': [
        ['min-h-[300px]', 'min-h-75'],
        ['md:min-h-[350px]', 'md:min-h-87.5'],
        ['bg-gradient-to-t', 'bg-linear-to-t'],
        ['flex-shrink-0', 'shrink-0']
    ],
    'src/components/Navbar.tsx': [
        ['flex-shrink-0', 'shrink-0'],
        ['top-[60px]', 'top-15']
    ],
    'src/components/Hero.tsx': [
        ['min-h-[700px]', 'min-h-175'],
        ['bg-gradient-to-t', 'bg-linear-to-t']
    ],
    'src/components/VPSFeatures.tsx': [
        ['bg-[size:3rem_3rem]', 'bg-size-[3rem_3rem]'],
        ['hover:bg-gradient-to-br', 'hover:bg-linear-to-br'],
        ['hover:to-[#E00C15]/[0.04]', 'hover:to-[#E00C15]/4'],
        ['min-h-[260px]', 'min-h-65'],
        ['h-[2px]', 'h-0.5'],
        ['w-[2px]', 'w-0.5']
    ],
    'src/components/VPSIntro.tsx': [
        ['[background-size:24px_24px]', 'bg-size-[24px_24px]']
    ],
    'src/components/WebHostingFeatures.tsx': [
        ['bg-[size:3rem_3rem]', 'bg-size-[3rem_3rem]'],
        ['bg-gradient-to-br', 'bg-linear-to-br'],
        ['to-[#E00C15]/[0.04]', 'to-[#E00C15]/4'],
        ['min-h-[260px]', 'min-h-65'],
        ['h-[2px]', 'h-0.5'],
        ['w-[2px]', 'w-0.5']
    ],
    'src/components/ResellerIntro.tsx': [
        ['[background-size:24px_24px]', 'bg-size-[24px_24px]']
    ],
    'src/components/Features.tsx': [
        ['bg-[size:3rem_3rem]', 'bg-size-[3rem_3rem]'],
        ['bg-gradient-to-br', 'bg-linear-to-br'],
        ['to-[#E00C15]/[0.04]', 'to-[#E00C15]/4'],
        ['min-h-[260px]', 'min-h-65'],
        ['h-[2px]', 'h-0.5'],
        ['w-[2px]', 'w-0.5']
    ],
    'src/app/knowledgebase/page.tsx': [
        ['flex-grow', 'grow']
    ],
    'src/app/contact-us/page.tsx': [
        ['flex-grow', 'grow']
    ],
    'src/components/WebHostingHero.tsx': [
        ['min-h-[600px]', 'min-h-150'],
        ['bg-gradient-to-t', 'bg-linear-to-t'],
        ['flex-shrink-0', 'shrink-0']
    ],
    'src/app/layout.tsx': [
        ['flex-grow', 'grow'],
        ['pt-[100px]', 'pt-25']
    ],
    'src/components/WebHostingCTA.tsx': [
        ['min-h-[400px]', 'min-h-100'],
        ['bg-gradient-to-r', 'bg-linear-to-r']
    ],
    'src/app/open-ticket/page.tsx': [
        ['bg-gradient-to-b', 'bg-linear-to-b'],
        ['flex-grow', 'grow']
    ],
    'src/app/announcements/page.tsx': [
        ['flex-grow', 'grow'],
        ['flex-shrink-0', 'shrink-0']
    ],
    'src/components/Testimonials.tsx': [
        ['[background-size:16px_16px]', 'bg-size-[16px_16px]'],
        ['bg-gradient-to-r', 'bg-linear-to-r'],
        ['bg-gradient-to-l', 'bg-linear-to-l'],
        ['w-[300px]', 'w-75'],
        ['sm:w-[350px]', 'sm:w-87.5'],
        ['min-h-[90px]', 'min-h-22.5']
    ],
    'src/components/FAQ.tsx': [
        ['flex-shrink-0', 'shrink-0']
    ],
    'src/components/TechSpecs.tsx': [
        ['[background-size:16px_16px]', 'bg-size-[16px_16px]']
    ],
    'src/components/ResellerFeatures.tsx': [
        ['bg-[size:3rem_3rem]', 'bg-size-[3rem_3rem]'],
        ['hover:bg-gradient-to-br', 'hover:bg-linear-to-br'],
        ['hover:to-[#E00C15]/[0.04]', 'hover:to-[#E00C15]/4'],
        ['min-h-[220px]', 'min-h-55'],
        ['h-[2px]', 'h-0.5'],
        ['w-[2px]', 'w-0.5']
    ],
    'src/components/WebHostingIntro.tsx': [
        ['[background-size:24px_24px]', 'bg-size-[24px_24px]']
    ]
};

Object.keys(changes).forEach(filePath => {
    replaceInFile(filePath, changes[filePath]);
});

console.log("Replacements done.");
