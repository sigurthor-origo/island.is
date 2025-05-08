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
  Tag,
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
        { title: 'Upptökur', href: '/upptokur' },
        {
          title: '35. þingfundur 156. löggjafarþings',
          href: '/upptokur/35-thingfundur',
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <SidebarInfo
          backHref="/upptokur"
          menuChildren={
            <>
              <Box
                background="blueberry100"
                display={'flex'}
                flexDirection={'column'}
                borderRadius="large"
                padding={[2, 3, 4]}
                marginY={3}
              >
                <Text variant="eyebrow" color="purple600" marginBottom={2}>
                  Dagskrá 35. þingfundur
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 13:30 - Fundur settur
                </Text>

                <Box display={'flex'} flexDirection={'column'}>
                  <Text variant="small" color="purple600" fontWeight="light">
                    Störf þingsins
                  </Text>
                  <Text
                    variant="small"
                    color="purple600"
                    fontWeight="light"
                    marginBottom={2}
                  >
                    Veiðigjald (aflaverðmæti í reiknistofni)
                  </Text>
                </Box>

                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 19:14 - Fundarhlé
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 13:13 - Framhald Þingfundar
                </Text>

                <Box display={'flex'} flexDirection={'column'}>
                  <Text variant="small" color="purple600" fontWeight="light">
                    Störf þingsins
                  </Text>
                  <Text
                    variant="small"
                    color="purple600"
                    fontWeight="light"
                    marginBottom={2}
                  >
                    Veiðigjald (aflaverðmæti í reiknistofni)
                  </Text>
                </Box>

                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 19:14 - Fundarhlé
                </Text>
              </Box>
              <Box
                background="purple100"
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderRadius="large"
                padding={[2, 3, 4]}
                marginY={3}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.25 5C10.587 5 9.95107 5.26339 9.48223 5.73223C9.01339 6.20107 8.75 6.83696 8.75 7.5V32.5C8.75 33.163 9.01339 33.7989 9.48223 34.2678C9.95107 34.7366 10.587 35 11.25 35H28.75C29.413 35 30.0489 34.7366 30.5178 34.2678C30.9866 33.7989 31.25 33.163 31.25 32.5V17.5H22.5C21.5054 17.5 20.5516 17.1049 19.8484 16.4016C19.1451 15.6984 18.75 14.7446 18.75 13.75V5H11.25ZM21.25 7.39277V13.75C21.25 14.0815 21.3817 14.3995 21.6161 14.6339C21.8505 14.8683 22.1685 15 22.5 15H28.8572L21.25 7.39277ZM7.71447 3.96447C8.65215 3.02678 9.92392 2.5 11.25 2.5H18.9648C19.9591 2.50015 20.9127 2.89511 21.6158 3.59805L32.6519 14.6341C33.3548 15.3372 33.7498 16.2908 33.75 17.285V32.5C33.75 33.8261 33.2232 35.0979 32.2855 36.0355C31.3479 36.9732 30.0761 37.5 28.75 37.5H11.25C9.92392 37.5 8.65215 36.9732 7.71447 36.0355C6.77678 35.0979 6.25 33.8261 6.25 32.5V7.5C6.25 6.17392 6.77678 4.90215 7.71447 3.96447ZM12.5 22.5C12.5 21.8096 13.0596 21.25 13.75 21.25H26.25C26.9404 21.25 27.5 21.8096 27.5 22.5C27.5 23.1904 26.9404 23.75 26.25 23.75H13.75C13.0596 23.75 12.5 23.1904 12.5 22.5ZM12.5 28.75C12.5 28.0596 13.0596 27.5 13.75 27.5H26.25C26.9404 27.5 27.5 28.0596 27.5 28.75C27.5 29.4404 26.9404 30 26.25 30H13.75C13.0596 30 12.5 29.4404 12.5 28.75Z"
                    fill="#421C63"
                  />
                </svg>
                <Box marginRight={2} />
                <Text variant="h5" color="purple600">
                  Sækja fundargerð
                </Text>
              </Box>
              <Box
                background="purple100"
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderRadius="large"
                padding={[2, 3, 4]}
                marginY={3}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.25 3.75C21.25 3.05964 20.6904 2.5 20 2.5C19.3096 2.5 18.75 3.05964 18.75 3.75V24.4822L14.6339 20.3661C14.1457 19.878 13.3543 19.878 12.8661 20.3661C12.378 20.8543 12.378 21.6457 12.8661 22.1339L19.1161 28.3839C19.6043 28.872 20.3957 28.872 20.8839 28.3839L27.1339 22.1339C27.622 21.6457 27.622 20.8543 27.1339 20.3661C26.6457 19.878 25.8543 19.878 25.3661 20.3661L21.25 24.4822V3.75Z"
                    fill="#421C63"
                  />
                  <path
                    d="M10.625 15C9.58947 15 8.75 15.8395 8.75 16.875V33.125C8.75 34.1605 9.58947 35 10.625 35H29.375C30.4105 35 31.25 34.1605 31.25 33.125V16.875C31.25 15.8395 30.4105 15 29.375 15H26.25C25.5596 15 25 14.4404 25 13.75C25 13.0596 25.5596 12.5 26.25 12.5H29.375C31.7912 12.5 33.75 14.4588 33.75 16.875V33.125C33.75 35.5412 31.7912 37.5 29.375 37.5H10.625C8.20875 37.5 6.25 35.5412 6.25 33.125V16.875C6.25 14.4588 8.20875 12.5 10.625 12.5H13.75C14.4404 12.5 15 13.0596 15 13.75C15 14.4404 14.4404 15 13.75 15H10.625Z"
                    fill="#421C63"
                  />
                </svg>

                <Box marginRight={2} />
                <Text variant="h5" color="purple600">
                  Sækja myndband
                </Text>
              </Box>
            </>
          }
        />
      }
    >
      <Box>
        <HlustaButton />
      </Box>
      <Box display={'flex'} justifyContent="spaceBetween" marginY={2}>
        <Text variant="h3">35. þingfundur 156. löggjafarþings</Text>
        <Tag variant="red" outlined disabled>
          <Box display={'flex'} alignItems={'center'}>
            Í beinni
            <Box marginRight={1} />
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 12.6875C4.36395 12.6875 1.8125 10.1361 1.8125 7C1.8125 3.86395 4.36395 1.3125 7.5 1.3125C10.6361 1.3125 13.1875 3.86395 13.1875 7C13.1875 10.1361 10.6361 12.6875 7.5 12.6875Z"
                fill="#B30038"
              />
            </svg>
          </Box>
        </Tag>
      </Box>

      <Box display="flex" flexDirection="column" marginBottom={3} width="full">
        <Box
          width="full"
          style={{ position: 'relative', paddingTop: '56.25%' }}
        >
          <iframe
            src="https://vod.althingi.is/player/?type=vod&width=512&height=288&icons=yes&file=20250507T144418&start=927&duration=0&autoplay=true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="autoplay; fullscreen"
            title="Alþingi Video Player"
          />
        </Box>
        <Box marginTop={2} />
        <ShareButton />
      </Box>
    </Page>
  )
}

export default Index
