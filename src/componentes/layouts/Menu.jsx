import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

export default function Menu(props){
    return(
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" as={Link} to="/">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#" as={Link} to="/cliente">Clientes</NavDropdown.Item>
                <NavDropdown.Item href="#" as={Link} to="/fornecedor">Fornecedores</NavDropdown.Item>
                <NavDropdown.Item href="#" as={Link} to="/produto">Produtos</NavDropdown.Item>
                <NavDropdown.Item href="#" as={Link} to="/categoria">Categorias</NavDropdown.Item>
                <NavDropdown.Item href="#" as={Link} to="/entregadores">Entregadores</NavDropdown.Item>
                <NavDropdown.Item href="#" as={Link} to="/usuarios">Usários</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Operacoes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Venda</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fornecedores</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Estoque</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Vendas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Compras</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#home">Sobre</Nav.Link>
              <Nav.Link href="#home">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}