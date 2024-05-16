import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button
} from "@material-tailwind/react";
import { addToCart } from "@components/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";


function Home({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <CardHeader floated={false} className="relative h-56">
              <Image src={product.thumbnail} width={1000} height={760} alt="profile-picture" priority={true} />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2 truncate">
                {product.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {`$ ${product.price}`}
              </Typography>
            </CardBody>
            <CardFooter className='text-center'>
              <Button onClick={() => dispatch(addToCart({ product, quantity: 1 }))} variant="gradient" fullWidth> Add to Cart</Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  );
}
export default Home;

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products?limit=12');
  const data = await res.json();
  return { props: data };
}
