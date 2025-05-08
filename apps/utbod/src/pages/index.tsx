/* eslint-disable no-restricted-imports */
import { Icon, Box, Text } from '@island.is/island-ui/core'
import { Page } from '../components/Page/Page'
import { Events } from '../components/Events/Events'
import { Announcements } from '../components/Announcements/Announcements'
import { SidebarNavigation } from '../components/SidebarNavigation/SidebarNavigation'
import HlustaButton from '../components/HlustaButton/HlustaButton'
import LiveButton from '../components/LiveButton/LiveButton'

export const Index = () => {
  return (
    <Page isFrontpage sidebar={<SidebarNavigation active="/" />}>
      <Box display="flex" justifyContent="spaceBetween" marginBottom={3}>
        <HlustaButton />
        <Box display={['none', 'none', 'block']}>
          <LiveButton />
        </Box>
      </Box>
      <Events />
      <Announcements />
    </Page>
  )
}

export default Index
