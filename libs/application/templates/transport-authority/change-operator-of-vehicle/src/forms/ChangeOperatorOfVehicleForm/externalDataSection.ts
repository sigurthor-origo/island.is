import {
  buildDataProviderItem,
  buildExternalDataProvider,
  buildSection,
} from '@island.is/application/core'
import { externalData } from '../../lib/messages'
import {
  IdentityApi,
  UserProfileApi,
  SamgongustofaPaymentCatalogApi,
  CurrentVehiclesApi,
  MockableSamgongustofaPaymentCatalogApi,
} from '../../dataProviders'

export const externalDataSection = buildSection({
  id: 'externalData',
  title: externalData.dataProvider.sectionTitle,
  children: [
    buildExternalDataProvider({
      title: externalData.dataProvider.pageTitle,
      id: 'approveExternalData',
      subTitle: externalData.dataProvider.subTitle,
      checkboxLabel: externalData.dataProvider.checkboxLabel,
      dataProviders: [
        buildDataProviderItem({
          provider: IdentityApi,
          title: externalData.nationalRegistry.title,
          subTitle: externalData.nationalRegistry.subTitle,
        }),
        buildDataProviderItem({
          provider: UserProfileApi,
          title: externalData.userProfile.title,
          subTitle: externalData.userProfile.subTitle,
        }),
        buildDataProviderItem({
          provider: CurrentVehiclesApi,
          title: externalData.currentVehicles.title,
          subTitle: externalData.currentVehicles.subTitle,
        }),
        buildDataProviderItem({
          provider: SamgongustofaPaymentCatalogApi,
          title: '',
        }),
        buildDataProviderItem({
          provider: MockableSamgongustofaPaymentCatalogApi,
          title: '',
        }),
      ],
    }),
  ],
})
