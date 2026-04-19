import Image from 'next/image';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = {
    sm: { w: 140, h: 32 },
    md: { w: 240, h: 54 },
    lg: { w: 360, h: 82 },
  };
  const { w, h } = dims[size];
  return (
    <Image
      src="/img/logo.png"
      alt="MAERO"
      width={w}
      height={h}
      priority
      className="inline-block"
      style={{ width: w, height: 'auto' }}
    />
  );
}
