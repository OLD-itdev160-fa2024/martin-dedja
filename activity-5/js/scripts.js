class Package {
    constructor(name, description, author, downloadCount, starCount) {
        this.name = name;
        this.description = description;
        this.author = author;
        this.downloadCount = downloadCount;
        this.starCount = starCount;
    }
    formatDownloads() {
        return this.downloadCount.toLocaleString();
    }
}


let packages = [
    new Package(
        'Atom Beautify',
        'Beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, and SQL in Atom',
        'Glavin Wiechert',
        9372180,
        4.5
    ),
    new Package(
        'Minimap',
        'A preview of the full source code.',
        'Cédric Néhémie',
        8472394,
        5
    ),
    new Package(
        'Emmet: Turbo-charged HTML & CSS Workflow',
        'Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow: it allows developers to write large blocks of code with simple and short abbreviations.',
        'Sergey Chikuyonok',
        1859233,
        4.7
    )
];

function displayPackages() {
    packages.forEach((pkg, index) => {
        document.getElementById(`p${index + 1}-name`).textContent = pkg.name;
        document.getElementById(`p${index + 1}-description`).textContent = pkg.description;
        document.getElementById(`p${index + 1}-author`).textContent = `Author: ${pkg.author}`;
        document.getElementById(`p${index + 1}-downloads`).textContent = `Downloads: ${pkg.formatDownloads()}`;
        document.getElementById(`p${index + 1}-stars`).textContent = `Stars: ${pkg.starCount}`;
    });
}

document.getElementById('date').textContent = 'Published on: November 12, 2023';

window.onload = displayPackages;
