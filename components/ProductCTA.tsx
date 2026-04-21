'use client';

import Image from 'next/image';
import { products, type Product } from '@/data/products';
import { productTranslations } from '@/data/products-i18n';
import { useLocale } from '@/lib/i18n';
import { useT } from '@/lib/dictionary';

export function ProductCTA({ productId }: { productId: Product['id'] }) {
  const p = products[productId];
  const { locale } = useLocale();
  const t = useT(locale);
  const pt = productTranslations[locale]?.[productId] ?? productTranslations.ro[productId];
  return (
    <div className="gold-frame bg-cream p-6 md:p-8 my-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-40 flex-shrink-0">
          <Image
            src={p.image}
            alt={pt.name}
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-mark mb-2">
            {t.recommendedFor}
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-1">{pt.name}</h3>
          <p className="text-cocoa/80 text-sm italic mb-3">{pt.subtitle}</p>
          <p className="text-ink/80 mb-4 leading-relaxed">{pt.description}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-display text-2xl text-ink">
              {t.priceFrom} <span className="text-gold-dark font-semibold">{p.priceFromLei} {t.priceCurrency}</span>
            </span>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block no-underline"
            >
              {t.orderOnMaero}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
