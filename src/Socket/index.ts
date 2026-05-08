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
 ${green}[+] WhatsApp${white}: https://wa.me/6283116152891
 ${blue}[❤] Donation${white}: https://trakteer.id/digivora_official
 ${yellow}[!] Message ${white}: Terimakasih telah menggunakan Baileys saya!
 ${cyan}------------------------------------------${reset}\n`);

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
