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
import { Page } from 'apps/utbod/src/components/Page/Page'
import { SidebarInfo } from 'apps/utbod/src/components/SidebarInfo/SidebarInfo'
import { Thingskjol } from 'apps/utbod/src/components/Thingskjol/Thingskjol'
import { Umraeda } from 'apps/utbod/src/components/Umraeda/Umraeda'
import HlustaButton from 'apps/utbod/src/components/HlustaButton/HlustaButton'
import ShareButton from 'apps/utbod/src/components/ShareButton/LiveButton'

const MenuItem = ({ title, href }: { title: string; href: string }) => (
  <Link href={href}>
    <Box
      padding={3}
      background={'blue100'}
      borderRadius="large"
      marginY={3}
      display={'flex'}
      alignItems="center"
      justifyContent="spaceBetween"
    >
      <Text variant="h5" color="blue400">
        {title}
      </Text>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 14.25C10.0858 14.2498 9.75016 13.9139 9.75035 13.4997C9.75044 13.3009 9.82938 13.1104 9.96984 12.9698L17.3733 5.56641C16.9901 5.35837 16.561 5.24959 16.125 5.25H4.875C3.4259 5.25155 2.25155 6.4259 2.25 7.875V19.125C2.2515 20.5741 3.42581 21.7484 4.87491 21.75H16.125C17.5741 21.7484 18.7485 20.5741 18.75 19.125V7.875C18.7504 7.43901 18.6416 7.00982 18.4336 6.62667L11.0302 14.0302C10.8898 14.1712 10.699 14.2503 10.5 14.25Z"
          fill="#0061FF"
        />
        <path
          d="M21 2.25H15.75C15.3358 2.25 15 2.58579 15 3C15 3.41421 15.3358 3.75 15.75 3.75H19.1892L17.3733 5.56641C17.8217 5.80999 18.19 6.17823 18.4336 6.62667L20.25 4.81078V8.25C20.25 8.66421 20.5858 9 21 9C21.4142 9 21.75 8.66421 21.75 8.25V3C21.75 2.58579 21.4142 2.25 21 2.25Z"
          fill="#0061FF"
        />
      </svg>
    </Box>
  </Link>
)

export const Index = () => {
  return (
    <Page
      hideHero
      crumbs={[
        { title: 'Forsíða', href: '/' },
        {
          title: 'Um Alþingi',
          href: '/um-althingi',
        },
        {
          title: 'Útgefin efni',
          href: '/um-althingi/utgefin-efni',
        },
        {
          title: 'Ársskýrslur Alþingis',
          href: '/um-althingi/utgefin-efni/arsskyrslur',
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
                    <Link href="/um-althingi/utgefin-efni/handbok">
                      <span
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Handbók Alþingis
                      </span>
                    </Link>
                  </Text>
                  <Text variant="default" color="blue400">
                    <Link href="#">
                      <span
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Skýrsla um eftirlit Alþingis með framkvæmdavaldinu
                      </span>
                    </Link>
                  </Text>
                  <Text variant="default" color="blue400">
                    <Link href="#">
                      <span
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Skýrsla um traust til Alþingis
                      </span>
                    </Link>
                  </Text>
                  <Text variant="default" color="blue400">
                    <Link href="#">
                      <span
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Um handbók Alþingis
                      </span>
                    </Link>
                  </Text>
                  <Text variant="default" color="blue400">
                    <a>
                      <span
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Með leyfi forseta
                      </span>
                    </a>
                  </Text>
                </Stack>
              </Box>
            </>
          }
        />
      }
    >
      <Box>
        <Box>
          <HlustaButton />
        </Box>
        <Box marginBottom={8}>
          <Text variant="h1" marginTop={5}>
            Ársreikningar Alþingis
          </Text>
          <Text variant="default" marginBottom={5}>
            Prentun Alþingistíðinda var hætt frá og með 140. þingi og hafa því
            verið gefið út ársreikningar Alþingis í stað ársskýrsla Alþingis
            eftir þann tíma.
          </Text>
          <MenuItem title="Ársreikningur Alþingis 2023" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2022" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2021" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2020" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2019" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2018" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2017" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2016" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2015" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2014" href="#" />
          <MenuItem title="Ársreikningur Alþingis 2013" href="#" />
        </Box>
        <Box marginBottom={8}>
          <Text variant="h1" marginTop={5}>
            Ársskýrlur Alþingis
          </Text>
          <MenuItem title="Ársskýrsla Alþingis 2023" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2022" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2021" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2020" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2019" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2018" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2017" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2016" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2015" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2014" href="#" />
          <MenuItem title="Ársskýrsla Alþingis 2013" href="#" />
        </Box>
      </Box>
    </Page>
  )
}

export default Index
