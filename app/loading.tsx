export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-void">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-cyan-glow border-r-violet-glow" />
        <div className="absolute inset-2 rounded-full border border-white/10" />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-700">
        Initializing
      </p>
    </div>
  );
}
