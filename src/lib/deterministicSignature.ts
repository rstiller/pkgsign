export interface SignatureFileEntry {
    path: string;
    sha512: string;
}

export interface SignatureInfo {
    version: string;
    files: SignatureFileEntry[];
    signature: string;
    identity: SignatureIdentity;
}

export interface SignatureIdentity {
    keybaseUser?: string;
    pgpPublicKeyUrl?: string;
}

export function createSignatureFromEntries(entries: SignatureFileEntry[]): string {
    let deterministicSignatureString = '';
    for (let entry of entries) {
        deterministicSignatureString += entry.path + '\n' + entry.sha512 + '\n';
    }
    return deterministicSignatureString;
}