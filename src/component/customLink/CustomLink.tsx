export default function CustomLink({children, url} : {children : React.ReactNode, url:string}) {
    return <a href={url}>
        {children}
    </a>
}