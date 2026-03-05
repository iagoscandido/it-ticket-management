import './App.css'
import { JobsChartPie } from './components/chart-pie'
import { JobCalendarCard } from './components/job-calendar-card'
import { NavTabs } from './components/nav-tabs'
import { SummaryCard } from './components/summary-card'
import { UserAvatar } from './components/user-avatar'
import { UserCard, type User } from './components/user-card'

const links = [
  { href: "#user-card", title: "User info" },
  { href: "#jobs-calendar", title: "Trabalhos" }
]

const user: User = {
  name: "iago",
  email: "iago@email",
  phoneNumber: "21987654321"
}

function App() {
  return (
    <main className='min-h-screen space-x-1 space-y-1'>
      <header className='flex sticky top-0 border-b-2 px-6 py-3 bg-accent justify-between'>
        <nav className='flex items-center gap-4'>
          <NavTabs links={links} />
        </nav>
        <div className='flex items-center'>
          <UserAvatar imageSrc='./profile/iago.jpeg' />
        </div>
      </header>
      <section id="user-card" className='grid grid-cols-1 gap-2 items-center justify-center'>
        <UserCard user={user}></UserCard>
      </section>
      <section id="jobs-calendar" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2'>
        <JobCalendarCard title='Trabalhos de Hoje' />
        <JobCalendarCard title='Proximos Trabalhos' />
      </section>
      <section id="summary" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
        <SummaryCard title='Total' count={0} color='blue' />
        <SummaryCard title='Concluidos' count={0} color='green' />
        <SummaryCard title='Cancelados' count={0} color='red' />
        <SummaryCard title='Improdutivos' count={0} color='yellow' />
      </section>
      <section id="productivity-charts" className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <JobsChartPie />
      </section>
    </main>
  )
}

export default App
