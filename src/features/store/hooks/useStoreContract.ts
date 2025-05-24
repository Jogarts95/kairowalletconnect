import { useContract } from '@starknet-react/core'
import abi from '@/abi/store.json'
import { STORE_CONTRACT_ADDRESS } from '@/config/contracts'

export function useStoreContract() {
  return useContract({
    abi,
    address: STORE_CONTRACT_ADDRESS,
  })
}