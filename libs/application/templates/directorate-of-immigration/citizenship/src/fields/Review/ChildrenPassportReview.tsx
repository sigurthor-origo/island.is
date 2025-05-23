import {
  ApplicantChildCustodyInformation,
  FieldBaseProps,
} from '@island.is/application/types'
import { FC } from 'react'
import { review, supportingDocuments } from '../../lib/messages'
import { Citizenship } from '../../lib/dataSchema'
import { useLocale } from '@island.is/localization'
import { Routes } from '../../lib/constants'
import { getValueViaPath } from '@island.is/application/core'
import { OptionSetItem } from '@island.is/clients/directorate-of-immigration'
import { GenericReview } from '../../components/GenericReview'
import { formatDate } from '../../utils'

interface Props extends FieldBaseProps {
  goToScreen?: (id: string) => void
  route: Routes
  child: ApplicantChildCustodyInformation
}

export const ChildrenPassportReview: FC<Props> = ({
  application,
  child,
  goToScreen,
  route,
}) => {
  const answers = application.answers as Citizenship
  const { formatMessage } = useLocale()

  const travelDocumentTypes = getValueViaPath(
    application.externalData,
    'travelDocumentTypes.data',
    [],
  ) as OptionSetItem[]

  const countryOptions = getValueViaPath(
    application.externalData,
    'countries.data',
    [],
  ) as OptionSetItem[]

  const passport = answers.childrenPassport?.find(
    (x) => x?.nationalId === child.nationalId,
  )

  if (passport) {
    const {
      publishDate,
      expirationDate,
      passportNumber,
      passportTypeId,
      countryOfIssuerId,
    } = passport

    return (
      <GenericReview
        application={application}
        leftColumnItems={[
          `${formatMessage(
            supportingDocuments.labels.passport.publishDate,
          )}: ${formatDate(new Date(publishDate))}`,
          `${formatMessage(
            supportingDocuments.labels.passport.expirationDate,
          )}: ${formatDate(new Date(expirationDate))}`,
          `${formatMessage(
            supportingDocuments.labels.passport.passportNumber,
          )}: ${passportNumber}`,
        ]}
        rightColumnItems={[
          `${formatMessage(
            supportingDocuments.labels.passport.passportType,
          )}: ${
            travelDocumentTypes.find((x) => x.id?.toString() === passportTypeId)
              ?.name
          }`,
          `${formatMessage(supportingDocuments.labels.passport.publisher)}: ${
            countryOptions.find((x) => x.id?.toString() === countryOfIssuerId)
              ?.name
          }`,
        ]}
        leftDescription={formatMessage(review.labels.passports, {
          name: child.fullName,
        })}
        goToScreen={goToScreen}
        route={route}
      />
    )
  } else {
    return
  }
}
