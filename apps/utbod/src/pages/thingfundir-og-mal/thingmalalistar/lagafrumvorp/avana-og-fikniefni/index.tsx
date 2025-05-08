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
  Link,
} from '@island.is/island-ui/core'
import { Page } from '../../../../../components/Page/Page'
import { SidebarInfo } from 'apps/utbod/src/components/SidebarInfo/SidebarInfo'
import { Thingskjol } from 'apps/utbod/src/components/Thingskjol/Thingskjol'
import { Umraeda } from 'apps/utbod/src/components/Umraeda/Umraeda'
import HlustaButton from 'apps/utbod/src/components/HlustaButton/HlustaButton'
import ShareButton from 'apps/utbod/src/components/ShareButton/LiveButton'

const statusSections = [
  {
    isComplete: true,
    isActive: false,
    section: 'Stjórnarfrumvarp',
  },
  {
    isComplete: false,
    isActive: true,
    section: '1. umræða',
  },
  {
    isComplete: false,
    isActive: false,
    section: 'Nefndarálit',
  },
  {
    isComplete: false,
    isActive: false,
    section: 'Breytingartillögur',
  },
  {
    isComplete: false,
    isActive: false,
    section: '2. umræða',
  },
  {
    isComplete: false,
    isActive: false,
    section: 'Frumvarp eftir 2. umræðu',
  },
  {
    isComplete: false,
    isActive: false,
    section: '3. umræða',
  },
  {
    isComplete: false,
    isActive: false,
    section: 'Lög',
  },
]

export const Index = () => {
  return (
    <Page
      hideHero
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
        {
          title: 'Ávana- og fíkniefni',
          href: '/thingfundir-og-mal/thingmalalistar/lagafrumvorp/avana-og-fikniefni',
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <SidebarInfo
          backHref="/thingfundir-og-mal/thingmalalistar/lagafrumvorp"
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
                      Tengd mál og efnisorð
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Allar umsagnabeiðnir
                    </span>
                  </Text>
                  <Text variant="default" color="blue400">
                    <span
                      style={{
                        textDecoration: 'underline',
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
      <Box>
        <Box
          display={'flex'}
          flexDirection={['column', 'column', 'row']}
          justifyContent={'spaceBetween'}
        >
          <Box>
            <HlustaButton />
            <Box marginTop={[5]}>
              <Text variant="h1">Ávana- og fíkniefni</Text>
              <Text variant="default" marginY={2}>
                Breytingar á neyslurými
              </Text>
              <Box
                display="flex"
                flexWrap="wrap"
                rowGap={2}
                columnGap={2}
                marginY={[3, 3, 0]}
              >
                <Tag variant="darkerBlue" outlined>
                  142. mál, lagafrumvarp
                </Tag>
                <Tag variant="darkerBlue" outlined>
                  156. löggjafarþing 2025
                </Tag>
                <Tag variant="darkerBlue" outlined>
                  Lög nr. 57/2014
                </Tag>
              </Box>
            </Box>
          </Box>
          <Box>
            <FormStepperV2
              sections={statusSections.map((section, id) => {
                return (
                  <Section
                    key={id}
                    isComplete={section.isComplete}
                    isActive={section.isActive}
                    section={section.section}
                    sectionIndex={id}
                  />
                )
              })}
            />
          </Box>
        </Box>

        <Box marginTop={[3, 3, 0]} marginBottom={[3, 3, 6]}>
          <Text variant="h2">1. Umræða</Text>
          <Thingskjol />
          <Umraeda />
          <Box marginY={3}>
            <Stack space={2}>
              <Text>
                Málið gekk til <a>velferðarnefndar </a>11.03.2025.
              </Text>
              <Text>Framsögumaður nefndarinnar: Ragna Sigurðardóttir.</Text>
              <Text>
                Umsagnabeiðnir <a>velferðarnefndar</a> sendar <a>12.03.2025</a>,
                frestur til 26.03.2025
              </Text>
            </Stack>
          </Box>
          <Box marginTop={8}>
            <Accordion singleExpand>
              <AccordionItem id="1" label="Umfjöllun í nefndum">
                Upplýsingar um umfjöllun í nefndum
              </AccordionItem>
              <AccordionItem id="1" label="Áskriftir">
                Upplýsingar um áskriftir
              </AccordionItem>
            </Accordion>
          </Box>
          <Box marginTop={5}>
            <ShareButton />
          </Box>
        </Box>
      </Box>
    </Page>
  )
}

export default Index
