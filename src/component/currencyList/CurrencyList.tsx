interface IProps {
    children : React.ReactNode
}

export default function CurrencyList({children} : IProps) {
    return <ul className="currencies">
        {children}
    </ul>
}