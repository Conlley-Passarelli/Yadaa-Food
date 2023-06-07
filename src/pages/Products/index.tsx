import { Header } from "../../components/Header";
import { CardProducts } from "../../components/CardProducts";
import { ContainerProducts } from "./styles";

export function Products() {
    return (
    <>
       <Header />
       <div className="container">
        <ContainerProducts>
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
       </ContainerProducts>
       </div>
    </>
    )
}