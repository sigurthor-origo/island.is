/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-restricted-imports */
import { Box, Stack, Text, Link, Button } from '@island.is/island-ui/core'
import { Page } from '../../../../components/Page/Page'
import { Malalisti } from '../../../../components/Malalisti/Malalisti'
import HlustaButton from '../../../../components/HlustaButton/HlustaButton'
import { SidebarInfo } from 'apps/utbod/src/components/SidebarInfo/SidebarInfo'

export const Index = () => {
  return (
    <Page
      crumbs={[
        { title: 'Forsíða', href: '/' },
        { title: 'Þingfundir og mál', href: '/thingfundir-og-mal' },
        {
          title: 'Þingmálalistar',
          href: '/thingfundir-og-mal/thingmalalistar',
        },
        {
          title: 'Lagafrumvörp',
          href: '/thingfundir-og-mal/thingmalalistar/lagafrumvorp',
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <SidebarInfo
          backHref="/thingfundir-og-mal/thingmalalistar/"
          menuChildren={
            <>
              <Box
                background="blueberry100"
                display={'flex'}
                borderRadius="large"
                padding={[2, 3, 4]}
                marginY={3}
              >
                <Stack space={[1, 1, 3]}>
                  <Text variant="h5" color="blue400">
                    <span
                      style={{
                        borderBottom: '1px solid',
                      }}
                    >
                      Tengd mál og efnisorð
                    </span>
                  </Text>
                  <Text variant="h5" color="blue400">
                    <span
                      style={{
                        borderBottom: '1px solid',
                      }}
                    >
                      Allar umsagnabeiðnir
                    </span>
                  </Text>
                  <Text variant="h5" color="blue400">
                    <span
                      style={{
                        borderBottom: '1px solid',
                      }}
                    >
                      Innsend erindi og umsagnir
                    </span>
                  </Text>
                </Stack>
              </Box>

              <Box
                display={'flex'}
                flexDirection={'column'}
                borderRadius="large"
                border="standard"
                padding={[2, 3, 4]}
                marginY={3}
              >
                <Text variant="h3">Senda skriflega umsögn um þingmál</Text>
                <Text variant="default" marginY={2}>
                  Öll geta sent skriflega umsögn um þingmál. Sjá nánari
                  leiðbeiningar um umsagnir þingmála hér.{' '}
                </Text>
                <Link href="#">
                  <Button variant="text" icon="arrowForward" size="small">
                    Umsagnagátt Alþingis
                  </Button>
                </Link>
              </Box>
            </>
          }
        />
      }
    >
      <Box display="flex" justifyContent="spaceBetween" marginBottom={[3]}>
        <HlustaButton />
      </Box>
      <Malalisti />
    </Page>
  )
}

export default Index
