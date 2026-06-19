import React from 'react'

const sampleImages = ['image_ec9424.png', 'image_a1b2c3.png', 'image_news_01.png']

export default function KabarGridInstructions() {
  return (
    <div className="py-6 px-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl mt-8">
      <h3 className="text-2xl font-semibold mb-4">Petunjuk Penempatan Gambar</h3>
      <p className="text-sm text-white/70 mb-4">Taruh gambar berita yang telah Anda generate di folder <strong>public/assets/news/</strong>. Contoh nama file:</p>
      <div className="grid grid-cols-3 gap-4">
        {sampleImages.map((s) => (
          <div key={s} className="rounded-xl overflow-hidden bg-[#071026] p-4 text-center">
            <div className="h-28 bg-[#112240] rounded-md mb-3 flex items-center justify-center text-slate-300">Preview</div>
            <div className="text-xs text-white/70 break-words">{s}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-white/50 mt-4">Setelah menaruh file, ubah path pada artikel di <strong>src/pages/kabar/</strong> mengganti src gambar ke <em>/assets/news/&lt;filename&gt;</em>.</p>
    </div>
  )
}
