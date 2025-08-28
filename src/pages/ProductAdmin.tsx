import { useEffect, useState, FormEvent } from "react";
import { supabase } from "../supabase";
import {
  Container,
  Table,
  Form,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

type Product = {
  id: string;
  title: string;
  price: number;
  image_url?: string;
};

const ProductAdmin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image_url: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      // Handle error appropriately
    } else {
      setProducts(data as Product[]);
    }
  };

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    const { title, price, image_url } = newProduct;
    if (!title || !price) return;

    const { error } = await supabase
      .from("products")
      .insert([{ title, price: parseFloat(price), image_url }]);
    if (error) {
      // Handle error appropriately
      setMessage("❌ Failed to add product.");
    } else {
      setMessage("✅ Product added!");
      setNewProduct({ title: "", price: "", image_url: "" });
      fetchProducts();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      // Handle error appropriately
      setMessage("❌ Failed to delete.");
    } else {
      setMessage("✅ Product deleted.");
      fetchProducts();
    }
  };

  const handleEdit = async (
    id: string,
    field: keyof Product,
    value: string
  ) => {
    const { error } = await supabase
      .from("products")
      .update({ [field]: field === "price" ? parseFloat(value) : value })
      .eq("id", id);
    if (error) {
      // Handle error appropriately
      setMessage("❌ Failed to update.");
    } else {
      setMessage("✅ Product updated.");
      fetchProducts();
    }
  };

  return (
    <Container className="py-5">
      <h1 style={{ fontFamily: "Cormorant Garamond" }}>Product Admin</h1>

      {message && (
        <Alert variant="info" className="mt-3">
          {message}
        </Alert>
      )}

      {/* Add New Product */}
      <Form onSubmit={handleAdd} className="mt-4 mb-5">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Product Title"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
              required
            />
          </Col>
          <Col md={2}>
            <Form.Control
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
            />
          </Col>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Image URL"
              value={newProduct.image_url}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image_url: e.target.value })
              }
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant="dark" className="w-100">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Product Table */}
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <Form.Control
                  type="text"
                  defaultValue={p.title}
                  onBlur={(e) => handleEdit(p.id, "title", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  defaultValue={p.price}
                  onBlur={(e) => handleEdit(p.id, "price", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  defaultValue={p.image_url || ""}
                  onBlur={(e) => handleEdit(p.id, "image_url", e.target.value)}
                />
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductAdmin;
