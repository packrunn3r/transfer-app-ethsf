import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { ETH_CHAINS } from './network'
import { SITE_INFO, SITE_NAME, SITE_URL } from './site'

export const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ''
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn('You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable')
}

export const WALLETCONNECT_CONFIG = defaultWagmiConfig({
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: ETH_CHAINS,
  metadata: {
    name: SITE_NAME,
    description: SITE_INFO,
    url: SITE_URL,
    icons: [],
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
