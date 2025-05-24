import { useStoreContract } from '../hooks/useStoreContract'
import { useAccount } from '@starknet-react/core'
import { SkinCard } from './SkinCard'

const skins = [
  { id: 1, image: '/skins/red.png', price: 0.01 },
  { id: 2, image: '/skins/blue.png', price: 0.02 },
]

export function Store() {
  const { contract } = useStoreContract()
  const { address } = useAccount()

  const handleBuy = async (skinId: number) => {
    if (!contract || !address) return
    await contract.methods.buy_skin(skinId).invoke()
    alert(`Compraste el skin ${skinId}!`)
  }

  return (
    <div className="store">
      {skins.map((skin) => (
        <SkinCard key={skin.id} {...skin} onBuy={handleBuy} />
      ))}
    </div>
  )
}