/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-restricted-imports */
import { Page } from '../../components/Page/Page'
import { SidebarNavigation } from 'apps/utbod/src/components/SidebarNavigation/SidebarNavigation'
import { Thingmenn } from '../../components/Thingmenn/Thingmenn'
import HlustaButton from '../../components/HlustaButton/HlustaButton'
import { Box } from '@island.is/island-ui/core'

export const Index = () => {
  return (
    <Page sidebar={<SidebarNavigation active="thingmenn" />}>
      <Box marginBottom={[3]}>
        <HlustaButton />
      </Box>
      <Thingmenn />
    </Page>
  )
}

export default Index
