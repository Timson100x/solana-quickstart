# Solana Devnet Starten

## 🚀 Devnet ist bereit!

Das Devnet-Beispiel wurde für dich vorbereitet. Hier sind die Schritte:

## Schnellstart mit Solana Playground (Empfohlen)

Der einfachste Weg, mit Solana Devnet zu arbeiten:

1. **Öffne Solana Playground**: https://beta.solpg.io/

2. **Erstelle eine Wallet**:
   - Klicke unten links auf "Not connected"
   - Klicke auf "Create"  
   - Speichere dein Keypair sicher!

3. **Hole Devnet SOL**:
   - Klicke auf den "Airdrop" Button
   - Du erhältst 2 SOL auf Devnet

4. **Fertig!** Du kannst jetzt:
   - Solana-Programme schreiben
   - Transaktionen testen
   - Smart Contracts deployen

## Mit Node.js und Web3.js

Wenn die Installation von `@solana/web3.js` abgeschlossen ist:

```bash
node devnet-example.js
```

Das Skript wird:
- ✓ Mit Solana Devnet verbinden
- ✓ Eine neue Wallet erstellen
- ✓ 2 SOL per Airdrop holen
- ✓ Die Balance prüfen
- ✓ Devnet-Informationen anzeigen

## Was ist Devnet?

**Devnet** ist die Solana-Entwicklungs-Blockchain:

- ✅ **Kostenlos**: SOL-Token sind kostenlos via Airdrop
- ✅ **Testumgebung**: Sicheres Testen ohne echtes Geld
- ✅ **Vollständig funktional**: Alle Solana-Features verfügbar
- ✅ **Regelmäßig zurückgesetzt**: Perfekt für Tests

## Nächste Schritte

### 1. Erste Transaktion senden
```javascript
const { Connection, Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL } = require('@solana/web3.js');

// Sende SOL an eine andere Adresse
async function sendSol(from, to, amount) {
  const connection = new Connection('https://api.devnet.solana.com');
  
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports: amount * LAMPORTS_PER_SOL
    })
  );
  
  const signature = await connection.sendTransaction(transaction, [from]);
  await connection.confirmTransaction(signature);
  
  console.log('Transaktion erfolgreich:', signature);
}
```

### 2. Account-Daten lesen
```javascript
// Lese Account-Informationen
const accountInfo = await connection.getAccountInfo(publicKey);
console.log('Lamports:', accountInfo.lamports);
console.log('Owner:', accountInfo.owner.toString());
```

### 3. Solana-Programm deployen
```bash
# Mit Solana CLI
solana program deploy /path/to/program.so
```

## Wichtige Devnet-Endpunkte

- **RPC Endpoint**: `https://api.devnet.solana.com`
- **Websocket**: `wss://api.devnet.solana.com`
- **Explorer**: https://explorer.solana.com/?cluster=devnet
- **Faucet**: https://faucet.solana.com/

## Troubleshooting

### Airdrop schlägt fehl?
- Devnet kann manchmal rate-limited sein
- Versuche es nach ein paar Minuten erneut
- Nutze den Web-Faucet: https://faucet.solana.com/

### Connection Timeout?
- Prüfe deine Internetverbindung
- Devnet kann gelegentlich überlastet sein
- Versuche einen anderen RPC-Endpoint

## Ressourcen

- 📚 [Solana Dokumentation](https://solana.com/de/docs)
- 🎯 [Solana Cookbook](https://solanacookbook.com/)
- 🛠️ [Solana Playground](https://beta.solpg.io/)
- 👥 [Solana Discord](https://discord.gg/solana)
- 🔍 [Devnet Explorer](https://explorer.solana.com/?cluster=devnet)

---

**Ready to build on Solana!** 🚀

Für Fragen und Unterstützung besuche die [Solana Stack Exchange](https://solana.stackexchange.com/)
