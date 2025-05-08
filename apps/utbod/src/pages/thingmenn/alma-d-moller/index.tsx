/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-restricted-imports */
import {
  Button,
  Box,
  Text,
  Accordion,
  AccordionItem,
  FilterInput,
  Stack,
  Link,
  Icon,
} from '@island.is/island-ui/core'
import { Page } from '../../../components/Page/Page'
import { SidebarInfo } from 'apps/utbod/src/components/SidebarInfo/SidebarInfo'
import HlustaButton from 'apps/utbod/src/components/HlustaButton/HlustaButton'
import ThingmadurCard from 'apps/utbod/src/components/ThingmadurCard/ThingmadurCard'
import { useIsDesktop } from 'apps/utbod/src/utils/useDesktop'
import ShareButton from 'apps/utbod/src/components/ShareButton/LiveButton'

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
        { title: 'Þingmenn', href: '/thingmenn' },
        {
          title: 'Alma D. Möller',
          href: '/thingmenn/alma-d-moller',
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <SidebarInfo
          backHref="/thingmenn"
          menuChildren={
            <>
              <Box
                background="purple100"
                display={'flex'}
                flexDirection={'column'}
                borderRadius="large"
                padding={[2, 3, 4]}
                marginY={3}
              >
                <Text variant="eyebrow" color="purple600" marginBottom={2}>
                  Hagsmunaskrá
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Hagsmunaskrá
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Hagsmunaskrá ráðherra{' '}
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2.65503C10 2.37889 10.2239 2.15503 10.5 2.15503H14C14.2761 2.15503 14.5 2.37889 14.5 2.65503V6.15503C14.5 6.43117 14.2761 6.65503 14 6.65503C13.7239 6.65503 13.5 6.43117 13.5 6.15503V3.86214L7.35355 10.0086C7.15829 10.2038 6.84171 10.2038 6.64645 10.0086C6.45118 9.81332 6.45118 9.49674 6.64645 9.30148L12.7929 3.15503H10.5C10.2239 3.15503 10 2.93117 10 2.65503Z"
                      fill="#24268E"
                    />
                    <path
                      d="M3.25 5.15503C2.83579 5.15503 2.5 5.49082 2.5 5.90503V13.405C2.5 13.8192 2.83579 14.155 3.25 14.155H10.75C11.1642 14.155 11.5 13.8192 11.5 13.405V7.65503C11.5 7.37889 11.7239 7.15503 12 7.15503C12.2761 7.15503 12.5 7.37889 12.5 7.65503V13.405C12.5 14.3715 11.7165 15.155 10.75 15.155H3.25C2.2835 15.155 1.5 14.3715 1.5 13.405V5.90503C1.5 4.93853 2.2835 4.15503 3.25 4.15503H8.48375C8.75989 4.15503 8.98375 4.37889 8.98375 4.65503C8.98375 4.93117 8.75989 5.15503 8.48375 5.15503H3.25Z"
                      fill="#24268E"
                    />
                  </svg>
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Laun og kostnaðargreiðslur
                </Text>
                <Text variant="eyebrow" color="purple600" marginBottom={2}>
                  Þingingstörf
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Tilögur
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Atkvæðaskrá
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Fyrirspurnir og skýrslur
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Ræður
                </Text>
                <Text variant="default" color="purple600">
                  Framsögumaður
                </Text>
              </Box>
            </>
          }
        />
      }
    >
      <Box>
        <HlustaButton />

        <ThingmadurCard />

        <Box marginY={[3, 3, 8]}>
          <Accordion singleExpand>
            <AccordionItem id="1" label="Þingseta">
              Upplýsingar um þingsetu
            </AccordionItem>
            <AccordionItem id="1" label="Æviágrip">
              Upplýsingar um æviágrip
            </AccordionItem>
            <AccordionItem id="1" label="Áskriftir">
              Upplýsingar um áskriftir
            </AccordionItem>
          </Accordion>
        </Box>

        <ShareButton />

        <Box
          marginY={[3, 3, 6]}
          width={isDesktop ? 'half' : 'full'}
          padding={[2, 2, 4]}
          border="standard"
          borderRadius="large"
        >
          <Text variant="h3" marginBottom={2}>
            Fá tölvupóst um athafnir þessa fulltrúa
          </Text>
          <Text variant="eyebrow" color="blue400" marginBottom={1}>
            Netfang
          </Text>
          <FilterInput
            name="email"
            backgroundColor="white"
            value=""
            onChange={() => console.log('email')}
          />
          <Text variant="eyebrow" fontWeight="regular" marginTop={2}>
            Netfangið verður ekki notað í öðrum tilgangi og verður eytt þegar
            áskrift lýkur. Lesið <a>persónuverndarstefnu</a> okkar.
          </Text>
          <Box display={'flex'} justifyContent="flexEnd" marginTop={4}>
            <Button variant="primary" icon="mail" size="medium">
              Skrá mig
            </Button>
          </Box>
        </Box>
      </Box>
    </Page>
  )
}

export default Index
