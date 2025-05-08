/* eslint-disable no-restricted-imports */
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { is } from 'date-fns/locale'
import {
  Box,
  Icon,
  Text,
  Link,
  Tag,
  FilterInput,
  CategoryCard,
  Filter,
  Select,
} from '@island.is/island-ui/core'
import { Table as T } from '@island.is/island-ui/core'

import * as styles from './Malalisti.css'
import { useIsDesktop } from '../../utils/useDesktop'
import { isSubsequence } from '../../utils/isSubsequence'

const mockData = [
  {
    id: 1,
    date: new Date('2025-05-05'),
    title: 'Landlæknir og lýðheilsa o.fl. (heilbrigðuisskráro.fl.)',
    href: '#',
    name: 'Alma D. Möller',
    presenter: 'Heilbrigðisráðherra',
    presenterHref: '#',
  },
  {
    id: 2,
    date: new Date('2025-05-04'),
    title: 'Lyfjalög og læknistæki (EES-reglur)',
    href: '#',
    name: 'Alma D. Möller',
    presenter: 'Heilbrigðisráðherra',
    presenterHref: '#',
  },
  {
    id: 3,
    date: new Date('2025-05-03'),
    title: 'Peningastefnan og fjármálastöðugleiki',
    href: '#',
    name: 'Ásgeir Jónsson',
    presenter: 'Seðlabanki Íslands',
    presenterHref: '#',
  },
  {
    id: 4,
    date: new Date('2025-05-03'),
    title: 'Ávana- og fíkniefni (EES-reglur)',
    href: '/thingfundir-og-mal/thingmalalistar/lagafrumvorp/avana-og-fikniefni',
    name: 'Alma D. Möller',
    presenter: 'Heilbrigðisráðherra',
    presenterHref: '#',
  },
]

export const Malalisti = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredData, setFilteredData] = useState(mockData)

  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!searchValue) {
      setFilteredData(mockData)
      return
    } else {
      const filtered = mockData.filter((item) => {
        return (
          isSubsequence(searchValue, item.id.toString()) ||
          isSubsequence(searchValue, item.title) ||
          isSubsequence(searchValue, item.presenter)
        )
      })
      setFilteredData(filtered)
    }
  }, [searchValue])

  if (isDesktop === null) {
    return null // Or show a loading indicator
  }

  return (
    <Box>
      <Text variant="h1" marginBottom={3}>
        Lagafrumvörp
      </Text>

      <Box
        marginY={4}
        display={'flex'}
        alignItems={'flexEnd'}
        rowGap={2}
        columnGap={2}
      >
        <FilterInput
          name="search"
          value={searchValue}
          onChange={(input) => setSearchValue(input)}
          placeholder="Sía eftir leitarorði"
        />
        <Select
          name="search"
          onChange={(input) => console.log(input)}
          value={{
            value: 1,
            label: '156:2025',
          }}
          options={[
            {
              value: 1,
              label: '156:2025',
            },
            {
              value: 2,
              label: '155:2025',
            },
          ]}
          label="Löggjafarþing"
          placeholder="Veldu þing"
          size="xs"
        />
      </Box>
      {isDesktop ? (
        <T.Table>
          <T.Head>
            <T.Row>
              <T.HeadData>
                <Text variant="eyebrow">Málsnr.</Text>
              </T.HeadData>
              <T.HeadData>
                <Box display="flex" alignItems="center">
                  <Text variant="eyebrow">
                    <Text variant="eyebrow">Dagsetning</Text>
                  </Text>
                  <Box marginLeft={1} display="flex" alignItems="center">
                    <Icon icon="arrowDown" color="blue400" size="small" />
                  </Box>
                </Box>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow">Heiti máls</Text>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow">Flutningsmaður</Text>
              </T.HeadData>
            </T.Row>
          </T.Head>
          <T.Body>
            {filteredData &&
              filteredData.map((item) => (
                <T.Row key={item.id}>
                  <T.Data>
                    <Text>{item.id}</Text>
                  </T.Data>
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
                    <Link href={item.presenterHref}>
                      <Tag>{item.presenter}</Tag>
                      <Text marginTop={1} variant="eyebrow" fontWeight="light">
                        {item.name}
                      </Text>
                    </Link>
                  </T.Data>
                </T.Row>
              ))}
          </T.Body>
        </T.Table>
      ) : (
        filteredData &&
        filteredData.map((item) => (
          <Box key={item.id} marginBottom={3}>
            <CategoryCard
              heading={item.title}
              text={item.presenter}
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
