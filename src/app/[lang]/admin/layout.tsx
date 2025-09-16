
import { Locale } from '@/i18n-config';

export default async function AdminLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // This is now a simple server component wrapper.
  // Data fetching will be handled by the page component.
  return <>{children}</>;
}
