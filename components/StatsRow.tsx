const stats = [
  { num: '87.7%', label: 'negocios colombianos sin presencia web' },
  { num: '+12h', label: 'semanales ahorradas con automatización' },
  { num: '72h', label: 'y tu negocio está en internet' },
]

export function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#f0f0f0]">
      {stats.map((s) => (
        <div key={s.num} className="bg-white px-6 py-4 text-center">
          <p className="text-[20px] font-semibold text-[#111] tracking-[-0.03em]">{s.num}</p>
          <p className="text-[11px] text-[#999] mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
