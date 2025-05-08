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

import * as styles from './Upptokur.css'
import { useIsDesktop } from '../../utils/useDesktop'

const mockData = [
  {
    date: new Date('2025-05-07'),
    title: '35. Þingfundur',
    href: '/upptokur/35-thingfundur',
  },
  {
    date: new Date('2025-05-06'),
    title: '34. Þingfundur',
    href: '#',
  },
  {
    date: new Date('2025-05-05'),
    title: '33. Þingfundur',
    href: '#',
  },
  {
    date: new Date('2025-04-30'),
    title:
      'Opinn fundur í stjórnskipunar- og eftirlitsnefnd um meðferð á erindi um þáverandi mennta- og barnamálaráðherra',
    href: '#',
  },
  {
    date: new Date('2025-04-29'),
    title: '32. Þingfundur',
    href: '#',
  },
  {
    date: new Date('2025-04-28'),
    title: '31. Þingfundur',
    href: '#',
  },
]

export const Upptokur = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredData, setFilteredData] = useState(mockData)

  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!searchValue) {
      setFilteredData(mockData)
      return
    } else {
      const filtered = mockData.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase())
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
        Upptökur
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
                <Text variant="eyebrow"></Text>
              </T.HeadData>
              <T.HeadData>
                <Box display="flex" alignItems="center">
                  <Text variant="eyebrow">Upptökur</Text>
                </Box>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow"></Text>
              </T.HeadData>
              <T.HeadData>
                <Text variant="eyebrow"></Text>
              </T.HeadData>
            </T.Row>
          </T.Head>
          <T.Body>
            {filteredData &&
              filteredData.map((item, id) => (
                <T.Row key={id}>
                  <T.Data>
                    <Icon icon="playCircle" color="blue400" size="large" />
                  </T.Data>
                  <T.Data>
                    <Link href={item.href}>
                      {' '}
                      <Text color="blue400">{item.title}</Text>
                    </Link>
                  </T.Data>
                  <T.Data></T.Data>
                  <T.Data>
                    <Text>
                      {format(item.date, 'dd.MM.yyyy', { locale: is })}
                    </Text>
                  </T.Data>
                </T.Row>
              ))}
          </T.Body>
        </T.Table>
      ) : (
        <T.Table>
          <T.Head>
            <T.Row>
              <T.HeadData>
                <Box display="flex" alignItems="center">
                  <Text variant="eyebrow">Upptökur</Text>
                </Box>
              </T.HeadData>

              <T.HeadData>
                <Text variant="eyebrow">Dagsetning</Text>
              </T.HeadData>
            </T.Row>
          </T.Head>
          <T.Body>
            {filteredData &&
              filteredData.map((item, id) => (
                <T.Row key={id}>
                  <T.Data>
                    <Box display={'flex'} alignItems="center">
                      <Icon icon="playCircle" color="blue400" size="large" />
                      <Box marginLeft={2} />
                      <Text color="blue400">
                        <Link href={item.href}>{item.title}</Link>
                      </Text>
                    </Box>
                  </T.Data>

                  <T.Data>
                    <Text>
                      {format(item.date, 'dd.MM.yyyy', { locale: is })}
                    </Text>
                  </T.Data>
                </T.Row>
              ))}
          </T.Body>
        </T.Table>
      )}
    </Box>
  )
}
