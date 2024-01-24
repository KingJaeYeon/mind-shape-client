import {Trans} from 'react-i18next/TransWithoutContext'

export default async function TransServer({t, key, children}: { t: any, key: string, children: any }) {
    return <Trans i18nKey={key} t={t}>
        {children}
    </Trans>
}