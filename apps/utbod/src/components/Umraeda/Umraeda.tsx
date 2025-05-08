/* eslint-disable no-restricted-imports */
import { useState } from 'react'
import { format } from 'date-fns'
import { is } from 'date-fns/locale'
import {
  Box,
  Icon,
  Text,
  Link,
  Tag,
  CategoryCard,
} from '@island.is/island-ui/core'
import { Table as T } from '@island.is/island-ui/core'
import { useIsDesktop } from '../../utils/useDesktop'

const mockData = [
  {
    date: new Date('2025-05-05'),
    title: '8. fundur',
    href: '#',
    type: '2. umræða',
    voting: '2 atkvæðagreiðslur',
    votingHref: '#',
    meetingTime: '15:58-16:01',
  },
]

export const Umraeda = () => {
  const [filteredData, setFilteredData] = useState(mockData)

  const isDesktop = useIsDesktop()

  if (isDesktop === null) {
    return null // Or show a loading indicator
  }

  return (
    <Box>
      <Text variant="h3" marginY={5}>
        Umræða í þingsal
      </Text>
      {isDesktop ? (
        <T.Table>
          <T.Head>
            <T.Row>
              <T.HeadData>
                <Text variant="eyebrow">Dags. Umræðu</Text>
              </T.HeadData>
              <T.HeadData>
                <Box display="flex" alignItems="center">
                  <Text variant="eyebrow">
                    <Text variant="eyebrow">Þingfundur</Text>
                  </Text>
                </Box>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow">Tegund umræðu</Text>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow">Umræðutími</Text>
              </T.HeadData>
            </T.Row>
          </T.Head>
          <T.Body>
            {filteredData &&
              filteredData.map((item, id) => (
                <T.Row key={id}>
                  <T.Data>
                    <Text>
                      {format(item.date, 'dd.MM.yyyy', { locale: is })}
                    </Text>
                  </T.Data>
                  <T.Data>
                    <Text color="blue400">
                      <Link href={item.href}>{item.title}</Link>
                    </Text>
                  </T.Data>
                  <T.Data>
                    <Box
                      display="flex"
                      alignItems="center"
                      rowGap={1}
                      columnGap={1}
                    >
                      <Text color="blue400">
                        <Link href={item.votingHref}>{item.type}</Link>
                      </Text>
                      {item.voting && (
                        <>
                          <Text>-</Text>
                          <Text color="blue400">
                            <Link href={item.votingHref}>{item.type}</Link>
                          </Text>
                        </>
                      )}
                    </Box>
                  </T.Data>
                  <T.Data>
                    <Box display="flex" alignItems="center" columnGap={1}>
                      <Icon icon="playCircle" color="blue400" />
                      <Text variant="small">{item.meetingTime}</Text>
                    </Box>
                  </T.Data>
                </T.Row>
              ))}
          </T.Body>
        </T.Table>
      ) : (
        filteredData &&
        filteredData.map((item, id) => (
          <Box key={id} marginBottom={3}>
            <CategoryCard
              heading={item.title}
              text={item.meetingTime}
              subtext={item.type}
              date={format(item.date, 'dd.MM.yyyy', {
                locale: is,
              })}
              href={item.href}
            />
          </Box>
        ))
      )}
    </Box>
  )
}
