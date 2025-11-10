// Solana Devnet Beispiel
// Dieses Skript zeigt, wie man sich mit Solana Devnet verbindet

const web3 = require('@solana/web3.js');

async function main() {
  console.log('\n=== Solana Devnet Schnellstart ===\n');

  // 1. Verbindung zum Devnet herstellen
  console.log('1. Verbinde mit Solana Devnet...');
  const connection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
    'confirmed'
  );
  const version = await connection.getVersion();
  console.log('   ✓ Verbunden! Solana Version:', version['solana-core']);

  // 2. Neue Wallet (Keypair) erstellen
  console.log('\n2. Erstelle neue Wallet...');
  const wallet = web3.Keypair.generate();
  console.log('   ✓ Wallet erstellt!');
  console.log('   Public Key:', wallet.publicKey.toString());
  console.log('   (Private Key sicher aufbewahren!)');

  // 3. Balance vor Airdrop prüfen
  console.log('\n3. Prüfe initiale Balance...');
  let balance = await connection.getBalance(wallet.publicKey);
  console.log('   Balance:', balance / web3.LAMPORTS_PER_SOL, 'SOL');

  // 4. Airdrop von Devnet SOL anfordern
  console.log('\n4. Fordere 2 SOL Airdrop an...');
  try {
    const airdropSignature = await connection.requestAirdrop(
      wallet.publicKey,
      2 * web3.LAMPORTS_PER_SOL
    );
    console.log('   Airdrop Transaktion gesendet:', airdropSignature);
    
    // Warte auf Bestätigung
    console.log('   Warte auf Bestätigung...');
    await connection.confirmTransaction(airdropSignature);
    console.log('   ✓ Airdrop bestätigt!');
  } catch (error) {
    console.log('   ⚠ Airdrop fehlgeschlagen:', error.message);
    console.log('   (Devnet-Airdrop kann manchmal rate-limited sein)');
  }

  // 5. Balance nach Airdrop prüfen
  console.log('\n5. Prüfe neue Balance...');
  balance = await connection.getBalance(wallet.publicKey);
  console.log('   Balance:', balance / web3.LAMPORTS_PER_SOL, 'SOL');

  // 6. Zusätzliche Infos
  console.log('\n6. Devnet Info:');
  console.log('   Slot:', await connection.getSlot());
  console.log('   Block Height:', await connection.getBlockHeight());
  
  console.log('\n=== Fertig! ===\n');
  console.log('Nächste Schritte:');
  console.log('- Speichere deine Wallet sicher');
  console.log('- Erstelle deine erste Transaktion');
  console.log('- Deploye ein Solana-Programm');
  console.log('\nDokumentation: https://solana.com/de/docs\n');
}

main().catch(console.error);
