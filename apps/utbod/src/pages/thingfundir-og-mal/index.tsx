/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-restricted-imports */
import { Box, Text } from '@island.is/island-ui/core'
import { Page } from '../../components/Page/Page'
import { Malalisti } from '../../components/Malalisti/Malalisti'
import { SidebarNavigation } from 'apps/utbod/src/components/SidebarNavigation/SidebarNavigation'
import HlustaButton from '../../components/HlustaButton/HlustaButton'
import { ReactElement } from 'react'

const MenuItem = ({
  title,
  href,
  description,
}: {
  title: string
  href: string
  description: ReactElement
}) => {
  return (
    <Box border="standard" borderRadius="large" marginTop={3} padding={3}>
      <Text variant="h3">
        <a href={href}>{title}</a>
      </Text>
      <Text variant="default">{description}</Text>
    </Box>
  )
}

export const Index = () => {
  return (
    <Page sidebar={<SidebarNavigation active="thingfundir-og-mal" />}>
      <Box display="flex" justifyContent="spaceBetween" marginBottom={[3]}>
        <HlustaButton />
      </Box>
      <Box>
        <Text variant="h1">Þingfundir og mál</Text>
        <MenuItem
          title="Þingmálalistar"
          href="/thingfundir-og-mal/thingmalalistar"
          description={
            <>
              Yfirlit yfir þingmál sem eru til umfjöllunar á Alþingi, þar á
              meðal <strong>lagafrumvörp, þingsályktunartillögur</strong> og
              stöðu þeirra.
            </>
          }
        />
        <MenuItem
          title="Þingfundir"
          href="#"
          description={
            <>
              Upplýsingar um þingfundi, svo sem dagskrá funda, fundargerðir og
              upptökur.
            </>
          }
        />
        <MenuItem
          title="Ræður"
          href="#"
          description={
            <>
              Hér má nálgast ræður þingmanna og ráðherra á Alþingi, leita að
              tilteknu efni í ræðum, skoða nýyfirlesnar ræður og fleira.
            </>
          }
        />
        <MenuItem
          title="Yfirlit of úttektir"
          href="#"
          description={
            <>
              Yfirlit yfir söguleg gögn og sérstaka málaflokka Alþingis, þar á
              meðal þingsköp, Alþingistíðindi og skýrslur.
            </>
          }
        />
        <MenuItem
          title="Tilkynningar um þingstörf"
          href="#"
          description={
            <>
              Hér má nálgast allar tilkynningar um þingstörf Alþingis líkt og
              óundirbúnar fyrirspurnir til ráðherra og sérstakar umræður á
              Alþingi.
            </>
          }
        />
        <MenuItem
          title="Senda inn umsögn"
          href="#"
          description={
            <>
              Hér má nálgast allar tilkynningar um þingstörf Alþingis líkt og
              óundirbúnar fyrirspurnir til ráðherra og sérstakar umræður á
              Alþingi.
            </>
          }
        />
      </Box>
    </Page>
  )
}

export default Index
