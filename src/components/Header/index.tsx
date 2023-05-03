import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <div className="container">
                <h1>YadaaFood</h1>
                <nav>
                    <a href="">Produtos</a>
                    <a href="">Mais Vendidos</a>
                    <a href="">Carrinho</a>
                </nav>
            </div>
        </Container>
    )
}