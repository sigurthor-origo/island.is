/* eslint-disable no-restricted-imports */
import { useState } from 'react'
import { format } from 'date-fns'
import { is } from 'date-fns/locale'
import { Box, Text, Link, Tag, CategoryCard } from '@island.is/island-ui/core'
import { Table as T } from '@island.is/island-ui/core'
import { useIsDesktop } from '../../utils/useDesktop'

const mockData = [
  {
    date: new Date('2025-05-05'),
    title: '349 breytingartillaga',
    href: '#',
    presenter: 'Allsherjar- og menntamálanefnd',
    presenterHref: '#',
  },
  {
    date: new Date('2025-05-04'),
    title: '351 breytingartillaga',
    href: '#',
    presenter: 'Meiri hluti fjárlaganefndar',
    presenterHref: '#',
  },
  {
    date: new Date('2025-05-02'),
    title: '352 breytingartillaga',
    href: '#',
    presenter: 'Allsherjar- og menntamálanefnd',
    presenterHref: '#',
  },
  {
    date: new Date('2025-05-01'),
    title: '352 breytingartillaga',
    subtitle: '1. upp­prentun',
    href: '#',
    presenter: 'Meiri hluti fjárlaganefndar',
    presenterHref: '#',
  },
]

export const Thingskjol = () => {
  const [filteredData, setFilteredData] = useState(mockData)

  const isDesktop = useIsDesktop()

  if (isDesktop === null) {
    return null // Or show a loading indicator
  }

  return (
    <Box>
      <Text variant="h3" marginY={5}>
        Þingskjöl
      </Text>
      {isDesktop ? (
        <T.Table>
          <T.Head>
            <T.Row>
              <T.HeadData>
                <Text variant="eyebrow">Útbýtingardagur</Text>
              </T.HeadData>
              <T.HeadData>
                <Box display="flex" alignItems="center">
                  <Text variant="eyebrow">
                    <Text variant="eyebrow">Þingskjal</Text>
                  </Text>
                </Box>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow">Flutningsmaður</Text>
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
                      <br />
                      <Text variant="small" color="dark400">
                        {item.subtitle}
                      </Text>
                    </Text>
                  </T.Data>
                  <T.Data>
                    <Link href={item.presenterHref}>
                      <Tag>{item.presenter}</Tag>
                    </Link>
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
              text={''}
              date={format(item.date, 'dd.MM.yyyy', {
                locale: is,
              })}
              href={item.href}
              tags={[{ label: item.presenter, href: item.presenterHref }]}
            />
          </Box>
        ))
      )}
    </Box>
  )
}
