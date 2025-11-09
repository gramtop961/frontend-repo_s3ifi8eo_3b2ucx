import Spline from '@splinetool/react-spline';

export default function Avatar3D({ scene = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode' }) {
  return (
    <section className="relative py-6 bg-gradient-to-b from-transparent via-black to-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <p className="mt-3 text-center text-sm text-white/60">Interactive 3D avatar preview</p>
      </div>
    </section>
  );
}
