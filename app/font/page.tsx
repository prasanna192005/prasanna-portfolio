export default function FontShowcase() {
  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  return (
    <div className="min-h-screen bg-white dark:bg-black p-12 space-y-8">
      <header className="border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-4xl font-black tracking-tighter">Inter Typography System</h1>
        <p className="text-gray-500 mt-2">Displaying all configured weights (100-900)</p>
      </header>
      
      <div className="grid gap-6">
        {weights.map((weight) => (
          <div key={weight} className="group">
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-medium">Weight {weight}</div>
            <p 
              className="text-5xl md:text-7xl tracking-tight" 
              style={{ fontWeight: weight }}
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>

      <footer className="pt-12 text-sm text-gray-400">
        Built with Next.js and Inter variable font configuration.
      </footer>
    </div>
  );
}
