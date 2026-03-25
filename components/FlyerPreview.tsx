export default function FlyerPreview({ data }: any) {
  return (
    <div className="w-[400px] h-[600px] bg-black text-white p-4 relative rounded-xl overflow-hidden">

      {/* BACKGROUND */}
      {data.background && (
        <img
          src={data.background}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}

      <div className="relative z-10">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-xl">{data.date}</p>

        <div className="mt-4">
          {data.artists?.map((a: any) => (
            <div key={a.name}>{a.name}</div>
          ))}
        </div>

        <div className="mt-4 text-sm">
          {data.promo}
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-2 text-xs">
        Rua Dom Manoel Pereira, 53 – Recife
      </div>
    </div>
  )
}