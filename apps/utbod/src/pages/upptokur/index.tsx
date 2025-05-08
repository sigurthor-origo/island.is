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
import { Page } from 'apps/utbod/src/components/Page/Page'
import { SidebarInfo } from 'apps/utbod/src/components/SidebarInfo/SidebarInfo'
import HlustaButton from 'apps/utbod/src/components/HlustaButton/HlustaButton'
import ThingmadurCard from 'apps/utbod/src/components/ThingmadurCard/ThingmadurCard'
import { useIsDesktop } from 'apps/utbod/src/utils/useDesktop'
import ShareButton from 'apps/utbod/src/components/ShareButton/LiveButton'
import { Upptokur } from '../../components/Upptokur/Upptokur'

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
        { title: 'Upptökur', href: '/upptokur', isCurrentPage: true },
      ]}
      sidebar={
        <SidebarInfo
          backHref="/"
          menuChildren={
            <>
              <Box
                background="blueberry100"
                display={'flex'}
                flexDirection={'column'}
                borderRadius="large"
                padding={[2, 3, 3]}
                marginY={3}
              >
                <Text variant="eyebrow" color="purple600" marginBottom={2}>
                  Dagskrá 35. þingfundur
                </Text>
                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 13:30 - Fundur settur
                </Text>

                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 19:14 - Fundarhlé
                </Text>

                <Text variant="default" color="blue400" marginBottom={2}>
                  <span
                    style={{
                      textDecoration: 'underline',
                    }}
                  >
                    Kl. 13:13 - Framhald Þingfundar
                  </span>
                </Text>

                <Text variant="default" color="purple600" marginBottom={2}>
                  Kl. 19:14 - Fundarhlé
                </Text>
              </Box>

              {/*   <Box
                background="blue400"
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius="large"
                paddingY={2}
                marginY={3}
              >
                <Text variant="h5" color="white">
                  Sækja myndband
                </Text>
                <Box marginRight={2} />
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.25 3.75C21.25 3.05964 20.6904 2.5 20 2.5C19.3096 2.5 18.75 3.05964 18.75 3.75V24.4822L14.6339 20.3661C14.1457 19.878 13.3543 19.878 12.8661 20.3661C12.378 20.8543 12.378 21.6457 12.8661 22.1339L19.1161 28.3839C19.6043 28.872 20.3957 28.872 20.8839 28.3839L27.1339 22.1339C27.622 21.6457 27.622 20.8543 27.1339 20.3661C26.6457 19.878 25.8543 19.878 25.3661 20.3661L21.25 24.4822V3.75Z"
                    fill="white"
                  />
                  <path
                    d="M10.625 15C9.58947 15 8.75 15.8395 8.75 16.875V33.125C8.75 34.1605 9.58947 35 10.625 35H29.375C30.4105 35 31.25 34.1605 31.25 33.125V16.875C31.25 15.8395 30.4105 15 29.375 15H26.25C25.5596 15 25 14.4404 25 13.75C25 13.0596 25.5596 12.5 26.25 12.5H29.375C31.7912 12.5 33.75 14.4588 33.75 16.875V33.125C33.75 35.5412 31.7912 37.5 29.375 37.5H10.625C8.20875 37.5 6.25 35.5412 6.25 33.125V16.875C6.25 14.4588 8.20875 12.5 10.625 12.5H13.75C14.4404 12.5 15 13.0596 15 13.75C15 14.4404 14.4404 15 13.75 15H10.625Z"
                    fill="white"
                  />
                </svg>
              </Box> */}
              <Box
                background="white"
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius="large"
                border="standard"
                style={{
                  border: '2px solid #0061FF',
                }}
                paddingY={1}
                marginY={3}
              >
                <Text variant="h5" color="blue400">
                  Sækja fundargerð
                </Text>
                <Box marginRight={1} />
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.375 7.65527H9C8.60218 7.65527 8.22064 7.49724 7.93934 7.21593C7.65804 6.93463 7.5 6.5531 7.5 6.15527V1.78027C7.5 1.74712 7.48683 1.71533 7.46339 1.69189C7.43995 1.66844 7.40815 1.65527 7.375 1.65527H4.5C3.96957 1.65527 3.46086 1.86599 3.08579 2.24106C2.71071 2.61613 2.5 3.12484 2.5 3.65527V13.6553C2.5 14.1857 2.71071 14.6944 3.08579 15.0695C3.46086 15.4446 3.96957 15.6553 4.5 15.6553H11.5C12.0304 15.6553 12.5391 15.4446 12.9142 15.0695C13.2893 14.6944 13.5 14.1857 13.5 13.6553V7.78027C13.5 7.74712 13.4868 7.71533 13.4634 7.69188C13.4399 7.66844 13.4082 7.65527 13.375 7.65527ZM10.5 12.6553H5.5C5.36739 12.6553 5.24022 12.6026 5.14645 12.5088C5.05268 12.4151 5 12.2879 5 12.1553C5 12.0227 5.05268 11.8955 5.14645 11.8017C5.24022 11.708 5.36739 11.6553 5.5 11.6553H10.5C10.6326 11.6553 10.7598 11.708 10.8536 11.8017C10.9473 11.8955 11 12.0227 11 12.1553C11 12.2879 10.9473 12.4151 10.8536 12.5088C10.7598 12.6026 10.6326 12.6553 10.5 12.6553ZM10.5 10.1553H5.5C5.36739 10.1553 5.24022 10.1026 5.14645 10.0088C5.05268 9.91506 5 9.78788 5 9.65527C5 9.52267 5.05268 9.39549 5.14645 9.30172C5.24022 9.20795 5.36739 9.15527 5.5 9.15527H10.5C10.6326 9.15527 10.7598 9.20795 10.8536 9.30172C10.9473 9.39549 11 9.52267 11 9.65527C11 9.78788 10.9473 9.91506 10.8536 10.0088C10.7598 10.1026 10.6326 10.1553 10.5 10.1553Z"
                    fill="#0061FF"
                  />
                  <path
                    d="M13.1006 6.54874L8.60656 2.05467C8.59782 2.04599 8.58671 2.04008 8.57462 2.03769C8.56253 2.0353 8.55001 2.03653 8.53862 2.04124C8.52723 2.04595 8.51749 2.05392 8.51062 2.06415C8.50375 2.07438 8.50005 2.08641 8.5 2.09874V6.1553C8.5 6.28791 8.55268 6.41508 8.64645 6.50885C8.74021 6.60262 8.86739 6.6553 9 6.6553H13.0566C13.0689 6.65525 13.0809 6.65155 13.0911 6.64468C13.1014 6.63781 13.1093 6.62807 13.1141 6.61668C13.1188 6.60529 13.12 6.59277 13.1176 6.58068C13.1152 6.56859 13.1093 6.55748 13.1006 6.54874Z"
                    fill="#0061FF"
                  />
                </svg>
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
      <Box marginY={6}>
        <Upptokur />
      </Box>
    </Page>
  )
}

export default Index
