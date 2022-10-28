import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoresData from "../../data/coffee-stores.json";

export  function getStaticProps({params}) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" }, }, { params: { id: "300" }, }],
    fallback: false,
  };
}

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Coffee Store - {coffeeStore.name}</h1>

      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
