export function ParallaxEffect({ img1, children, height = "h-[100vh]" }) {
  return (
    <div
      className={`relative ${height} flex flex-col items-center justify-center bg-cover bg-center bg-fixed overflow-x-hidden`}
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Foreground Content */}
      <div className="relative z-10 px-4 text-center">{children}</div>
    </div>
  );
}



