# Solana Schnellstart

## Willkommen zum Solana Schnellstart!

Dieses Repository enthält alles, was du brauchst, um mit Solana-Entwicklung zu beginnen.

## Empfohlene Wege zum Starten:

### Option 1: Solana Playground (Empfohlen für Anfänger)
1. Öffne [Solana Playground](https://beta.solpg.io/)
2. Erstelle eine Playground-Wallet
3. Hole dir Devnet SOL über den Airdrop-Button
4. Beginne mit dem Programmieren!

### Option 2: Web3.js in Node.js

Installiere die Abhängigkeiten:
```bash
npm install @solana/web3.js
```

Erstelle eine Wallet und hole dir Devnet SOL:
```javascript
const { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } = require('@solana/web3.js');

// Neue Wallet erstellen
const wallet = Keypair.generate();
console.log('Public Key:', wallet.publicKey.toString());

// Verbindung zum Devnet
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

// Airdrop anfordern
async function requestAirdrop() {
  const airdropSignature = await connection.requestAirdrop(
    wallet.publicKey,
    LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(airdropSignature);
  console.log('Airdrop erfolgreich!');
}

requestAirdrop();
```

### Option 3: Lokale Solana CLI

Installiere Solana CLI lokal auf deinem Computer:
```bash
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

Dann:
```bash
# Neue Wallet erstellen
solana-keygen new

# Auf Devnet umschalten
solana config set --url devnet

# Airdrop anfordern
solana airdrop 2

# Balance prüfen
solana balance
```

## Weitere Ressourcen

- [Solana Dokumentation](https://solana.com/de/docs)
- [Solana Cookbook](https://solanacookbook.com/)
- [Solana Playground](https://beta.solpg.io/)
- [Web3.js Dokumentation](https://solana-labs.github.io/solana-web3.js/)

## Nächste Schritte

1. Erstelle deine erste Transaktion
2. Lerne über Program Derived Addresses (PDAs)
3. Baue dein erstes Solana-Programm
4. Deploye auf Devnet

Viel Erfolg! 🚀
