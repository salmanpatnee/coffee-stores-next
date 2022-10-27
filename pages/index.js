import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./../components/Banner";
import Card from "./../components/Card";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: { coffeeStores: coffeeStoresData },
  };
}

export default function Home({coffeeStores}) {
  const handleOnButtonClick = () => {
    console.log("Clicked");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner onClick={handleOnButtonClick} buttonText="Find coffee stores" />
        <div className={styles.heroImage}>
          <Image
            src="/images/hero-image.png"
            width={700}
            height={400}
            alt="hero"
          />
        </div>
        {coffeeStores.length && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Coffee Stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    name={coffeeStore.name}
                    imageUrl={coffeeStore.imgUrl}
                    href={`/coffee-stores/${coffeeStore.id}`}
                    className={styles.card}
                    key={coffeeStore.id}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
