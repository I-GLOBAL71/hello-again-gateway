
import { Locale } from '@/i18n-config';

export default function AdminLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return <>{children}</>;
}

    