export function SkinCard({ id, image, price, onBuy }: any) {
  return (
    <div className="skin-card">
      <img src={image} alt={`Skin ${id}`} />
      <p>Precio: {price} ETH</p>
      <button onClick={() => onBuy(id)}>Comprar</button>
    </div>
  )
}