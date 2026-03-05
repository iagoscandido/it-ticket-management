import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

interface Link {
  href: string
  title: string
}

interface NavTabsProps {
  links?: Link[]
  className?: string
}

export const NavTabs = ({ links, className }: NavTabsProps) => {
  return (
    <Tabs className={className}>
      <TabsList variant={'line'}>
        {links && links.map((link) => (
          <TabsTrigger value={link.href} asChild>
            <a href={link.href} >{link.title}</a>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
