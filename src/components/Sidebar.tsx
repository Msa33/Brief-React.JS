import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { lazy, Suspense } from 'react'

interface Item {
  title: string
  iconName: keyof typeof dynamicIconImports
  href: string
}

const menuItems: Item[] = [
  { title: 'Dashboard', iconName: 'square-kanban', href: '/' },
  { title: 'Food Order', iconName: 'shopping-cart', href: '/' },
  { title: 'Manage Menu', iconName: 'file-text', href: '/' },
  { title: 'Customer Review', iconName: 'message-circle-more', href: '/' },
]

const othersItems: Item[] = [
  { title: 'Settings', iconName: 'settings', href: '/' },
  { title: 'Payment', iconName: 'wallet', href: '/' },
  { title: 'Accounts', iconName: 'user-round', href: '/' },
  { title: 'Help', iconName: 'info', href: '/' },
]

const Sidebar = () => (
  <aside className="h-dvh max-w-[240px] bg-[#F1F2F7]">
    <h1 className="border-b border-[#C8CBD9] p-5 pl-10 text-2xl font-bold text-[#5A67BA]">Sésara Marcket</h1>
    <nav className="p-4 md:p-5">
      <SidebarSection title="MENU" items={menuItems} />
      <SidebarSection title="OTHERS" items={othersItems} />
    </nav>
  </aside>
)

const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
  <>
    <h3 className="mx-5 mt-10 mb-3 text-xs text-[#777da3]">{title}</h3>
    {items.map((item, idx) => (
      <SidebarItem key={idx} title={item.title} iconName={item.iconName} href={item.href} />
    ))}
  </>
)

const fallback = <div style={{ background: '#ddd', width: 18, height: 18 }} />

interface PropsType extends Omit<LucideProps, 'ref'> {
  title: string
  iconName: keyof typeof dynamicIconImports
  href: string
}

const SidebarItem: React.FC<PropsType> = ({ title, iconName, href }) => {
  const Icon = lazy(dynamicIconImports[iconName])

  const isActive = false

  return (
    <a
      href={href}
      className={`group flex items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#DEE1F4] hover:text-[#5A6ACF] md:px-5 ${isActive ? 'bg-[#DEE1F4] font-medium text-[#5A6ACF]' : 'font-normal text-[#777da3]'}`}
    >
      <Suspense fallback={fallback}>
        <Icon
          size={18}
          className={`${isActive ? '#5A6ACF' : '#A6ABC8'} text-[#A6ABC8] transition-all duration-300 group-hover:text-[#5A6ACF]`}
        />
      </Suspense>
      <h3 className="text-sm leading-4">{title}</h3>
    </a>
  )
}

export default Sidebar