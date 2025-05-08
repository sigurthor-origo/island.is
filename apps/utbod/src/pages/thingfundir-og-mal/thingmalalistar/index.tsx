/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-restricted-imports */
import {
  Button,
  Box,
  Text,
  Tag,
  Accordion,
  Stack,
  AccordionItem,
  FormStepperV2,
  Section,
  FilterInput,
  Link,
} from '@island.is/island-ui/core'
import { Page } from '../../../components/Page/Page'
import { SidebarInfo } from 'apps/utbod/src/components/SidebarInfo/SidebarInfo'
import HlustaButton from 'apps/utbod/src/components/HlustaButton/HlustaButton'
import { useIsDesktop } from 'apps/utbod/src/utils/useDesktop'

const MenuItem = ({ title, href }: { title: string; href: string }) => (
  <Link href={href}>
    <Box padding={3} background={'blue100'} borderRadius="large" marginY={3}>
      <Text variant="h5" color="blue400">
        {title}
      </Text>
    </Box>
  </Link>
)

export const Index = () => {
  const isDesktop = useIsDesktop()

  if (isDesktop === null) {
    return null // Or show a loading indicator
  }

  return (
    <Page
      hideHero
      crumbs={[
        { title: 'Forsíða', href: '/' },
        { title: 'Þingfundir og mál', href: '/thingfundir-og-mal' },
        {
          title: 'Þingmálalistar',
          href: '/thingfundir-og-mal/thingmalalistar',
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <SidebarInfo
          backHref="/thingmenn"
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
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Þingmálalistar
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Þingfundir
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Ræður
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Yfirlit og úttektir
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Tilkynningar um þingstörf
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Allar kynningar
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Senda inn umsögn
                    </span>
                  </Text>
                </Stack>
              </Box>
            </>
          }
        />
      }
    >
      <Box>
        <HlustaButton />
      </Box>
      <Box marginBottom={8}>
        <Text variant="h1" marginY={4}>
          Þingfundir og mál
        </Text>
        <MenuItem
          title="Lagafrumvörp"
          href="/thingfundir-og-mal/thingmalalistar/lagafrumvorp"
        />
        <MenuItem title="Þingályktunartillögur" href="#" />
        <MenuItem title="Fyrirspurnir" href="#" />
        <MenuItem title="Skýrslur, álit og beiðnir" href="#" />
        <MenuItem title="Sérstakar umræður" href="#" />
        <MenuItem title="Staða mála" href="#" />
        <MenuItem title="Þingmál eftir efnisflokkum" href="#" />
        <MenuItem title="Samantektir um þingmál" href="#" />
      </Box>
    </Page>
  )
}

export default Index
