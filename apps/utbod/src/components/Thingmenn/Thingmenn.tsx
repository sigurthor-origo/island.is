/* eslint-disable no-restricted-imports */
import { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Link,
  Tag,
  FilterInput,
  Filter,
  ProfileCard,
  GridContainer,
  GridRow,
  GridColumn,
  FilterMultiChoice,
} from '@island.is/island-ui/core'

import { useIsDesktop } from '../../utils/useDesktop'
import { isSubsequence } from '../../utils/isSubsequence'

const mockData = [
  {
    name: 'Alma D. Möller',
    href: '/thingmenn/alma-d-moller',
    description: (
      <Box>
        <Text marginBottom={2}>Heilbrigðisráðherra</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            alma.moller@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Samfylkingin
          </Tag>
        </Box>
      </Box>
    ),
    image:
      'https://www.government.is/lisalib/getfile.aspx?itemid=c4a8641f-bfa5-11ef-b88c-005056bcde1f&proc=radherrar',
  },
  {
    name: 'Eyjólfur Ármannsson',
    href: '#',
    description: (
      <Box>
        <Text marginBottom={2}>Innviðaráðherra</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            eyjolfur.a@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Flokkur fólksins
          </Tag>
        </Box>
      </Box>
    ),
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1413/1413-220.jpg',
  },
  {
    name: 'Ingibjörg Isaksen',
    href: '#',
    description: (
      <Box>
        <Text marginBottom={2}>Formaður þingflokks</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            ingibjorg.i@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Framsóknarflokkur
          </Tag>
        </Box>
      </Box>
    ),
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1410/1410-220.jpg',
  },
  {
    name: 'Alma D. Möller',
    href: '/thingmenn/alma-d-moller',
    description: (
      <Box>
        <Text marginBottom={2}>Heilbrigðisráðherra</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            alma.moller@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Samfylkingin
          </Tag>
        </Box>
      </Box>
    ),
    image:
      'https://www.government.is/lisalib/getfile.aspx?itemid=c4a8641f-bfa5-11ef-b88c-005056bcde1f&proc=radherrar',
  },
  {
    name: 'Eyjólfur Ármannsson',
    href: '#',
    description: (
      <Box>
        <Text marginBottom={2}>Innviðaráðherra</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            eyjolfur.a@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Flokkur fólksins
          </Tag>
        </Box>
      </Box>
    ),
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1413/1413-220.jpg',
  },
  {
    name: 'Ingibjörg Isaksen',
    href: '#',
    description: (
      <Box>
        <Text marginBottom={2}>Formaður þingflokks</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            ingibjorg.i@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Framsóknarflokkur
          </Tag>
        </Box>
      </Box>
    ),
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1410/1410-220.jpg',
  },
  {
    name: 'Alma D. Möller',
    href: '/thingmenn/alma-d-moller',
    description: (
      <Box>
        <Text marginBottom={2}>Heilbrigðisráðherra</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            alma.moller@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Samfylkingin
          </Tag>
        </Box>
      </Box>
    ),
    image:
      'https://www.government.is/lisalib/getfile.aspx?itemid=c4a8641f-bfa5-11ef-b88c-005056bcde1f&proc=radherrar',
  },
  {
    name: 'Eyjólfur Ármannsson',
    href: '#',
    description: (
      <Box>
        <Text marginBottom={2}>Innviðaráðherra</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            eyjolfur.a@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Flokkur fólksins
          </Tag>
        </Box>
      </Box>
    ),
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1413/1413-220.jpg',
  },
  {
    name: 'Ingibjörg Isaksen',
    href: '#',
    description: (
      <Box>
        <Text marginBottom={2}>Formaður þingflokks</Text>
        <Link href="#">
          <Text color="blue400" fontWeight="semiBold">
            ingibjorg.i@althingi.is
          </Text>
        </Link>
        <Box display={'flex'} justifyContent={'flexEnd'} marginTop={2}>
          <Tag variant="darkerBlue" outlined disabled>
            Framsóknarflokkur
          </Tag>
        </Box>
      </Box>
    ),
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1410/1410-220.jpg',
  },
]

export const Thingmenn = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredData, setFilteredData] = useState(mockData)

  const [filter, setFilter] = useState<{
    price: Array<string>
    data: Array<string>
    input: string
  }>({
    price: [],
    data: [],
    input: '',
  })

  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!searchValue) {
      setFilteredData(mockData)
      return
    } else {
      const filtered = mockData.filter((item) => {
        return isSubsequence(searchValue, item.name)
      })
      setFilteredData(filtered)
    }
  }, [searchValue])

  if (isDesktop === null) {
    return null // Or show a loading indicator
  }

  const categories = [
    {
      id: 'price',
      label: 'Þingmenn',
      selected: filter.price,
      filters: [
        {
          value: 'free',
          label: 'Alþingismenn',
        },
        {
          value: 'paid',
          label: 'Sitjandi þingmenn',
        },
        {
          value: 'paid',
          label: 'Sitjandi varaþingmenn',
        },
        {
          value: 'paid',
          label: 'Allir varaþingmenn',
        },
      ],
    },
    {
      id: 'data',
      label: 'Þingfokkar',
      selected: filter.data,
      filters: [
        {
          value: 'health',
          label: 'Heilsa',
        },
        {
          value: 'financial',
          label: 'Fjármál',
        },
      ],
    },
    {
      id: 'data',
      label: 'Kjördæmi',
      selected: filter.data,
      filters: [
        {
          value: 'health',
          label: 'Heilsa',
        },
        {
          value: 'financial',
          label: 'Fjármál',
        },
      ],
    },
    {
      id: 'data',
      label: 'Kjördæmanúmer',
      selected: filter.data,
      filters: [
        {
          value: 'health',
          label: 'Heilsa',
        },
        {
          value: 'financial',
          label: 'Fjármál',
        },
      ],
    },
  ]

  return (
    <Box>
      <Text variant="h1" marginBottom={3}>
        Þingmenn
      </Text>
      <Box display={'flex'} justifyContent={'spaceBetween'} marginY={4}>
        <Box display={'flex'} alignItems={'flexEnd'} rowGap={2} columnGap={2}>
          <FilterInput
            name="search"
            value={searchValue}
            onChange={(input) => setSearchValue(input)}
            placeholder="Sía eftir leitarorði"
          />
        </Box>
        <Box>
          <Filter
            labelOpen="Velja síur"
            labelClose="Loka síu"
            labelClear="Hreinsa síu"
            labelClearAll="Hreinsa allar síur"
            onFilterClear={() =>
              setFilter({
                price: [],
                data: [],
                input: '',
              })
            }
            variant="popover"
          >
            <FilterMultiChoice
              labelClear="Hreinsa val"
              categories={categories}
              onChange={(event) =>
                setFilter({
                  ...filter,
                  [event.categoryId]: event.selected,
                })
              }
              onClear={(categoryId) =>
                setFilter({
                  ...filter,
                  [categoryId]: [],
                })
              }
            />
          </Filter>
        </Box>
      </Box>
      <GridContainer>
        <GridRow rowGap={3}>
          {filteredData.map((item, id) => (
            <GridColumn
              key={id}
              span={['12/12', '12/12', '4/12']}
              paddingBottom={3}
            >
              <ProfileCard
                title={item.name}
                titleHref={item.href}
                description={item.description}
                image={item.image}
              />
            </GridColumn>
          ))}
        </GridRow>
      </GridContainer>
    </Box>
  )
}
