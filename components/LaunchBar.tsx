export function LaunchBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#ff4d00] py-2 px-6 flex items-center justify-center gap-2 flex-wrap">
      <span className="bg-white/20 rounded px-2.5 py-0.5 text-[11px] text-white font-semibold tracking-wide">
        OFERTA DE LANZAMIENTO
      </span>
      <span className="text-[12px] text-white">
        Hasta 40% de descuento — válido solo hasta el 30 de junio
      </span>
      <span className="text-[11px] text-white/75 font-medium">⏳ Quedan pocos días</span>
    </div>
  )
}
