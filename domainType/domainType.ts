export function domainType(domains: string[]): string[] {
    // "organization", "commercial", "network", "information"
    let domainTypes: string[] = [];
    domains.forEach(dom => {
        const domArr: string[] = dom.split('.');
        const topLevel: string = domArr[domArr.length - 1];
        if (topLevel === 'org') {
            domainTypes.push('organization');
        }
        if (topLevel === 'com') {
            domainTypes.push('commercial');
        }
        if (topLevel === 'net') {
            domainTypes.push('network');
        }
        if (topLevel === 'info') {
            domainTypes.push('information');
        }
    })
    return domainTypes;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));