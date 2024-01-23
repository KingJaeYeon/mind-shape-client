export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'ko'}, {lang: 'ja'}]
}

export default function Root({children, params}: { children: any, params: any }) {
    return (
        <html lang={params.lang}>
            <body>{children}</body>
        </html>
    )
}