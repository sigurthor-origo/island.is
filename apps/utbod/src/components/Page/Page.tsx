import { ReactNode } from 'react'
import {
  GridContainer,
  Box,
  GridRow,
  GridColumn,
  Header,
  Footer,
  Breadcrumbs,
  BreadCrumbItem,
  FilterInput,
  Button,
} from '@island.is/island-ui/core'
import { HeroBanner } from '../HeroBanner/HeroBanner'
import { useIsDesktop } from '../../utils/useDesktop'

export const Page = ({
  crumbs,
  isFrontpage,
  hideHero,
  sidebar,
  children,
}: {
  crumbs?: BreadCrumbItem[]
  isFrontpage?: boolean
  hideHero?: boolean
  sidebar: ReactNode
  children: ReactNode
}) => {
  const isDesktop = useIsDesktop()

  return (
    <>
      <Box style={{ minHeight: '100vh' }}>
        <GridContainer>
          <Header
            logoRender={(logo) => <div>{logo}</div>}
            headerItems={
              <Box display="flex" alignItems="center" columnGap={[0, 0, 2]}>
                {isDesktop ? (
                  <FilterInput
                    name="search"
                    value={''}
                    backgroundColor="blue"
                    onChange={(input) => console.log(input)}
                    placeholder={'Leit'}
                  />
                ) : (
                  <Button size="default" variant="utility" icon="search" />
                )}
                {isDesktop && (
                  <>
                    <Button size="default" variant="utility" icon="person">
                      Mínar síður
                    </Button>
                    <Button size="default" variant="utility">
                      EN
                    </Button>
                  </>
                )}
                <Button size="default" variant="utility" icon="menu">
                  {isDesktop ? 'Valmynd' : ''}
                </Button>
              </Box>
            }
          />

          {!hideHero && (
            <HeroBanner title="Alþingi" isFrontpage={isFrontpage} />
          )}
          <Box marginY={hideHero ? 0 : [4, 10]}>
            <GridRow justifyContent="spaceBetween">
              <GridColumn span={['12/12', '12/12', '3/12']}>
                {sidebar}
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '8/12']}>
                {isDesktop && crumbs && (
                  <Box marginBottom={3}>
                    <Breadcrumbs items={crumbs} />
                  </Box>
                )}
                {children}
              </GridColumn>
            </GridRow>
          </Box>
        </GridContainer>
      </Box>
      <Footer />
    </>
  )
}
