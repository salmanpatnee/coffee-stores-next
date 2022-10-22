import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStore = () => {

    const router = useRouter();
    const {id} = router.query;

    return ( 
        <div>
            <h1>Coffee Store - {id}</h1>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
     );
}
 
export default CoffeeStore;